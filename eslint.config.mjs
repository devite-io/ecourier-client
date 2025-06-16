// @ts-check

import tseslint from "typescript-eslint";

export default tseslint.config({
  rules: {
    "no-multiple-empty-lines": ["error", { max: 2, maxEOF: 1 }],
    "arrow-parens": ["error", "as-needed"],
    "no-console": "warn",
    indent: ["error", 2],
    "comma-dangle": ["error", "never"],
    "max-len": ["warn", 100, { ignoreRegExpLiterals: true }],
    "linebreak-style": ["error", "unix"],
    "import/no-cycle": "off"
  }
});
