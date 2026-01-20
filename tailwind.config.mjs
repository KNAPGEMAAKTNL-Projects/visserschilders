/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#1A202C', // Deep Charcoal (Slate 900)
                    light: '#2D3748',
                },
                background: {
                    base: '#F5F5F0', // Warm Taupe
                    white: '#FFFFFF',
                },
                accent: {
                    DEFAULT: '#C5A572', // Muted Gold
                    hover: '#B08D55',
                },
                text: {
                    main: '#1A202C',
                    muted: '#4A5568',
                }
            },
            fontFamily: {
                sans: ['Inter Variable', 'sans-serif'],
                serif: ['Playfair Display Variable', 'serif'],
            },
            animation: {
                'fade-up': 'fadeUp 0.8s ease-out forwards',
                'fade-in': 'fadeIn 1s ease-out forwards',
            },
            keyframes: {
                fadeUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                }
            }
        },
    },
    plugins: [],
}
