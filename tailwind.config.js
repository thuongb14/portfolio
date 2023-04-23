const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      primary: ["Noto Sans", ...defaultTheme.fontFamily.sans],
      secondary: "Rajdhani",
      tertiary: "Aldrich",
    },
    container: {
      padding: {
        DEFAULT: "15px",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
    extend: {
      colors: {
        primary: "#0a0a0a",
        accent: "#B809C3",
      },
      backgroundColor: {
        site: "#091742 ",
        about: "url('./assets/about.png')",
        services: "url('./assets/services.png')",
      },
      backgroundImage: {
        project1:
          "url('https://plus.unsplash.com/premium_photo-1682001110118-cfda581e3611?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80')",
        project2:
          "url('https://images.unsplash.com/photo-1681938329926-c927908b89a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80')",
      },
    },
  },
  plugins: [],
};


