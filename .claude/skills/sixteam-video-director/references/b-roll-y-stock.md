# B-roll, stock y motion graphics — hacer un talking-head más dinámico

Esto no es un skill nuevo de Remotion — la mecánica de insertar video/imágenes ya la cubren los
skills oficiales (`remotion-markup`, `remotion-render`). Lo que faltaba y aporta este archivo es
**de dónde sacar el material** y **el criterio editorial** de cuándo/cómo usarlo en una pieza
educativa B2B de Sixteam sin que se vea a "stock footage genérico".

## Cuándo usar b-roll (y cuándo no)

- **Sixteam vende credibilidad y seriedad ("operador silencioso"), no producción de video.** El
  talking-head es la fuente de autoridad — el b-roll apoya, nunca reemplaza al que habla por más
  de 1.5-2s seguidos. Si el corte a b-roll dura más que eso, se siente como que "se fueron a otra
  cosa" en vez de reforzar el punto.
- **Regla de uso: un b-roll por idea concreta mencionada, no por relleno.** Si el guión nombra algo
  visualizable (una herramienta, un dashboard, un dato, un sector) es candidato a b-roll. Si es
  abstracto ("estratégicamente", "de manera integral"), no fuerces una imagen — un zoom/punch-in
  sobre el talking-head (ver `produccion-remotion.md` § Motion de marca) es más honesto que un
  stock genérico.
- **Frecuencia:** en un reel de 30-40s, 2-4 cortes a b-roll es el máximo — más que eso, la pieza
  deja de sentirse como una persona real explicando algo y empieza a sentirse como un montaje de
  agencia. Menos es más creíble para una audiencia de dueños de negocio.
- **Nunca tapar la cara del que habla** con el b-roll a pantalla completa por default — usa picture-
  in-picture (el b-roll en una card/ventana sobre el talking-head reducido) o corta brevemente y
  vuelve, pero mantén al presentador como ancla visual la mayoría del tiempo.

## Cómo lo hacen otros equipos (y cómo lo hacemos aquí)

Investigado julio 2026 — así arman el pipeline de b-roll equipos de contenido con volumen (Opus,
Clippie AI y similares), y es el mismo patrón que ya podemos aplicar en Sixteam sin herramientas
nuevas:

1. **"Retrieval", no generativo.** Buscan por palabra clave en un banco existente (Pexels/
   Storyblocks/Artgrid) e insertan el clip en el punto exacto del guión — no generan video nuevo
   con IA (eso es otro nivel de costo/complejidad, no lo necesitamos). Nosotros ya tenemos la pieza
   clave para esto: el transcript palabra-por-palabra con timestamps que genera Whisper para las
   captions (`references/produccion-remotion.md`) es exactamente el input que se necesita — cada
   palabra "visualizable" del guión (una herramienta, un sector, un dato) ya tiene su timestamp
   exacto, solo falta buscar un clip para esa palabra y meterlo ahí.
2. **Dato duro sobre cuánto usar:** b-roll bien puesto sube el watch time ~40%, pero pasar de ~50%
   del video en b-roll empieza a "enterrar" al presentador — confirma con número la regla de arriba
   (2-4 cortes por reel, nunca reemplazar al talking-head como ancla).
