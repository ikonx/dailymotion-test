import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    backgroundImage: {
      gradientThumbnail: "linear-gradient(180deg, #111111 27%, rgba(0, 0, 0, 0.27) 100%);"
    }
  },
  plugins: [],
};
export default config;
