# CaravanOz — Sitio web

Landing page + hub de contenido para **CaravanOz**, la comunidad de hispanohablantes que viven y viajan en caravana por Australia. Sitio estático (HTML, CSS y JavaScript puro), sin frameworks ni paso de build: listo para publicar.

## Estructura del proyecto

```
caravanoz-site/
├── index.html              Página principal (todas las secciones)
├── css/
│   └── styles.css          Sistema de diseño y estilos
├── js/
│   └── main.js             Interacciones (navbar, menú, carrusel, formulario)
├── assets/
│   ├── logo.svg            Logo CaravanOz (vectorial)
│   ├── favicon.svg         Favicon vectorial
│   ├── favicon-180.png     Apple touch icon
│   ├── favicon-512.png     Icono PWA / redes
│   ├── og-image.png        Imagen para compartir en redes (1200×630)
│   ├── broll.mp4           Video de marca (reveal del logo)
│   └── poster.jpg          Imagen de respaldo del video
├── manifest.webmanifest    Configuración PWA
├── robots.txt              Indexación
├── sitemap.xml             Mapa del sitio
├── netlify.toml            Config para Netlify
├── vercel.json             Config para Vercel
└── README.md               Este archivo
```

## Ver el sitio en tu compu (local)

Solo abrí `index.html` con doble clic. Para que el video y las fuentes carguen igual que en producción, conviene levantar un servidor local:

```bash
# Con Python (ya viene en Mac/Linux)
cd caravanoz-site
python3 -m http.server 8000
# Abrí http://localhost:8000

# o con Node
npx serve .
```

## Publicar el sitio

El sitio es 100% estático, así que se puede publicar gratis en cualquiera de estas opciones.

### Opción 1 — Netlify Drop (la más fácil, sin cuenta técnica)
1. Entrá a https://app.netlify.com/drop
2. Arrastrá la carpeta `caravanoz-site` completa a la ventana.
3. ¡Listo! Netlify te da una URL al instante (ej. `caravanoz.netlify.app`).
4. Después podés conectar tu dominio propio desde *Site settings → Domain management*.

### Opción 2 — Vercel
1. Subí la carpeta a un repo de GitHub.
2. Entrá a https://vercel.com, *Add New → Project*, e importá el repo.
3. Framework Preset: **Other**. Sin build command. Output directory: `.`
4. Deploy.

### Opción 3 — GitHub Pages
1. Creá un repositorio en GitHub y subí el contenido de `caravanoz-site`.
2. *Settings → Pages → Source: Deploy from branch* → rama `main`, carpeta `/ (root)`.
3. La URL queda como `tuusuario.github.io/caravanoz`.

> Si usás un dominio propio, reemplazá `https://www.caravanoz.com/` por tu dominio real en `index.html` (etiquetas canonical y Open Graph), `robots.txt` y `sitemap.xml`.

## Personalizar el contenido

- **Logo:** está en `assets/logo.svg`. Si tenés el PNG/SVG original que querés usar, reemplazá ese archivo (o cambiá la ruta en `index.html`).
- **B-roll del Hero:** el hero usa una escena animada en CSS. Para usar un video de paisaje a pantalla completa, dejá un clip horizontal en `assets/hero.mp4` y descomentá el bloque `<video>` marcado con `▶ B-ROLL` en `index.html`.
- **Video de "Sobre Nosotros":** reemplazá `assets/broll.mp4` por un clip de ustedes (vertical 9:16 queda perfecto).
- **Videos de YouTube:** reemplazá los bloques de color `.thumb .ph` por las miniaturas reales (`<img src="...">`) y poné el link real de cada video en el `<article class="vcard">`.
- **Podcast (Spotify):** en la sección Podcast hay un reproductor de demostración. Reemplazalo por el embed real de tu show (el snippet exacto está comentado en `index.html`, buscá `EMBED REAL DE SPOTIFY`).
- **Newsletter:** el formulario hoy solo valida el email. Para recibir suscriptores conectalo a Mailchimp, Substack, Brevo o similar (ver el `TODO` en `js/main.js`).
- **Colores y tipografías:** todo se controla con variables CSS al inicio de `css/styles.css` (sección `:root`).

## Créditos
Diseño y desarrollo del sitio para CaravanOz · Leo & Pao · 2026.
