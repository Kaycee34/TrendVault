import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Noto Serif', 'serif'],
        strike: ['Protest Strike', 'sans-serif'],
      },
      colors: {
        customDark: "#151712",
        customBlue: "#04053A",
        bgwhite: "#F5F5F5",
      },
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
        '128': '32rem',
        '200': '40rem',
        '400': '90rem',
      },
    },
  },
  plugins: [],
};

export default config;
