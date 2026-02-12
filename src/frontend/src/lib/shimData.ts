// Canonical shim color-to-thickness mapping from the product specification
export interface Shim {
  color: string;
  thickness: number; // in mm
  displayColor: string; // CSS color for visual representation
}

export const SHIM_DATA: Shim[] = [
  { color: 'Amber', thickness: 0.025, displayColor: '#FFBF00' },
  { color: 'Purple', thickness: 0.038, displayColor: '#9333EA' },
  { color: 'Red', thickness: 0.051, displayColor: '#DC2626' },
  { color: 'Green', thickness: 0.076, displayColor: '#16A34A' },
  { color: 'Tan', thickness: 0.102, displayColor: '#D2B48C' },
  { color: 'Blue', thickness: 0.127, displayColor: '#2563EB' },
  { color: 'Matte', thickness: 0.191, displayColor: '#9CA3AF' },
  { color: 'Brown', thickness: 0.254, displayColor: '#92400E' },
  { color: 'Black', thickness: 0.318, displayColor: '#1F2937' },
  { color: 'Pink', thickness: 0.381, displayColor: '#EC4899' },
  { color: 'Yellow', thickness: 0.508, displayColor: '#EAB308' },
  { color: 'White', thickness: 0.635, displayColor: '#F3F4F6' },
  { color: 'Coral', thickness: 0.762, displayColor: '#FF7F50' }
];
