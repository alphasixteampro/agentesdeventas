import path from "path";
import fs from "fs";
import {
  downloadWhisperModel,
  installWhisperCpp,
  transcribe,
  toCaptions,
} from "@remotion/install-whisper-cpp";

const to = path.join(process.cwd(), ".tmp", "whisper.cpp");

console.log("Installing whisper.cpp...");
await installWhisperCpp({ to, version: "1.5.5" });

console.log("Downloading model...");
await downloadWhisperModel({ model: "small", folder: to });

console.log("Transcribing...");
const whisperCppOutput = await transcribe({
  model: "small",
  whisperPath: to,
  whisperCppVersion: "1.5.5",
  inputPath: path.join(process.cwd(), ".tmp", "parte-2-audio.wav"),
  tokenLevelTimestamps: true,
  language: "es",
  printOutput: true,
});

const { captions } = toCaptions({ whisperCppOutput });

fs.writeFileSync(
  path.join(process.cwd(), ".tmp", "parte-2-captions.json"),
  JSON.stringify(captions, null, 2),
);

console.log("Done. Captions:", captions.length);
