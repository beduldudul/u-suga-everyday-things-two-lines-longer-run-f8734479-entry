import { writeFileSync, mkdirSync } from "node:fs";
// Two lines: a traffic jam as toothpaste, then what the analogy maps and leaves out.
// Line 1 is one sentence, one metaphor; line 2 names the mapping and its limit.
const line1 = "A traffic jam is toothpaste stuck in the tube: too many cars trying to squeeze out of a tiny opening at once.";
const line2 = "It maps the squeeze and the slow ooze, but it leaves out that toothpaste has no choice and cars do — drivers could take another road.";
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line1 + "\n" + line2);
