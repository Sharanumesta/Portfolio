module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        black: "#0a0a0a",
        purple: {
          300: "#d8b4fe",
          400: "#c084fc",
          500: "#a855f7",
          600: "#9333ea",
          700: "#7e22ce",
          800: "#6b21a8",
          900: "#581c87",
        },
         // Light theme colors
        light: {
          primary: '#6d28d9',  // Purple-700
          secondary: '#f5f3ff', // Light purple-50
          bg: '#faf9fb',        // Custom off-white
          text: '#1f2937',      // Gray-800
          accent: '#7c3aed',    // Purple-600
        },
        // Dark theme colors
        dark: {
          primary: '#8b5cf6',   // Purple-400
          secondary: '#1e1b4b', // Dark purple-900
          bg: '#0f172a',        // Gray-900
          text: '#f8fafc',      // Gray-50
          accent: '#a78bfa',    // Purple-300
        }
      },
      animation: {
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
  plugins: [],
};