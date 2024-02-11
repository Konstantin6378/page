/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "footer-bg": "url('assets/footer.svg')",
        "header-bg": "url('assets/bg_elements.svg')",
      },
    },
  },
  plugins: [],
};
