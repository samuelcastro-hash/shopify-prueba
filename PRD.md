# PRD — Z!ngha Mx: Tienda Shopify de Inhaladores de Aromaterapia Premium

**Versión:** 1.0  
**Fecha:** 2026-05-08  
**Estado:** Borrador

---

## 1. Visión General

### 1.1 Descripción del Producto

Tienda de comercio electrónico en Shopify para una marca premium de inhaladores de aromaterapia. El sitio debe comunicar sofisticación, bienestar consciente y confianza científica. La experiencia visual y de compra debe estar a la altura de marcas de lujo accesible como Aesop, Byredo o Rituals.

### 1.2 Propuesta de Valor

> _"Rituales de bienestar en la palma de tu mano."_

Los inhaladores combinan aromaterapia clínica con diseño de objeto. El sitio debe reflejar esa dualidad: funcional y bello, científico y sensorial.

### 1.3 Público Objetivo

| Segmento | Descripción |
|---|---|
| Primario | Mujeres 25–45, urbanas, con poder adquisitivo medio-alto, interesadas en bienestar, mindfulness y diseño |
| Secundario | Hombres 30–50 buscando regalos premium o rutinas de autocuidado |
| Terciario | Profesionales del wellness (coaches, spas, terapeutas) |

---

## 2. Arquitectura de Páginas

### 2.1 Mapa del Sitio

```
/                        → Inicio (Home)
/collections/all         → Productos
/pages/seguimiento       → Sigue tu Pedido
/pages/sobre-nosotros    → Sobre Nosotros
/pages/contacto          → Contacto
```

---

## 3. Páginas y Especificaciones

---

### 3.1 Inicio `/`

#### Objetivo
Capturar atención en menos de 3 segundos y guiar al usuario hacia el catálogo o una compra directa.

#### Secciones

**[Hero — Full Screen]**
- Imagen o video de fondo: lifestyle shot en tonos neutros (beige, blanco roto, verde salvia)
- Headline principal: máx. 6 palabras, fuente serif grande (ej. Cormorant Garamond o Playfair Display)
- Subheadline: 1 línea descriptiva con beneficio clave
- CTA primario: `Descubrir la Colección` → enlace a `/collections/all`
- CTA secundario (texto link): `¿Qué es la aromaterapia?` → ancla a sección educativa
- Comportamiento: parallax suave al hacer scroll

**[Propuesta de Valor — 3 Columnas]**
- Íconos minimalistas de línea fina
- Textos cortos (máx. 2 líneas):
  - _"Ingredientes 100% naturales"_
  - _"Diseño ergonómico certificado"_
  - _"Efecto en menos de 60 segundos"_

**[Productos Destacados — Carrusel / Grid]**
- Máx. 4 productos
- Mostrar: imagen de producto, nombre, precio, botón `Añadir al carrito`
- Etiquetas opcionales: `Bestseller`, `Nuevo`, `Edición Limitada`
- Fondo contrastante (dark o crema oscuro) para separar visualmente de la sección hero

**[Sección Editorial / Historia]**
- Imagen editorial grande (50% ancho) + texto narrativo (50% ancho)
- Headline: _"Diseñado para tu momento."_
- Párrafo corto (3–4 líneas) sobre el origen de la marca
- CTA: `Conoce nuestra historia` → `/pages/sobre-nosotros`

**[Rituales / Usos — Tabs o Acordeón]**
- 3–4 escenarios de uso: _Mañana_, _Trabajo_, _Noche_, _Viaje_
- Imagen + título + descripción breve de 2 líneas por cada ritual
- Enlace a producto relacionado por cada ritual

**[Testimonios — Slider]**
- Cita del cliente, nombre, ciudad
- Estrellas (5/5)
- Sin fotos de perfil (minimalismo)
- Fondo de color sólido neutro

**[Newsletter — Banner Minimalista]**
- Copy: _"Suscríbete y recibe tu guía de aromaterapia gratis."_
- Campo de email + botón `Suscribirme`
- Texto legal discreto (GDPR / privacidad)

---

### 3.2 Productos `/collections/all`

#### Objetivo
Facilitar el descubrimiento, comparación y compra con el mínimo de fricción.

#### Layout de Colección

- Grid: 3 columnas en desktop, 2 en tablet, 1 en mobile
- Filtros laterales (desktop) / panel deslizable (mobile):
  - Por aroma: `Cítrico`, `Floral`, `Herbal`, `Amaderado`
  - Por beneficio: `Energía`, `Relajación`, `Enfoque`, `Sueño`
  - Por precio
