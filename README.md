# Mario de Molina | Webfolio MVP

Primera versión del portfolio personal de Mario de Molina. Está planteado como una web de una sola página, rápida de cargar y lista para enseñar una selección de proyectos, perfil profesional y enlaces de contacto.

## Qué es

Un MVP construido con Astro y Tailwind CSS para presentar:

- Hero con perfil profesional
- Proyectos destacados
- Sección Sobre mí
- Contacto con GitHub y LinkedIn

## Stack

- Astro
- Tailwind CSS
- pnpm

## Cómo arrancarlo

Si `pnpm` no está disponible en tu equipo, activa Corepack una vez:

```bash
corepack enable
```

Instala dependencias y arranca el entorno local:

```bash
pnpm install
pnpm dev
```

Si prefieres no activar `pnpm` globalmente, también puedes usar:

```bash
corepack pnpm install
corepack pnpm dev
```

El proyecto quedará disponible en `http://localhost:4321`.

## Cómo hacer build

```bash
pnpm build
```

Para revisar el resultado en local:

```bash
pnpm preview
```

## Cómo desplegar luego en GitHub Pages

1. Ejecuta `pnpm build`.
2. Publica el contenido de `dist/` en GitHub Pages.
3. Si este repositorio se usa como `dmlean.github.io`, la URL final será `https://dmlean.github.io/`.
4. Si más adelante automatizas el despliegue, sube `dist/` con GitHub Actions o usa la opción de Pages que publique el artefacto generado.

## Estructura mínima

```text
.
|-- astro.config.mjs
|-- package.json
|-- src
|   |-- layouts
|   |   `-- BaseLayout.astro
|   |-- pages
|   |   `-- index.astro
|   `-- styles
|       `-- global.css
`-- README.md
```
