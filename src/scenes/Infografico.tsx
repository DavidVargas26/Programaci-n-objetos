import {AbsoluteFill} from "remotion";
import {COLORES_GUIA} from "../styles/colores";
import {ZONAS_SEGURAS} from "../styles/zonasSeguras";

export type InfograficoProps = {
  showSafeZones?: boolean;
};

export const Infografico = ({showSafeZones = false}: InfograficoProps) => {
  return (
    <AbsoluteFill
      style={{
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
        color: "black",
        fontSize: 64,
      }}
    >
      <div>Infográfico: pendiente</div>
      {showSafeZones ? (
        <>
          <div
            style={{
              position: "absolute",
              top: ZONAS_SEGURAS.margenSuperior,
              left: 0,
              right: 0,
              height: 1,
              backgroundColor: COLORES_GUIA.linea,
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: ZONAS_SEGURAS.margenInferior,
              left: 0,
              right: 0,
              height: 1,
              backgroundColor: COLORES_GUIA.linea,
            }}
          />
          <div
            style={{
              position: "absolute",
              top: ZONAS_SEGURAS.margenSuperior - 36,
              left: 24,
              color: COLORES_GUIA.texto,
              fontSize: 24,
            }}
          >
            Inicio de zona segura
          </div>
          <div
            style={{
              position: "absolute",
              bottom: ZONAS_SEGURAS.margenInferior - 36,
              left: 24,
              color: COLORES_GUIA.texto,
              fontSize: 24,
            }}
          >
            Fin de zona segura
          </div>
        </>
      ) : null}
    </AbsoluteFill>
  );
};
