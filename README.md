# Pub Z Avignon

Site vitrine du Pub Z (Avignon) : carte des boissons, informations pratiques et carte interactive.

Stack : **React 19**, **Vite 6**, **Tailwind CSS 4**, **React Router**.

## Lancer le projet en local

### Prérequis

- **Node.js** (version récente recommandée)
- **npm** (fourni avec Node.js ; le dépôt contient un `package-lock.json`)

Aucun autre service n’est requis pour le développement local : pas de base de données, pas de backend, pas de Docker dans ce dépôt.

### Installation des dépendances

À la racine du projet :

```bash
npm install
```

### Variables d’environnement

**Aucune variable d’environnement n’est nécessaire** pour lancer le site en local.

Le code source n’utilise pas de fichier `.env` ni de variables `VITE_*`. Les données (carte des boissons, horaires) sont chargées depuis des fichiers JSON dans `src/data/`.

### Démarrer en localhost

```bash
npm run dev
```

Vite démarre le serveur de développement avec rechargement à chaud (HMR).

**URL locale :** [http://localhost:5173](http://localhost:5173) (port par défaut de Vite)

Pages principales :

| Route | Contenu |
|---|---|
| `/` ou `/fr` | Accueil (français) |
| `/en` | Accueil (anglais) |
| `/menu`, `/fr/menu`, `/en/menu` | Carte des boissons |

### Backend

Ce projet est une **application frontend statique**. Il n’y a **pas de backend** ni d’API à lancer séparément dans ce dépôt.

### Arrêter le projet

Dans le terminal où `npm run dev` (ou `npm run preview`) tourne, appuyez sur **`Ctrl + C`**.

### Commandes utiles

| Commande | Usage |
|---|---|
| `npm run dev` | Serveur de développement |
| `npm run build` | Build de production dans `dist/` |
| `npm run preview` | Prévisualiser le build (`http://localhost:4173` par défaut) |
| `npm run lint` | Vérification ESLint |

### En cas de problème

**Le site ne démarre pas ou les dépendances semblent corrompues**

```bash
rm -rf node_modules
npm install
```

**Vérifier que le projet compile**

```bash
npm run build
```

**Vérifier le lint**

```bash
npm run lint
```

**Tester le build localement** (sans `npm run dev`)

```bash
npm run build
npm run preview
```

Puis ouvrir [http://localhost:4173](http://localhost:4173).

**Port déjà utilisé**

Si le port `5173` est occupé, Vite propose automatiquement le port suivant disponible dans le terminal.

## Déploiement

Le fichier `vercel.json` configure le routage SPA pour un déploiement sur Vercel (`rewrites` vers `index.html`).
