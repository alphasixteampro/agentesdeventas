import { Audio, Video } from "@remotion/media";
import type { Caption } from "@remotion/captions";
import { useEffect, useState } from "react";
import {
  AbsoluteFill,
  staticFile,
  useCurrentFrame,
  useDelayRender,
  useVideoConfig,
} from "remotion";
import { Captions } from "./Captions";
import { KeywordMoments } from "./KeywordMoments";
import { getZoomScale } from "./zoom";

/**
 * Edicion dinamica de contenido de valor (parte-2-vertical.mp4): zoom continuo +
 * punch-ins por frase, captions estilo TikTok con palabra activa en teal, apoyos
 * visuales (iconos/logo) sobre palabras clave, y un whoosh en el hook (0-3s).
 * Fuente: contenido-social/videos/remotion/public/parte-2-vertical.mp4
 */
export const Parte2Educativo: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const scale = getZoomScale(frame, fps);

  const [captions, setCaptions] = useState<Caption[] | null>(null);
  const { delayRender, continueRender, cancelRender } = useDelayRender();
  const [handle] = useState(() => delayRender());

  useEffect(() => {
    fetch(staticFile("parte-2-captions.json"))
      .then((res) => res.json())
      .then((data: Caption[]) => {
        setCaptions(data);
        continueRender(handle);
      })
      .catch((e) => cancelRender(e));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AbsoluteFill style={{ backgroundColor: "#000" }}>
      <Video
        src={staticFile("parte-2-vertical.mp4")}
        objectFit="cover"
        style={{
          width: "100%",
          height: "100%",
          transform: `scale(${scale})`,
        }}
        from={-2}
      />
      {/* Whoosh reforzando el punch-in de zoom del gancho (frame 0). */}
      <Audio src="https://remotion.media/whoosh.wav" volume={0.7} />
      {captions ? (
        <>
          <Captions captions={captions} />
          <KeywordMoments captions={captions} />
        </>
      ) : null}
    </AbsoluteFill>
  );
};
