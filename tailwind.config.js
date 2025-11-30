/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Warm Beige/Yellow Theme
        'beige-bg': '#F5EDE3',
        'beige-light': '#FFF8E7',
        'beige-lighter': '#FFFCF1',
        'beige-dark': '#E8DDD0',
        'yellow-primary': '#FBBF24',
        'yellow-dark': '#F59E0B',
        'yellow-deeper': '#EAB308',
        'yellow-light': '#FCD34D',
        'gold': '#D97706',
        'border-beige': '#DFC6B1',
        'border-light': '#F0E5D8',

        // Text Colors
        'charcoal': '#2d2d2d',
        'charcoal-light': '#4a4a4a',
        'charcoal-lighter': '#6b6b6b',
        'text-muted': '#8B7355',

        // Accent Colors
        'cream-50': '#fffcf1',
        'warm-white': '#FFFFFF',
      },
      backgroundImage: {
        'warm-gradient': 'linear-gradient(180deg, #FFF8E7 0%, #F5EDE3 100%)',
        'yellow-gradient': 'linear-gradient(135deg, #FBBF24 0%, #F59E0B 100%)',
        'beige-gradient': 'linear-gradient(to bottom, #FFFCF1 0%, #F5EDE3 50%, #E8DDD0 100%)',
        'gold-shine': 'linear-gradient(90deg, transparent, rgba(251, 191, 36, 0.3), transparent)',
      },
      boxShadow: {
        'yellow-glow': '0 4px 20px rgba(251, 191, 36, 0.3)',
        'yellow-glow-lg': '0 8px 30px rgba(251, 191, 36, 0.4)',
        'gold-glow': '0 4px 20px rgba(245, 158, 11, 0.35)',
        'soft-shadow': '0 2px 10px rgba(45, 45, 45, 0.1)',
        'card-shadow': '0 4px 15px rgba(45, 45, 45, 0.08)',
      },
      animation: {
        'fadeIn': 'fadeIn 0.3s ease-in',
        'float-rotate-3d': 'float-rotate-3d 8s ease-in-out infinite',
        'cube-rotate': 'cube-rotate 20s linear infinite',
        'orbit-icon': 'orbit-icon 15s linear infinite',
        'orbit-icon-reverse': 'orbit-icon-reverse 18s linear infinite',
        'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
        'twinkle-star': 'twinkle-star 4s ease-in-out infinite',
        'hand-sway': 'hand-sway 5s ease-in-out infinite',
        'float-subtle': 'float-subtle 3s ease-in-out infinite',
        'breathe': 'breathe 3s ease-in-out infinite',
      },
      keyframes: {
        'fadeIn': {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        'float-rotate-3d': {
          '0%, 100%': { transform: 'translateY(0) rotateX(5deg) rotateY(0deg)' },
          '25%': { transform: 'translateY(-15px) rotateX(8deg) rotateY(5deg)' },
          '50%': { transform: 'translateY(-20px) rotateX(10deg) rotateY(0deg)' },
          '75%': { transform: 'translateY(-15px) rotateX(8deg) rotateY(-5deg)' },
        },
        'cube-rotate': {
          '0%': { transform: 'rotateY(0deg) rotateX(0deg)' },
          '100%': { transform: 'rotateY(360deg) rotateX(360deg)' },
        },
        'orbit-icon': {
          '0%': { transform: 'rotate(0deg) translateX(150px) rotate(0deg)' },
          '100%': { transform: 'rotate(360deg) translateX(150px) rotate(-360deg)' },
        },
        'orbit-icon-reverse': {
          '0%': { transform: 'rotate(0deg) translateX(150px) rotate(0deg)' },
          '100%': { transform: 'rotate(-360deg) translateX(150px) rotate(360deg)' },
        },
        'glow-pulse': {
          '0%, 100%': { opacity: 1, filter: 'brightness(1)' },
          '50%': { opacity: 0.8, filter: 'brightness(1.5)' },
        },
        'twinkle-star': {
          '0%, 100%': { opacity: 0.3, transform: 'scale(1)' },
          '50%': { opacity: 1, transform: 'scale(1.2)' },
        },
        'hand-sway': {
          '0%, 100%': { transform: 'translateX(0) translateY(0)' },
          '50%': { transform: 'translateX(5px) translateY(-10px)' },
        },
        'float-subtle': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'breathe': {
          '0%, 100%': { transform: 'scale(1)', opacity: 1 },
          '50%': { transform: 'scale(1.05)', opacity: 0.95 },
        },
      },
      fontFamily: {
        'title': ['M PLUS Rounded 1c', 'Rounded Mplus 1c', 'Hiragino Maru Gothic ProN', 'sans-serif'],
        'subtitle': ['M PLUS Rounded 1c', 'Rounded Mplus 1c', 'Hiragino Maru Gothic ProN', 'sans-serif'],
        'sans': ['M PLUS Rounded 1c', 'Rounded Mplus 1c', 'Hiragino Maru Gothic ProN', 'Yu Gothic UI', 'Meiryo UI', 'sans-serif'],
      },
      spacing: {
        '7.5': '30px',
      },
      borderRadius: {
        'modern-xl': '20px',
        'modern-lg': '16px',
        'modern-md': '12px',
      },
    },
  },
  plugins: [],
};
