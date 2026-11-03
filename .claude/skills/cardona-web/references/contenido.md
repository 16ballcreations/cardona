# Recetas de contenido

Cada receta termina igual: revisar con `git diff` que solo cambió lo esperado, mirarlo en local si puedes (`node herramientas/servir.mjs 4330` → http://localhost:4330/; si el puerto está ocupado, usa otro número, por ejemplo 4391), mostrarle a Nicolás el resultado, esperar su «sí» y publicar subiendo a `main` (ver SKILL.md, «Publicar y deshacer»). **No hay construcción que frene un error**: una etiqueta mal cerrada se publica tal cual.

Regla general para editar HTML: cambia **solo el texto entre etiquetas** y los atributos `src`, `alt` y `href` que la receta nombra. No cambies `class`, `id`, `data-…`, el orden de los bloques ni el `<head>` (salvo `<title>`, la descripción y la imagen precargada de una página de proyecto nueva). Las comillas de las citas son las latinas: «…».

## Los proyectos: nombres y dónde están

La portada (`index.html`, sección `id="proyectos"`) tiene **cinco tarjetas en posiciones fijas** (clases `p1` a `p5`) y un **índice** (`p6`, «También en el portafolio»). La clase es la posición en la retícula escalonada, no el proyecto; el número de la etiqueta (`01`…`05`) sigue a la posición.

| Nombre en el sitio | Dónde está | Fotos (`assets/img/web/`) | Página propia |
|---|---|---|---|
| Showroom Torre Krystal | Tarjeta `p1` · 01 | `showroom.jpg` (la misma de la sección Showroom) | No |
| Residencia de doble altura | Tarjeta `p2` · 02 | `doble-altura-1.jpg` a `-6.jpg` (las del recorrido junto a la foto de Nicolás) | No |
| Casa Imperium | Tarjeta `p3` · 03 | `imperium-1.jpg` (y `imperium-2.jpg`, que todavía no se usa) | No |
| Tocarinda | Tarjeta `p4` · 04 | `tocarinda-1.jpg` a `-8.jpg` | `proyectos/tocarinda/` |
| Residencia en travertino | Tarjeta `p5` · 05 | `travertino-chimenea.jpg`, `travertino-sala.jpg` (fondo de «Agenda tu cita») y `hero-casa.jpg` (la portada) | No |
| Casa Zenith, Casa Horizonte, Casa La Mesa, Casa Kaleido | Índice `p6`, solo el nombre | No hay | No |
| Showroom Elite Times, Miami | Índice `p6`, con la marca «En obra» | No hay | No |

**Si el pedido puede referirse a más de uno, pregunta antes de tocar nada.** Los casos que se confunden:
- «el showroom» puede ser la sección Showroom (02), la tarjeta Showroom Torre Krystal (01) o el Showroom Elite Times de Miami;
- «la de doble altura» puede ser la Residencia de doble altura o la sala de Tocarinda, que también es de doble altura;
- «la casa de la portada» o «la de piedra» es la Residencia en travertino (su nombre oficial **todavía no está confirmado**: no lo inventes).

Los **servicios**, en el orden de la sección `id="servicios"`: 01 Diseño arquitectónico · 02 Interiorismo · 03 Mobiliario · 04 Interventorías · 05 Estudio de suelos · 06 Gestión de proyectos.

## Un proyecto nuevo

**Antes de empezar, pídele a Nicolás** (lo que no tenga, no se inventa: se omite):
- nombre oficial del proyecto;
- zona (barrio, municipio o región, **nunca la dirección exacta**), área real, año, tipo (vivienda unifamiliar, apartamento, comercial…), niveles, servicios que hizo Cardona y materiales;
- si las imágenes son **render o fotografía**, y de quién es la fotografía (crédito);
- que el propietario **autorizó** mostrar la casa;
- las fotos (una de portada, idealmente ocho en total; ver «Fotos») y los textos. Si no tiene textos, propónlos tú en el tono de la guía, **marcados como propuesta**, y espera su aprobación.

**El slug** (la dirección y el nombre de la carpeta): minúsculas, sin tildes ni eñes, con guiones: `casa-zenith`. Una vez publicado, no cambia.

### A. La página del proyecto

1. Copia la carpeta de la plantilla: `proyectos/tocarinda/` → `proyectos/<slug>/` (solo el `index.html`). Las rutas `../../` siguen sirviendo porque la carpeta queda a la misma profundidad.
2. En `proyectos/<slug>/index.html`, cambia en este orden (todo lo demás se queda igual, incluido el pie y el `noindex`):
   - `<title>`: `<Nombre> · Cardona Arquitectura e Interiorismo`.
   - `<meta name="description" content="…">`: una frase de unos 150 caracteres, como la de Tocarinda: `Tocarinda: un hogar contemporáneo de 202,39 m² en medio de la sabana de Bogotá, diseñado por Cardona Arquitectura e Interiorismo.`
   - `<link rel="preload" as="image" href="../../assets/img/web/<slug>-1.jpg">`: la foto de portada. **Quita** los atributos `imagesrcset` e `imagesizes` (apuntan a las WebP de Tocarinda; ver «Fotos»).
   - **Portada** (`obra-portada`): el `src`, el `alt` y el `width`/`height` reales de la foto (y quita `srcset` y `sizes`, ver «Fotos»); la ruta `Proyectos / <Nombre>` (`Proyectos / Tocarinda`); el `<h1>`; la bajada (`obra-bajada`, una frase); la **ficha corta** (cuatro filas: Ubicación, Área, Tipo, Año). Formato de una fila:
     ```html
     <div><dt class="etiqueta">Área</dt><dd>202,39 m²</dd></div>
     ```
     Si falta un dato, **quita la fila entera** (`<div>…</div>`); no pongas «por definir».
   - **El proyecto** (`obra-intro`): la frase (`obra-frase`) y la **ficha completa**, con las mismas filas que Tocarinda: Cliente («Residencial privado» si es una casa), Ubicación, Área construida, Niveles, Servicios (separados por « · »), Materiales e **Imágenes**: `Render del proyecto` o `Fotografía: Iván Ortiz Ponce` (o quien la haya hecho). La fila Imágenes **no se quita nunca**. Si Nicolás no ha dicho si son render o fotografía (y de quién), pregúntaselo: mientras tanto escribe `Por confirmar` y deja la página en borrador; **no se publica con «Por confirmar»**.
   - **Recorrido** (capítulos A, B, C y E, y el detalle D): en cada uno, la foto (`src` y `alt`), la etiqueta (`A · La fachada`), el titular (frase corta con punto final) y el párrafo. Si hay menos fotos, puedes **quitar un capítulo entero** (`<article class="capitulo …">…</article>`) o la sección del detalle, y reordenar las letras. Si hay más, puedes **repetir un `<article>` existente completo**, con sus mismas clases. No inventes clases.
   - **Galería**: un `<li>` por foto, con este formato exacto, y el conteo de la cabeza (`03 — Galería · 8 imágenes`) igual al número de `<li>`:
     ```html
     <li><button type="button"><img src="../../assets/img/web/tocarinda-1.jpg" alt="Fachada con volumen en voladizo y ventanal de doble altura" loading="lazy"></button></li>
     ```
     El `alt` de la galería es también el pie que se ve al ampliar la foto. La guía (manual, 8.6) pide que el pie empiece por «Render · » o «Fotografía · »: hazlo así en las páginas nuevas, aunque la galería de Tocarinda todavía no lo tenga (eso lo corrige 16 Ball).
   - **Cierre** (`obra-cierre`): una frase del proyecto.
   - **Siguiente proyecto** (`obra-siguiente`): la foto, el número y el nombre del proyecto de la **tarjeta siguiente** en la portada (después de la 05 viene la 01). Si ese proyecto tiene página, el `href` es `../<su-slug>/`; si no, se queda `../../#proyectos`.
   - **Si el proyecto todavía no tiene tarjeta** (solo índice o en borrador): el siguiente proyecto es la tarjeta 01.
   - **Cita** (`obra-cita`): en el enlace de WhatsApp cambia **solo el nombre del proyecto dentro del texto** que va después de `?text=` (codificado: espacio `%20`, coma `%2C`, punto `.`; las tildes, por ejemplo `á` = `%C3%A1`). El número no se toca. Ejemplo real:
     `https://wa.me/573012904059?text=Hola%2C%20Cardona.%20Vi%20el%20proyecto%20Tocarinda%20y%20me%20interesa%20agendar%20una%20cita.`

### B. La tarjeta en la portada

La retícula tiene **cinco lugares** y no se le agregan más (un sexto lugar es diseño: 16 Ball). Por eso un proyecto nuevo **entra en lugar de otro**: pregúntale a Nicolás cuál sale. El que sale pasa al índice como `<li>Nombre</li>`, y su foto queda en el repositorio. Y al revés: **si el proyecto que entra estaba en el índice** (por ejemplo, Casa Zenith), quita su `<li>` del índice, para que no aparezca dos veces.

- Cada lugar recorta la foto con su proporción: `p1` 3:2 horizontal, `p2` 3:4 vertical, `p3` y `p4` cuadradas, `p5` 4:5 vertical. Elige una foto que funcione así recortada.
- **Tarjeta con página** (formato de Tocarinda; toda la tarjeta es un enlace, por eso usa `<span>` y no `<div>`/`<p>`):
  ```html
  <a class="proyecto p4 proyecto-con-pagina revelar" href="proyectos/tocarinda/">
    <span class="proyecto-foto"><img src="assets/img/web/tocarinda-1.jpg" alt="Fachada de Tocarinda" loading="lazy"></span>
    <span class="luz"></span>
    <span class="etiqueta">04 · Sabana de Bogotá · 202,39 m²</span>
    <h3>Tocarinda</h3>
    <p>Un hogar contemporáneo en medio de la sabana de Bogotá: un volumen en voladizo y un ventanal de doble altura abierto al jardín.</p>
    <span class="etiqueta proyecto-ver">Ver proyecto →</span>
  </a>
  ```
- **Tarjeta sin página**:
  ```html
  <article class="proyecto p3 revelar">
    <div class="proyecto-foto"><img src="assets/img/web/imperium-1.jpg" alt="Zona social de Casa Imperium" loading="lazy"></div>
    <span class="luz"></span>
    <p class="etiqueta">03 · Arquitectura e interiorismo</p>
    <h3>Casa Imperium</h3>
    <p>La zona social como corazón de la casa: sala, comedor y cocina en un solo espacio de mármol oscuro.</p>
  </article>
  ```
- La etiqueta lleva el número de la posición y uno o dos datos reales (`04 · Sabana de Bogotá · 202,39 m²`). El párrafo, una o dos frases.
- **Los números viven en varios lugares.** Si un proyecto cambia de posición, actualiza: la etiqueta de la tarjeta, y el «Siguiente proyecto · 0N» de **todas** las páginas de proyecto que lo nombren (hoy, `proyectos/tocarinda/index.html` apunta a «03 · Casa Imperium»).

**Casos:**
- **A + B, proyecto nuevo con página:** la página nueva y su tarjeta con el formato de enlace.
- **Solo B, darle página a una tarjeta que ya existe:** la página nueva y cambiar su `<article>` por el formato de enlace, en la misma posición.
- **Solo el índice:** agrega `<li>Casa Nombre</li>` a la lista de `p6`; si está en construcción, `<li>Showroom Elite Times, Miami <span class="etiqueta">En obra</span></li>`. Con más de seis nombres la lista se alarga: pregúntale a Nicolás si alguno sale.

**Fuera del sitio:** el permiso del propietario y el crédito del fotógrafo son de Nicolás; recuérdaselos. Si publica el proyecto en Instagram, la guía (manual, 7.4) dice cómo se escribe.

**Qué revisar después:** la portada (la tarjeta, su recorte y el enlace), la página nueva entera (portada, capítulos, galería que se abre y pasa con las flechas, el botón de WhatsApp con el nombre correcto) y que `git diff --stat` muestre solo `index.html`, `proyectos/<slug>/index.html`, las fotos nuevas y, si cambiaron los números, las otras páginas de proyecto.

## Texto o ficha de un proyecto

- Tarjeta: en `index.html`, la etiqueta, el `<h3>` y el párrafo de la tarjeta (tabla de arriba para encontrarla).
- Página: en `proyectos/<slug>/index.html`, la bajada, las fichas, los capítulos y el cierre (ver «Un proyecto nuevo», A).
- **Un dato que está en dos o más lugares:** el área, la zona y el nombre de Tocarinda aparecen en la tarjeta, la ficha corta, la ficha completa, la frase del proyecto, el `<title>` y la descripción, y en la galería o el WhatsApp si nombran el proyecto. Búscalo con `git grep -n "202,39"` (o el valor viejo) y cámbialo en todos.
- Las cifras se escriben con coma decimal y espacio antes de la unidad: `202,39 m²`.
- **Cambiar el nombre** de un proyecto con página no cambia su slug (la dirección se queda). Si Nicolás quiere otra dirección, es de 16 Ball.

## Fotos

- Las fotos del sitio están en `assets/img/web/`, en JPG. Las de hoy tienen además dos copias en WebP (`<nombre>.webp` y `<nombre>-800.webp`) que el navegador prefiere porque pesan menos; las genera 16 Ball y las nombra el atributo `srcset` de la etiqueta.
- **Fotos nuevas:** solo el JPG, con una etiqueta `<img>` **sin** `srcset` ni `sizes`. Si copiaste una etiqueta que los trae, quítalos. Cuando 16 Ball revise el sitio, genera las WebP. Las reglas (render o fotografía, crédito, permisos, lo que nunca se publica) están en `references/marca.md` y en el manual, sección 08.
- **Nombre:** `<slug>-<n>.jpg`, en minúsculas, sin tildes ni espacios (`casa-zenith-1.jpg`). La 1 es la de portada.
- **Tamaño y peso** (lo que usan las fotos de hoy): fotos de página de proyecto, **1440 px** de ancho; tarjetas y recorrido, **1300 px**; fotos a todo lo ancho, hasta **2000 px**. JPG de calidad 75–80, **máximo 250 KB** cada una.
- **Este repositorio no tiene cómo reducir fotos.** Lo único prohibido es el script `herramientas/optimizar-imagenes.mjs` (sobrescribe todas las fotos del sitio) e instalar paquetes en el repositorio. Si tu herramienta sabe reducir una imagen por su cuenta, fuera del repositorio, puedes hacerlo con las medidas de arriba. Si no, pídele a Nicolás que la exporte así (desde Lightroom, o en https://squoosh.app, que trabaja en su navegador: «Resize» al ancho indicado y calidad 78) o pásala a 16 Ball. Mientras no tenga el tamaño y el peso, la página queda en borrador. Revisa el peso con `ls -l assets/img/web/<archivo>`.
- **Las reglas de fotografía del manual (sección 08)** son para cuando se hace una sesión de fotos. No rechaces una foto de Nicolás porque no cumple alguna (por ejemplo, un interior de día): publícala si tiene permiso, tamaño y su etiqueta de render o fotografía, y si notas algo que conviene mejorar, díselo como sugerencia.
- **Reemplazar una foto:** pon la nueva con **el mismo nombre**. Cambia en todos los lugares donde aparece: búscalos antes con `git grep -n "<archivo>"` y díselos a Nicolás. Por ejemplo, `showroom.jpg` está dos veces en la sección Showroom, en la tarjeta 01 y en el manual; `imperium-1.jpg`, en la tarjeta 03, en el «Siguiente proyecto» de Tocarinda y en el manual. Si la proporción cambia, actualiza el `width` y el `height` de la etiqueta donde los haya. **Si la etiqueta trae `srcset`, quítale `srcset` y `sizes`** en cada lugar donde aparece la foto (y `imagesrcset` e `imagesizes` del `preload`, si es la de portada), y borra sus dos WebP (`git rm assets/img/web/<nombre>.webp assets/img/web/<nombre>-800.webp`): si no, el navegador seguirá mostrando la foto vieja. Avísale a 16 Ball para que genere las nuevas.
- **No reemplaces sin 16 Ball:** `hero-casa.jpg` (la portada recorta la silueta de esa casa exacta para el efecto del nombre) ni las fotos del recorrido `doble-altura-*.jpg` si cambia el espacio que muestran (los nombres «Sala», «Doble altura», «Estar»… están en el JavaScript). Agregar o quitar fotos del recorrido también es de 16 Ball.
- **El `alt`** describe lo que se ve, en una frase sin punto final, sin «imagen de»: `Sala en doble altura con chimenea en mármol y sillas curvas blancas`. En la galería de una página de proyecto, empieza por «Render · » o «Fotografía · ».
- Borrar una foto del repositorio (el JPG y sus WebP): solo si `git grep` confirma que ya no se usa en ninguna página ni en el manual.

## Un testimonio

1. **Solo reseñas reales.** O es una reseña pública que está hoy en Google o en Homify, o es un texto con **permiso escrito** de quien lo da. Nunca redactes un testimonio ni «mejores» uno.
2. **Nunca destaques reseñas de familiares de Nicolás ni de personas del equipo.** Si quien escribe comparte apellido con Nicolás o con alguien del estudio, pregúntale antes de usarla.
3. **Las palabras son las suyas.** Puedes elegir un fragmento, pero sin cambiar palabras; si quitas algo del medio, marca el corte con «[…]». Las faltas de tipeo evidentes se pueden corregir.
4. **Formato.** El destacado (uno solo, grande) y la lista (en dos columnas: deja **dos o cuatro**, no tres):
   ```html
   <blockquote class="testimonio-principal revelar">
     <p>«Nos acompañaron en cada paso: desde el primer trazo hasta el último detalle.»</p>
     <footer class="etiqueta">Camila Camelo · Reseña en Google</footer>
   </blockquote>
   ```
   ```html
   <blockquote class="revelar">
     <p>«Excelente profesionalismo, buenos acabados, trabaja con lo último en tendencias y es muy cumplido.»</p>
     <footer class="etiqueta">Fernanda Nigrinis · Homify</footer>
   </blockquote>
   ```
   El pie lleva el nombre como aparece en la reseña y la fuente (`Google` o `Homify`). Si la reseña no es pública, solo con la forma de firmar que la persona autorizó.
5. Si llega una reseña nueva, revisa también «Calificaciones»: probablemente cambió el número de reseñas.

## Calificaciones

Solo con el número que se ve **ese día** en Google Maps o en Homify; nunca redondeado hacia arriba. Si no puedes abrir Google Maps, basta con lo que te diga Nicolás, pero pregúntale también el promedio (si sigue en 5,0) antes de publicar. Hoy: Google **5,0 · 10 reseñas**; Homify **5,0 · 8 opiniones**.

- **Google** (`index.html`, sección El estudio). El número se anima y se escribe **con punto** en `data-contar`; el `0,0` de adentro es el punto de partida de la animación y **no se toca**:
  ```html
  <span class="calificacion-cifra"><span data-contar="5" data-decimales="1">0,0</span><small>/5</small></span>
  …
  <span class="etiqueta">Calificación en Google · 10 reseñas</span>
  ```
  Para 4,9 sería `data-contar="4.9"`. Con coma no funciona (se vería «NaN»).
- **Homify** (sección Clientes): texto fijo, **con coma**:
  ```html
  <span class="calificacion-cifra">5,0<small>/5</small></span>
  …
  <span class="etiqueta">Calificación en Homify · 8 opiniones</span>
  ```
- Las cinco estrellas (★★★★★) son decorativas y no se cambian. Si la calificación baja de 4,5, avísale a Nicolás antes de publicar: quizá prefiera hablarlo con 16 Ball.

## La cita de Nicolás

- Está en `index.html`, junto a su retrato (`fundador-retrato`):
  ```html
  <p>«Creo que crecer no se trata solo de hacer buenos proyectos, sino de aprender constantemente, tomar mejores decisiones y rodearte de personas que también quieran ir más lejos.»</p>
  <footer class="etiqueta">Nicolás Cardona · Arquitecto, diseñador y empresario</footer>
  ```
- Tienen que ser **palabras de Nicolás**, aprobadas por él, entre «…». Largo parecido (unas 30 palabras): va sobre la foto y una cita mucho más larga la tapa.
- La misma cita sale como ejemplo en el manual de marca (`marca/`): ahí no la cambies; díselo a 16 Ball si quiere actualizarla.

## Servicios

- En `index.html`, sección `id="servicios"`: seis `<li>` con el número, el nombre (`<h3>`) y una línea en la voz pequeña:
  ```html
  <li class="revelar">
    <span class="etiqueta servicio-numero">03</span>
    <h3>Mobiliario</h3>
    <span class="luz"></span>
    <p class="etiqueta">Diseñado para armonizar con cada espacio</p>
  </li>
  ```
- Puedes pulir la **línea corta** (máximo unas seis palabras, sin punto final; se muestra en mayúsculas).
- **Cambiar el nombre, agregar o quitar un servicio es de 16 Ball:** son seis en dos filas de tres, compuestos como el logotipo, y la misma lista está en el manual de marca, en la frase de la portada (`Arquitectura · Interiorismo · Mobiliario · Gestión de proyectos`) y en la descripción de la página para Google.

## Showroom y bienvenida

- **Bienvenida** (sección El estudio): la frase `estudio-frase` se puede editar. La nota `Un enfoque integral para cada proyecto · Bogotá · Desde 2015` se deja como está: **el año 2015 no está confirmado**. No lo repitas en ningún otro lugar; si Nicolás confirma o corrige el año, cámbialo ahí y avísale a 16 Ball (también está en el manual).
- **Showroom** (sección `id="showroom"`): se puede editar la frase `showroom-frase`. La línea de prensa (`Publicado en Revista AXXIS, 2025 — «un espacio que borra los límites»`) solo cambia con una publicación real que Nicolás pueda mostrar. La dirección de la placa es un dato de contacto (abajo). El texto «Mueve el cursor para encender el espacio» es parte del efecto: no se toca.
- **La portada** (la casa con el nombre): el párrafo `portada-pie` se puede ajustar. El titular «Una visión distinta de la arquitectura.» es la frase de marca de la guía: no se cambia sin 16 Ball. La leyenda `Residencia en travertino · 3 plantas · 2026` lleva el nombre provisional de la casa: si Nicolás da el nombre oficial, cámbialo ahí y en la tarjeta 05.
- **Agenda tu cita:** el texto de la tarjeta (`cita-intro`) se puede ajustar. **No escribas «sin costo», «gratis» ni ninguna condición** de la primera cita que Nicolás no haya confirmado por escrito. Las opciones del formulario y el mensaje de WhatsApp son de 16 Ball.

## Datos de contacto

El teléfono y WhatsApp, el correo, la dirección del showroom, el enlace de Calendly, el de Google Maps y las redes viven en **varios lugares**: el pie de la portada, el pie de cada página de proyecto, la placa del showroom, el botón «Cómo llegar» y la calificación de Google, el botón de WhatsApp de cada página de proyecto, el JavaScript del formulario (`assets/js/sitio.js`) y el manual de marca. **Cambiarlos es trabajo de 16 Ball**: déjale el pedido redactado a Nicolás (plantilla abajo). Hoy son:
- WhatsApp: +57 301 290 4059 (en los enlaces, `573012904059`).
- Correo: info.cardonaarquitectura@gmail.com.
- Showroom: Ak. 7 #156-10, of. 2106 · Torre Krystal, Nortepoint · Usaquén, Bogotá.
- Calendly: https://calendly.com/cardonarquitectura.
- Redes: Instagram y Facebook `/cardonarquitectura/`, TikTok `@cardonarquitectura`.

## Valores por defecto

- **Borrador:** lo que no puede publicarse todavía (falta un «sí», un permiso, una foto con su tamaño o un dato) se guarda en una rama `borrador/<nombre>` con su commit, **sin subirlo a `main`**. Dile a Nicolás qué falta; cuando lo tengas, se completa y se pasa a `main`.

- **Posición de un proyecto nuevo:** ninguna; siempre se pregunta cuál sale.
- **Cliente** en la ficha: «Residencial privado» para casas; el nombre de la empresa solo si es un espacio comercial y la empresa aceptó.
- **Ubicación:** la zona o el municipio, nunca la dirección.
- **Imágenes:** no hay valor por defecto. Si Nicolás no sabe si son render o fotografía, no se publican hasta saberlo.
- **Año, área, niveles:** si no los da, se quita la fila.
- **Mensaje del commit:** en español, qué cambió: `Proyectos: Casa Zenith con su página, entra en lugar de Casa Imperium`.

## Datos que todavía no existen (no inventar)

- El año de fundación confirmado («Desde 2015» es una deducción).
- El nombre oficial de la Residencia en travertino.
- Fotos de Casa Zenith, Casa Horizonte, Casa La Mesa y Casa Kaleido.
- Zona, área y año de la mayoría de los proyectos (solo Tocarinda los tiene).
- Si el Showroom Elite Times de Miami ya está terminado (hoy: «En obra»).
- El dominio propio y el horario del showroom.
- Premios: no hay ninguno registrado. La única publicación es la de Revista AXXIS.

Si Nicolás pide algo que dependa de uno de estos datos, pregúntaselo; si no lo tiene, el texto se escribe sin ese dato.

## Cuando un pedido choca con las reglas

**Una frase o un dato que rompe una regla del negocio o de la guía** (una dirección exacta, una cifra o un premio sin confirmar, un render presentado como foto, «sin costo», un superlativo de los que la guía evita, una reseña de un familiar):
1. No publiques esa parte tal cual.
2. Explícale a Nicolás en una frase por qué, citando la guía si aplica («la guía pide cifras solo si son reales», manual 7.1).
3. Propón una alternativa en su voz, marcada como propuesta, y deja que él elija: tu propuesta, otra frase suya o quitarla.
4. El resto del pedido sigue su curso normal, con su propio «sí». **Sin «sí» no se publica nada**: si Nicolás no responde, deja el trabajo en una rama de borrador (ver «Valores por defecto») y avísale qué falta para publicarlo.

**Un cambio que no está en estas recetas** (diseño, colores, una sección nueva, un sexto lugar en Proyectos, el menú, el formulario, los datos de contacto, quitar el `noindex`):
1. No digas solo «no»: explícale qué implica y por qué conviene que lo haga 16 Ball.
2. Déjale redactado el pedido para que lo envíe a hola@16ballcreations.com:
   ```
   Asunto: Pedido para el sitio de Cardona: <qué quiere, en pocas palabras>

   Hola, equipo de 16 Ball:
   Quiero <el cambio, con sus palabras>, porque <para qué lo quiere>.
   Dónde: <página o sección>.
   ¿Me ayudan a evaluarlo?
   Nicolás
   ```
3. Haz el resto de los pedidos normalmente.