- Orden predeterminado: `Más vendidos`
- Total de resultados visible

#### Tarjeta de Producto

| Elemento | Detalle |
|---|---|
| Imagen | Cuadrada, fondo blanco o neutro, hover con imagen secundaria (lifestyle) |
| Nombre | Fuente serif, 16px |
| Descripción corta | 1 línea, fuente sans-serif, color gris |
| Precio | Tamaño destacado; precio tachado si hay descuento |
| CTA | `Añadir al Carrito` visible en hover |
| Etiqueta | Chip flotante: `Nuevo` / `Bestseller` / `−20%` |

#### Página de Producto Individual `/products/[slug]`

**Zona Superior (above the fold)**
- Galería izquierda: 4–6 imágenes (producto, detalle, lifestyle, empaque)
  - Zoom al hover en desktop
  - Swipe en mobile
- Información derecha:
  - Nombre del producto (H1, serif)
  - Subtítulo o aroma principal
  - Precio
  - Selector de variante (si aplica: pack x1 / pack x3 / edición especial)
  - Cantidad
  - CTA primario: `Añadir al Carrito` (botón ancho completo, color brand)
  - CTA secundario: `Comprar ahora` (checkout rápido)
  - Beneficios en chips: `Natural`, `Portátil`, `Sin alcohol`
  - Estimado de entrega: _"Entrega en 3–5 días hábiles"_
  - Trust badges: pago seguro, devolución 30 días, envío gratis >$X

**Zona Inferior (below the fold)**

- **Descripción completa:** texto enriquecido con ingredientes activos, modo de uso y beneficios
- **Ingredientes:** lista expandible con nombres y efectos
- **Cómo usar:** 3 pasos con iconografía (abrir / inhalar / cerrar)
- **Tabla de beneficios:** comparativa del producto vs. otros de la línea
- **Preguntas frecuentes del producto:** acordeón (3–5 preguntas)
- **Productos complementarios:** `Completa tu ritual` (máx. 3 productos)
- **Reseñas:** sistema de calificación con fotos, ordenables por relevancia

---

### 3.3 Sigue tu Pedido `/pages/seguimiento`

#### Objetivo
Reducir tickets de soporte y generar confianza post-compra.

#### Contenido

- **Formulario de seguimiento:**
  - Campo: Número de pedido (ej. `#1234`)
  - Campo: Email asociado a la compra
  - Botón: `Consultar estado`

- **Estados de pedido (respuesta dinámica):**

| Estado | Icono | Descripción mostrada |
|---|---|---|
| Pedido confirmado | ✓ | "Tu pedido fue recibido y está siendo procesado." |
| En preparación | 📦 | "Estamos preparando tu pedido con cuidado." |
| Enviado | 🚚 | "Tu pedido está en camino. [Ver rastreo]" |
| Entregado | 🎁 | "Tu pedido fue entregado. ¡Esperamos que lo disfrutes!" |

- **Línea de tiempo visual:** stepper horizontal con estados activos/inactivos
- **Número de guía + link externo** al carrier (DHL, Fedex, Estafeta, etc.)
- **¿Problemas con tu pedido?** → CTA a `/pages/contacto`

