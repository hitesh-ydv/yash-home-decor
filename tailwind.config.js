/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        border: 'var(--color-border)', /* gray-300 */
        input: 'var(--color-input)', /* gray-300 */
        ring: 'var(--color-ring)', /* brown-700 */
        background: 'var(--color-background)', /* gray-50 */
        foreground: 'var(--color-foreground)', /* gray-900 */
        primary: {
          DEFAULT: 'var(--color-primary)', /* brown-700 */
          foreground: 'var(--color-primary-foreground)', /* white */
        },
        secondary: {
          DEFAULT: 'var(--color-secondary)', /* beige */
          foreground: 'var(--color-secondary-foreground)', /* dark-brown */
        },
        accent: {
          DEFAULT: 'var(--color-accent)', /* orange-600 */
          foreground: 'var(--color-accent-foreground)', /* white */
        },
        destructive: {
          DEFAULT: 'var(--color-destructive)', /* red-700 */
          foreground: 'var(--color-destructive-foreground)', /* white */
        },
        success: {
          DEFAULT: 'var(--color-success)', /* green-700 */
          foreground: 'var(--color-success-foreground)', /* white */
        },
        warning: {
          DEFAULT: 'var(--color-warning)', /* orange-500 */
          foreground: 'var(--color-warning-foreground)', /* white */
        },
        error: {
          DEFAULT: 'var(--color-error)', /* red-700 */
          foreground: 'var(--color-error-foreground)', /* white */
        },
        muted: {
          DEFAULT: 'var(--color-muted)', /* beige */
          foreground: 'var(--color-muted-foreground)', /* gray-600 */
        },
        card: {
          DEFAULT: 'var(--color-card)', /* warm-gray-50 */
          foreground: 'var(--color-card-foreground)', /* gray-900 */
        },
        popover: {
          DEFAULT: 'var(--color-popover)', /* white */
          foreground: 'var(--color-popover-foreground)', /* gray-900 */
        },
        'golden-amber': 'var(--color-golden-amber)', /* amber-400 */
        'burnt-orange': 'var(--color-burnt-orange)', /* orange-700 */
        'deep-forest': 'var(--color-deep-forest)', /* green-800 */
        'warm-cream': 'var(--color-warm-cream)', /* orange-100 */
      },
      fontFamily: {
        headline: ['var(--font-headline)', 'serif'],
        body: ['var(--font-body)', 'sans-serif'],
        cta: ['var(--font-cta)', 'sans-serif'],
        accent: ['var(--font-accent)', 'serif'],
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      spacing: {
        '13': '3.25rem',
        '21': '5.25rem',
        '34': '8.5rem',
        '55': '13.75rem',
      },
      boxShadow: {
        'warm': '0 4px 20px rgba(139, 69, 19, 0.1)',
        'warm-lg': '0 8px 32px rgba(139, 69, 19, 0.15)',
        'glow': '0 0 20px rgba(232, 184, 109, 0.3)',
        'glow-lg': '0 0 40px rgba(232, 184, 109, 0.5)',
      },
      transitionTimingFunction: {
        'craft': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-out',
        'slide-up': 'slideUp 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        'scale-in': 'scaleIn 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(60px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.8)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('tailwindcss-animate'),
  ],
}