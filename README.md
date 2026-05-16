# 🪐 COVENANT | Hardware & Systems

¡Bienvenido a **COVENANT**! Una plataforma web de comercio electrónico y servicios de laboratorio de vanguardia orientada al hardware de grado entusiasta, estaciones de trabajo de alto rendimiento e ingeniería de hardware personalizada.

Este proyecto ha sido desarrollado como una **Landing Page interactiva y catálogo premium** para la presentación del proyecto de Desarrollo de Aplicaciones Web.

---
## Descripción general del sitio

### Propósito

El propósito del sitio es presentar a COVENANT como una marca élite especializada en estaciones de trabajo y componentes de PC de altísima gama. La página funciona como un catálogo digital e informativo donde el usuario puede conocer los productos en stock, revisar las soluciones según su flujo de trabajo, entender los servicios de laboratorio técnico y contactar a la marca para solicitar una cotización a medida.

### Público objetivo

El sitio está dirigido a profesionales e instituciones con alta demanda de procesamiento computacional. Su público principal incluye ingenieros de Machine Learning e Inteligencia Artificial, arquitectos, creadores de contenido (render 3D), gamers competitivos e individuos que buscan el máximo rendimiento tecnológico sin compromisos ni cuellos de botella.

### Alcance

Este proyecto corresponde a una página web estática desarrollada en un solo archivo `index.html`. Incluye estructura HTML, estilos avanzados con Tailwind CSS (vía CDN), animaciones CSS personalizadas y diseño responsivo. No incluye backend, base de datos, pasarela de pagos, ni carrito funcional conectado a un sistema real.

---

## URL del sitio desplegado

```text
https://Gabrielmv22.github.io
```
---

## 🚀 Características Principales

* **Estética Cyber-Tech:** Interfaz oscura con acentos futuristas basados en colores personalizados (`cyber-blue`, `accent-cyan`, y `card-bg`).
* **Diseño 100% Responsivo:** Optimización completa para dispositivos móviles, tablets y pantallas de escritorio mediante rejillas dinámicas de Tailwind.
* **Efectos Visuales Avanzados:** * *Efecto Glitch/Brillo* en botones principales al pasar el cursor.
    * *Marquee Infinito:* Cintas animadas de texto deslizante para ofertas y anuncios.
    * Tarjetas de productos con animaciones fluidas basadas en curvas Bézier (`translate-Y`, desenfoques y sombras de neón).
* **Estructura Monopágina (SPA):** Navegación fluida (`scroll-smooth`) dividida en 5 secciones estratégicas:
    1.  `#inicio` - Hero Section con propuesta de valor e imágenes dinámicas.
    2.  `#soluciones` - Segmentación por carga de trabajo (IA, Render 3D, Gaming).
    3.  `#inventario` - Carrusel interactivo con productos de gama alta.
    4.  `#servicios` - Listado de servicios de laboratorio de hardware avanzado.
    5.  `#contacto` - Formulario y canales de cotización corporativa.

---

## 🛠️ Tecnologías Utilizadas

El proyecto fue construido utilizando un stack puramente enfocado en la optimización del rendimiento del lado del cliente (Client-Side Performance):

| Tecnología | Uso / Rol en el Proyecto |
| :--- | :--- |
| **HTML5** | Estructura semántica del sitio y maquetación de secciones. |
| **Tailwind CSS** | Framework de estilos basado en utilidades para el diseño rápido y responsivo. |
| **JavaScript (JIT Config)** | Inyección y extensión de la configuración del tema de Tailwind directo en el navegador. |
| **Google Fonts** | Tipografía híbrida utilizando *Plus Jakarta Sans* para legibilidad y *Space Mono* para el estilo de código/ingeniería. |

---

## 🎨 Personalización del Tema (Tailwind Config)

El diseño cuenta con una extensión de paleta de colores y fuentes configurada directamente en el archivo para asegurar la consistencia de la marca:

```javascript
tailwind.config = {
  theme: {
    extend: {
      colors: {
        'cyber-blue': '#0066FF',
        'dark-bg': '#050505',
        'card-bg': '#0F0F12',
        'accent-cyan': '#00f2ff'
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'sans-serif'],
        mono: ['Space Mono', 'monospace'],
      }
    }
  }
}
```

## ## Características principales

### Diseño y estética

