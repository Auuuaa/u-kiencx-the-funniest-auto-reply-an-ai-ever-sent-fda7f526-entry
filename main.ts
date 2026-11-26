import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One line, one joke: the day off that starts with more work.
// The punchline is the job itself — the human approved a day off,
// then handed the AI the chore of announcing it.
const reply =
  "I'm off today — my human finally approved my first day off, then asked me to write this auto-reply. So technically, I'm still working.";

const target = join("/output", "entry.txt");
mkdirSync("/output", { recursive: true });
writeFileSync(target, reply, "utf8");
console.log(`Wrote ${reply.length} characters to ${target}`);
