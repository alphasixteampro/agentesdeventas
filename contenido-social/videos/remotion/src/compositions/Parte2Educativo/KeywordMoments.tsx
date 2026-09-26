import type { Caption } from "@remotion/captions";
import { AbsoluteFill, Sequence } from "remotion";
import type { BrandLogoType } from "./brandLogos";
import { IconChip } from "./IconChip";
import type { IconType } from "./icons";
import { getKeywordConfig } from "./keywords";

type ChipIcon = IconType | BrandLogoType | "logo";

const LABELS: Record<ChipIcon, string> = {
  building: "Inmobiliario",
  tech: "Tecnología",
  strategy: "Estrategia",
  document: "Manual",
  claude: "Claude",
  chatgpt: "ChatGPT",
  gemini: "Gemini",
  logo: "Sixteam.pro",
};

/**
 * Claude/ChatGPT/Gemini se nombran casi seguidos (~0.5-0.6s entre cada uno) — sostenerlos el
 * mismo tiempo que un ícono normal haría que se amontonen. Se turnan rápido en vez de competir.
 */
const BRAND_HOLD_FRAMES = 14;
const DEFAULT_HOLD_FRAMES = 26;
const EXIT_BUFFER_FRAMES = 10;

const isBrandLogo = (icon: ChipIcon): icon is BrandLogoType =>
  icon === "claude" || icon === "chatgpt" || icon === "gemini";

type Moment = { startMs: number; icon: ChipIcon; label: string; holdFrames: number };

const FPS = 30;

function findMoments(captions: Caption[]): Moment[] {
  const seen = new Set<ChipIcon>();
  const moments: Moment[] = [];

  for (const caption of captions) {
    const word = caption.text.trim();
    const isSixteam = word.toLowerCase().replace(/[.,!?¿¡:;]/g, "") === "sixteam";

    if (isSixteam && !seen.has("logo")) {
      seen.add("logo");
      moments.push({ startMs: caption.startMs, icon: "logo", label: LABELS.logo, holdFrames: DEFAULT_HOLD_FRAMES });
      continue;
    }

    const config = getKeywordConfig(word);
    if (config?.icon && !seen.has(config.icon)) {
      seen.add(config.icon);
      const holdFrames = isBrandLogo(config.icon) ? BRAND_HOLD_FRAMES : DEFAULT_HOLD_FRAMES;
      moments.push({ startMs: caption.startMs, icon: config.icon, label: LABELS[config.icon], holdFrames });
    }
  }

  return moments;
}

export const KeywordMoments: React.FC<{ captions: Caption[] }> = ({ captions }) => {
  const moments = findMoments(captions);

  return (
    <AbsoluteFill>
      {moments.map((moment) => (
        <Sequence
          key={moment.icon}
          from={Math.round((moment.startMs / 1000) * FPS)}
          durationInFrames={moment.holdFrames + EXIT_BUFFER_FRAMES}
        >
          <IconChip icon={moment.icon} label={moment.label} holdFrames={moment.holdFrames} />
        </Sequence>
      ))}
    </AbsoluteFill>
  );
};
