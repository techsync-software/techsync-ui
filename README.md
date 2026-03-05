# TechSync Software UI

Sitio web corporativo de **TechSync Software**: innovación y tecnología digital, desarrollo de software y diseño web.

## Descripción

Aplicación Angular que sirve como landing y página principal de TechSync. Incluye secciones de presentación (hero), problemas que resolvemos, servicios, proyectos destacados, por qué elegirnos, industrias, proceso de trabajo, resultados, CTA final, blog y footer con enlaces y contacto.

- **Idiomas:** Español e Inglés (sistema de traducción con pipe `t` y `TranslationService`).
- **Diseño:** Responsive, con secciones en bloques (row/col), animaciones (Animate.css) y estilos SCSS modulares.

## Tecnologías

- **Angular 18** (standalone components)
- **TypeScript 5.5**
- **Animate.css** para animaciones
- **SCSS** para estilos
- **Font Awesome** (iconos vía CDN o assets)

## Estructura del proyecto

```
src/app/
├── app.component.*          # Raíz de la app
├── app.config.ts
├── app.routes.ts
├── home/                    # Página principal
│   ├── home.component.*     # Contenedor de todas las secciones
│   └── components/
│       ├── menu/            # Navegación principal
│       ├── footer/          # Pie con logo, enlaces, redes, contacto
│       ├── blog/            # Listado de entradas del blog
│       ├── blog-post/       # Vista de una entrada
│       └── contact-modal/   # Modal de contacto
├── pipes/
│   └── translate.pipe.ts    # Pipe para textos traducidos ({{ 'key' | t }})
├── services/
│   ├── translation.service.ts  # Diccionarios ES/EN y idioma activo
│   └── blog.service.ts         # Datos del blog
```

## Requisitos

- **Node.js** 18+ (recomendado 20+)
- **npm** 9+

## Instalación

```bash
npm install
```

## Servidor de desarrollo

```bash
npm start
# o
ng serve
```

Abre [http://localhost:4200/](http://localhost:4200/). La app se recarga al cambiar el código.

## Build

```bash
npm run build
# o
ng build
```

Los artefactos se generan en `dist/`. Para producción:

```bash
ng build --configuration production
```

## Tests

```bash
ng test
```

Ejecuta los tests unitarios con Karma/Jasmine.

## Comandos útiles

| Comando | Descripción |
|--------|-------------|
| `ng generate component nombre` | Genera un componente |
| `ng generate service nombre`   | Genera un servicio |
| `ng help`                     | Ayuda del Angular CLI |

## Más información

- [Angular CLI](https://angular.io/cli)
- [Documentación de Angular](https://angular.io/docs)
