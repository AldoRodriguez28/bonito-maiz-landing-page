import content from '../data/content.json';

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
          {/* Tiered pricing */}
          <div className="lg:col-span-1 bg-white rounded-3xl shadow-lg p-8 border border-[#D9A441]/15">
            <h3 className="text-[#0A1A4A] mb-4" style={{ fontFamily: 'Pacifico, cursive' }}>
              Paquetes por número de invitados
            </h3>
            <div className="space-y-4">
              {content.orders.tiers.map((tier) => (
                <div
                  key={tier.pax}
                  className="flex items-center justify-between p-4 rounded-2xl bg-[#FAFAF7] border border-[#D9A441]/10"
                >
                  <span className="text-[#0A1A4A] font-semibold">{tier.pax}</span>
                  <span className="text-[#D9A441] font-bold">{tier.price}</span>
                </div>
              ))}
            </div>
            <p className="text-sm text-[#222222] opacity-70 mt-4">{content.orders.note}</p>
          </div>

          {/* Bars */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {content.orders.bars.map((bar) => (
              <div
                key={bar.name}
                className="bg-white rounded-3xl p-6 shadow-md border border-[#D9A441]/10 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-[#0A1A4A]" style={{ fontFamily: 'Pacifico, cursive' }}>
                    {bar.name}
                  </h4>
                </div>
                <p className="text-[#222222] opacity-75 text-sm leading-relaxed">{bar.description}</p>
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
