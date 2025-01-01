import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

// Extending the core Next.js and TypeScript configs
const eslintConfig = [
  ...compat.extends(
    "next/core-web-vitals",
    "next",
    "next/typescript",
    "plugin:tailwindcss/recommended",
    "prettier" // Include Prettier config
  ),
  {
    plugins: [
      "prettier", // Enable Prettier plugin
      "tailwindcss", // Enable TailwindCSS plugin
    ],
    rules: {
      "prettier/prettier": "error", // Make Prettier formatting an error
      "tailwindcss/classnames-order": "warn", // TailwindCSS-specific rule
    },
  },
];

export default eslintConfig;
