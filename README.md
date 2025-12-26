# Admin Dashboard - 3D Interactive UI

Modern React + TypeScript + Tailwind CSS admin dashboard with interactive 3D Spline components.

## 🚀 Features

- ⚛️ **React 18** with TypeScript
- 🎨 **Tailwind CSS** for styling
- 🎭 **Shadcn UI** component structure
- 🌐 **3D Spline Integration** with lazy loading
- 💫 **Framer Motion** animations
- ⚡ **Vite** for blazing fast builds

## 📦 Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🛠️ Tech Stack

- **React** 18.2.0
- **TypeScript** 5.2.2
- **Vite** 5.0.8
- **Tailwind CSS** 3.4.0
- **Framer Motion** 10.16.16
- **@splinetool/react-spline** 2.2.6
- **Shadcn UI** components
- **Lucide React** icons

## 📁 Project Structure

```
admin/
├── src/
│   ├── components/
│   │   ├── ui/              # Shadcn UI components
│   │   │   ├── card.tsx
│   │   │   ├── spline.tsx
│   │   │   ├── spotlight.tsx
│   │   │   └── interactive-spotlight.tsx
│   │   └── Demo.tsx         # Main demo component
│   ├── lib/
│   │   └── utils.ts         # Utility functions
│   ├── App.tsx              # Main app component
│   ├── main.tsx             # Entry point
│   └── index.css            # Global styles
├── public/
├── index.html
├── vite.config.ts
├── tsconfig.json
├── tailwind.config.js
└── package.json
```

## 🎯 Components

### SplineScene
Interactive 3D component with lazy loading and fallback UI.

```tsx
import { SplineScene } from "@/components/ui/spline"

<SplineScene 
  scene="https://prod.spline.design/YOUR_SCENE_ID/scene.splinecode"
  className="w-full h-full"
/>
```

### Spotlight Effects
Two variants available:
- **Aceternity Spotlight** - SVG-based animated gradient
- **Interactive Spotlight** - Mouse-following effect with Framer Motion

## 🔒 Security

- No API keys or secrets in repository
- Environment variables for sensitive data
- Legacy code backed up and excluded from git

## 📝 License

Private Project

## 👨‍💻 Author

Created with ❤️ for WearToMe Admin Panel
