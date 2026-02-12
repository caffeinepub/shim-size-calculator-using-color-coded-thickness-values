# Specification

## Summary
**Goal:** Provide a simple shim stack thickness calculator based on the color-to-thickness chart shown in the uploaded image.

**Planned changes:**
- Build a calculator page showing all 13 shim colors in a list/table with their fixed thickness (mm) and a quantity control (min 0) per color.
- Hardcode the color → thickness mapping and compute totals as `sum(quantity × thickness)` across all colors.
- Display per-color subtotals (quantity × mm) and a running overall total, both labeled in mm with sensible rounding (at least to 3 decimal places).
- Add controls to increment/decrement quantities and a reset action that sets all quantities (and totals/subtotals) back to 0.
- Apply a coherent, accessible visual theme across the page that is not primarily blue/purple.

**User-visible outcome:** Users can enter quantities for each shim color, see each row’s subtotal and the live-updating total stack thickness in millimeters, and reset the calculator to start over.
