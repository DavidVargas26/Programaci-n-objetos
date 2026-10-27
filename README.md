# Infográfico vertical con Remotion

## Índice

1. [Descripción del proyecto](#1-descripción-del-proyecto)
2. [Formato de salida](#2-formato-de-salida)
3. [Estado actual y próxima iteración](#3-estado-actual-y-próxima-iteración)
4. [Requisitos](#4-requisitos)
5. [Instalación y comandos](#5-instalación-y-comandos)
6. [Estructura del repositorio](#6-estructura-del-repositorio)
7. [Flujo de producción](#7-flujo-de-producción)
8. [Documentación de preproducción](#8-documentación-de-preproducción)
9. [Renders y entregables](#9-renders-y-entregables)
10. [Créditos, fuentes y licencias de recursos](#10-créditos-fuentes-y-licencias-de-recursos)

## 1. Descripción del proyecto

Base técnica para un infográfico motion graphics vertical creado con Remotion. **Tema por definir.**

## 2. Formato de salida

La composición `Infografico` está preparada para 1080×1920 píxeles, relación 9:16 y 30 fps. Las plataformas de destino están por definir en la documentación de preproducción.

## 3. Estado actual y próxima iteración

La estructura base, la composición de marcador y la guía opcional de zonas seguras están listas. La próxima iteración definirá tema, público, guion, locución, estilo, datos y animación.

## 4. Requisitos

- Node.js 22 LTS (ver `.nvmrc`)
- npm compatible con Node.js 22

## 5. Instalación y comandos

```bash
npm install
npm run dev
npm run render
npm run lint
```

`npm run dev` abre Remotion Studio. `npm run render` genera el render en `out/`.

## 6. Estructura del repositorio

- `src/Root.tsx`: composición y configuración de la duración.
- `src/scenes/`: una escena por componente.
- `src/components/`: elementos visuales reutilizables.
- `src/data/`: datos separados de la vista.
- `src/styles/`: formato y tokens compartidos.
- `public/`: audio, imágenes y fuentes con licencia documentada.
- `docs/`: documentos de preproducción.
- `out/`: renders locales, excluidos de Git.

## 7. Flujo de producción

Tema → guion → locución → estilo → storyboard → animación → render.

## 8. Documentación de preproducción

- [Tema](docs/01-tema.md)
- [Guion](docs/02-guion.md)
- [Locución](docs/03-locucion.md)
- [Estilo](docs/04-estilo.md)
- [Storyboard](docs/05-storyboard.md)
- [Fuentes](docs/fuentes.md)

## 9. Renders y entregables

Los renders se generan en `out/` y no se suben a Git. El entregable previsto es un MP4 H.264 con audio AAC.

## 10. Créditos, fuentes y licencias de recursos

Registrar cada fuente, recurso y licencia en [docs/fuentes.md](docs/fuentes.md). No usar recursos sin licencia clara ni generadores de imágenes.

## Proyecto existente

El archivo `accions.js` se conserva como material existente del repositorio y no forma parte de la nueva composición Remotion.
