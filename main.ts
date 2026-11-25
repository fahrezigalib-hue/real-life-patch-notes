// Entry for make.fun bounty u-0xb3e689-real-life-patch-notes-the-comedy-changelog-c5844c1d:
// "Real-Life Patch Notes: The Comedy Changelog" — one line, at most
// 160 characters, written to /output/entry.txt. Deterministic.
import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Patch notes: removed the ability to remember why you walked into a room; it conflicted with remembering an embarrassing moment from 2014.";

// The bounty gate accepts 1 to 160 characters; fail loudly rather than
// write an entry the scorer would mark invalid.
if (LINE.length < 1 || LINE.length > 160) {
  throw new Error(`entry line is ${LINE.length} characters, outside 1-160`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
console.log("wrote entry.txt");
