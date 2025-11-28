# Plan para la página “Armar tu paquete” (barra de snack)

## Objetivo
Crear una página dedicada donde el usuario pueda:
- Elegir la barra de snack.
- Seleccionar número de personas para esa barra.
- Elegir sabores/complementos.
- Confirmar pedido por WhatsApp o seguir comprando (añadir otra barra).

## Tareas principales
1) **Definir la ruta y acceso**
   - Crear/usar ruta `/:tipo` (ej. `/barra/marquesitas` ya existente) o una nueva ruta dedicada (ej. `/armar-paquete`).
   - Garantizar fallback SPA (ya hay 404.html en build); validar que funcione en deploy.

2) **Estructura de datos**
   - Extender `SNACK_BARS` con campos para `sabores` y `complementos` (opciones seleccionables).
   - Añadir tipos para las selecciones en el carrito (ej. `selectedFlavors`, `selectedExtras`).

3) **UI de selección**
   - Sección “Elige tu barra” (grid con barras y CTA “Armar”).
   - Sección “Selecciona personas” (tiers por personas y precio; reusar lógica actual).
   - Sección “Selecciona sabores y complementos” (checkboxes o pills seleccionables; permitir múltiples).

4) **Flujo de carrito**
   - Al agregar: enviar al carrito objeto con slug, nombre, personas, precio, sabores/complementos seleccionados, cantidad.
   - Botones: “Confirmar pedido por WhatsApp” (genera link con detalles) y “Seguir comprando” (cerrar sidebar o redirigir a catálogo).
   - Asegurar que `CartSidebar` y `CartSummary` muestren sabores/complementos.
   - Persistencia: ya se guarda en localStorage; mantener.

5) **WhatsApp**
   - Incluir en el mensaje: barra, personas, sabores, complementos, cantidad, total.

6) **Estilo y usabilidad**
   - Mantener layout responsive; agregar scroll en secciones largas.
   - Validar que el botón inferior siempre sea visible (sidebar y página).

7) **Testing rápido**
   - Flujos: agregar barra con sabores/complementos, ver en sidebar y resumen, enviar WhatsApp, seguir comprando.
   - Rutas directas (ej. `/barra/marquesitas`) y deploy (GH Pages).

## Entregables
- Nueva/ajustada página de armado de paquete con secciones descritas.
- Datos extendidos (`SNACK_BARS`) con sabores/complementos.
- Carrito y WhatsApp mostrando detalles seleccionados.
- Verificación en ruta directa y en GitHub Pages.
