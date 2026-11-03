# Instrucciones para agentes

Este repositorio es el sitio de **Cardona Arquitectura e Interiorismo** (hoy en https://16ballcreations.github.io/cardona/). Antes de hacer cualquier cambio:

1. Lee **`MARCA.md`**: la guía de identidad. Manda sobre todo lo demás. Su versión visual completa, con el tono y las reglas de fotografía, está en `marca/index.html` (secciones «07 — Tono de comunicación» y «08 — Fotografía y colorimetría»).
2. Lee y sigue **`.claude/skills/cardona-web/SKILL.md`** (y sus referencias en `.claude/skills/cardona-web/references/`).

Lo esencial, por si tu herramienta solo lee este archivo:

- **La guía manda.** Colores, tipografía y efectos solo con los tokens de `assets/css/marca.css`; los textos, con el tono de `MARCA.md` y del manual. La guía solo la cambia 16 Ball.
- **Todo lo que llega a `main` se publica solo** en uno o dos minutos, sin vista previa y sin un paso que detenga un error. Antes de subir, muéstrale el cambio a Nicolás Cardona y espera su «sí».
- Se cambia **contenido**: proyectos (fichas, textos y fotos), testimonios, calificaciones, la cita de Nicolás, los textos de los servicios y del showroom. No se cambia el diseño, las clases, el CSS, el JavaScript, la estructura, las direcciones (slugs) ni los datos de contacto.
- **Nunca** quites `<meta name="robots" content="noindex">` de ninguna página: el sitio es una propuesta y lo quita 16 Ball el día del lanzamiento.
- **Nunca** corras `git push --force`, `git rebase`, `git reset --hard` sobre lo ya subido, `git commit --amend` después de subir, `node herramientas/optimizar-imagenes.mjs` ni `npm install`.
- Nunca publiques la dirección exacta de la casa de un cliente, ni un render como si fuera fotografía, ni una cifra, un premio o un año que Nicolás no haya confirmado.
- Soporte y cualquier problema: 16 Ball Creations, hola@16ballcreations.com. Todo se puede deshacer.
