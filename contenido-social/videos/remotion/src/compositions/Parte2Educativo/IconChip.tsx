import { Img, spring, staticFile, useCurrentFrame, useVideoConfig } from "remotion";
import { colors, fontFamily } from "../../theme";
import { BRAND_LOGOS, type BrandLogoType } from "./brandLogos";
import { ICONS, type IconType } from "./icons";

const ENTER_FRAMES = 10;

/**
 * Chip flotante (ícono, logo de marca, o logo Sixteam) que aparece brevemente sobre un ápice del
 * guión — "apoyo visual" a una palabra concreta. Nunca tapa la cara: vive en la franja superior
 * segura. "Flotante": además del spring de entrada/salida, hace un bob vertical suave mientras
 * está en pantalla.
 */
export const IconChip: React.FC<{
  icon: IconType | BrandLogoType | "logo";
  label: string;
  holdFrames: number;
}> = ({ icon, label, holdFrames }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const enter = spring({ frame, fps, config: { stiffness: 200, damping: 14 }, durationInFrames: ENTER_FRAMES });
  const exitFrames = 8;
  const exit =
    frame > holdFrames
      ? spring({ frame: frame - holdFrames, fps, config: { stiffness: 200, damping: 18 }, durationInFrames: exitFrames })
      : 0;

  const scale = enter * (1 - exit);
  const opacity = Math.max(0, enter - exit);
  const float = Math.sin(frame / 8) * 6;

  const BrandLogo = icon === "logo" ? null : (BRAND_LOGOS as Record<string, React.FC<{ size?: number }>>)[icon];
  const Icon = icon === "logo" || BrandLogo ? null : ICONS[icon as IconType];

  return (
    <div
      style={{
        position: "absolute",
        top: 210 + float,
        right: 60,
        display: "flex",
        alignItems: "center",
        gap: 10,
        background: "rgba(13,13,18,0.7)",
        border: `1px solid ${colors.teal}`,
        borderRadius: 999,
        padding: "12px 22px 12px 14px",
        opacity,
        transform: `scale(${0.7 + scale * 0.3})`,
      }}
    >
      {icon === "logo" ? (
        <Img src={staticFile("sixteam-logo.png")} style={{ width: 30, height: 30, objectFit: "contain" }} />
      ) : BrandLogo ? (
        <BrandLogo size={26} />
      ) : (
        Icon && <Icon size={26} color={colors.teal} />
      )}
      <span
        style={{
          fontFamily: fontFamily.poppins,
          fontWeight: 800,
          fontSize: 22,
          color: colors.white,
          whiteSpace: "nowrap",
        }}
      >
        {label}
      </span>
    </div>
  );
};
