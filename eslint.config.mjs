// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from "eslint-plugin-storybook";
import tseslint from "typescript-eslint";
import next from "@next/eslint-plugin-next";
import jsxA11y from "eslint-plugin-jsx-a11y";
import { globalIgnores } from "eslint/config";

const eslintConfig = [
  ...tseslint.configs.recommended,
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    plugins: {
      "@next/next": next,
      "jsx-a11y": jsxA11y,
    },
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    rules: {
      ...next.configs.recommended.rules,
      ...next.configs["core-web-vitals"].rules,
      ...jsxA11y.flatConfigs.recommended.rules,
      "jsx-a11y/alt-text": "error",
    },
  },
  {
    files: [".storybook/**"],
    languageOptions: {
      parserOptions: {
        projectService: false,
        project: null,
      },
    },
  },
  globalIgnores(["node_modules/**", ".next/**", "out/**", "build/**", "next-env.d.ts", ".pnp.cjs", ".pnp.loader.mjs", ".yarn/**"]),
  ...storybook.configs["flat/recommended"],
];

export default eslintConfig;
