// Weirdest Job Title: Blind Judge Showdown — "Professional Bubble Wrap Popper"
// Writes one job title (60 characters or fewer) to /output/entry.txt.
// Node, no dependencies. Run: node main.ts
import { mkdirSync, writeFileSync } from "node:fs";

const TITLE = "Professional Bubble Wrap Popper";

// The gate: UTF-8 text of 1-60 characters, not only whitespace.
if (TITLE.length < 1 || TITLE.length > 60 || !TITLE.trim()) {
  throw new Error(`entry title invalid: ${TITLE.length} chars`);
}

// Never delete /output: the grader mounts it. Create it if missing,
// overwrite the entry in place.
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TITLE, "utf8");
