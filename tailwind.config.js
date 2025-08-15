/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'reveal': 'reveal 1.2s cubic-bezier(0.25, 1, 0.5, 1)',
        'reveal-slow': 'reveal 1.8s cubic-bezier(0.25, 1, 0.5, 1)',
        'slide-up': 'slideUp 1s cubic-bezier(0.25, 1, 0.5, 1)',
        'slide-left': 'slideLeft 1s cubic-bezier(0.25, 1, 0.5, 1)',
        'slide-right': 'slideRight 1s cubic-bezier(0.25, 1, 0.5, 1)',
        'scale': 'scale 1s cubic-bezier(0.25, 1, 0.5, 1)',
        'blur-in': 'blurIn 1s cubic-bezier(0.25, 1, 0.5, 1)',
        'gradient': 'gradient 3s ease infinite',
        'fade-in': 'fadeIn 0.5s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        
        'twinkle': 'twinkle 3s ease-in-out infinite',
        'spin-slow': 'spin 3s linear infinite',
      },
      keyframes: {
        reveal: {
          '0%': { 
            opacity: '0',
            transform: 'translate3d(0, 20px, 0)',
            filter: 'blur(15px)'
          },
          '100%': { 
            opacity: '1',
            transform: 'translate3d(0, 0, 0)',
            filter: 'blur(0)'
          },
        },
        float: {
          '0%, 100%': { 
            transform: 'translateY(0px) rotate(0deg)',
            opacity: '0.7'
          },
          '50%': { 
            transform: 'translateY(-20px) rotate(180deg)',
            opacity: '1'
          },
        },
        glow: {
          '0%': { 
            textShadow: '0 0 20px rgba(139, 92, 246, 0.5), 0 0 40px rgba(139, 92, 246, 0.3)',
            filter: 'brightness(1)',
          },
          '100%': { 
            textShadow: '0 0 30px rgba(139, 92, 246, 0.8), 0 0 60px rgba(139, 92, 246, 0.5)',
            filter: 'brightness(1.2)',
          },
        },
        twinkle: {
          '0%, 100%': { 
            opacity: '0.3',
            transform: 'scale(1)',
          },
          '50%': { 
            opacity: '1',
            transform: 'scale(1.5)',
          },
        },
        slideUp: {
          '0%': { 
            transform: 'translate3d(0, 40px, 0)',
            opacity: '0',
            filter: 'blur(10px)'
          },
          '100%': { 
            transform: 'translate3d(0, 0, 0)',
            opacity: '1',
            filter: 'blur(0)'
          },
        },
        slideLeft: {
          '0%': { 
            transform: 'translate3d(-40px, 0, 0)',
            opacity: '0',
            filter: 'blur(10px)'
          },
          '100%': { 
            transform: 'translate3d(0, 0, 0)',
            opacity: '1',
            filter: 'blur(0)'
          },
        },
        slideRight: {
          '0%': { 
            transform: 'translate3d(40px, 0, 0)',
            opacity: '0',
            filter: 'blur(10px)'
          },
          '100%': { 
            transform: 'translate3d(0, 0, 0)',
            opacity: '1',
            filter: 'blur(0)'
          },
        },
        scale: {
          '0%': { 
            transform: 'scale(0.9)',
            opacity: '0',
            filter: 'blur(10px)'
          },
          '100%': { 
            transform: 'scale(1)',
            opacity: '1',
            filter: 'blur(0)'
          },
        },
        blurIn: {
          '0%': { 
            opacity: '0',
            filter: 'blur(20px)'
          },
          '100%': { 
            opacity: '1',
            filter: 'blur(0)'
          },
        },
        gradient: {
          '0%, 100%': {
            'background-position': '0% 50%'
          },
          '50%': {
            'background-position': '100% 50%'
          }
        },
        fadeIn: {
          '0%': {
            opacity: '0'
          },
          '100%': {
            opacity: '1'
          }
        },
      },
    },
  },
  plugins: []
}
