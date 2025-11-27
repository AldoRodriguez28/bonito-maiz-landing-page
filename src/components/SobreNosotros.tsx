import { ImageWithFallback } from './figma/ImageWithFallback';

export function SobreNosotros() {
  return (
    <section id="nosotros" className="py-24 lg:py-32 bg-[#FAFAF7]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1706267701248-fbbeeb1f8c7c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZXhpY2FuJTIwZm9vZCUyMHByZXNlbnRhdGlvbnxlbnwxfHx8fDE3NjQyMTg4NDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Bonito Maíz"
                className="w-full h-[500px] object-cover"
              />
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-4 border-[#D9A441] rounded-3xl -z-10"></div>
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#D9A441] rounded-full -z-10 opacity-20"></div>
          </div>

          {/* Content */}
          <div>
            <div className="flex items-center mb-6">
              <div className="h-px w-12 bg-[#D9A441]"></div>
              <span className="mx-4 text-[#D9A441] uppercase tracking-wider text-sm">Quiénes Somos</span>
            </div>
            
            <h2 className="text-[#0A1A4A] mb-6" style={{ fontFamily: 'Pacifico, cursive' }}>
              Nuestra Historia
            </h2>

            <div className="space-y-6">
              <p className="text-[#222222] leading-relaxed">
                En <span className="text-[#D9A441]" style={{ fontFamily: 'Pacifico, cursive' }}>Bonito Maíz</span> creemos en los antojitos que unen y en el maíz como identidad mexicana. Somos una marca veracruzana dedicada a llevar sabor y buena vibra a tus eventos.
              </p>

              <p className="text-[#222222] leading-relaxed">
                Cada esquite, cada snack y cada detalle está pensado para crear momentos especiales. Trabajamos con ingredientes de la más alta calidad y ponemos amor en cada preparación.
              </p>

              <p className="text-[#222222] leading-relaxed">
                Nuestro compromiso es hacer de tu evento una experiencia gastronómica única, donde la tradición mexicana se encuentra con la presentación moderna y el servicio profesional.
              </p>

              {/* Decorative Line */}
              <div className="flex items-center gap-4 pt-4">
                <div className="h-1 w-16 bg-[#D9A441]"></div>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 3 L14 6 L17 5 L18 8 L21 9 L19 12 L21 15 L18 16 L17 19 L14 18 L12 21 L10 18 L7 19 L6 16 L3 15 L5 12 L3 9 L6 8 L7 5 L10 6 L12 3Z" fill="#D9A441"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
