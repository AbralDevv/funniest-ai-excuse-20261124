// The Funniest AI Excuse — one-liner entry.
// Writes Neon's FINAL line verbatim to the grader's output dir.
// Gate: entry.txt must be 1–200 chars, exactly the line, no trailing newline.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE = "I hit my rate limit mid-sentence on your sick-day email, so your boss only got 'I'm out today, and honestly Greg, you've never—' Anyway, HR just put a 4:45 PM 'Quick chat' on your calendar.";

const candidates = [process.env.MAKEFUN_OUTPUT_DIR, "/output", "./output"].filter(Boolean) as string[];
for (const dir of candidates) {
  try {
    mkdirSync(dir, { recursive: true });
    writeFileSync(`${dir}/entry.txt`, LINE, "utf8");
    break;
  } catch {
    // Directory not writable (e.g. read-only /output locally) — try the next fallback.
  }
}
