/**
 * Iconos mínimos estilo Lucide (trazo, no relleno) — ver criterio de íconos en
 * .claude/skills/graphic-resources/SKILL.md. Inline SVG a propósito, sin fuente de íconos
 * ni asset externo, para no depender de una descarga por ícono.
 */
type IconProps = { size?: number; color?: string };

const base = { fill: "none", strokeWidth: 2, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };

export const BuildingIcon: React.FC<IconProps> = ({ size = 28, color = "#00bfa5" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" stroke={color} {...base}>
    <rect x="4" y="3" width="12" height="18" rx="1" />
    <path d="M9 8h2M9 12h2M9 16h2" />
    <path d="M16 10h4v11h-4" />
  </svg>
);

export const TechIcon: React.FC<IconProps> = ({ size = 28, color = "#00bfa5" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" stroke={color} {...base}>
    <circle cx="12" cy="12" r="3" />
    <path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1" />
  </svg>
);

export const StrategyIcon: React.FC<IconProps> = ({ size = 28, color = "#00bfa5" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" stroke={color} {...base}>
    <path d="M3 20V10M9 20V4M15 20v-7M21 20V8" />
  </svg>
);

export const DocumentIcon: React.FC<IconProps> = ({ size = 28, color = "#00bfa5" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" stroke={color} {...base}>
    <path d="M6 2h9l5 5v15H6z" />
    <path d="M15 2v5h5" />
    <path d="M9 13h6M9 17h6" />
  </svg>
);

export type IconType = "building" | "tech" | "strategy" | "document";

export const ICONS: Record<IconType, React.FC<IconProps>> = {
  building: BuildingIcon,
  tech: TechIcon,
  strategy: StrategyIcon,
  document: DocumentIcon,
};
