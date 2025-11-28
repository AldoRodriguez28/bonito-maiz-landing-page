import { useEffect } from 'react';
import { CheckCircle2, X } from 'lucide-react';
import { useCart } from '../context/CartContext';

export function CartSnackbar() {
  const { lastAdded, clearLastAdded } = useCart();

  useEffect(() => {
    if (!lastAdded) return;
    const timer = setTimeout(clearLastAdded, 3500);
    return () => clearTimeout(timer);
  }, [lastAdded, clearLastAdded]);

  if (!lastAdded) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="flex items-start gap-3 bg-[#0A1A4A] text-white px-5 py-4 rounded-2xl shadow-2xl">
        <CheckCircle2 className="text-[#D9A441]" />
        <div>
          <p className="font-semibold">Agregado al carrito</p>
          <p className="text-sm text-white/80">
            {lastAdded.name} · {lastAdded.people} personas · $
            {lastAdded.price.toLocaleString('es-MX')}
          </p>
        </div>
        <button onClick={clearLastAdded} className="text-white/70 hover:text-white">
          <X size={18} />
        </button>
      </div>
    </div>
  );
}
