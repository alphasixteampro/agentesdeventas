import { Underline } from "@remotion/rough-notation";
import type { Caption, TikTokPage } from "@remotion/captions";
import { createTikTokStyleCaptions } from "@remotion/captions";
import {
  AbsoluteFill,
  Sequence,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { colors, fontFamily, safeZone } from "../../theme";
import { getKeywordConfig } from "./keywords";

const SWITCH_CAPTIONS_EVERY_MS = 800;
/** The hook page (first sentence) gets a bigger, louder treatment. */
const HOOK_END_MS = 6270;
const FPS = 30;

export const Captions: React.FC<{ captions: Caption[] }> = ({ captions }) => {
  const { pages } = createTikTokStyleCaptions({
    captions,
    combineTokensWithinMilliseconds: SWITCH_CAPTIONS_EVERY_MS,
  });

  return (
    <AbsoluteFill>
      {pages.map((page, index) => {
        const nextPage = pages[index + 1] ?? null;
        const startFrame = Math.round((page.startMs / 1000) * FPS);
        const endFrame = Math.round(
          Math.min(
            nextPage ? nextPage.startMs / 1000 : Infinity,
            page.startMs / 1000 + SWITCH_CAPTIONS_EVERY_MS / 1000,
          ) * FPS,
        );
        const durationInFrames = endFrame - startFrame;

        if (durationInFrames <= 0) {
          return null;
        }

        return (
          <Sequence key={page.startMs} from={startFrame} durationInFrames={durationInFrames}>
            <CaptionPage page={page} isHook={page.startMs < HOOK_END_MS} />
          </Sequence>
        );
      })}
    </AbsoluteFill>
  );
};

const CaptionPage: React.FC<{ page: TikTokPage; isHook: boolean }> = ({ page, isHook }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const currentTimeMs = (frame / fps) * 1000;
  const absoluteTimeMs = page.startMs + currentTimeMs;

  const containerEntrance = interpolate(frame, [0, 4], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const baseFontSize = isHook ? 66 : 54;

  return (
    <AbsoluteFill
      style={{
        justifyContent: "flex-start",
        alignItems: "center",
        paddingTop: 1360,
        paddingLeft: safeZone.sides,
        paddingRight: safeZone.sides,
      }}
    >
      <div
        style={{
          background: "rgba(13,13,18,0.62)",
          borderRadius: 24,
          padding: "18px 28px",
          opacity: containerEntrance,
        }}
      >
        <div
          style={{
            fontFamily: fontFamily.poppins,
            fontWeight: 900,
            lineHeight: 1.3,
            textAlign: "center",
            whiteSpace: "pre-wrap",
          }}
        >
          {page.tokens.map((token) => {
            const keyword = getKeywordConfig(token.text);
            const wordStartFrame = Math.round(((token.fromMs - page.startMs) / 1000) * fps);
            const localFrame = frame - wordStartFrame;
            const notYetVisible = localFrame < 0;

            const isActive = token.fromMs <= absoluteTimeMs && token.toMs > absoluteTimeMs;
            const hasBeenSpoken = absoluteTimeMs >= token.fromMs;

            const bounce = spring({
              frame: Math.max(0, localFrame),
              fps,
              config: { stiffness: 200, damping: 22 },
              durationInFrames: 8,
            });
            const fadeIn = interpolate(localFrame, [0, 5], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            });
            const activePulse = isActive ? 0.08 : 0;

            const fontSize = keyword?.emphasize ? baseFontSize * 1.15 : baseFontSize;
            const underlineProgress = interpolate(localFrame, [4, 16], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            });

            const wordNode = (
              <span
                style={{
                  fontSize,
                  color: hasBeenSpoken ? colors.teal : colors.white,
                }}
              >
                {token.text.trim()}
              </span>
            );

            return (
              <span
                key={token.fromMs}
                style={{
                  display: "inline-block",
                  marginRight: 26,
                  opacity: notYetVisible ? 0 : fadeIn,
                  transform: notYetVisible ? "scale(0.7)" : `scale(${bounce + activePulse})`,
                }}
              >
                {keyword?.emphasize ? (
                  <Underline color={colors.teal} strokeWidth={3} progress={underlineProgress}>
                    {wordNode}
                  </Underline>
                ) : (
                  wordNode
                )}
              </span>
            );
          })}
        </div>
      </div>
    </AbsoluteFill>
  );
};
