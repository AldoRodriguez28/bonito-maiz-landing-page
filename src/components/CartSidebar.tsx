import { useMemo } from 'react';
import { X, Trash2, ShoppingBag } from 'lucide-react';
import content from '../data/content.json';
import { useCart } from '../context/CartContext';

export function CartSidebar() {
  const { items, total, removeItem, isOpen, closeCart } = useCart();

  const whatsappMessage = useMemo(() => {
    if (items.length === 0) return 'Hola, quiero cotizar una barra de snacks';
    const lines = items
      .map(
        (item) =>
          `${item.name} • ${item.people} personas • $${item.price.toLocaleString('es-MX')} (x${item.quantity
          })`
      )
      .join('%0A');
    return `Hola, quiero confirmar este pedido:%0A${lines}%0ATotal: $${total.toLocaleString('es-MX')}`;
  }, [items, total]);

  const whatsappLink = `https://wa.me/${content.contact.whatsappNumber}?text=${whatsappMessage}`;

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
        onClick={closeCart}
      />

      {/* Sidebar */}
      <aside
        className={`fixed top-0 right-0 h-full bg-white z-50 shadow-2xl transition-all duration-300 ${isOpen
          ? 'translate-x-0 sm:w-full xs:w-full md:w-1/3 lg:w-1/3 xl:w-1/3 2xl:w-1/3'
          : 'translate-x-full w-0 md:w-0 lg:w-0 xl:w-0 2xl:w-0'
          }`}
        aria-hidden={!isOpen}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-[#D9A441]/20">
          <div>
            <p className="text-xs uppercase tracking-wide text-[#D9A441] font-semibold">Carrito</p>
            <h3 className="text-xl font-semibold text-[#0A1A4A]">Tu selección</h3>
          </div>
          <button onClick={closeCart} className="text-[#0A1A4A] hover:text-[#D9A441]">
            <X size={22} />
          </button>
        </div>

        <div className="h-full flex flex-col">
          <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center text-center text-[#0A1A4A]/70 py-12">
                <ShoppingBag size={32} className="text-[#D9A441] mb-3" />
                <p className="font-semibold text-[#0A1A4A]">Tu carrito está vacío</p>
                <p className="text-sm">Agrega una barra para comenzar tu pedido.</p>
              </div>
            ) : (
              items.map((item) => (
                <div
                  key={item.id}
                  className="flex items-start justify-between p-4 rounded-2xl bg-[#FAFAF7] border border-[#D9A441]/10"
                >
                  <div>
                    <p className="font-semibold text-[#0A1A4A]">{item.name}</p>
                    <p className="text-sm text-[#0A1A4A]/70">
                      {item.people} personas · {item.quantity}x
                    </p>
                    <p className="font-semibold text-[#D9A441]">
                      ${item.price.toLocaleString('es-MX')}
                    </p>
                  </div>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-[#0A1A4A]/50 hover:text-[#D9A441] transition-colors"
                    aria-label="Eliminar del carrito"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              ))
            )}
          </div>

          <div className="border-t border-[#D9A441]/10 p-6 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-[#0A1A4A]/70">Total estimado</span>
              <span className="text-xl font-bold text-[#D9A441]">
                ${total.toLocaleString('es-MX')}
              </span>
            </div>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex justify-center items-center px-4 py-3 bg-[#D9A441] text-white rounded-full hover:bg-[#c29037] transition-colors font-semibold disabled:opacity-50"
              onClick={closeCart}
            >
              Confirmar pedido en WhatsApp
            </a>
          </div>
        </div>
      </aside>
    </>
  );
}
