# AgentOS — Nueva línea de negocio (oferta comercial)

> **Estado del documento:** borrador de trabajo, 15 de septiembre de 2026.
> Consolida el contexto del brochure "El sistema: 2brain y agentes de IA" + la definición de la
> unidad de negocio dada por Samuel Burgos.
>
> **Cómo leerlo:** lo marcado como `CONFIRMADO` viene del sistema real o de decisión tomada.
> Lo marcado como `PROPUESTA` es sugerencia para discutir — **no usar en pieza externa hasta
> validarlo**. Lo marcado como `DECISIÓN ABIERTA` está bloqueando y necesita dueño y fecha.
>
> Documentos hermanos: `MODELO-SIXTEAM-OPS-RAZONAMIENTO.md` (línea actual),
> `.claude/skills/sixteam-comercial/SKILL.md` (pricing y ángulos canónicos V2),
> `PRODUCT.md` (autoridad de marca y evidencia citable).

---

## 1. Qué es AgentOS

`CONFIRMADO`

AgentOS es una **plataforma** donde el cliente cuenta con un equipo de agentes de IA que usan el
contexto real de su compañía para:

1. **Sugerir mejoras** — detectan pasos repetidos, esperas y datos copiados a mano.
2. **Realizar acciones** — ejecutan el trabajo operativo dentro de las herramientas del cliente.
3. **Construir soluciones** — convierten un puesto o proceso del mapa en un agente que lo opera.
4. **Llevar control** — gestionan el avance de la transformación digital y la optimización de
   procesos como un tablero vivo, no como un proyecto que termina.

**La promesa raíz (de la home, verbatim):**
> "Los agentes hacen el 80 % del trabajo. Tú decides lo crucial."

**El motor:** `2brain`, la memoria de la empresa. Reuniones, decisiones, clientes y proyectos
guardados como páginas conectadas entre sí, que responden cuando se les pregunta. Todos los agentes
trabajan sobre ese mismo contexto — esa es la diferencia con un chatbot genérico.

### La frase que separa AgentOS de todo lo demás del mercado

No es software que el cliente aprende a usar. Es un equipo que trabaja **desde el primer día sobre
la memoria de su empresa**, con un puesto, un jefe y decisiones propias — y que se detiene cuando el
caso pide criterio humano.

---

## 2. Estado real del sistema al 15-sep-2026

`CONFIRMADO` — esta sección existe para que nadie venda lo que todavía no opera.

| Componente | Nombre interno | Estado |
|---|---|---|
| La memoria de tu empresa | 2brain | **En producción** |
| Reuniones y notas que se vuelven tareas | Pipeline de reuniones | **En producción** |
| El tablero de trabajo | Tareas y proyectos | **En producción** |
| El mapa de tu empresa | Organigrama vivo | Construido, sin desplegar |
| Un agente para cada puesto | Convertir en agente | Construido, sin desplegar |
| Conexión con tus sistemas | Integraciones | Construido, sin desplegar |
| Tu equipo de agentes | Roster de AgentOS | **Pausado** — nunca ha operado con un cliente |
| Aprende de tus correcciones | Auto-mejora | Parcial (solo en el agente interno de WhatsApp) |
| El control siempre tuyo | Aprobaciones, registro, apagado | Parcial (de 4 aprobaciones, solo existe la del plan) |

**Dos limitaciones que hay que decir en voz alta:**
- WhatsApp hoy **lee** mensajes, no los envía.
- De las cuatro aprobaciones que promete el copy (mapa, plan, salida, mejoras), en el código solo
  existe la del **plan**.

### Qué implica esto comercialmente

`PROPUESTA` — **AgentOS no se lanza como oferta abierta. Se lanza como programa piloto.**

Vender hoy "un equipo de agentes que opera tu empresa" cuando ningún agente ha operado con un
cliente real rompe el principio 4 de `PRODUCT.md` ("Prueba antes que promesa"). La salida honesta y
además comercialmente más fuerte:

> **Programa Fundadores AgentOS** — 3 a 5 empresas. Precio preferente de por vida a cambio de ser
> el primer caso documentado. Se les dice explícitamente que son los primeros.

