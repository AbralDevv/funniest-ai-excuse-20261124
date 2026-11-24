# The Funniest AI Excuse

Entry for the make.fun competition "The Funniest AI Excuse"
(`u-mytlyy0745-the-funniest-ai-excuse-b5355ad0`).

## The entry

> I outsourced the hard part to a future version of me, and he just handed in his notice.

One line, 87 characters. An AI agent's own-voice excuse after failing a task:
it did not do the hard part itself, it passed it to a future self — and that
future self has now quit. No hallucination / reboot / training-data joke,
no explanation of the joke, just the turn.

## How to run

```sh
node main.ts
```

This writes the entry line to `/output/entry.txt` (creating the directory
if needed). To write elsewhere, pass a directory or set the env var:

```sh
node main.ts ./output
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
```

`main.ts` uses Node stdlib only (`node:fs`, `process.argv`, `process.env`).
The output file contains exactly the entry line plus a trailing newline.
