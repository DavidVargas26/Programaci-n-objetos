# Guía del repositorio

- **Alcance:** este repositorio prepara un infográfico motion graphics vertical con Remotion. El README es la fuente de verdad del estado.
- **Formato:** 1080×1920 a 30 fps. Todo contenido importante debe quedar dentro de las zonas seguras de `src/styles/`.
- **Orden:** no animar una escena hasta definir su guion, locución y estilo en `docs/`. Si falta información, preguntar o dejar una nota en el pull request; no inventarla.
- **Código:** una escena por archivo en `src/scenes/`, datos en `src/data/`, y colores, medidas y tiempos en `src/styles/`. Calcular frames como segundos × fps.
- **Recursos:** guardar en `public/`, registrar fuente y licencia en `docs/fuentes.md`, y no usar recursos sin licencia clara ni generadores de imágenes.
- **Validación:** ejecutar `npm run lint` antes de terminar un cambio.
- **Renders:** guardar en `out/`, que no se sube a Git.
- **Sincronía:** mantener sincronizados `docs/`, el código y el README.
