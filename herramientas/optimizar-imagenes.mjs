/* Pasa las imágenes de la propuesta a JPG para la web (ancho máximo y calidad
   según el uso) y las deja en assets/img/web/. Cuando el cliente mande las
   fotos originales, se ponen en la lista y se vuelve a correr:
   node herramientas/optimizar-imagenes.mjs (con sharp instalado) */
import sharp from "sharp";
import { mkdir } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const img = join(dirname(fileURLToPath(import.meta.url)), "..", "assets", "img");
const out = join(img, "web");

/* [origen, destino, ancho máximo] */
const LISTA = [
  ["instagram/DfKyUHqlSLY-01.jpg", "hero-casa.jpg", 1600],
  ["extra/reel-C6OweAXOlGx.jpg", "nicolas-cardona.jpg", 1100],
  ["extra/showroom.webp", "showroom.jpg", 2000],
  ["instagram/DcTsw_llXgT-06.jpg", "doble-altura-1.jpg", 1300],
  ["instagram/DcTsw_llXgT-01.jpg", "doble-altura-2.jpg", 1300],
  ["instagram/DcTsw_llXgT-04.jpg", "doble-altura-3.jpg", 1300],
  ["instagram/DcTsw_llXgT-02.jpg", "doble-altura-4.jpg", 1300],
  ["instagram/DcTsw_llXgT-05.jpg", "doble-altura-5.jpg", 1300],
  ["instagram/DcTsw_llXgT-07.jpg", "doble-altura-6.jpg", 1300],
  ["instagram/DdkcqhpFXCZ-01.jpg", "imperium-1.jpg", 1300],
  ["instagram/DdkcqhpFXCZ-02.jpg", "imperium-2.jpg", 1300],
  ["instagram/DLU6AjItjnf-01.jpg", "tocarinda-1.jpg", 1440],
  ["instagram/DLU6AjItjnf-02.jpg", "tocarinda-2.jpg", 1440],
  ["instagram/DLU6AjItjnf-03.jpg", "tocarinda-3.jpg", 1440],
  ["instagram/DLU6AjItjnf-04.jpg", "tocarinda-4.jpg", 1440],
  ["instagram/DLU6AjItjnf-05.jpg", "tocarinda-5.jpg", 1440],
  ["instagram/DLU6AjItjnf-06.jpg", "tocarinda-6.jpg", 1440],
  ["instagram/DLU6AjItjnf-07.jpg", "tocarinda-7.jpg", 1440],
  ["instagram/DLU6AjItjnf-08.jpg", "tocarinda-8.jpg", 1440],
  ["instagram/DfKyUHqlSLY-07.jpg", "travertino-chimenea.jpg", 1300],
  ["instagram/DfKyUHqlSLY-02.jpg", "travertino-sala.jpg", 1300]
];

await mkdir(out, { recursive: true });
for(const [origen, destino, ancho] of LISTA){
  const info = await sharp(join(img, origen))
    .resize({ width: ancho, withoutEnlargement: true })
    .jpeg({ quality: 78, mozjpeg: true, progressive: true })
    .toFile(join(out, destino));
  console.log(`${destino}: ${info.width}x${info.height}, ${Math.round(info.size / 1024)} KB`);
}
