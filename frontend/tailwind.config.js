// tailwind.config.js

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  
  // No need to extend theme.colors here, DaisyUI handles it
  theme: {
    extend: {
    },
  },

  // Add the DaisyUI plugin
  plugins: [ require('tailwind-scrollbar-hide')],

  // DaisyUI theme configuration
  daisyui: {
    themes: [
      {
        aurora: {
          // Map our "Aurora" colors to DaisyUI's semantic color names
          // The oklch() values are from our original theme
          
          "primary": "oklch(0.75 0.15 200)",    // Vibrant Cyan
          "primary-content": "oklch(0.1 0.02 240)", // Dark text for contrast
          
          "secondary": "oklch(0.55 0.15 280)",   // Muted Purple
          "secondary-content": "oklch(0.98 0.01 280)", // Light text for contrast
          
          "accent": "oklch(0.75 0.15 200)",     // Can be same as primary or a third color
          "neutral": "oklch(0.28 0.02 240)",     // Used for borders, separators
          
          // Main background and foreground colors
          "base-100": "oklch(0.17 0.02 240)",   // Main Background (Deep, cool dark blue)
          "base-200": "oklch(0.20 0.02 240)",   // Slightly Lighter bg (for cards, popovers)
          "base-300": "oklch(0.24 0.02 240)",   // Even Lighter bg (for hover states)
          "base-content": "oklch(0.95 0.01 240)", // Main Text Color (Off-white)
          
          // Status colors
          "info": "oklch(0.7 0.15 230)",       // A calming blue for info alerts
          "success": "oklch(0.7 0.2 150)",       // A vibrant green
          "warning": "oklch(0.8 0.2 90)",       // A clear yellow
          "error": "oklch(0.6 0.22 25)",       // Our destructive red

          // Set global border radius for all components
          "--rounded-box": "0.75rem", // For cards, modal, etc.
          "--rounded-btn": "0.5rem",  // For buttons
          "--rounded-badge": "1.9rem",// For badges
          
          // Other optional variables
          "--focus-ring": "var(--p, oklch(0.75 0.15 200))", // Use primary color for focus rings
        },
      },
      // You could add a light theme here too if you wanted
      // "light", 
    ],
    // Set 'aurora' as the default theme for your app
    darkTheme: "aurora", // Makes sure it's used when system is dark
    base: true, // Applies base styles
    styled: true, // Applies component styles
    utils: true, // Adds responsive and modifier utility classes
  },
};