Resumen y explicación de etiquetas, atributos y CSS usados

Este archivo explica de manera breve las decisiones usadas en `index.html` y `archivos.css`.

Etiquetas HTML principales:
- `<!doctype html>`: declara document type HTML5.
- `<html lang="es">`: establece el idioma del documento para accesibilidad y buscadores.
- `<head>`: metadatos (charset, viewport, título, enlaces a CSS).
- `<meta charset="utf-8">`: codificación UTF-8 para caracteres especiales.
- `<meta name="viewport">`: hace la página responsiva en móviles.
- `<header>`: cabecera con nombre y contacto.
- `<main>`: contenido principal del CV.
- `<aside>`: información secundaria (educación, certificaciones, redes).
- `<section>` / `<article>`: bloques semánticos para experiencia y otras secciones.
- `<figure>` / `<img>`: (no usado como `figure` aquí, pero `img` incluye `alt` obligatorio).
- `<footer>`: pie de página.

Atributos importantes:
- `href` en `<link>` y `<a>`: ruta a estilos o enlaces.
- `src` en `<img>`: ruta de la imagen.
- `alt` en `<img>`: texto alternativo para accesibilidad; siempre debe existir.
- `class` / `id`: identificadores para aplicar estilos CSS.
- `lang` en `<html>`: idioma del documento.

Explicación CSS (archivo `archivos.css`):
- Variables CSS: facilitan el cambio rápido de colores (`--accent`, `--bg`).
- Selectores de clase: `.container`, `.card`, `.profile-photo` para aislar estilos.
- Layout: `.grid` usa CSS Grid; cambia a 2 columnas con `@media(min-width:820px)` para pantallas grandes.
- Foto de perfil: `.profile-photo img` usa `object-fit:cover` y `border-radius:50%` para recortar y mostrar circular.
- Botones de contacto: `.contact-badge` son enlaces con apariencia de chip/badge.

Cómo personalizar:
- Cambia el `src` de la imagen por la foto real.
- Reemplaza textos de ejemplo por tu información.
- Ajusta `--accent` en la parte superior de `archivos.css` para cambiar color principal.

Siguientes pasos sugeridos:
- Añadir sección de proyectos con enlaces a repositorios.
- Agregar microdatos o JSON-LD para enriquecer la información para buscadores.
- Crear una versión imprimible para PDF usando `@media print`.
