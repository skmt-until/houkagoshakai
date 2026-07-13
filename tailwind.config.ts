import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#1A4331",
        inkdeep: "#12301F",
        bg: "#EFF6F0",
        card: "#FFFFFF",
        cardsoft: "#FBFDFB",
        mint: "#F4F9F5",
        mintline: "#DCEDE2",
        mintline2: "#E6F1E9",
        mintline3: "#E9F2EC",
        accent: "#E55A39",
      },
      fontFamily: {
        maru: ["var(--font-zen-maru-gothic)", "sans-serif"],
      },
      keyframes: {
        "hs-slide-in-right": { from: { opacity: "0", transform: "translateX(48px)" }, to: { opacity: "1", transform: "translateX(0)" } },
        "hs-slide-in-left": { from: { opacity: "0", transform: "translateX(-48px)" }, to: { opacity: "1", transform: "translateX(0)" } },
        "hs-pop": {
          "0%": { opacity: "0", transform: "scale(.8)" },
          "60%": { opacity: "1", transform: "scale(1.08)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        "hs-overlay-in": { from: { opacity: "0" }, to: { opacity: "1" } },
        "hs-drop": {
          "0%": { transform: "translateY(-64px)" },
          "60%": { transform: "translateY(0)" },
          "75%": { transform: "translateY(-12px)" },
          "88%": { transform: "translateY(0)" },
          "94%": { transform: "translateY(-4px)" },
          "100%": { transform: "translateY(0)" },
        },
        "hs-scalepop": {
          "0%": { transform: "scale(.86)" },
          "60%": { transform: "scale(1.04)" },
          "100%": { transform: "scale(1)" },
        },
      },
      animation: {
        "hs-drop": "hs-drop .7s cubic-bezier(.33,.7,.4,1) backwards",
        "hs-overlay-in": "hs-overlay-in .2s",
        "hs-scalepop": "hs-scalepop .5s .1s cubic-bezier(.34,1.56,.64,1) backwards",
      },
    },
  },
  plugins: [],
};

export default config;
