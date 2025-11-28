import { Trash2 } from 'lucide-react';
import content from '../data/content.json';
import { useCart } from '../context/CartContext';

type CartSummaryProps = {
  compact?: boolean;
};

export function CartSummary({ compact = false }: CartSummaryProps) {
  const { items, total, removeItem } = useCart();

  const whatsappMessage =
    items.length === 0
      ? 'Hola, quiero cotizar una barra de snacks'
      : encodeURIComponent(
          [
            'Hola, quiero confirmar este pedido:',
            ...items.map((item) => {
              const details = [];
              if (item.flavors?.length) details.push(`Sabores: ${item.flavors.join(', ')}`);
              if (item.extras?.length) details.push(`Extras: ${item.extras.join(', ')}`);
              const detailText = details.length ? ` (${details.join(' | ')})` : '';
              return `- ${item.name} • ${item.people} personas${detailText} • $${item.price.toLocaleString(
                'es-MX'
              )} x${item.quantity}\n`;
            }),
            `\nTotal: $${total.toLocaleString('es-MX')}`,
          ].join('\n')
        );

  const whatsappLink = `https://wa.me/${content.contact.whatsappNumber}?text=${whatsappMessage}`;

  return (
    <div
      className={`bg-white rounded-3xl border border-[#D9A441]/15 shadow-md ${
        compact ? 'p-4' : 'p-6'
      }`}
    >
      <div className="flex items-center justify-between mb-4">
        <div>
          <p className="text-sm uppercase tracking-wide text-[#D9A441] font-semibold">Carrito</p>
          <h3 className="text-xl font-semibold text-[#0A1A4A]">Tu selección</h3>
        </div>
        <span className="text-sm text-[#0A1A4A]/70">
          {items.length} {items.length === 1 ? 'barra' : 'barras'}
        </span>
      </div>

      {items.length === 0 ? (
        <p className="text-sm text-[#0A1A4A]/70">Agrega una barra para calcular tu total.</p>
      ) : (
        <div className="space-y-4">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex items-start justify-between p-4 rounded-2xl bg-[#FAFAF7] border border-[#D9A441]/10"
            >
              <div className="space-y-1">
                <p className="font-semibold text-[#0A1A4A]">{item.name}</p>
                <p className="text-sm text-[#0A1A4A]/70">
                  {item.people} personas · {item.quantity}x
                </p>
                {(item.flavors?.length || item.extras?.length) && (
                  <p className="text-xs text-[#0A1A4A]/70">
                    {item.flavors?.length ? `Sabores: ${item.flavors.join(', ')}` : ''}
                    {item.flavors?.length && item.extras?.length ? ' · ' : ''}
                    {item.extras?.length ? `Extras: ${item.extras.join(', ')}` : ''}
                  </p>
                )}
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
          ))}

          <div className="flex items-center justify-between pt-2 border-t border-[#D9A441]/10">
            <span className="text-[#0A1A4A] font-semibold">Total estimado</span>
            <span className="text-lg font-bold text-[#D9A441]">
              ${total.toLocaleString('es-MX')}
            </span>
          </div>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex justify-center items-center w-full px-4 py-3 bg-[#D9A441] text-white rounded-full hover:bg-[#c29037] transition-colors font-semibold"
          >
            Enviar pedido por WhatsApp
          </a>
        </div>
      )}
    </div>
  );
}
