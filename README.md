# Pokémon Berries Pokédex 🍓

A modern React application for exploring Pokémon berries with their firmness levels and flavor profiles. Built with TypeScript, Vite, and SCSS modules.

## 📸 Screenshot

![Pokémon Berries Pokédex](./screenshot.png)

*Note: Please save the screenshot image as `screenshot.png` in the project root directory.*

## 🚀 Features

- **Berry Search**: Search for berries by name
- **Firmness Filter**: Filter berries by firmness levels (Super Hard, Very Hard, Hard, Soft, Very Soft)
- **Flavor Tags**: View berry flavors with visual indicators
- **Responsive Design**: Works on desktop and mobile devices
- **Modern UI**: Clean, intuitive interface with smooth interactions

## 🛠️ Tech Stack

- **React 19** - Frontend framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **SCSS Modules** - Styling with CSS modules
- **Axios** - API requests

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd react-berries-clean-publish-repo
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

## 🏃‍♂️ Running the Application

### Development Server
```bash
npm start
# or
npm run dev
```
The application will be available at `http://localhost:5173`

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## 🧹 Code Quality

### Linting
```bash
npm run lint
```

### Code Formatting
```bash
npm run pretty
```

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Chip/           # Flavor tag component
│   ├── SearchField/    # Search input component
│   └── TextField/      # Text input component
├── features/           # Feature-specific components
│   └── BerriesPokedex/ # Main pokedex feature
├── hooks/              # Custom React hooks
├── pages/              # Page components
├── routes/             # Application routing
├── services/           # API services
├── styles/             # Global styles and variables
├── types/              # TypeScript type definitions
└── utils/              # Utility functions
```

## 🌐 API Integration

The application fetches data from the PokéAPI:
- Berries list: `https://pokeapi.co/api/v2/berry/`
- Individual berry data: `https://pokeapi.co/api/v2/berry/{id}/`
- Firmness data: `https://pokeapi.co/api/v2/berry-firmness/{id}/`

## 🎨 Features Overview

### Search Functionality
- Real-time search with debounced input
- Search by berry name

### Firmness Filtering
- Interactive slider to filter by firmness levels
- Visual indicators for each firmness level

### Berry Cards
- Display berry image, name, and flavors
- Clickable flavor tags
- Responsive card layout

## 🔧 Configuration

The project uses:
- **Vite** for fast development and building
- **TypeScript** for type checking
- **ESLint** for code linting
- **Prettier** for code formatting
- **SCSS** for styling with CSS modules

