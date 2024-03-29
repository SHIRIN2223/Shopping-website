//import type { Config } from 'tailwindcss'

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      container: {
          center: true,
          padding: "15px",
      },
      
  
       color: {
       accent: "#FF8F9C",
        blackish: "#1b1b1b",
      },
      
      
      
      },
    },
  
  plugins: [],
}

