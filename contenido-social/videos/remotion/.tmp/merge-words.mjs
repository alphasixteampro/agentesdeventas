import fs from "fs";
import path from "path";

const raw = JSON.parse(
  fs.readFileSync(path.join(process.cwd(), ".tmp", "parte-2-captions.json"), "utf-8"),
);

const PUNCT = new Set([",", ".", "?", "!", "¿", "¡", ":", ";"]);

const CORRECTIONS = {
  Cloud: "Claude",
  ChagPT: "ChatGPT",
  existing: "Sixteam",
  esficiente: "eficiente",
};

const words = [];
for (const tok of raw) {
  const isPunct = PUNCT.has(tok.text.trim());
  const startsNewWord = words.length === 0 || (tok.text.startsWith(" ") && !isPunct);

  if (startsNewWord) {
    words.push({
      text: tok.text.trim(),
      startMs: tok.startMs,
      endMs: tok.endMs,
      timestampMs: tok.timestampMs,
      confidence: tok.confidence,
    });
  } else {
    const w = words[words.length - 1];
    w.text += tok.text.trim();
    w.endMs = tok.endMs;
    w.confidence = Math.min(w.confidence, tok.confidence);
  }
}

for (const w of words) {
  const trailingPunct = (w.text.match(/[,.?!]+$/) || [""])[0];
  const core = trailingPunct ? w.text.slice(0, -trailingPunct.length) : w.text;
  if (CORRECTIONS[core]) {
    const fixed = CORRECTIONS[core] + trailingPunct;
    console.log(`Corrigiendo "${w.text}" -> "${fixed}"`);
    w.text = fixed;
  }
}

// Rebuild with a leading space before each word (Caption text is whitespace-sensitive)
const captions = words.map((w, i) => ({
  text: i === 0 ? w.text : ` ${w.text}`,
  startMs: w.startMs,
  endMs: w.endMs,
  timestampMs: w.timestampMs,
  confidence: w.confidence,
}));

fs.writeFileSync(
  path.join(process.cwd(), "public", "parte-2-captions.json"),
  JSON.stringify(captions, null, 2),
);

console.log(
  "\nFull text:\n" + captions.map((c) => c.text).join("") + "\n",
);
console.log(`Words: ${captions.length}`);
console.log("\nLow-confidence words (<0.5) to double check:");
for (const c of captions) {
  if (c.confidence !== null && c.confidence < 0.5) {
    console.log(`  "${c.text.trim()}" @ ${c.startMs}ms conf=${c.confidence.toFixed(2)}`);
  }
}
