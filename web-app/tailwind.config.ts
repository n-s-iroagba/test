import type { Config } from "tailwindcss";
import { tokens } from "./src/shared/lib/design-system/tokens";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: tokens.colors.primary,
        secondary: tokens.colors.secondary,
        neutral: tokens.colors.neutral,
        success: tokens.colors.semantic.success,
        warning: tokens.colors.semantic.warning,
        error: tokens.colors.semantic.error,
        info: tokens.colors.semantic.info,
        accent: tokens.colors.accent,
      },
      fontFamily: {
        sans: tokens.typography.fonts.sans.split(", "),
        serif: tokens.typography.fonts.serif.split(", "),
        mono: tokens.typography.fonts.mono.split(", "),
      },
      borderRadius: tokens.borderRadius,
    },
  },
  plugins: [],
};

export default config;
