# 🪐 COVENANT | High-End Hardware & Systems

¡Bienvenido a **COVENANT**! Una plataforma web de comercio electrónico y servicios de laboratorio de vanguardia orientada al hardware de grado entusiasta, estaciones de trabajo de alto rendimiento e ingeniería de hardware personalizada.

Este proyecto ha sido desarrollado como una **Landing Page interactiva y catálogo premium** para la presentación del proyecto de Desarrollo de Aplicaciones Web.

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
