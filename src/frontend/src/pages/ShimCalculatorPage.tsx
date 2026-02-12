import { useState } from 'react';
import { RotateCcw } from 'lucide-react';
import { ShimQuantityTable } from '@/components/ShimQuantityTable';
import { SHIM_DATA } from '@/lib/shimData';
import { formatMm, calculateTotal } from '@/lib/formatMm';

export function ShimCalculatorPage() {
  const [quantities, setQuantities] = useState<Record<string, number>>(() => {
    const initial: Record<string, number> = {};
    SHIM_DATA.forEach(shim => {
      initial[shim.color] = 0;
    });
    return initial;
  });

  const handleQuantityChange = (color: string, quantity: number) => {
    setQuantities(prev => ({
      ...prev,
      [color]: quantity
    }));
  };

  const handleReset = () => {
    const reset: Record<string, number> = {};
    SHIM_DATA.forEach(shim => {
      reset[shim.color] = 0;
    });
    setQuantities(reset);
  };

  const totalThickness = calculateTotal(quantities, SHIM_DATA);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-foreground">Shim Size Calculator</h1>
          <p className="text-sm text-muted-foreground mt-1">
            Calculate total thickness by selecting shim quantities
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-5xl mx-auto space-y-6">
          {/* Total Display Card */}
          <div className="bg-card border border-border rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg font-semibold text-foreground mb-1">Total Thickness</h2>
                <p className="text-4xl font-bold text-primary tabular-nums">
                  {formatMm(totalThickness)}
                </p>
              </div>
              <button
                onClick={handleReset}
                className="flex items-center gap-2 px-4 py-2 bg-secondary hover:bg-secondary/80 text-secondary-foreground rounded-md transition-colors font-medium"
                aria-label="Reset all quantities"
              >
                <RotateCcw className="w-4 h-4" />
                Reset
              </button>
            </div>
          </div>

          {/* Shim Table Card */}
          <div className="bg-card border border-border rounded-lg shadow-md overflow-hidden">
            <div className="px-6 py-4 border-b border-border">
              <h2 className="text-lg font-semibold text-foreground">Shim Selection</h2>
              <p className="text-sm text-muted-foreground mt-1">
                Adjust quantities to calculate your total shim stack thickness
              </p>
            </div>
            <div className="p-6">
              <ShimQuantityTable
                quantities={quantities}
                onQuantityChange={handleQuantityChange}
              />
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-card mt-16">
        <div className="container mx-auto px-4 py-6">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Built with love using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(
                typeof window !== 'undefined' ? window.location.hostname : 'shim-calculator'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline font-medium"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
