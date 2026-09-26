---
name: graphic-resources
description: >
  Banco de recursos y criterios para piezas visuales de Sixteam.pro: opciones de tipografía más
  allá del par Poppins/Lato, bancos de iconos, ilustraciones, fotografía y fondos gratuitos, y
  criterios profesionales de composición (jerarquía, contraste, alineación, proximidad, legibilidad
  mobile) para que un carrusel, story o banner resalte. Úsalo junto a `impeccable` (proceso y
  sistema de diseño), `frontend-design` (dirección estética) y `ui-typography` (reglas finas de
  tipografía) al crear cualquier post, carrusel, banner o pieza de contenido visual.
---

# Recursos gráficos y criterios de diseño — Sixteam.pro

Insumo de apoyo para crear posts, carruseles, stories y banners. No reemplaza el sistema de diseño
canónico (`DESIGN.md` en la raíz del repo) — lo complementa cuando una pieza necesita variedad
tipográfica, un ícono, una ilustración o un criterio de composición que `DESIGN.md` no cubre en
detalle.

## Cómo se relaciona con las otras skills

1. **`impeccable`** — proceso y sistema de diseño vigente del proyecto (lee `PRODUCT.md`/`DESIGN.md`
   primero). Úsalo para decisiones de marca y consistencia.
2. **`frontend-design`** — dirección estética deliberada: cómo tomar una decisión de diseño que no
   se sienta genérica antes de construir.
3. **`ui-typography`** — reglas de corrección tipográfica (comillas, guiones, espaciado, jerarquía)
   que se aplican en automático a cualquier HTML/CSS que generes.
4. **`design-motion-principles`** — si la pieza tiene movimiento (reel, story animada, transición de
   carrusel en video), úsalo para timing/easing con intención.
5. **`graphic-resources`** (esta skill) — de dónde sacar tipografías alternativas, íconos,
   ilustraciones, fotos y fondos, y qué criterios de composición aplicar al maquetar.

## Tipografía: opciones más allá de Poppins/Lato

El par canónico (Poppins 700–900 / Lato 400–500, ver `DESIGN.md`) es el default para toda pieza de
Sixteam. Estas son alternativas **solo para variar** en una campaña puntual, un formato especial, o
cuando una pieza pide un registro distinto (más editorial, más técnico) — nunca reemplazan el
default sin razón. Todas son Google Fonts gratuitas, mismo patrón de carga que ya usan las piezas
actuales:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=NOMBRE:wght@400;700;900&display=swap" rel="stylesheet">
```

| Pairing | Headline | Body | Cuándo usarlo |
|---|---|---|---|
| **Default Sixteam** | Poppins 800–900 | Lato 400–500 | Toda pieza estándar — carruseles, stories, banners de venta. |
| **Técnico / SaaS** | Space Grotesk 700 | Work Sans 400 | Piezas sobre producto, automatizaciones, datos técnicos — geometría con más carácter que Poppins. |
| **Corporativo suave** | Manrope 800 | Karla 400 | Piezas para audiencia más formal (inmobiliaria, legal) sin perder calidez. |
| **Editorial / caso de éxito** | Fraunces 600 (serif display) | Lato 400 | Testimonios, casos de éxito (p. ej. Mizar) — el serif le da peso de "historia real" sin romper el body font de marca. |
| **Dato / cifra grande** | Sora 800 | Mulish 400 | Slides de un solo dato ancla (50–70%, $199/mes) — Sora tiene números tabulares muy legibles a tamaño grande. |

**Reglas al elegir (de `ui-typography` + `frontend-design`):**
- Máximo 2 familias por pieza. Nunca 3.
- Nunca Inter, Roboto, Arial, system-ui — es la anti-referencia explícita del proyecto (`CLAUDE.md`).
- Si cambias el pairing para una campaña, el logo, colores y CTA se mantienen intactos — solo la
  tipografía varía.

## Bancos de recursos gráficos (gratuitos, uso comercial permitido)

### Íconos
Inline SVG siempre — nunca fuente de íconos (`<i class="fa-...">`) ni `<img src>` de un CDN externo;
rompe el requisito de "HTML autocontenido" de `CLAUDE.md`.
- **[Lucide](https://lucide.dev)** — set por defecto para UI/producto (trazo consistente, look
  técnico). Ya es el estilo usado en materiales de venta de Sixteam.
- **[Phosphor Icons](https://phosphoricons.com)** — cuando se necesita un peso "bold"/"fill" para
  íconos protagonistas de un slide de dato.
- **[Heroicons](https://heroicons.com)** — alternativa más geométrica/minimal.

### Ilustraciones
- **[unDraw](https://undraw.co)** — ilustraciones planas personalizables por color (ajustar al teal
  `#00bfa5` o navy `#0a2342`); la mejor opción para mantener coherencia de marca sin foto real.
