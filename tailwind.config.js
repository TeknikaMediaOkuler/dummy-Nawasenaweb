/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#6B4638',
                charcoal: '#000000',
                leaf: '#C8D82E',
                olive: '#A7B72C',
            }
        },
    },
    plugins: [],
}
