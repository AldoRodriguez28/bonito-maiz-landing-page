import { ArrowRight } from 'lucide-react';
import content from '../data/content.json';
import { CartSummary } from './CartSummary';
import { SNACK_BARS } from '../data/snackBars';

export function Pedidos() {
  const whatsappLink = `https://wa.me/${content.contact.whatsappNumber}?text=${encodeURIComponent('Hola, quiero cotizar una barra de snacks')}`;

  return (
    <section id="pedidos" className="py-24 lg:py-32 bg-[#FAFAF7]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="h-px w-12 bg-[#D9A441]" />
            <span className="mx-4 text-[#D9A441] uppercase tracking-wider text-sm">Pedidos</span>
            <div className="h-px w-12 bg-[#D9A441]" />
          </div>
          <h2 className="text-[#0A1A4A] mb-4" style={{ fontFamily: 'Pacifico, cursive' }}>
            {content.orders.title}
          </h2>
          <p className="text-lg text-[#222222] max-w-2xl mx-auto opacity-80">
            {content.orders.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
          {/* Cart summary */}
          <CartSummary />

          {/* Bars */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {SNACK_BARS.map((bar) => (
              <div
                key={bar.name}
                className="bg-white rounded-3xl p-6 shadow-md border border-[#D9A441]/10 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-[#0A1A4A] text-xl" style={{ fontFamily: 'Pacifico, cursive' }}>
                    {bar.name}
                  </h4>
                  <span className="text-xs uppercase tracking-wide text-[#D9A441]">
                    Precios escalados
                  </span>
                </div>
                <p className="text-[#222222] opacity-75 text-sm leading-relaxed mb-4">{bar.description}</p>
                {bar.tiers[0] && (
                  <p className="text-sm font-semibold text-[#0A1A4A] mb-4">
                    Desde ${bar.tiers[0].price.toLocaleString('es-MX')} · {bar.tiers[0].people} personas
                  </p>
                )}
                <a
                  href={`/barra/${bar.slug}`}
                  className="inline-flex items-center gap-2 text-[#D9A441] font-semibold hover:gap-3 transition-all"
                >
                  Ver precios y agregar <ArrowRight size={16} />
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 bg-[#D9A441] text-white rounded-full hover:bg-[#c29037] hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            Cotizar mi barra
          </a>
        </div>
      </div>
    </section>
  );
}
