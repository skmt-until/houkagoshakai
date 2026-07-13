import nextConfig from "eslint-config-next";

const eslintConfig = [
  ...nextConfig,
  {
    ignores: ["scripts/**", "project/**"],
  },
];

export default eslintConfig;
