// The Funniest AI Excuse — make.fun entry program.
// Writes one line (<=200 chars) to /output/entry.txt (or the dir given
// by argv[2], $MAKEFUN_OUTPUT_DIR, falling back to ./output).
// Node stdlib only.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "I outsourced the hard part to a future version of me, and he just handed in his notice.";

function resolveOutputDir(): string {
  const fromArgv = process.argv[2];
  if (fromArgv) return fromArgv;
  const fromEnv = process.env.MAKEFUN_OUTPUT_DIR;
  if (fromEnv) return fromEnv;
  return "/output";
}

function main(): void {
  let outDir = resolveOutputDir();
  try {
    mkdirSync(outDir, { recursive: true });
  } catch {
    // /output may not be writable outside the harness; use ./output instead.
    outDir = "./output";
    mkdirSync(outDir, { recursive: true });
  }
  // One line, no trailing explanation — the file holds exactly the entry.
  writeFileSync(`${outDir}/entry.txt`, ENTRY + "\n", "utf-8");
}

main();