#### Notas Técnicas
- Integración con Shopify Order Status API o app de seguimiento (ej. Parcel Panel, AfterShip)
- La página debe ser accesible sin login (solo con # pedido + email)

---

### 3.4 Sobre Nosotros `/pages/sobre-nosotros`

#### Objetivo
Construir conexión emocional con la marca y comunicar credenciales que justifiquen el precio premium.

#### Secciones

**[Hero Editorial]**
- Imagen a pantalla completa (fundadora/equipo o laboratorio/naturaleza)
- Headline: _"Nacimos de la búsqueda de calma en un mundo acelerado."_

**[Historia de la Marca]**
- Línea de tiempo visual: fundación, primer producto, hitos clave
- Tono: cercano, honesto, aspiracional
- Evitar: lenguaje corporativo genérico

**[Filosofía / Valores]**
- 3 pilares con icono + nombre + párrafo breve:
  1. **Pureza** — ingredientes sin sintéticos, trazabilidad de origen
  2. **Precisión** — formulaciones basadas en aromaterapia clínica
  3. **Presencia** — diseñados para crear rituales cotidianos

**[El Equipo / La Fundadora]**
- Foto editorial + nombre + bio corta (2–3 párrafos)
- Credenciales relevantes (formación en aromaterapia, diseño, etc.)

**[Sustentabilidad / Responsabilidad]**
- Packaging: materiales reciclados o reciclables
- Política de ingredientes: sin crueldad, vegano, origen responsable
- Logotipos de certificaciones (si aplica)

**[Prensa / Apariciones]**
- Logos de medios en escala de grises
- Cita destacada de un artículo relevante

**[CTA Final]**
- _"¿Lista para empezar tu ritual?"_
- Botón: `Ver la Colección` → `/collections/all`

---

### 3.5 Contacto `/pages/contacto`

#### Objetivo
Canal de soporte accesible que refuerce la confianza en la marca.

#### Contenido

**[Formulario de Contacto]**
- Campos:
  - Nombre (requerido)
  - Email (requerido)
  - Asunto: dropdown (`Mi pedido`, `Información de producto`, `Colaboraciones`, `Otro`)
  - Mensaje (requerido, máx. 500 caracteres con contador)
- Botón: `Enviar mensaje`
- Confirmación: mensaje inline de éxito (no redirección)

**[Información de Contacto]**
- Email de soporte
- WhatsApp (opcional, botón flotante)
- Horario de atención: lunes a viernes 9–18h (zona horaria local)

**[FAQ Rápido]**
- 4–6 preguntas frecuentes en acordeón
- Temas: envíos, devoluciones, ingredientes, uso correcto

**[Redes Sociales]**
- Íconos: Instagram, TikTok, Pinterest
- Sin Facebook (no alineado con el posicionamiento de la marca)

---

## 4. Sistema de Diseño

### 4.1 Identidad Visual

| Elemento | Especificación |
|---|---|
| Estilo general | Luxury minimal — mucho espacio en blanco, tipografía jerárquica, fotografía editorial |
| Tono visual | Cálido, limpio, sofisticado — paleta neutra con un color acento |

### 4.2 Paleta de Color

| Rol | Color | HEX |
|---|---|---|
| Fondo principal | Blanco roto / crema | `#FAF8F5` |
| Texto principal | Carbón suave | `#1C1C1A` |
| Acento de marca | Verde salvia | `#7A9E7E` |
| Acento secundario | Terracota pálido | `#C8856A` |
| Superficie elevada | Beige claro | `#EDE8E0` |
| Bordes / separadores | Gris arena | `#D9D3CB` |

### 4.3 Tipografía

| Uso | Familia | Peso | Tamaño base |
|---|---|---|---|
| Headlines (H1–H2) | Cormorant Garamond | Regular / Italic | 48–72px |
| Subtítulos (H3–H4) | Cormorant Garamond | SemiBold | 24–36px |
| Cuerpo de texto | Inter o DM Sans | Regular | 16px |
| Labels / UI | Inter | Medium | 12–14px |
| CTA / Botones | Inter | SemiBold | 14–16px (uppercase, letter-spacing: 0.08em) |

### 4.4 Componentes UI

**Botones**
- Primario: fondo color acento + texto blanco, border-radius 2px (casi rectangular, look lujoso)
- Secundario: borde delgado + texto color acento, fondo transparente
- Ghost / Link: solo texto con underline animado en hover

**Espaciado**
- Sistema de 8px (8, 16, 24, 32, 48, 64, 96, 128px)
- Márgenes de contenido: 120px laterales en desktop, 24px en mobile

**Animaciones**
- Transiciones: 300ms ease-in-out
- Hover en imágenes: scale(1.02) suave
- Aparición de secciones: fade-in con slight translateY (scroll reveal)
- Sin animaciones intrusivas ni autoplay con sonido

### 4.5 Fotografía

| Tipo | Descripción |
|---|---|
| Producto hero | Fondo blanco puro, iluminación de estudio, sin sombras duras |
| Lifestyle | Manos sosteniendo el producto, superficies de mármol/madera, luz natural |
| Editorial | Escenas de ritual: mesa de trabajo, baño, viaje — tono cálido y aspiracional |
| Ingredientes | Close-up de plantas, aceites, texturas naturales |

---

## 5. Funcionalidades Técnicas

### 5.1 Shopify Features Requeridas

| Función | Detalle |
|---|---|
| Cart Drawer | Carrito lateral deslizable (no redirección a /cart) |
| Quick Add | Añadir al carrito desde la colección sin entrar al producto |
| Sticky Header | Header fijo al scroll con transición de transparente a blanco |
| Búsqueda predictiva | Resultados en tiempo real con imágenes y precios |
| Moneda / Idioma | Selector (si aplica mercados internacionales) |
| Wishlist | Guardar favoritos (app de terceros o theme feature) |
| Recently Viewed | Productos vistos recientemente en página de producto |

### 5.2 Apps / Integraciones Sugeridas

| App | Función |
|---|---|
| Klaviyo | Email marketing y flujos de abandono de carrito |
| Judge.me / Okendo | Sistema de reseñas verificadas |
| AfterShip / Parcel Panel | Seguimiento de pedidos |
| ReCharge (opcional) | Suscripciones recurrentes |
| Gorgias | Chat de soporte integrado |
| Meta Pixel + GA4 | Analítica y remarketing |

### 5.3 Performance

- Lighthouse Score objetivo: ≥ 85 (mobile)
- Imágenes: formato WebP, lazy loading, tamaños responsivos
- Fonts: preload de Google Fonts o self-hosted
- LCP objetivo: < 2.5s

---

## 6. Experiencia de Compra (UX Flow)

```
Landing → Hero → Ver colección
                       ↓
               Tarjeta de producto
                       ↓
               Página de producto
                       ↓
         Añadir al carrito → Cart Drawer
                       ↓
               Checkout nativo Shopify
                       ↓
         Email de confirmación automático
                       ↓
           Página de seguimiento de pedido
```

### Micro-momentos Clave

| Momento | Acción de Diseño |
|---|---|
| Primera visita | Hero con video/imagen de alta calidad + propuesta de valor clara |
| Duda sobre compra | Trust badges, reseñas y política de devolución visible en producto |
| Abandono de carrito | Popup de exit intent con descuento o envío gratis |
| Post-compra | Email de seguimiento + recomendación de producto complementario |

---

## 7. SEO & Contenido

### 7.1 Estructura de URLs

```
/ 
/collections/todos-los-productos
/products/[nombre-producto-descriptivo]
/pages/sobre-nosotros
/pages/sigue-tu-pedido
/pages/contacto
/blogs/bienestar  (opcional — para SEO de largo plazo)
```

### 7.2 Metadatos por Página

| Página | Meta Title (ejemplo) | Meta Description |
|---|---|---|
| Inicio | `Z!ngha Mx — Inhaladores de Aromaterapia Premium` | "Rituales de bienestar en la palma de tu mano. Descubre nuestra colección de inhaladores naturales." |
| Colección | `Colección Completa — Z!ngha Mx` | "Energía, relajación, enfoque. Encuentra el inhalador que necesitas hoy." |
| Producto | `[Nombre Producto] — Z!ngha Mx` | Descripción con beneficio principal + CTA |

---

## 8. Métricas de Éxito

| KPI | Meta (primeros 90 días) |
|---|---|
| Tasa de conversión | ≥ 2.5% |
| Valor promedio de orden | ≥ $X (definir con datos reales) |
| Bounce rate en homepage | ≤ 55% |
| Tiempo en página de producto | ≥ 2 min |
| Tasa de recuperación de carrito abandonado | ≥ 15% vía email |
| NPS post-compra | ≥ 8 / 10 |

---

## 9. Criterios de Aceptación por Página

### Inicio
- [ ] Hero carga en < 2.5s en mobile
- [ ] CTA primario es visible sin hacer scroll en desktop y mobile
- [ ] Newsletter captura email y muestra confirmación inline

### Productos
- [ ] Filtros funcionan sin recargar la página
- [ ] Quick add funciona desde la vista de colección
- [ ] Galería de producto soporta swipe en mobile
- [ ] Precio de variante actualiza dinámicamente

### Sigue tu Pedido
- [ ] Formulario valida formato de email y número de pedido
- [ ] Respuesta del estado se muestra en < 3 segundos
- [ ] Link a rastreo externo abre en nueva pestaña

### Sobre Nosotros
- [ ] Página carga sin layout shift visible (CLS < 0.1)
- [ ] CTA al catálogo presente y visible

### Contacto
- [ ] Formulario envía sin redirección
- [ ] Validación de campos en cliente (inline, no alert)
- [ ] Horario de atención claramente visible

---

## 10. Fases de Implementación

### Fase 1 — MVP (semanas 1–3)
- Configuración de Shopify + tema base
- Home, Colección, Producto individual
- Checkout funcional
- Integración de pagos (Stripe / PayPal / OXXO)

### Fase 2 — Contenido & Conversión (semanas 4–5)
- Sobre Nosotros, Contacto, Seguimiento de pedido
- Reseñas, Trust badges
- Email de confirmación y seguimiento (Klaviyo)

### Fase 3 — Optimización (semanas 6–8)
- A/B test en hero y CTA
- Recuperación de carrito abandonado
- Optimización de performance y SEO on-page
- Blog (opcional)

---

*Documento preparado para alinear a diseño, desarrollo y contenido en la construcción de la tienda.*
