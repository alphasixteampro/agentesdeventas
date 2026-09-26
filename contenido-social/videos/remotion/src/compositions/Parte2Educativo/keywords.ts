import type { BrandLogoType } from "./brandLogos";
import type { IconType } from "./icons";

type KeywordConfig = {
  /** Bigger + teal permanent + subrayado animado en el caption. */
  emphasize: boolean;
  /** Si está presente, la PRIMERA vez que aparece esta palabra dispara un ícono/logo flotante. */
  icon?: IconType | BrandLogoType;
};

const norm = (s: string) => s.toLowerCase().replace(/[.,!?¿¡:;]/g, "");

/**
 * Palabras clave del guión de parte-2-vertical.mp4. Curado a mano, no es NLP genérico —
 * son los términos de negocio/IA que el guión realmente nombra (ver transcript en
 * public/parte-2-captions.json).
 */
const KEYWORDS: Record<string, KeywordConfig> = {
  claude: { emphasize: true, icon: "claude" },
  chatgpt: { emphasize: true, icon: "chatgpt" },
  gemini: { emphasize: true, icon: "gemini" },
  inmobiliario: { emphasize: true, icon: "building" },
  artificial: { emphasize: true },
  sixteam: { emphasize: true },
  tecnología: { emphasize: true, icon: "tech" },
  estratégica: { emphasize: true, icon: "strategy" },
  valor: { emphasize: true },
  productiva: { emphasize: true },
  eficiente: { emphasize: true },
  manual: { emphasize: true, icon: "document" },
};

export function getKeywordConfig(word: string): KeywordConfig | undefined {
  return KEYWORDS[norm(word)];
}