- **[Storyset](https://storyset.com)** — similar a unDraw, más variedad de escenas de negocio/tech.
- **[Blush](https://blush.design)** — estilos ilustrados más variados si una pieza necesita un tono
  distinto (más humano, menos corporativo).

### Fotografía
- **[Unsplash](https://unsplash.com)** — banco principal para fotografía real (equipos, oficinas,
  contextos de negocio). Evitar fotos de "stock" genéricas de gente sonriendo a cámara — buscar
  candor/contexto real.
- **[Pexels](https://pexels.com)** — alternativa con buen filtro por color dominante, útil para
  encontrar fotos que ya casen con navy/teal.

### Fondos, texturas y patrones
- **[Haikei](https://haikei.app)** — generador de blobs, ondas y gradientes SVG; exportable con los
  hex de marca directamente.
- **[Hero Patterns](https://heropatterns.com)** — patrones SVG sutiles en bajo contraste para fondos
  de sección sin competir con el texto.
- **[Mesh Gradients (CSS)](https://meshgradient.in)** — para el fondo dark-first con degradado
  sutil navy→teal en vez de un flat color, cuando un slide pide más atmósfera.

### Paleta y color
- **[Coolors](https://coolors.co)** — generar variantes tonales rápidas de un hex de marca (ya hay
  una rampa tonal completa en `.impeccable/design.json`; usar Coolors solo para explorar, no para
  reemplazar los tokens canónicos).
- **[OKLCH Color Picker](https://oklch.com)** — para ajustar luminosidad/saturación de un tono de
  marca manteniendo el mismo matiz (útil al crear una variante clara/oscura de un color existente).

## Criterios profesionales de composición

Aplican a cualquier pieza — carrusel, story, banner — antes de darla por terminada:

1. **Jerarquía clara.** Un elemento debe leerse primero (headline o número ancla), el resto en
   orden de importancia. Si dos elementos compiten por atención al mismo tiempo, uno pierde.
2. **Contraste con propósito.** El contraste (tamaño, peso, color) marca qué es importante — no se
   usa por decoración. Texto secundario nunca en el mismo peso/tamaño que el titular.
3. **Alineación consistente.** Todo elemento se alinea a una misma guía invisible (margen, centro,
   línea base). Elementos "casi alineados" se ven más rotos que una desalineación deliberada.
4. **Proximidad = relación.** Elementos relacionados (ícono + label, cifra + descripción) van
   pegados; elementos no relacionados llevan más espacio entre sí. El espaciado comunica estructura
   antes que el texto.
5. **Espacio negativo generoso.** Padding interno mínimo 24px en mobile (ver `DESIGN.md` → Layout).
   Una pieza apretada se lee como spam; una con aire se lee como marca seria.
6. **Legibilidad mobile primero.** Body text nunca por debajo de ~12px efectivos en la exportación
   final; el 90% del consumo es en el dedo, no en desktop (ver `PRODUCT.md` → Operating Context).
7. **Un solo signo de acción.** Un CTA, un color de acento, un lugar donde mirar después de leer.
   Coherente con la regla de negocio de Sixteam: un único CTA en todo el funnel.
8. **La marca sobrevive al recorte.** Cada plataforma recorta distinto (feed vs. story vs. compartir
   como imagen suelta) — el logo y el mensaje central deben sobrevivir aunque se pierda el marco.
