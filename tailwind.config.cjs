/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        txtclear: "#a5a5a5",
        txtoperator: "#339dff",
        txtnumber: "#29A8FF",
        txteqaul: "#fff",
      },
      backgroundColor: {
        bgClear: "#616161",
        bgOperator: "#005DB2",
        bgNumber: "#303136",
        bgEqaul: "#1991FF",
      }
    },
  },
  plugins: [],
}
