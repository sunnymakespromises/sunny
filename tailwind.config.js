/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                main: ['"Lato"', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                transparent: 'transparent',
                black: '#000',
                white: '#fff',
                primary: {
                    50: "#f9f9f9",
                    100: "#f3f3f3",
                    200: "#eaeaea",
                    300: "#dadada",
                    400: "#b7b7b7",
                    500: "#979797",
                    600: "#6e6e6e",
                    700: "#5b5b5b",
                    800: "#3c3c3c",
                    900: "#1c1c1c"
                },
                secondary: {
                    50: "#f9f9f9",
                    100: "#f3f3f3",
                    200: "#eaeaea",
                    300: "#dadada",
                    400: "#b7b7b7",
                    500: "#979797",
                    600: "#6e6e6e",
                    700: "#5b5b5b",
                    800: "#3c3c3c",
                    900: "#1c1c1c"
                },
                accent: {
                    50: "#fff1f2",
                    100: "#ffe4e6",
                    200: "#fecdd3",
                    300: "#fda4af",
                    400: "#fb7185",
                    500: "#f43f5e",
                    600: "#e11d48",
                    700: "#be123c",
                    800: "#9f1239",
                    900: "#881337"
                },
                tertiary: {
                    50: "#eff6ff",
                    100: "#dbeafe",
                    200: "#bfdbfe",
                    300: "#93c5fd",
                    400: "#60a5fa",
                    500: "#3b82f6",
                    600: "#2563eb",
                    700: "#1d4ed8",
                    800: "#1e40af",
                    900: "#1e3a8a"
                },
            }
        },
    },
    plugins: [],
}