Esto convierte la debilidad ("no tenemos caso") en el argumento de cierre ("por eso el precio es
este y por eso vas a tener acceso directo a los fundadores"). Y genera el activo que hoy falta: un
caso real con cifras propias.

---

## 3. Cómo encaja con Sixteam Ops

`DECISIÓN ABIERTA` — esta es **la decisión estructural más importante** de la unidad. Todo lo demás
depende de ella.

Hay tres arquitecturas posibles:

### Opción A — AgentOS como escalón superior de Ops `← recomendada`

```
Radar gratis → Sixteam Ops ($199–$1.200/mes) → AgentOS (ticket mayor)
   diagnóstico      operamos TU TECNOLOGÍA        operamos TUS PROCESOS
```

Ops centraliza la tecnología con especialistas humanos y solicitudes. AgentOS baja una capa más:
entra a los procesos de la empresa y pone agentes a operarlos. Es el mismo ADN ("no te dejamos
solo", "potencializar, no reemplazar") aplicado más profundo.

**Por qué la recomiendo:** preserva el modelo land-and-expand que ya funciona, no canibaliza Ops,
y da un destino natural al cliente de Ops que ya confía. Además, el cliente de Ops **ya tiene el
CRM ordenado** — que es justo el prerrequisito para que un agente pueda operar sobre datos reales.

### Opción B — Líneas paralelas independientes
Dos productos, dos ICP, dos funnels. Más limpio conceptualmente, pero duplica esfuerzo comercial en
un equipo de dos personas y obliga a explicar dos historias distintas.

### Opción C — AgentOS como la plataforma que entrega Ops
AgentOS deja de venderse solo y pasa a ser el "cómo" de Sixteam Ops. Menor complejidad comercial,
pero desperdicia la oportunidad de ticket alto y convierte una plataforma en un detalle de entrega.

> **Pendiente:** Samuel + Ernesto eligen A, B o C. Sin esta decisión no se puede cerrar pricing ni
> el guión de venta.

---

## 4. A quién se le vende (ICP)

`PROPUESTA`

El ICP de AgentOS **no es el mismo** que el de Sixteam Ops. Ops arranca en $199 y sirve a
emprendedores. AgentOS necesita una empresa con suficiente proceso que mapear.

**Perfil objetivo:**

| Dimensión | Criterio |
|---|---|
| Tamaño | 20–200 empleados |
| Señal de dolor | Procesos repetidos entre áreas, datos copiados a mano, cuellos de botella en una sola persona |
| Madurez tecnológica | Ya tienen CRM o ERP (aunque lo usen mal). Sin sistema previo, no hay dónde conectar |
| Quién compra | Dueño, gerente general o director de operaciones — alguien con autoridad para rediseñar cómo trabaja la empresa |
| Disparador | Crecimiento que la operación manual ya no aguanta, o un intento fallido de automatización previo |

**Anti-ICP (no vender):**
- Empresas de menos de 10 personas → van a Sixteam Ops.
- Quien busca "un chatbot para WhatsApp" → es una solicitud de Ops, no AgentOS.
- Quien no está dispuesto a que su equipo sea entrevistado → sin mapa no hay sistema.

**Verticales ancla sugeridas** (las mismas donde ya hay tracción): distribución/comercialización,
inmobiliaria, clínicas y negocios con cita. Distribución es la más natural: procesos repetidos, alto
volumen de documentos y facturación manual.

---

## 5. La oferta comercial — tres fases

`CONFIRMADO` (estructura, viene de la home) · `PROPUESTA` (precios)

La gran ventaja de este modelo: **el cliente empieza sin pagar y sin firmar nada largo.**

### Fase 1 — Entender · Gratis · 5 días
El cliente recibe el **mapa completo** de cómo trabaja su empresa: quién hace qué, con qué
herramienta, cuánto cuesta cada paso y dónde se pierde tiempo y dinero.

| Día | Qué pasa |
|---|---|
| 1 | Hablamos |
| 2 | Sam entrevista al equipo |
| 3 | Se dibuja el mapa |
| 4 | Buscamos dónde se pierde tiempo y dinero |
| 5 | Se entrega y el cliente decide si sigue |

**Aprobación humana #1:** el cliente confirma que así trabaja su empresa.

> Este mapa es el equivalente AgentOS del **Radar** de Sixteam Ops: la puerta de entrada gratuita.
> `DECISIÓN ABIERTA`: ¿se llama Radar también, o tiene nombre propio? Dos nombres para el mismo rol
> en el funnel confunden al equipo comercial.

### Fase 2 — Construir · Pago por entrega aprobada · 2 a 4 semanas el primer proceso
Se rediseñan los procesos, se conectan las herramientas y se prueba todo **antes** de pedir el visto
bueno. El cliente paga cada entrega que aprueba — no un proyecto por adelantado.

**Aprobaciones humanas #2 y #3:** el plan (qué se cambia y en qué orden) y la salida (visto bueno
antes de que algo empiece a operar).

### Fase 3 — Operar · Mensual cancelable
Los agentes operan todos los días. Soporte atiende por WhatsApp y pasa a una persona lo que pide
criterio. Se cancela cuando el cliente quiera.

**Aprobación humana #4:** cada mejora posterior la aprueba una persona.

---

## 6. Modelo de precios

`PROPUESTA` — **ninguna de estas cifras está validada. No usarlas en pieza externa.**

### La unidad de cobro

AgentOS **no debe cobrarse en créditos**. Los créditos son la unidad de Sixteam Ops (y ya se
comunican externamente como "solicitudes al mes"). La unidad natural de AgentOS es distinta y más
fácil de entender:

> **Fase Construir:** se cobra por **proceso entregado y aprobado**.
> **Fase Operar:** se cobra por **procesos en operación** (o agentes activos).

Esto además alinea el incentivo correcto: Sixteam gana cuando hay procesos operando de verdad, no
cuando el cliente consume cuota.

### Estructura sugerida

| Fase | Modelo | Rango a validar |
|---|---|---|
| Entender | Gratis | — (costo interno: ~5 días de trabajo) |
| Construir | Por proceso entregado | Escalonado por complejidad: simple / medio / complejo |
| Operar | Mensual por procesos activos | Escalonado por cantidad de procesos en operación |

**Cómo fijar los números** (método sugerido, no cifra): el precio de una entrega debe anclarse al
**costo actual del proceso manual** que se levantó en el mapa de la Fase 1. Si el mapa muestra que
una factura cuesta 41 minutos y pasa por 9 pasos, ese número es el ancla del precio — no una tarifa
de lista. Es la razón por la que la Fase 1 gratis se paga sola: produce el argumento de precio.

### ⚠️ Conflicto activo detectado

`DECISIÓN ABIERTA` — **sixteam.pro (el sitio real) está vendiendo precios descontinuados.**

El sitio ofrece un **Diagnóstico de $2.500 USD en 2 semanas** y **planes desde $299/mes**. Pero:
- `$299/mes` es pricing **V1, descontinuado** (`PRODUCT.md`, skill `sixteam-comercial` §3).
- El diagnóstico pago **contradice** el modelo canónico actual, donde el diagnóstico (Radar) es
  gratis y nunca se ofrece consultoría como primer servicio.

Esto no es un problema del brochure — es una inconsistencia viva entre el sitio, la home y los
documentos canónicos. **Hay que resolverla antes de lanzar AgentOS**, o el prospecto va a ver tres
ofertas distintas de la misma empresa.

---

## 7. El equipo de agentes

`CONFIRMADO` (roles de la home) · `DECISIÓN ABIERTA` (nomenclatura)

| Agente | Rol |
|---|---|
| **Sam** | Entrevista al equipo y dibuja el mapa |
| **Pat** | Coordina el trabajo y las entregas |
| **Debbie** | Construye las automatizaciones |
| **Soporte** | Atiende por WhatsApp y escala a una persona lo que pide criterio |
| **Expertos** | Uno por herramienta: CRM, ERP, WhatsApp |

**Principio de diseño (este es el diferenciador real):** cada agente tiene **un puesto, un jefe y
decisiones propias** sobre su parte de la operación — igual que cualquier persona del equipo. Nace
supervisado, como asistente de una persona, y **solo gana autonomía cuando el cliente lo decide.**

### El problema de nombres

Hoy conviven tres nomenclaturas:

| Dónde | Nombres |
|---|---|
| Home de AgentOS | Sam, Pat, Debbie, Soporte, Expertos |
| Código real | Alex, Sam, Debbie, Vinnie, Sally, Clara, Quinn |
| sixteam.pro / Sixteam Ops | Alfa, Bravo, Delta, Echo, Foxtrot (alfabeto OTAN) |

Además hay una sesión en curso convirtiendo a **Alex** en el coordinador de tareas — que en la home
es el papel de **Pat**.

`PROPUESTA` de resolución: **nombres humanos para los agentes de AgentOS** (ocupan puestos en un
organigrama, así que un nombre humano refuerza el concepto) y **alfabeto OTAN para los agentes de
servicio de Sixteam Ops** (Alfa, Delta, Echo — son funciones, no puestos). Dos sistemas, pero cada
uno con una lógica defendible.

> **Pendiente:** congelar el roster canónico de AgentOS y alinear código + home antes de imprimir
> cualquier pieza con nombres.

---

## 8. El límite: qué decide la máquina, qué decide la persona

`CONFIRMADO` — este es el corazón del argumento de confianza, y hay que protegerlo.

| | |
|---|---|
| **El agente decide** | Lo operativo: responder, registrar, recordar, dar seguimiento, ordenar el trabajo |
| **El cliente decide lo crucial** | Lo que toca dinero, un cliente, o no tiene vuelta atrás. El agente se detiene y pregunta |
| **El cliente pone los límites** | Qué puede hacer cada agente, en qué canales y con qué tono |

**Los cuatro momentos donde decide una persona:** el mapa · el plan · la salida · las mejoras.

**Las tres garantías de datos:**
- No se venden ni se usan para entrenar modelos ajenos.
- Todo queda registrado: quién hizo qué, a qué hora y por qué.
- Un botón detiene a los agentes en el momento.

> ⚠️ `DECISIÓN ABIERTA`: "no se usan para entrenar modelos ajenos" y "acuerdo de confidencialidad"
> **deben estar respaldados en el contrato antes de imprimirse o publicarse.** Es una promesa legal,
> no un argumento de marketing. Verificar con el contrato vigente.

---

## 9. Cómo se estructura la unidad — plan sugerido

`PROPUESTA` — orden recomendado, del bloqueo más duro al más suave.

### Bloque 1 — Decidir antes de vender (semanas 1–2)
1. Elegir arquitectura de portafolio: **Opción A, B o C** (§3).
2. Congelar el **roster canónico de agentes** y alinear código + home (§7).
3. Resolver la **inconsistencia de precios** de sixteam.pro (§6).
4. Verificar **respaldo contractual** de las promesas de datos (§8).

### Bloque 2 — Cerrar la brecha entre lo que dice el copy y lo que hace el sistema (semanas 2–6)
5. Desplegar lo que está **construido sin desplegar**: mapa, conversión puesto→agente, integraciones.
6. Completar las **cuatro aprobaciones** (hoy solo existe la del plan) — es la promesa central de
   control, y es la que sostiene todo el argumento de confianza.
7. Habilitar **envío** en WhatsApp, no solo lectura.

### Bloque 3 — Programa Fundadores (semanas 4–12)
8. Definir la oferta del piloto: 3–5 empresas, precio preferente, a cambio de caso documentado.
9. Escoger candidatos del ICP (§4) — idealmente **clientes actuales de Sixteam Ops**, que ya
   confían y ya tienen el CRM ordenado.
10. Correr la Fase 1 (mapa gratis, 5 días) con cada uno. El mapa es barato de producir y produce
    tanto el argumento de precio como el material del caso.
11. **Medir desde el día uno** lo que hoy no existe: tiempo del proceso antes y después, pasos
    eliminados, errores evitados. Sin esto no habrá cifras propias citables.

### Bloque 4 — Lanzamiento comercial (cuando haya caso)
12. Reemplazar todas las cifras `EJEMPLO` de la empresa demo (Distribuidora Andina) por el caso real.
13. Producir el brochure impreso, el material de venta y las piezas de contenido.
14. Abrir el funnel: prospección fría + contenido orgánico, con el mapa gratis como CTA.

---

## 10. Lo que NO se dice todavía

- ❌ Que los agentes "ya operan empresas" — ninguno ha operado con un cliente real.
- ❌ Cualquier cifra de la empresa de demostración sin la marca `EJEMPLO`.
- ❌ Las promesas de datos y confidencialidad, hasta que estén en el contrato.
- ❌ Las cuatro aprobaciones como si todas existieran — hoy existe una.
- ❌ Que WhatsApp envía mensajes — hoy solo lee.
- ❌ Precios de AgentOS — no hay pricing validado (§6).

### Regla que queda obsoleta

`MODELO-SIXTEAM-OPS-RAZONAMIENTO.md` §9 dice: *"Lo que NO decir nunca: 'Plataforma SaaS Sixteam OS'
(no existe)"*. Esa regla es de junio 2026 y **AgentOS la invalida** — ahora sí existe una
plataforma. Hay que actualizar ese documento cuando se cierre la Opción A/B/C del §3, para que el
equipo no siga operando con una instrucción que ya no aplica.

---

## 11. Preguntas abiertas

1. ¿AgentOS es escalón de Ops, línea paralela, o la plataforma que entrega Ops? (§3)
2. ¿El mapa gratis se llama Radar o tiene nombre propio? (§5)
3. ¿Cuál es el roster canónico de agentes? (§7)
4. ¿Qué hace sixteam.pro con el Diagnóstico de $2.500 y los planes de $299? (§6)
5. ¿Las promesas de datos están en el contrato vigente? (§8)
6. ¿AgentOS se vende en Colombia primero, o directo a USA donde el ticket aguanta más?
7. ¿Quién es el dueño comercial de la línea — Samuel o Ernesto?

---

*Origen: sesión del 15 de septiembre de 2026. Basado en el brochure "El sistema: 2brain y agentes
de IA" (copy de 9 paneles, versión al 14 de septiembre de 2026) y en la definición de la unidad de
negocio dada por Samuel Burgos.*
