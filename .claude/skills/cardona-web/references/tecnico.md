# Lo técnico: qué no se toca y cómo deshacer

## Cómo está hecho (en una línea por pieza)

- **HTML, CSS y JavaScript a mano**, sin generador, sin paquetes y sin paso de construcción: los archivos del repositorio son exactamente lo que se publica.
- **`index.html`** es la portada; **`proyectos/<slug>/index.html`**, cada página de proyecto (hoy solo `tocarinda`, que es la plantilla); **`marca/`**, el manual de marca.
- **`assets/css/`**: `marca.css` (los tokens de la guía), `sitio.css` (la portada y lo común) y `proyecto.css` (las páginas de proyecto).
- **`assets/js/`**: `sitio.js` (la carga, la portada, el recorrido de fotos con los nombres de cada espacio, la cifra animada de Google, la linterna del showroom y el formulario que arma el mensaje de WhatsApp) y `proyecto.js` (el menú y el visor de la galería).
- **`assets/img/web/`**: las fotos que usa el sitio. `assets/img/marca/`: logotipos y sello.
- **GitHub Pages** publica la rama `main` en https://16ballcreations.github.io/cardona/. No hay formularios que guarden datos: el de la cita solo abre WhatsApp con el mensaje armado.

## Comandos

| Comando | Para qué | ¿Se puede usar? |
|---|---|---|
| `git pull`, `git status`, `git diff`, `git log`, `git grep` | Traer lo último, ver qué cambió, buscar un dato | Sí |
| `node herramientas/servir.mjs 4330` | Ver el sitio en local: http://localhost:4330/ (y `/proyectos/<slug>/`). Si el puerto está ocupado, cambia el número | Sí (necesita Node; no cambia nada) |
| `git add`, `git commit`, `git push` | Publicar | Sí, con el «sí» de Nicolás |
| `git revert <commit>` | Deshacer algo ya publicado | Sí |
| `node herramientas/optimizar-imagenes.mjs` | Regenerar las fotos desde los originales | **NUNCA**: sobrescribe las 21 fotos del sitio y sus WebP, los originales no están en el repositorio y necesita un paquete que no está instalado |
| `npm install` (de cualquier cosa) | — | **NUNCA**: el repositorio no usa paquetes; crearía archivos que no deben subirse |
| `git push --force`, `git rebase`, `git reset --hard` sobre lo ya subido, `git commit --amend` después de subir, `git filter-branch` | Reescribir la historia | **NUNCA**: borran el registro que permite deshacer |

## No se toca

- `assets/css/` entero: `marca.css` es la guía (solo la cambia 16 Ball); `sitio.css` y `proyecto.css`, el diseño.
- `assets/js/` entero, incluidos los nombres de los espacios del recorrido y el número de WhatsApp del formulario.
- `MARCA.md`, `marca/` y `assets/img/marca/`: la guía y sus archivos.
- Las clases (`class="…"`), los `id`, los atributos `data-…`, el orden de las secciones, el menú y el pie (salvo en una página de proyecto nueva, donde el pie se copia igual).
- El `<head>` de las páginas: en especial **`<meta name="robots" content="noindex">`**, que se queda en todas mientras el sitio sea una propuesta. Solo se ajustan `<title>`, la descripción y la imagen precargada de una página de proyecto nueva.
- Los **slugs** (`proyectos/tocarinda/`): son direcciones; cambiar una rompe los enlaces que ya circulan.
- `herramientas/`, `README.md`, `.gitignore` y `AGENTS.md`.
- Las carpetas que no están en el repositorio (`investigacion/`, `assets/img/instagram/`, `assets/img/extra/`): son material de trabajo de 16 Ball, nombran a personas y no se suben ni se citan. Si aparecen en tu copia, no las agregues con `git add`.

## Cómo se publica

GitHub Pages está conectado al repositorio: **cada cambio que llega a `main` se publica solo, en uno o dos minutos**. No hay vista previa ni construcción: **lo que subes, se ve, aunque tenga un error**. Por eso se revisa antes, no después.
- Si después de dos o tres minutos el cambio no aparece, recarga sin caché (Ctrl+Shift+R). Si sigue igual, revisa en GitHub, pestaña «Actions», que la publicación terminó; si falló, avisa a 16 Ball.
- **No envíes el formulario de la cita** para probarlo: abre un WhatsApp real al número de Cardona.
- El sitio se mudará a su dominio y a otro alojamiento. Hasta que 16 Ball actualice estas instrucciones, todo sigue igual: se publica subiendo a `main`.

## Antes de subir a `main`

0. Antes de empezar a editar: `git pull`, para trabajar sobre la última versión.
1. Seguiste la receta completa (`references/contenido.md`), incluidos los datos que viven en más de un lugar.
2. `git diff --stat` muestra solo los archivos que esperabas; `git diff` muestra solo cambios de texto, rutas de fotos y `alt` (ninguna clase, ningún `noindex`, ningún archivo de `assets/css/` o `assets/js/`).
3. Si puedes correr comandos: abriste la página en local (`node herramientas/servir.mjs 4330`) y se ve bien, con las fotos cargando. Si no puedes: revisaste dos veces cada etiqueta que tocaste (que abra y cierre, las comillas de los atributos, `../../` en las páginas de proyecto, el nombre exacto de cada foto, con mayúsculas y extensión).
4. Le mostraste a Nicolás el cambio y dijo que sí. Si no ha respondido, el cambio se queda en una rama `borrador/<nombre>` y no se sube.
5. `git add` de los archivos del cambio (o `git add -A` si `git status` no muestra nada ajeno), `git commit -m "<qué cambió, en español>"`, `git push`. Un solo commit por pedido (o uno para varios pedidos del mismo mensaje), con un mensaje que Nicolás entienda. Si tu herramienta agrega sola una línea de coautoría, déjala. En uno o dos minutos, abre la página publicada y confírmale a Nicolás la dirección.

## Deshacer

- **Un cambio que todavía no se subió:** `git restore <archivo>` (o `git restore .` para todo), con confirmación de Nicolás. Un archivo nuevo sin subir se quita borrándolo.
- **Un cambio ya publicado:** `git revert <commit>` en `main` y `git push`. GitHub Pages publica la versión corregida sola, en uno o dos minutos.
- **Una emergencia** (el sitio no carga o algo se ve muy mal): haz el `git revert` del último commit y avisa de inmediato a 16 Ball (hola@16ballcreations.com). Tranquilidad: el historial guarda todas las versiones y nada de lo que se suba es irreparable.

## Cuándo llamar a 16 Ball

Escribe a **hola@16ballcreations.com** (hay una plantilla del correo en `contenido.md`, «Cuando un pedido choca con las reglas») si:
- hay que cambiar diseño, colores, tipografía, una sección, el menú o la cantidad de lugares de Proyectos o de servicios;
- hay que cambiar el teléfono, el WhatsApp, el correo, la dirección, Calendly, Google Maps o las redes;
- hay que cambiar la foto de la portada, las fotos o los nombres del recorrido, o una foto llega sin las medidas y Nicolás no puede exportarla;
- hay que cambiar un slug, el formulario, el `noindex`, el dominio o la guía de marca;
- el sitio no carga, una página se ve rota o la publicación en GitHub falla y no es por tu cambio.
