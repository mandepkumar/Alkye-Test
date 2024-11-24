import forms from "@tailwindcss/forms";
import animate from "tailwindcss-animate";
import typography from "@tailwindcss/typography";

export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#000000",
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#ffffff",
          foreground: "#000000",
        },
        gray: "#888888",
        background: "#ffffff",
        foreground: "#000000",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        muted: {
          DEFAULT: "#888888",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      typography: {
        DEFAULT: {
          css: {
            h1: {
              fontSize: "2.25rem", // Adjust as needed
              fontWeight: "700", // Bold
              color: "var(--foreground)", // Use the primary text color
              marginBottom: "1rem",
            },
            h2: {
              fontSize: "1.875rem", // Adjust as needed
              fontWeight: "600", // Semi-bold
              color: "var(--foreground)",
              marginBottom: "0.75rem",
            },
            h3: {
              fontSize: "1.5rem", // Adjust as needed
              fontWeight: "500", // Medium
              color: "var(--foreground)",
              marginBottom: "0.5rem",
            },
          },
        },
      },
    },
  },
  plugins: [forms, animate, typography],
};
