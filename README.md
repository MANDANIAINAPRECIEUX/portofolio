# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
# Portfolio Personnel - Andriamiarison Mandaniaina Précieux


Portfolio web moderne et interactif présentant mon parcours professionnel, mes compétences et mes projets dans les domaines de la santé, du développement logiciel et de la gestion de projet.



## 🌐 Demo Live

🔗 **[Voir le portfolio en ligne](https://votre-site.com)**

---

## ✨ Fonctionnalités

### 🎨 Design Moderne
- **Interface glassmorphism** avec effets de transparence et de flou
- **Animations fluides** avec transitions CSS personnalisées
- **Thème sombre** avec palette violet/bleu
- **Responsive design** adapté à tous les écrans (mobile, tablette, desktop)

### 📄 Sections
1. **Hero** - Présentation dynamique avec animations typographiques
2. **À propos** - Parcours professionnel et formation
3. **Compétences** - Grille interactive de compétences techniques
4. **Expériences** - Timeline centrale avec cards alternées gauche/droite
5. **Statistiques** - Cards 3D flip avec chiffres clés
6. **Projets** - Portfolio de projets avec filtres
7. **Contact** - Formulaire fonctionnel avec envoi d'emails

### 🚀 Fonctionnalités Avancées
- ✅ **Formulaire de contact fonctionnel** avec EmailJS
- ✅ **Timeline interactive** avec effet d'accordéon
- ✅ **Cards 3D flip** au survol pour les statistiques
- ✅ **Modal animé** pour le formulaire de contact
- ✅ **Effets de glow** et d'ombres dynamiques
- ✅ **Labels flottants** dans les champs de formulaire
- ✅ **Loading states** et gestion d'erreurs

---

## 🛠️ Technologies Utilisées

### Frontend
- **[React 18+](https://reactjs.org/)** - Bibliothèque UI
- **[TypeScript](https://www.typescriptlang.org/)** - Typage statique
- **[Vite](https://vitejs.dev/)** - Build tool ultra-rapide
- **[Tailwind CSS](https://tailwindcss.com/)** - Framework CSS utility-first

### Librairies
- **[Lucide React](https://lucide.dev/)** - Icônes modernes
- **[EmailJS](https://www.emailjs.com/)** - Service d'envoi d'emails
- **[React Router](https://reactrouter.com/)** - Navigation (optionnel)

### Outils de Développement
- **ESLint** - Linting du code
- **Prettier** - Formatage du code
- **Git** - Contrôle de version

---

## 📦 Installation

### Prérequis
- Node.js 18+ et npm/yarn installés
- Compte [EmailJS](https://www.emailjs.com/) (gratuit)

### Étapes d'installation

1. **Cloner le repository**
```bash
git clone https://github.com/MANDANIAINAPRECIEUX/portfolio.git
cd portfolio
