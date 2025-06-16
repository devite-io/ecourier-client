import { readFileSync } from "fs";
import { resolve } from "node:path";

function getTSConfigPaths() {
  const tsconfigContents = readFileSync("./tsconfig.json", "utf-8");
  const tsconfigPaths = JSON.parse(tsconfigContents.replace(/\/\/.*$/gm, "").replace(/\/\*/g, ""))
    .compilerOptions.paths;

  return Object.entries(tsconfigPaths).reduce(
    (acc, [key, value]) => {
      acc[key] = resolve(__dirname, (value as string[])[0]);
      return acc;
    },
    {} as Record<string, string>
  );
}

export default getTSConfigPaths;
