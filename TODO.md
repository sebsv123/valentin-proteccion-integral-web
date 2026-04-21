# TODO - Tareas pendientes

## Pasar prop `defaultProduct` al formulario de contacto en CasesAndForm

**Descripción:** El componente `CasesAndForm` en `components/product-sections.tsx` actualmente solo recibe la prop `product`, pero no tiene la capacidad de preseleccionar un producto específico en el formulario de contacto.

**Caso de uso:** En la landing de producto `/seguros/[slug]/page.tsx`, cuando el usuario llega a la página de un producto específico (ej: `viaje`), el formulario de contacto debería tener preseleccionada esa opción para facilitar la conversión.

**Implementación sugerida:**
1. Añadir prop opcional `defaultProduct?: string` al componente `CasesAndForm`
2. Pasar `defaultProduct={product.label}` o `defaultProduct={product.slug}` desde `[slug]/page.tsx`
3. Usar esa prop para preseleccionar el valor en el `<select>` del formulario

**Archivos afectados:**
- `components/product-sections.tsx` - Componente CasesAndForm
- `app/seguros/[slug]/page.tsx` - Llamada al componente CasesAndForm

**Prioridad:** Media

**Impacto:** Afecta a todas las landing de producto y mejora la experiencia de usuario al preseleccionar el producto relevante.

---

*Creado: 21 Abril 2026*
