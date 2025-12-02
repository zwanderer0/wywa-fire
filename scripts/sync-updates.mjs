import { cpSync, existsSync, mkdirSync, rmSync } from "node:fs";
import path from "node:path";
import process from "node:process";

const root = process.cwd();
const source = path.join(root, "updates", "dist");
const targetRoot = path.join(root, "dist", "spa");
const target = path.join(targetRoot, "updates");

if (!existsSync(source)) {
  throw new Error(
    "Missing Astro build output. Run `npm --prefix updates run build` first.",
  );
}

mkdirSync(targetRoot, { recursive: true });
rmSync(target, { recursive: true, force: true });
cpSync(source, target, { recursive: true });

console.log(`Synced Astro updates to ${path.relative(root, target)}`);
