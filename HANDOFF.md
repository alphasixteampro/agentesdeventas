# Handoff — trabajar este proyecto en otro dispositivo

Todo lo necesario para seguir con Claude Code en otra máquina, con las mismas skills, memoria, hooks y
proyecto Remotion. Última actualización: 2026-09-25.

## 1. Requisitos

- Git + Node.js 20 o superior (esta máquina usa Node 25)
- Claude Code (CLI o extensión de VS Code), con la sesión iniciada en la misma cuenta de claude.ai
- Acceso de GitHub a `alphasixteampro/agentesdeventas` (fork con lo último) o a
  `Samuelbf2001/agentesdeventas` (repo principal, una vez mergeado el PR)

## 2. Clonar

```bash
git clone https://github.com/alphasixteampro/agentesdeventas.git
cd agentesdeventas
git remote add upstream https://github.com/Samuelbf2001/agentesdeventas.git
```

Flujo de trabajo: el usuario `alphasixteampro` **no puede hacer push al repo principal**. Se hace push al
fork y se abre un PR hacia `Samuelbf2001/agentesdeventas` (así entró el PR #1).

## 3. Lo que viene incluido en el repo (no hay que hacer nada)

| Qué | Dónde |
|-----|-------|
| Instrucciones del proyecto | `CLAUDE.md`, `PRODUCT.md`, `DESIGN.md` |
| Skills del proyecto (8) | `.claude/skills/` — impeccable, frontend-design, ui-typography, graphic-resources, design-motion-principles, sixteam-comercial, sixteam-cold-email, sixteam-video-director |
| Hooks de impeccable (chequeo de diseño tras editar UI) | `.claude/settings.json` |
| Proyecto Remotion + composiciones | `contenido-social/videos/remotion/` |
| Scripts de transcripción (whisper) | `contenido-social/videos/remotion/.tmp/*.mjs` |

## 4. Pasos manuales en la máquina nueva

### 4.1 Memoria de Claude (reglas de negocio aprendidas)

La memoria vive fuera del repo, en una carpeta que depende de la ruta del proyecto. Hay una copia en
`.claude/memory/`. Para restaurarla, abre Claude Code en el proyecto y pídele:

> Copia los archivos de `.claude/memory/` a tu carpeta de memoria de este proyecto.

Reglas clave que contiene (por si acaso):
- En piezas externas nunca se dice "créditos" → se dice "solicitudes" (tabla de equivalencias por plan).
- 50+ proyectos, 15+ sectores y 98 % de satisfacción **sí** se pueden usar en público.
- AgentOS es una línea nueva, sin clientes reales todavía: no sobrevender.

### 4.2 Remotion

```bash
cd contenido-social/videos/remotion
npm install
npx remotion skills add          # reinstala las skills remotion-* (no se versionan)
npx remotion studio              # abre el editor
```

- La primera vez que se renderiza, Remotion descarga su Chrome headless en `.remotion/` (ignorado en git).
- Para transcribir audio a captions: `node .tmp/transcribe.mjs` (descarga whisper.cpp + modelo ~500 MB
  la primera vez). El audio fuente `parte-2-audio.wav` **no** está en el repo; el resultado
  (`public/parte-2-captions.json`) y el video (`public/parte-2-vertical.mp4`) sí.

### 4.3 Conectores y servidores MCP

- **Conectores de claude.ai** (HubSpot, GHL Sixteam, Apollo, Gmail, Drive, Notion, Make, Meta Ads, STC,
  Claude Docs): llegan solos al iniciar sesión con la misma cuenta. Si alguno pide autenticación,
  autorizarlo en la configuración de conectores de claude.ai. Pendientes de autorizar hoy:
  `mizar bbd` y `adspirer`.
- **Plugin Adspirer** (`adspirer-ads-agent`): instalar con `/plugin` en Claude Code si se necesita.
- **MCP de diseño que menciona `CLAUDE.md`** (NanoBanana, Google Stitch, 21st Dev Magic): **no están
  configurados en esta máquina tampoco**. Si se quieren usar, agregarlos con `claude mcp add` y sus
  API keys (Gemini / Google Cloud proyecto `sixteam-design` / 21st.dev). Las keys nunca van al repo.

### 4.4 Skills globales de la cuenta

Las skills `anthropic-skills:*` (sixteam-growth-advisor, bases-y-prompts-agentes-ia, pptx, docx, pdf,
xlsx, etc.) están sincronizadas con la cuenta de claude.ai y aparecen solas.

## 5. Estado del trabajo al momento del handoff

- Último commit en el fork: pautas de bienes raíces/constructoras/VIP, carruseles WhatsApp CRM y
  operación comercial, reel `Parte2Educativo`, playbook y cheatsheet de asesora, oferta AgentOS.
- **Pendiente:** abrir PR del fork → `Samuelbf2001/agentesdeventas` para que el repo principal quede al día.
- Calendario de contenido: `contenido-social/PLAN-DE-CONTENIDOS-30X.md`.

## 6. Verificación rápida en la máquina nueva

1. Abrir Claude Code en la carpeta y preguntar "¿qué skills tienes disponibles?" → deben aparecer las 8
   del proyecto.
2. Preguntar "¿cómo se comunican los créditos en piezas externas?" → debe responder "solicitudes"
   (confirma que la memoria quedó restaurada).
3. `npx remotion studio` en `contenido-social/videos/remotion` → debe abrir y listar las composiciones.
