import { Heart, Cake, Sparkles, Users } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import content from '../data/content.json';

export function Eventos() {
  const categorias = [
    {
      id: 1,
      titulo: "Bodas",
      icono: Heart,
      descripcion: "Endulza tu día especial"
    },
    {
      id: 2,
      titulo: "XV Años",
      icono: Cake,
      descripcion: "Celebra con sabor único"
    },
    {
      id: 3,
      titulo: "Bautizos",
      icono: Sparkles,
      descripcion: "Momentos memorables"
    },
    {
      id: 4,
      titulo: "Fiestas Privadas",
      icono: Users,
      descripcion: "Eventos inolvidables"
    }
  ];

  return (
    <section id="eventos" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Banner with Image */}
        <div className="relative h-[400px] lg:h-[500px] rounded-3xl overflow-hidden mb-16 shadow-2xl">
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1677676700414-ff5d6302a978?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwZXZlbnQlMjBjYXRlcmluZ3xlbnwxfHx8fDE3NjQyMTg4NDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Eventos y Catering"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A1A4A]/90 to-[#0A1A4A]/60 flex items-center">
            <div className="max-w-2xl px-8 lg:px-16">
              <div className="h-1 w-16 bg-[#D9A441] mb-6"></div>
              <h2 className="text-white mb-4" style={{ fontFamily: 'Pacifico, cursive' }}>
                Perfecto para tus eventos
              </h2>
              <p className="text-xl text-[#FAFAF7] opacity-90">
                Llevamos sabor auténtico y servicio profesional a cada celebración
              </p>
            </div>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {categorias.map((categoria) => {
            const IconComponent = categoria.icono;
            return (
              <div 
                key={categoria.id}
                className="bg-[#FAFAF7] rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="w-20 h-20 mx-auto mb-6 bg-white rounded-full flex items-center justify-center shadow-md group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                  <IconComponent size={36} className="text-[#D9A441]" />
                </div>
                <h4 className="text-[#0A1A4A] mb-2" style={{ fontFamily: 'Pacifico, cursive' }}>
                  {categoria.titulo}
                </h4>
                <p className="text-[#222222] text-sm opacity-75">
                  {categoria.descripcion}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <p className="text-lg text-[#222222] mb-6 opacity-80">
            {content.events.ctaMessage}
          </p>
          <a 
            href={`https://wa.me/${content.contact.whatsappNumber}?text=${encodeURIComponent(content.events.ctaWhatsappMessage)}`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 bg-[#D9A441] text-white rounded-full hover:bg-[#c29037] hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            {content.events.ctaButton}
          </a>
        </div>
      </div>
    </section>
  );
}
