import { defineBuildConfig } from "unbuild";
import getTSConfigPaths from "./tsconfig_paths";

export default defineBuildConfig({
  entries: ["./src/index"],
  alias: getTSConfigPaths(),
  declaration: true,
  rollup: {
    cjsBridge: true,
    emitCJS: true
  },
  failOnWarn: false
});
