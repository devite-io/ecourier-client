import { defineConfig } from "vitest/config";
import getTSConfigPaths from "./tsconfig_paths";

export default defineConfig({
  resolve: {
    alias: getTSConfigPaths()
  }
});