- Paleta oscura "Cyber-Tech" con fondo profundo (`#050505`), acentos en azul neón (`#0066FF`) y cian (`#00f2ff`).
- Tipografía híbrida utilizando Google Fonts: `Plus Jakarta Sans` para legibilidad moderna y `Space Mono` para un toque de ingeniería/código.
- Efectos visuales como Glassmorphism (desenfoque en la navegación), degradados radiales, botones con efecto "glitch" y tarjetas de producto con bordes y sombras de neón al interactuar.
- Imágenes en escala de grises que recuperan el color al pasar el cursor, dando una sensación de activación de hardware.

### Navegación principal

El sitio incluye una barra superior fija translúcida (efecto blur) con navegación fluida hacia las secciones principales:

- Inicio
- Workstations
- Componentes
- Laboratorio
- Cotizar

También incluye un botón interactivo para desplegar un menú secundario o carrito de compras.

### Secciones del sitio

| # | Sección | Descripción |
|---|---------|-------------|
| 01 | Header / Hero | Presenta el mensaje principal: "Hardware de Grado Entusiasta", junto con botones de acción rápida. |
| 02 | Soluciones | Segmentación de configuraciones optimizadas por demanda (Machine Learning, Render 3D, Gaming). |
| 03 | Marquee | Cintas de texto animadas con desplazamiento infinito anunciando ofertas y características premium. |
| 04 | Inventario | Catálogo en formato de carrusel horizontal interactivo mostrando el hardware en stock. |
| 05 | Servicios | Lista enumerada de procedimientos técnicos avanzados (Silicon Binning, Delid Térmico, Custom Loops). |
| 06 | Contacto | Panel final para cotizaciones de sistemas y ventas corporativas con correos directos. |

---

## Productos representados en el catálogo

| Producto | Tipo | Características | Precio mostrado |
|---|---|---|---|
| MSI GeForce RTX 4090 SUPRIM X | GPU | 24GB GDDR6X, DLSS 3 | $2,199 |
| Intel Core i9-14900K | CPU | 24 Núcleos, Hasta 6.0 GHz | $649 |
| ASUS ROG MAXIMUS Z790 HERO | Placa Base | Socket 1700, WiFi 7, PCIe 5.0 | $749 |
| Corsair Dominator Platinum RGB | RAM | 64GB (2x32) DDR5 6000MHz | $289 |
| NZXT Kraken Elite 360 RGB | Refrigeración | Líquida 360mm, Pantalla LCD | $299 |

---

## Tecnologías utilizadas

- **HTML5** para la estructura semántica de la interfaz.
- **Tailwind CSS (vía JIT/CDN)** para estilos rápidos, diseño basado en utilidades y grillas responsivas.
- **CSS3 Personalizado (`<style>`)** para animaciones `@keyframes`, ocultación de barras de desplazamiento y efectos hover complejos.
- **Google Fonts** para las tipografías `Plus Jakarta Sans` y `Space Mono`.

---

## Estructura del proyecto

```text
COVENANT/
├── index.html
├── README.md
└── assets/
    └── screenshot-covenant.png
```

## Cómo abrir el proyecto localmente

El proyecto no requiere instalación de dependencias pesadas ni Node.js. Solo se debe abrir el archivo `index.html` en cualquier navegador moderno.

En Windows / Linux / macOS:
Simplemente haz doble clic sobre el archivo `index.html`.

*(Se recomienda conexión a internet activa para cargar el CDN de Tailwind, las fuentes de Google y las imágenes de Unsplash).*

---

## Interactividad

El sitio incluye interacciones dinámicas mediante CSS puro y utilidades de Tailwind:

- Animación en bucle (`ping`) en el indicador de inventario actualizado.
- Cintas de texto con desplazamiento horizontal infinito (`animate-marquee`).
- Carrusel de productos con comportamiento `snap-mandatory` para un deslizamiento horizontal perfecto y centrado.
- Efecto "Glitch" programado mediante pseudo-elementos (`::after`) en los botones principales.
- Transiciones suaves de escala y desenfoque de imágenes en las tarjetas de producto.

---

## Diseño responsivo

La aplicación utiliza los puntos de quiebre (breakpoints) de Tailwind (`md`, `lg`) para adaptar la interfaz. En dispositivos móviles:

- La navegación superior de texto se oculta.
- La sección *Hero* pasa de dos columnas a una.
- Las tarjetas de soluciones especializadas y servicios de laboratorio se apilan verticalmente.
- El carrusel de productos ajusta su tamaño base (`min-w-[85vw]`) para garantizar la correcta visualización en pantallas reducidas.

---

## Autor

Proyecto desarrollado por **[Tu Nombre/Usuario aquí]**.

---

## Estado del proyecto

Proyecto académico para la presentación de **Desarrollo de Aplicación Web**.  
Estado actual: maquetación estática finalizada y lista para presentación.

---

© 2026 COVENANT
