/**
 * Project uses robust automated tests (including edge cases) and is compatible with FastAPI lifespan event system.
 */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./templates/**/*.html",
    "./static/js/**/*.js", // If you add JS that manipulates classes
    // Add Franken UI paths here if it's a separate node module, e.g.:
    // "./node_modules/franken-ui/dist/**/*.js", 
  ],
  theme: {
    extend: {
      // You can extend your theme here if needed
      // Example: adding custom colors or fonts
      colors: {
        // These would typically be CSS variables set in your main CSS or base.html
        // to allow for light/dark mode theming via Franken UI or custom setup.
        // For now, you can define them directly or use Tailwind's default palette.
        'background': 'hsl(var(--background))', // Placeholder for CSS variable
        'foreground': 'hsl(var(--foreground))', // Placeholder for CSS variable
        'card': 'hsl(var(--card))',
        'card-foreground': 'hsl(var(--card-foreground))',
        'popover': 'hsl(var(--popover))',
        'popover-foreground': 'hsl(var(--popover-foreground))',
        'primary': 'hsl(var(--primary))',
        'primary-foreground': 'hsl(var(--primary-foreground))',
        'secondary': 'hsl(var(--secondary))',
        'secondary-foreground': 'hsl(var(--secondary-foreground))',
        'muted': 'hsl(var(--muted))',
        'muted-foreground': 'hsl(var(--muted-foreground))',
        'accent': 'hsl(var(--accent))',
        'accent-foreground': 'hsl(var(--accent-foreground))',
        'destructive': 'hsl(var(--destructive))',
        'destructive-foreground': 'hsl(var(--destructive-foreground))',
        'border': 'hsl(var(--border))',
        'input': 'hsl(var(--input))',
        'ring': 'hsl(var(--ring))',
      },
      fontFamily: {
        sans: ['var(--font-noto-sans)', 'sans-serif'], // Match layout.tsx
        heading: ['var(--font-inter)', 'sans-serif'],    // Match layout.tsx
      },
      borderRadius: {
        lg: `var(--radius)`,
        md: `calc(var(--radius) - 2px)`,
        sm: `calc(var(--radius) - 4px)`,
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    // require('franken-ui/plugin'), // <-- Commented out due to ERR_PACKAGE_PATH_NOT_EXPORTED
  ],
} 