3. **Librería propia con el tiempo.** Un banco local ya curado (por tema: "oficina/tech", "sector
   inmobiliario", "IA/software") recorta ~60-70% el tiempo de buscar clip por clip. Si esto se
   vuelve rutina, vale la pena ir guardando en `contenido-social/videos/remotion/public/broll/` los
   clips ya usados y aprobados, organizados por carpeta temática, en vez de rebuscar desde cero cada
   vez.

## Bancos de stock (gratuitos, uso comercial permitido — verificar licencia antes de cada descarga)

### Video
- **[Pexels Video](https://www.pexels.com/videos)** — fuente principal recomendada, y la que usan
  la mayoría de pipelines automatizados de b-roll (ver § arriba): tiene **API gratuita** (key
  instantánea en [pexels.com/api](https://www.pexels.com/api/), sin tarjeta), devuelve URLs
  directas de video en varias resoluciones — permite buscar por keyword del transcript y descargar
  por código en vez de navegar manualmente. Uso comercial permitido; atribución recomendada pero no
  obligatoria dentro del límite gratis por defecto. Consistente en calidad/estética para contextos
  de oficina, tecnología, manos-en-laptop, ciudades. Filtra por orientación vertical cuando sea
  posible; si no, recorta a 9:16 (ver § Encajar 16:9 en 9:16 abajo). **Requiere que el usuario
  genere la API key** — no es algo que se pueda automatizar sin ese paso único de 2 minutos.
- **[Pixabay Video](https://pixabay.com/videos)** — buen complemento cuando Pexels no tiene el
  clip exacto; misma licencia permisiva.
- **[Mixkit](https://mixkit.co/free-stock-video)** — curado, más "look" de agencia/SaaS moderno;
  buena fuente específica para clips de "manos usando laptop/celular", "oficina moderna".
- **[Coverr](https://coverr.co)** — alternativa con buen filtro por color dominante, útil para
  encontrar clips que ya casen con navy/teal sin gradeo adicional.

**Evitar activamente:** clips de "gente sonriendo dándose la mano a cámara", montañas de post-its,
o cualquier cliché de "stock corporativo" de los 2010s — rompe la regla de marca "El operador
silencioso" (`DESIGN.md`) de que nada compite por atención de forma gratuita.

### Fotografía / capturas
Para fotos reales (no capturas de pantalla de producto), usa los mismos bancos que ya documenta
`graphic-resources` (Unsplash, Pexels foto) — no dupliques esa lista aquí, ese skill es la fuente
de verdad para fotografía/íconos/ilustraciones estáticas.

Para **capturas de pantalla/mockups de producto** (p. ej. mostrar un dashboard, un chat de
WhatsApp, una interfaz de Claude/ChatGPT cuando se nombran en el guión): usa un mockup real o un
mockup genérico de dispositivo (buscar "device mockup free" en Figma Community o similar) en vez
de una captura pixelada — la nitidez importa más en video que en un carrusel porque no hay forma
de pausar y mirar de cerca.

### Motion graphics (animaciones, no video real)
- **[LottieFiles — Free](https://lottiefiles.com/featured-free-animations)** — animaciones ligeras
  (loading states, checkmarks, iconos animados) vía `@remotion/lottie` (ver
  [lottie.md](../../../../contenido-social/videos/remotion/.claude/skills/remotion-markup/lottie.md)
  del skill oficial `remotion-markup`). Úsalas para micro-momentos (un check ✓ animado cuando se
  dice "resuelto", un ícono de reloj cuando se habla de tiempo) — nunca como decoración de fondo
  continua, compite con las captions.
- **Light leaks / partículas ya nativas de Remotion** (sin banco externo, sin licencia que
  verificar): `@remotion/light-leaks` para un destello de luz sutil en un corte de escena, o el
  patrón `DotGrid` ya usado en `Reel10sOperaciones` para textura decorativa de marca. Preferir
  estos sobre un asset externo cuando el efecto es genérico (ver
  [light-leaks.md](../../../../contenido-social/videos/remotion/.claude/skills/remotion-markup/light-leaks.md)).

## Encajar 16:9 en 9:16 (la mayoría del stock viene horizontal)

El canvas de Sixteam es vertical (1080×1920). Casi todo el stock video gratuito es 16:9. Dos
opciones, elegir según el clip:

1. **Recorte a llenar (`objectFit: "cover"`)** — pierde los bordes laterales del clip. Úsalo cuando
   el sujeto del clip está centrado (manos en laptop, primer plano de pantalla).
2. **Fondo desenfocado + clip centrado más pequeño** — el mismo clip de fondo, blureado y escalado
   para llenar el canvas, con el clip nítido superpuesto centrado más chico encima. Úsalo cuando
   recortar el clip original pierde información importante (una toma amplia de oficina donde
   recortar deja solo pared vacía).

Para la mecánica exacta de insertar el clip (`<Video>` de `@remotion/media`, timing con `from`/
`durationInFrames`/`trimBefore`, o `<TransitionSeries>` si quieres ripple editing) usa el skill
oficial `remotion-markup` → `video-editing.md` y `embedding-videos.md`. Para imágenes/mockups,
`remotion-markup` → `images.md`. Para el corte entre talking-head y b-roll (fundido, slide,
wipe), `remotion-markup` → `transitions.md`.
