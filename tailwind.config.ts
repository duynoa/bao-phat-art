import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/views/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/viewsAdmin/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bg-partner': "url('/images/bg-partner.png')",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",

        // primary: "#3d9e7b",
        // second: "#7DC9AF",
        primary: "#77dada",
        secondary: "#0e4f4f",
        "footer-color": "#F6F5F1",
        
      },
      fontSize: {
        'title1': ['1.125rem', '1.75rem'],
      },
    },
  },
  plugins: [],
} satisfies Config;
