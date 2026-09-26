import { Composition } from "remotion";
import { Parte2Educativo } from "./compositions/Parte2Educativo";
import { Reel10sOperaciones } from "./compositions/Reel10sOperaciones";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="Reel10sOperaciones"
        component={Reel10sOperaciones}
        durationInFrames={300}
        fps={30}
        width={1080}
        height={1920}
      />
      <Composition
        id="Parte2Educativo"
        component={Parte2Educativo}
        durationInFrames={1141}
        fps={30}
        width={1080}
        height={1920}
      />
    </>
  );
};
