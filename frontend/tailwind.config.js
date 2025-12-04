// tailwind.config.js
export const content = ['./index.html', './src/**/*.{ts,tsx,js,jsx}'];
export const theme = {
   extend: {
        colors: {
        primary: '#0EA5E9',       // Sky Blue
        secondary: '#F59E0B',     // Amber
        background: '#1E293B',    // Slate 800
        container: '#334155',     // Slate 700
        input: '#475569',         // Slate 600
        border: '#64748B',        // Slate 500
        textPrimary: '#F1F5F9',   // Slate 100
        textSecondary: '#CBD5E1', // Slate 300
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif'],
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeInUp: 'fadeInUp 1s ease-out forwards',
      },
  }
};
export const plugins = [];
