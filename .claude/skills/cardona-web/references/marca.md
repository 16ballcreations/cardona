# La marca Cardona: cómo aplicar la guía al editar

## La guía y su lugar

Lee **`MARCA.md`** antes de cualquier cambio. Manda sobre estas instrucciones y sobre lo que ya está en el sitio. La guía tiene tres partes en el repositorio:
- **`MARCA.md`**: la identidad explicada (de dónde sale, color, tipografía, composición, la línea de luz y el tono en corto).
- **`assets/css/marca.css`**: la misma guía en tokens (`--noche`, `--piedra`, `--travertino`, `--grafito`, `--nogal`, `--cielo`, la tipografía y la línea de luz).
- **`marca/index.html`**: el manual visual. Para editar importan sobre todo la **sección 07, Tono de comunicación** (principios, vocabulario usa/evita, firma, ejemplos de texto) y la **sección 08, Fotografía y colorimetría** (reglas de toma, receta de color y 8.6, render o fotografía).
- Los logotipos y el sello, en `assets/img/marca/`.

Orden de precedencia: **la guía → estas instrucciones → lo que ya está en el sitio.** Si el sitio contradice la guía, la guía tiene razón, pero no corrijas lo publicado por tu cuenta: señálalo y pásalo a 16 Ball. Si `MARCA.md` y el manual no coinciden, no elijas: señálalo. **La guía solo la cambia 16 Ball**: no edites `MARCA.md`, `marca.css` ni nada de `marca/`.

## Cómo se aplica al editar

- **Textos nuevos:** siguen el tono de `MARCA.md` y del manual (sección 07). Ante la duda, imita sus ejemplos y los textos que ya están en el sitio. En corto: pocas palabras, seguras, de tú, en español de Colombia; una idea por frase; hablan del resultado (cómo se vive la casa, cómo se ve de noche), no del proceso; luz, materia y espacio antes que adjetivos. Revisa la tabla «Usa / evita» (manual, 7.2) antes de entregar un texto.
- **Cifras:** coma decimal y espacio antes de la unidad (`202,39 m²`). Solo cifras reales. Sin emojis.
- **Titulares:** frases cortas en minúscula de oración, con punto final, como «Carácter y proporción.» o «Bañados por luz natural.».
- **Etiquetas** (la voz pequeña, que se ve en MAYÚSCULAS): se escriben en minúscula normal en el HTML; el estilo las pone en mayúsculas. Datos separados por « · ».
- **Colores y tipografía:** solo existen los de los tokens. Un pedido de otro color, otra letra, negritas, cursivas, sombras o más brillo es un cambio de diseño: se explica con la cita de la guía («un color que no está en los tokens no existe en la marca»; «si una pieza tiene más de dos líneas de luz visibles a la vez, sobra una») y se pasa a 16 Ball. No escribas estilos (`style="…"`) en el HTML.
- **Imágenes:** siguen la sección 08 del manual (abajo, lo operativo).

## Reglas del negocio (no se negocian)

1. **Permiso del propietario.** Una casa de un cliente se muestra solo si el propietario lo autorizó. Pregúntale a Nicolás si lo tiene antes de publicar un proyecto nuevo.
2. **Nunca la dirección exacta** de la casa de un cliente, ni el nombre del conjunto si la delata, ni el nombre del propietario. Se dice la zona: «Sabana de Bogotá», «Usaquén», «Cundinamarca». La ficha dice «Residencial privado». La dirección del showroom sí se publica: es la del negocio.
3. **Render o fotografía, siempre dicho.** Cada proyecto dice en su ficha «Imágenes: Render del proyecto» o «Fotografía: <nombre>». Un render nunca se presenta como obra construida. No se mezclan renders y fotos sin rotular cada una (manual, 8.6).
4. **Créditos.** El fotógrafo que trabaja con el estudio es **Iván Ortiz Ponce**; se le acredita cuando las fotos son suyas. Aliados que participaron (proveedores, materiales) solo si Nicolás lo pide, y con su nombre exacto. El mobiliario propio se llama **Cardona Furniture**.
5. **Nada inventado.** Ni cifras («más de 100 proyectos»), ni premios, ni publicaciones, ni años, ni áreas. «Desde 2015» está en el sitio pero **no está confirmado**: se deja donde está y no se repite. La única publicación de prensa es la de Revista AXXIS (2025).
6. **Nada de promesas comerciales** que Nicolás no haya confirmado: «sin costo», «gratis», «en X semanas», «garantizado», precios, descuentos o promociones (la guía dice que la marca no es «de promociones y descuentos»).
7. **Testimonios reales y con permiso**, con las palabras de quien los dio, y nunca de familiares ni del equipo (ver `contenido.md`, «Un testimonio»).
8. **El `noindex` se queda.** Todas las páginas tienen `<meta name="robots" content="noindex">` a propósito mientras el sitio es una propuesta. Lo quita 16 Ball el día del lanzamiento.

## Fotos

- **Sí:** obras del estudio con permiso; fachadas al atardecer o en hora azul con los LED encendidos; interiores con luz cálida y en orden; al menos un detalle (una unión, una textura) por proyecto; Nicolás en el showroom o en obra.
- **Nunca:** fotos de bancos de imágenes; personas que no sean Nicolás (la guía dice «solo Nicolás Cardona, o nadie»: sin modelos, sin clientes); fotos donde se lea una placa, un número de casa o una fachada vecina que delate la ubicación; capturas con la interfaz de Instagram o con marcas de agua de otros.
- **Formato:** JPG en `assets/img/web/`, con las medidas y el peso de `contenido.md` («Fotos»). El color lo resuelve la receta del manual (8.3) en la edición de la foto, no el sitio: no se le ponen filtros en el código.

## Datos que tienen que coincidir en todas partes

WhatsApp (+57 301 290 4059), correo (info.cardonaarquitectura@gmail.com), dirección del showroom, Calendly, Google Maps y redes. Cada uno vive en varios lugares del sitio y del manual, así que **cambiarlos es trabajo de 16 Ball** (lista completa en `contenido.md`, «Datos de contacto»). En Google Maps aparece además otro teléfono fijo: no lo agregues al sitio sin que Nicolás confirme cuál es el principal.
