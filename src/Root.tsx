import {Composition} from "remotion";
import {Infografico} from "./scenes/Infografico";
import {FORMATO} from "./styles/formato";
import {DURACIONES} from "./styles/tiempos";

export const Root = () => {
  return (
    <Composition
      id="Infografico"
      component={Infografico}
      durationInFrames={DURACIONES.marcadorSegundos * FORMATO.fps}
      fps={FORMATO.fps}
      width={FORMATO.width}
      height={FORMATO.height}
      defaultProps={{showSafeZones: false}}
    />
  );
};
