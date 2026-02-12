// Utilities for safe thickness arithmetic and formatting

/**
 * Format a thickness value in mm with proper precision
 * @param mm - thickness in millimeters
 * @returns formatted string with 3 decimal places and 'mm' unit
 */
export function formatMm(mm: number): string {
  return `${mm.toFixed(3)} mm`;
}

/**
 * Calculate total thickness from quantities
 * Uses integer arithmetic (in thousandths of mm) to avoid floating point drift
 * @param quantities - map of color to quantity
 * @param shimData - array of shim specifications
 * @returns total thickness in mm
 */
export function calculateTotal(quantities: Record<string, number>, shimData: Array<{ color: string; thickness: number }>): number {
  let totalThousandths = 0;
  
  shimData.forEach(shim => {
    const qty = quantities[shim.color] || 0;
    // Convert to thousandths of mm for integer arithmetic
    const thicknessThousandths = Math.round(shim.thickness * 1000);
    totalThousandths += qty * thicknessThousandths;
  });
  
  // Convert back to mm
  return totalThousandths / 1000;
}

/**
 * Calculate subtotal for a single shim color
 * @param quantity - number of shims
 * @param thickness - thickness per shim in mm
 * @returns subtotal thickness in mm
 */
export function calculateSubtotal(quantity: number, thickness: number): number {
  const thicknessThousandths = Math.round(thickness * 1000);
  return (quantity * thicknessThousandths) / 1000;
}
