import { Minus, Plus } from 'lucide-react';
import { SHIM_DATA } from '@/lib/shimData';
import { formatMm, calculateSubtotal } from '@/lib/formatMm';

interface ShimQuantityTableProps {
  quantities: Record<string, number>;
  onQuantityChange: (color: string, quantity: number) => void;
}

export function ShimQuantityTable({ quantities, onQuantityChange }: ShimQuantityTableProps) {
  const handleIncrement = (color: string) => {
    const current = quantities[color] || 0;
    onQuantityChange(color, current + 1);
  };

  const handleDecrement = (color: string) => {
    const current = quantities[color] || 0;
    if (current > 0) {
      onQuantityChange(color, current - 1);
    }
  };

  const handleInputChange = (color: string, value: string) => {
    const num = parseInt(value, 10);
    if (!isNaN(num) && num >= 0) {
      onQuantityChange(color, num);
    } else if (value === '') {
      onQuantityChange(color, 0);
    }
  };

  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b-2 border-border">
            <th className="px-4 py-3 text-left text-sm font-semibold text-foreground">Color</th>
            <th className="px-4 py-3 text-right text-sm font-semibold text-foreground">Thickness</th>
            <th className="px-4 py-3 text-center text-sm font-semibold text-foreground">Quantity</th>
            <th className="px-4 py-3 text-right text-sm font-semibold text-foreground">Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {SHIM_DATA.map((shim) => {
            const quantity = quantities[shim.color] || 0;
            const subtotal = calculateSubtotal(quantity, shim.thickness);
            
            return (
              <tr key={shim.color} className="border-b border-border hover:bg-accent/50 transition-colors">
                <td className="px-4 py-3">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-6 h-6 rounded-md border-2 border-border shadow-sm"
                      style={{ backgroundColor: shim.displayColor }}
                      title={shim.color}
                    />
                    <span className="text-sm font-medium text-foreground">{shim.color}</span>
                  </div>
                </td>
                <td className="px-4 py-3 text-right text-sm text-muted-foreground tabular-nums">
                  {formatMm(shim.thickness)}
                </td>
                <td className="px-4 py-3">
                  <div className="flex items-center justify-center gap-2">
                    <button
                      onClick={() => handleDecrement(shim.color)}
                      disabled={quantity === 0}
                      className="w-8 h-8 rounded-md bg-secondary hover:bg-secondary/80 disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center transition-colors"
                      aria-label={`Decrease ${shim.color} quantity`}
                    >
                      <Minus className="w-4 h-4 text-secondary-foreground" />
                    </button>
                    <input
                      type="number"
                      min="0"
                      value={quantity}
                      onChange={(e) => handleInputChange(shim.color, e.target.value)}
                      className="w-16 h-8 text-center border border-input rounded-md bg-background text-foreground text-sm tabular-nums focus:outline-none focus:ring-2 focus:ring-ring"
                      aria-label={`${shim.color} quantity`}
                    />
                    <button
                      onClick={() => handleIncrement(shim.color)}
                      className="w-8 h-8 rounded-md bg-secondary hover:bg-secondary/80 flex items-center justify-center transition-colors"
                      aria-label={`Increase ${shim.color} quantity`}
                    >
                      <Plus className="w-4 h-4 text-secondary-foreground" />
                    </button>
                  </div>
                </td>
                <td className="px-4 py-3 text-right text-sm font-medium text-foreground tabular-nums">
                  {formatMm(subtotal)}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
