# 🎮 GameZone - React Gaming Website

A modern, responsive gaming website built with React 18, Vite, and Tailwind CSS. Features a sleek gaming aesthetic with smooth animations and mobile-first design.

![GameZone Preview](https://img.shields.io/badge/React-18.x-blue?style=for-the-badge&logo=react)
![Vite](https://img.shields.io/badge/Vite-7.x-646CFF?style=for-the-badge&logo=vite)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.x-06B6D4?style=for-the-badge&logo=tailwindcss)

## ✨ Features

- 🎯 **Modern React Architecture** - Built with React 18 and Vite for optimal performance
- 🎨 **Gaming-Themed Design** - Purple/pink/blue gradient aesthetic with smooth animations
- 📱 **Fully Responsive** - Mobile-first design that works on all devices
- 🚀 **Enhanced Navigation** - Scroll-responsive navbar with backdrop blur effects
- 🎮 **Custom Animations** - Tailwind-powered animations including float, glow, and twinkle effects
- 🔒 **Protected Routes** - Authentication-ready routing system
- 🎪 **Interactive Elements** - Hover effects, mouse tracking, and animated particles

## 🛠️ Tech Stack

- **Frontend Framework:** React 18
- **Build Tool:** Vite 7.x
- **Styling:** Tailwind CSS
- **Routing:** React Router DOM
- **Icons:** Custom SVG gaming assets
- **Animations:** Custom Tailwind keyframes

## 📦 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Navbar.jsx      # Enhanced navigation with scroll effects
│   ├── Footer.jsx      # Site footer
│   └── ProtectedRoute.jsx # Route protection wrapper
├── pages/              # Page components
│   ├── LandingPage.jsx # Hero landing page with animations
│   ├── Login.jsx       # User authentication
│   ├── Signup.jsx      # User registration
│   ├── Dashboard.jsx   # User dashboard
│   └── Tournaments.jsx # Gaming tournaments
├── assets/             # Static assets
│   ├── gaming-hero.svg # Hero background graphic
│   └── controller.svg  # Gaming controller icon
└── App.jsx             # Main application component
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd react-app
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🎮 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎨 Design Features

### Color Scheme
- **Primary Gradient:** Purple (#8B5CF6) → Pink (#EC4899) → Blue (#3B82F6)
- **Background:** Dark theme with subtle gradients
- **Text:** White with gradient accents

### Animations
- **Float Effect:** Gentle floating animation for UI elements
- **Glow Effect:** Text glow on hover
- **Twinkle:** Sparkle animations for decorative elements
- **Backdrop Blur:** Modern glass-morphism effects

### Responsive Design
- **Mobile:** Hamburger menu with slide-out navigation
- **Tablet:** Optimized layout for medium screens
- **Desktop:** Full navigation with hover effects

## 🚧 Development Status

- ✅ Landing Page with hero section
- ✅ Responsive Navigation
- ✅ Authentication pages (Login/Signup)
- ✅ Dashboard foundation
- ✅ Tournaments page
- ✅ Custom animations and effects
- 🔄 Backend integration (planned)
- 🔄 User authentication system (planned)
- 🔄 Gaming features (planned)

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License.

## 🎯 Future Enhancements

- Real-time gaming features
- Tournament management system
- User profiles and achievements
- Leaderboards and statistics
- Social features and chat
- Payment integration
- Admin dashboard

---

Built with ❤️ for the gaming community+ Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
