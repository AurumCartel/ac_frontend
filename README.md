Frontend du projet Aurum Cartel WebSites

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

```bash
ac_frontend/
├── .idea/                 # Configuration de l'IDE (optionnel)
├── node_modules/          # Dépendances installées
├── public/                # Fichiers statiques (logo, images, etc.)
│   └── logo.svg           # Exemple de fichier statique
├── src/                   # Code source principal
│   ├── components/        # Composants réutilisables
│   │   └── Header.jsx     # Exemple de composant
│   ├── context/           # Gestion de l'état global via React Context
│   │   └── AuthContext.jsx
│   ├── hooks/             # Custom hooks (logique métier réutilisable)
│   │   └── useAuth.jsx
│   ├── pages/             # Pages et routage automatique (Next.js)
│   │   ├── api/           # Routes API (backend intégré)
│   │   ├── index.jsx      # Page d'accueil
│   │   └── about.jsx      # Autre page (exemple)
│   ├── styles/            # Fichiers de styles
│   │   ├── globals.css    # Styles globaux
│   │   └── components/    # Styles spécifiques aux composants
│   └── utils/             # Fonctions utilitaires
│       └── fetchData.js   # Exemple de fonction utilitaire
├── .gitignore             # Fichiers/dossiers à ignorer par Git
├── package-lock.json      # Dépendances verrouillées (npm)
├── package.json           # Configuration du projet
└── README.md              # Documentation du projet
```