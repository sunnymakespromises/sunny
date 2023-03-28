/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');
const plugin = require('tailwindcss/plugin');

module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    variants: {
        extend: {
          visibility: ['group-hover']
        },
    },
    theme: {
        extend: {
            fontFamily: {
                'main-ultralight': ['var(--font-main-ultralight)', ...defaultTheme.fontFamily.sans],
                'main-thin': ['var(--font-main-thin)', ...defaultTheme.fontFamily.sans],
                'main-thin-italic': ['var(--font-main-thin-italic)', ...defaultTheme.fontFamily.sans],
                'main-light': ['var(--font-main-light)', ...defaultTheme.fontFamily.sans],
                'main-regular': ['var(--font-main-regular)', ...defaultTheme.fontFamily.sans],
                'main-regular-italic': ['var(--font-main-regular-italic)', ...defaultTheme.fontFamily.sans],
                'main-bold': ['var(--font-main-bold)', ...defaultTheme.fontFamily.sans],
                'main-black': ['var(--font-main-black)', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                transparent: 'transparent',
                black: '#000',
                white: '#fff',
                red: '#FE5F57',
                yellow: '#FEBC2E',
                green: '#2BC840',
                primary: {
                    50: '#F2F2F7',
                    100: '#E5E5EA',
                    200: '#D1D1D6',
                    300: '#C7C7CC',
                    400: '#AEAEB2',
                    500: '#8E8E93',
                    600: '#3A3A3C',
                    700: '#2C2C2E',
                    800: '#1C1C1E',
                    900: '#000000'
                },
                accent: {
                    DEFAULT: '#007AFF',
                    50: '#B8DAFF',
                    100: '#A3CFFF',
                    200: '#7ABAFF',
                    300: '#52A5FF',
                    400: '#298FFF',
                    500: '#007AFF',
                    600: '#005FC7',
                    700: '#00448F',
                    800: '#002957',
                    900: '#000F1F'
                },
            },
            textShadow: {
                sm: '0 1px 2px var(--tw-shadow-color)',
                DEFAULT: '0 2px 4px var(--tw-shadow-color)',
                lg: '0 8px 16px var(--tw-shadow-color)',
            },
            boxShadow: {
                window: '0 35px 60px -15px rgba(0, 0, 0, 0.6)',
                app: '0 2px 5px -2px rgba(0, 0, 0, 0.4)'
                // window: '5px 20px 30px rgba(0, 0, 0, 0.6)',
            },
            blur: {
                header: '256px',
                dock: '256px',
                'window-dark': '32px',
                'window-light': '256px'
            }
        },
    },
    plugins: [
        plugin(function ({ matchUtilities, theme }) {
            matchUtilities(
              {
                'text-shadow': (value) => ({
                  textShadow: value,
                }),
              },
              { values: theme('textShadow') }
            )
        }),
    ],
}