# Cardona Arquitectura e Interiorismo: identidad

Propuesta de 16 Ball Creations, 3 nov 2026. Base para la página y para todo lo
que salga después (presentaciones, redes, papelería).

## De dónde sale

Cardona no tiene un logo cerrado: lo que se repite en sus publicaciones es un
logotipo en palo seco, en mayúsculas muy espaciadas (`C A R D O N A`) sobre la
línea pequeña `ARQUITECTURA E INTERIORISMO`, y una obra que siempre se fotografía
igual: de noche o al atardecer, volúmenes de piedra clara enmarcados por losas
oscuras y una **línea de luz LED** que corre por debajo de cada losa.

La identidad toma esas dos cosas y no inventa nada más:

1. **El logotipo de siempre, afinado.** Mismas mayúsculas espaciadas, ahora en
   una sola familia y con el espaciado medido, para que no cambie entre piezas.
2. **La línea de luz.** Una raya horizontal de 1 px, cálida, con un brillo
   suave, es el único recurso gráfico de la marca. Separa el logotipo del
   descriptor, marca el inicio de cada sección, subraya el enlace activo y se
   "enciende" al entrar en pantalla, como el LED de la fachada al anochecer.

## Sello

Tres losas apiladas (las tres plantas de la casa de referencia), cada una con
su línea de luz debajo. Sirve como favicon, avatar y marca de agua. Archivo:
`assets/img/marca/sello.svg`.

## Color

| Token | Hex | Nombre | Uso |
|---|---|---|---|
| `--noche` | `#090900` | Noche | Fondo principal. La obra se ve de noche. |
| `--grafito` | `#373638` | Grafito | Losas, marcos, superficies sobre la noche, bordes. |
| `--nogal` | `#544639` | Nogal | Madera de puertas y muebles; fondos de bloque cálido, texto sobre piedra. |
| `--travertino` | `#D7B399` | Travertino / luz | La línea de luz, cifras, acentos. Nunca en bloques grandes. |
| `--piedra` | `#E3E2DD` | Piedra | Texto sobre la noche; fondo de las secciones "de revista". |
| `--cielo` | `#A1B6D3` | Cielo | El azul del atardecer. Acento frío, escaso: estados de foco y un detalle por página como mucho. |

Proporción aproximada en pantalla: noche 60 %, piedra 20 %, grafito y nogal
15 %, travertino 4 %, cielo 1 %.

Contraste (texto): piedra sobre noche 15,4:1; travertino sobre noche 10,3:1;
nogal sobre piedra 7,0:1; grafito sobre piedra 9,3:1. Cielo sobre noche 9,7:1,
pero se reserva para foco y detalles.

## Tipografía

Una sola familia, **Inter Tight**, en dos voces que contrastan por tamaño y peso,
no por adornos:

- **Voz grande:** titulares de 64 a 160 px, peso 300, interletrado -0,02 em,
  interlínea 0,95. Frases cortas, en minúscula de oración.
- **Voz pequeña:** 11 a 13 px, peso 200, MAYÚSCULAS, interletrado 0,28 em.
  Etiquetas, pies de foto, datos de obra (`USAQUÉN · 2025 · 640 M²`), menú.
- **Texto:** 16 a 18 px, peso 300, interlínea 1,6, ancho máximo 62 caracteres.
- **Logotipo:** `CARDONA` en peso 300 con interletrado 0,62 em; descriptor en
  peso 200, 0,24 em.

Sin cursivas, sin negritas por encima de 400, sin subrayados decorativos.

## Composición "de revista"

- Imágenes a sangre o en columnas asimétricas (7/5, 8/4) sobre una retícula de 12.
- Mucho aire: el titular grande se apoya contra un texto pequeño alineado en
  la columna opuesta.
- Numeración de proyectos `01 — 06` en la voz pequeña.
- Pies de foto siempre presentes, en la voz pequeña.

## Neón brutalista, con medida

Brutalista por la retícula a la vista, los bloques planos y la ausencia de
sombras, radios y degradados. Neón solo en la línea de luz: un `box-shadow`
cálido de 12 px sobre una raya de 1 px. Nada de colores saturados ni de texto
brillante. Si una pieza tiene más de dos líneas de luz visibles a la vez,
sobra una.

## Tono

Pocas palabras, seguras, en español de Colombia, de tú (como en sus publicaciones: «Te invitamos…», «Agenda tu cita»). Hablan del
resultado (cómo se vive la casa, cómo se ve de noche), no del proceso.
Ejemplos: «Casas que se encienden al caer la tarde.» «Diseñamos, construimos
y amoblamos. Una sola firma de principio a fin.»

## Archivos

- `assets/css/marca.css`: los tokens de color, tipografía y la línea de luz.
- `assets/img/marca/logotipo.svg` y `logotipo-claro.svg`: logotipo con descriptor.
- `assets/img/marca/sello.svg`: sello de tres losas.
- `assets/img/marca/wordmark-referencia.png`: el logotipo tal como lo usan hoy.
- `assets/img/marca/casa-tres-pisos.png`: la obra de referencia para color y luz.
