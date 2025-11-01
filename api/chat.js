// Fonction serverless Vercel pour gérer les appels à l'API Gemini de manière sécurisée
export default async function handler(req, res) {
    // Autoriser uniquement les requêtes POST
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Méthode non autorisée' });
    }

    // Configuration CORS (optionnel, pour permettre les appels depuis d'autres domaines)
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    try {
        const { question } = req.body;

        // Validation de la question
        if (!question || question.trim() === '') {
            return res.status(400).json({ error: 'Question manquante' });
        }

        // Récupérer la clé API depuis les variables d'environnement (sécurisé)
        const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

        if (!GEMINI_API_KEY) {
            console.error('GEMINI_API_KEY n\'est pas définie');
            return res.status(500).json({ error: 'Configuration serveur incorrecte' });
        }

        // Appeler l'API Gemini
        const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_API_KEY}`;
        
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                contents: [{
                    parts: [{
                        text: `Donne une courte définition simple et accessible pour un élève de 12 à 14 ans sur le sujet suivant : ${question}. Utilise uniquement des mots en **gras** pour les termes importants. Évite les notions complexes comme les atomes. Ensuite, demande si l'élève souhaite un exemple. Réponds en français.`
                    }]
                }]
            })
        });

        if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            console.error('Erreur API Gemini:', errorData);
            return res.status(response.status).json({ 
                error: 'Erreur lors de l\'appel à l\'API Gemini',
                details: errorData.error?.message 
            });
        }

        const data = await response.json();

        // Vérifier que la réponse contient les données attendues
        if (!data.candidates || !data.candidates[0] || !data.candidates[0].content) {
            return res.status(500).json({ error: 'Réponse invalide de l\'API' });
        }

        const aiResponse = data.candidates[0].content.parts[0].text;

        // Retourner la réponse au client
        return res.status(200).json({ response: aiResponse });

    } catch (error) {
        console.error('Erreur serveur:', error);
        return res.status(500).json({ 
            error: 'Erreur interne du serveur',
            message: error.message 
        });
    }
}
