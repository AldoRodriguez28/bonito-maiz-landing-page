import { Star } from 'lucide-react';

export function Testimonios() {
  const testimonios = [
    {
      id: 1,
      nombre: "María González",
      evento: "Boda",
      comentario: "Los esquites fueron el hit de nuestra boda. Todos los invitados quedaron encantados con el sabor y la presentación. ¡Totalmente recomendados!",
      foto: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop"
    },
    {
      id: 2,
      nombre: "Carlos Hernández",
      evento: "XV Años",
      comentario: "El servicio fue impecable. La variedad de snacks y la calidad de los productos hicieron que los XV años de mi hija fueran inolvidables.",
      foto: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop"
    },
    {
      id: 3,
      nombre: "Ana Martínez",
      evento: "Evento Corporativo",
      comentario: "Contratamos a Bonito Maíz para nuestro evento corporativo y superaron nuestras expectativas. Profesionalismo y sabor excepcional.",
      foto: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop"
    }
  ];

  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="h-px w-12 bg-[#D9A441]"></div>
            <span className="mx-4 text-[#D9A441] uppercase tracking-wider text-sm">Experiencias</span>
            <div className="h-px w-12 bg-[#D9A441]"></div>
          </div>
          <h2 className="text-[#0A1A4A] mb-4" style={{ fontFamily: 'Pacifico, cursive' }}>Lo que dicen nuestros clientes</h2>
          <p className="text-lg text-[#222222] max-w-2xl mx-auto opacity-80">
            La satisfacción de nuestros clientes es nuestra mejor carta de presentación
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonios.map((testimonio) => (
            <div 
              key={testimonio.id}
              className="bg-[#FAFAF7] rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} className="fill-[#D9A441] text-[#D9A441]" />
                ))}
              </div>

              {/* Comment */}
              <p className="text-[#222222] mb-6 leading-relaxed text-sm italic">
                "{testimonio.comentario}"
              </p>

              {/* Client Info */}
              <div className="flex items-center gap-4 pt-6 border-t border-[#D9A441]/20">
                <div className="w-14 h-14 rounded-full overflow-hidden bg-[#D9A441]/20">
                  <img 
                    src={testimonio.foto}
                    alt={testimonio.nombre}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h5 className="text-[#0A1A4A]">{testimonio.nombre}</h5>
                  <p className="text-[#222222] text-sm opacity-60">{testimonio.evento}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
