import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outputDir: string = process.env["MAKEFUN_OUTPUT_DIR"] ?? "/output";
const line: string = "I'm on vacation. My backlog replies with escalating apologies until I return; urgent? Open a ticket and watch it age.";

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), `${line}\n`, "utf8");
