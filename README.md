# 🤖 Ton Prof iA - CE1D Sciences 🌱

Chatbot éducatif utilisant Google Gemini pour aider les élèves à réviser les sciences pour le CE1D.

## 🚀 Déploiement sur Vercel (Gratuit)

### Étape 1 : Obtenir une clé API Google Gemini

1. Va sur [Google AI Studio](https://aistudio.google.com/app/apikey)
2. Connecte-toi avec ton compte Google
3. Clique sur **"Create API Key"**
4. Copie ta clé API (commence par `AIza...`)

⚠️ **IMPORTANT** : Génère une NOUVELLE clé API si tu as exposé l'ancienne publiquement !

---

### Étape 2 : Créer un compte Vercel

1. Va sur [vercel.com](https://vercel.com)
2. Clique sur **"Sign Up"**
3. Connecte-toi avec ton compte GitHub (gratuit)

---

### Étape 3 : Déployer le projet

#### Option A : Déploiement via GitHub (Recommandé)

1. **Créer un repository GitHub :**
   - Va sur [github.com](https://github.com) et connecte-toi
   - Clique sur **"New repository"**
   - Nomme-le `chatbot-ce1d-sciences`
   - Clique sur **"Create repository"**

2. **Upload les fichiers :**
   - Télécharge tous les fichiers de ce projet
   - Sur GitHub, clique sur **"uploading an existing file"**
   - Glisse-dépose TOUS les fichiers du projet
   - Clique sur **"Commit changes"**

3. **Connecter à Vercel :**
   - Retourne sur [vercel.com/dashboard](https://vercel.com/dashboard)
   - Clique sur **"Add New..." → "Project"**
   - Choisis **"Import Git Repository"**
   - Sélectionne ton repo `chatbot-ce1d-sciences`
   - Clique sur **"Import"**

4. **Configurer la variable d'environnement :**
   - Dans les paramètres du projet, trouve **"Environment Variables"**
   - Ajoute :
     - **Name:** `GEMINI_API_KEY`
     - **Value:** Ta clé API Gemini (colle-la ici)
   - Clique sur **"Add"**

5. **Déployer :**
   - Clique sur **"Deploy"**
   - Attends 1-2 minutes ⏳
   - Ton site est en ligne ! 🎉

#### Option B : Déploiement via Vercel CLI (Avancé)

1. **Installer Vercel CLI :**
   ```bash
   npm install -g vercel
   ```

2. **Se connecter :**
   ```bash
   vercel login
   ```

3. **Déployer :**
   ```bash
   cd chatbot-vercel
   vercel
   ```

4. **Ajouter la variable d'environnement :**
   ```bash
   vercel env add GEMINI_API_KEY
   ```
   Colle ta clé API quand demandé.

5. **Déployer en production :**
   ```bash
   vercel --prod
   ```

---

### Étape 4 : Accéder à ton site

Vercel te donnera une URL comme : `https://ton-projet.vercel.app`

C'est tout ! Ton chatbot est maintenant en ligne et sécurisé ! ✅

---

## 📁 Structure du projet

```
chatbot-vercel/
├── public/
│   └── index.html          # Frontend (interface du chatbot)
├── api/
│   └── chat.js             # Backend (fonction serverless sécurisée)
├── vercel.json             # Configuration Vercel
├── package.json            # Configuration Node.js
├── .env.example            # Exemple de variables d'environnement
├── .gitignore              # Fichiers à ignorer par Git
└── README.md               # Ce fichier
```

---

## 🔒 Pourquoi c'est sécurisé maintenant ?

| Avant ❌ | Après ✅ |
|---------|---------|
| Clé API visible dans le code HTML | Clé API cachée dans les variables d'environnement Vercel |
| N'importe qui peut copier ta clé | Seul le serveur Vercel peut y accéder |
| Risque d'utilisation abusive | Protégé contre l'abus |

---

## 🛠️ Développement local (optionnel)

1. **Installer les dépendances :**
   ```bash
   npm install -g vercel
   ```

2. **Créer un fichier .env :**
   ```bash
   cp .env.example .env
   ```
   
3. **Ajouter ta clé API dans .env :**
   ```
   GEMINI_API_KEY=ta_cle_api_ici
   ```

4. **Lancer le serveur de développement :**
   ```bash
   vercel dev
   ```

5. **Ouvrir dans le navigateur :**
   ```
   http://localhost:3000
   ```

---

## 🎨 Personnalisation

### Modifier les couleurs

Dans `public/index.html`, trouve la section `<style>` et modifie :
- `.header` → Couleur de l'en-tête
- `.user-message` → Couleur des messages utilisateur
- `button` → Couleur des boutons

### Ajouter des sujets

Dans `public/index.html`, dans la section `<div class="suggestions">`, ajoute :
```html
<button class="suggestion-chip" onclick="suggestionClick('Ton sujet')">
    Nom du sujet
</button>
```

---

## 📊 Limites de l'API gratuite

Google Gemini offre :
- **60 requêtes par minute**
- **1 500 requêtes par jour**

C'est largement suffisant pour un usage personnel ou scolaire !

---

## ❓ Problèmes courants

### Le chatbot ne répond pas
1. Vérifie que la variable `GEMINI_API_KEY` est bien configurée sur Vercel
2. Va dans **Settings → Environment Variables** sur Vercel
3. Redéploie le projet après avoir ajouté la clé

### Erreur 500
- Ta clé API est peut-être invalide ou expirée
- Génère une nouvelle clé sur Google AI Studio

### Le site ne se charge pas
- Attends quelques minutes après le déploiement
- Vérifie que tous les fichiers sont bien uploadés

---

## 📝 License

MIT - Utilise librement ce projet pour ton apprentissage ! 🎓

---

## 🤝 Besoin d'aide ?

- Documentation Vercel : [vercel.com/docs](https://vercel.com/docs)
- Documentation Gemini : [ai.google.dev/docs](https://ai.google.dev/docs)

**Bon courage pour tes révisions ! 📚✨**
