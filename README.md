# Cardona Arquitectura e Interiorismo — propuesta de web

**Estado: versión de ajustes publicada (3 nov 2026), antes de la videollamada con el cliente.**

Maqueta navegable de la web propuesta para **Cardona Arquitectura e Interiorismo S.A.S.**
(Bogotá, Usaquén), estudio de residencias de lujo que diseña, construye y amobla. Hecha por
**16 Ball Creations**: hoy su dominio `cardonaarquitectura.com` no existe y Google Maps y su
Linktree llevan a una página caída.

Se publica en `https://16ballcreations.github.io/cardona/`.

## Concepto: «Una visión distinta de la arquitectura»

Su obra se fotografía siempre igual: de noche, piedra clara entre losas oscuras y una línea de
LED bajo cada losa. La página toma esa **línea de luz** como único recurso gráfico (neón
brutalista con medida) y la casa de tres plantas como portada: el nombre CARDONA queda detrás de
su silueta y se abre al bajar. La identidad completa está en [MARCA.md](MARCA.md).

Estructura tomada de la plantilla Aerra (GetLayers), con el acabado cambiado: bloques rectos en
lugar de píldoras, vidrio y esquinas redondeadas.

| # | Sección | Qué hace |
|---|---|---|
| 0 | Carga | La línea de luz va de 000 a 100 y la casa se ilumina |
| 1 | Portada | Casa con el nombre detrás de su silueta; las letras se separan con el scroll |
| 2 | Estudio y servicios | Fondo piedra, formato revista; su texto de bienvenida, la calificación de Google (5,0) y sus seis servicios en 2 filas de 3, compuestos como el logotipo (diseño arquitectónico, interiorismo, mobiliario, interventorías, estudio de suelos, gestión de proyectos) |
| 3 | Fundador | Nicolás en el showroom (portada del reel C6OweAXOlGx) con la cita fijada en su Instagram; recorrido de la residencia con botones laterales |
| 5 | Showroom | Torre Krystal: el espacio se enciende donde pasa el cursor; mención de Revista AXXIS |
| 6 | Proyectos | Cinco en retícula escalonada más un índice |
| 7 | Clientes | Reseñas de Google y Homify, con la calificación de Homify (5,0) |
| 8 | Cita inicial | El formulario arma el mensaje de WhatsApp; botón a Calendly |
| 9 | Pie | Datos, redes y el nombre a todo lo ancho |

## Archivos

| Ruta | Qué es |
|---|---|
| `index.html` | La página |
| `assets/css/marca.css` | Tokens de color, tipografía (Inter Tight) y la línea de luz |
| `assets/css/sitio.css` | Estilos de la página |
| `assets/js/sitio.js` | Carga, portada, revelados, recorrido, cifras, linterna del showroom y formulario |
| `assets/img/marca/` | Logotipo (oscuro y claro) y sello de tres losas |
| `assets/img/web/` | Fotos optimizadas que usa la página |
| `herramientas/servir.mjs` | Servidor local: `node herramientas/servir.mjs 4330` |
| `herramientas/optimizar-imagenes.mjs` | Pasa las fotos originales a `assets/img/web/`, en JPG y dos WebP para el `srcset` (necesita `sharp`) |

La investigación (`investigacion/`) y las fotos originales de Instagram no se suben: nombran a
personas del cliente y son material de trabajo.

## Por confirmar con el cliente

- Año de fundación («Desde 2015», deducido de LinkedIn).
- La cita de Nicolás viene de su publicación fijada «¿Quién es Nicolás Cardona?»; confirmar que la quiere en la web.
- Nombre de la «Residencia en travertino» de la portada (no tiene nombre publicado).
- Fotos originales en alta: casi todo son renders de Instagram; la portada tiene 940 px. Fotógrafo: Iván Ortiz Ponce.
- La foto del showroom es la de Revista AXXIS; se repite en el proyecto 01.
- Imágenes de Casa Zenith y Casa Horizonte (hoy solo en el índice).

## Tono

Los textos de entrada vienen de su propia presentación («Bienvenidos a Cardona Arquitectura e
Interiorismo…», «Te invitamos a conocer nuestro showroom…», «Agenda tu cita y hablemos de tu
próximo proyecto»): de tú, sobrios. El retrato de Nicolás es la portada de su reel C-_pLbTpRQ9.

## El bundle

| Pieza | Dirección |
|---|---|
| Web propuesta | `https://16ballcreations.github.io/cardona/` |
| Página de proyecto (plantilla) | `https://16ballcreations.github.io/cardona/proyectos/tocarinda/` |
| Manual de marca | `https://16ballcreations.github.io/cardona/marca/` (se imprime a PDF, una sección por hoja A4) |

La página de proyecto usa `assets/css/proyecto.css` y `assets/js/proyecto.js`; el manual vive en
`marca/` con su propio `manual.css` y `manual.js`, y toma los tokens de `assets/css/marca.css`.
