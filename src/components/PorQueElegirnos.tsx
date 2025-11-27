import { Leaf, Award, Sparkles, Smile } from 'lucide-react';

export function PorQueElegirnos() {
  const razones = [
    {
      id: 1,
      titulo: "Ingredientes Frescos",
      descripcion: "Seleccionamos cada ingrediente con cuidado para garantizar calidad suprema",
      icono: Leaf
    },
    {
      id: 2,
      titulo: "Sabor Auténtico",
      descripcion: "Recetas tradicionales mexicanas con un toque contemporáneo",
      icono: Award
    },
    {
      id: 3,
      titulo: "Presentación Elegante",
      descripcion: "Cada detalle cuenta para crear una experiencia visual única",
      icono: Sparkles
    },
    {
      id: 4,
      titulo: "Servicio Profesional",
      descripcion: "Atención personalizada que supera tus expectativas",
      icono: Smile
    }
  ];

  return (
    <section className="py-24 lg:py-32 bg-[#0A1A4A] relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#D9A441] opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#D9A441] opacity-5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="h-px w-12 bg-[#D9A441]"></div>
            <span className="mx-4 text-[#D9A441] uppercase tracking-wider text-sm">Nuestra Diferencia</span>
            <div className="h-px w-12 bg-[#D9A441]"></div>
          </div>
          <h2 className="text-white mb-4" style={{ fontFamily: 'Pacifico, cursive' }}>¿Por qué elegirnos?</h2>
          <p className="text-lg text-[#FAFAF7] max-w-2xl mx-auto opacity-80">
            Nos distinguimos por nuestro compromiso con la excelencia en cada detalle
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {razones.map((razon) => {
            const IconComponent = razon.icono;
            return (
              <div key={razon.id} className="text-center group">
                <div className="w-24 h-24 mx-auto mb-6 bg-[#D9A441]/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-[#D9A441]/20 group-hover:bg-[#D9A441]/20 group-hover:scale-110 transition-all duration-300">
                  <IconComponent size={40} className="text-[#D9A441]" />
                </div>
                <h4 className="text-white mb-3 text-xl" style={{ fontFamily: 'Pacifico, cursive' }}>
                  {razon.titulo}
                </h4>
                <p className="text-[#FAFAF7] text-sm opacity-75 leading-relaxed">
                  {razon.descripcion}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
