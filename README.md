<h1 align="center">Storybook Travel DS</h1>

<p align="center">
  Sistema de diseño de componentes UI para una app de viajes, documentado con Storybook 10.
</p>

<p align="center">
  <a href="https://storybook-travel-ds.vercel.app/"><img alt="Demo" src="https://img.shields.io/badge/demo-vercel-black?logo=vercel" /></a>
  <img alt="Storybook" src="https://img.shields.io/badge/Storybook-10-FF4785?logo=storybook&logoColor=white" />
  <img alt="React" src="https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=black" />
  <img alt="Tailwind" src="https://img.shields.io/badge/Tailwind-3-38BDF8?logo=tailwindcss&logoColor=white" />
  <img alt="Vite" src="https://img.shields.io/badge/Vite-7-646CFF?logo=vite&logoColor=white" />
  <img alt="bun" src="https://img.shields.io/badge/bun-1.x-000?logo=bun" />
  <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
</p>

<p align="center">
  <a href="https://storybook-travel-ds.vercel.app/"><b>Ver Storybook en vivo</b></a>
</p>

## Qué incluye

Componentes React con TypeScript y Tailwind, cada uno con su historia, controles interactivos, modo oscuro y vínculo a su diseño en Figma:

| Componente | Descripción |
| --- | --- |
| `Button`, `ButtonGroup` | Botones con variantes, tamaños e íconos |
| `Badge` | Etiquetas de estado |
| `TextInput`, `Select` | Campos de formulario |
| `Paginate` | Paginación accesible |
| `RentalCard` | Tarjeta de alojamiento con calificación y precio |
| `SideNav`, `MobileNavbar` | Navegación lateral y móvil |
| `Typography`, `Colors` | Tipografía y paleta de diseño |

El tema de marca y los tokens (colores, escala tipográfica, espaciados) están en `.storybook/YourTheme.ts` y `tailwind.config.js`.

## Empezar

Requiere [bun](https://bun.sh).

```bash
bun install
bun run dev        # Storybook en http://localhost:6006
```

## Scripts

| Comando | Qué hace |
| --- | --- |
| `bun run dev` | Storybook en modo desarrollo |
| `bun run build` | Genera `storybook-static/` listo para publicar |
| `bun run test` | Pruebas con Vitest y Testing Library |
| `bun run typecheck` | Verificación de tipos con TypeScript |

## Estructura

```
.storybook/   configuración de Storybook, tema y addons
src/          componentes, datos de ejemplo y estilos
stories/      historias de cada componente
test/         pruebas adicionales
```

## Despliegue

El proyecto se publica en Vercel (configuración en `vercel.json`). También incluye un `Dockerfile` que sirve el build con nginx:

```bash
docker build -t storybook-travel-ds .
docker run -p 8080:80 storybook-travel-ds
```

## Historia

Nació como el Storybook de la charla de Talent Land 2023 y se modernizó: Storybook 6.3 a 10, Tailwind 2 a 3, tsdx y Jest a Vite y Vitest, y yarn a bun.

## Autor

**Carlos J. Diaz Flores** ([@cardiadev](https://github.com/cardiadev))

- Sitio: [carlosdiaz.dev](https://carlosdiaz.dev/)
- LinkedIn: [cardiadev](https://linkedin.com/in/cardiadev)

## Licencia

[MIT](LICENSE)
