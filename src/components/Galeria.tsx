import { ImageWithFallback } from './figma/ImageWithFallback';

export function Galeria() {
  const imagenes = [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1613585270345-5ddf6a78b7af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlc3F1aXRlcyUyMG1leGljYW4lMjBjb3JufGVufDF8fHx8MTc2NDIxODg0Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Esquites especiales"
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1698854632942-35b25aab3fa6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZXhpY2FuJTIwc3RyZWV0JTIwZm9vZHxlbnwxfHx8fDE3NjQxNzQ3ODR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Antojitos mexicanos"
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1677676700414-ff5d6302a978?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwZXZlbnQlMjBjYXRlcmluZ3xlbnwxfHx8fDE3NjQyMTg4NDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Catering para eventos"
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1609513167827-2d44a82f5f6f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb3VybWV0JTIwc25hY2tzfGVufDF8fHx8MTc2NDIxODg0Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Snacks gourmet"
    },
    {
      id: 5,
      url: "https://images.unsplash.com/photo-1760331339913-da9637154477?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwcGFydHklMjBldmVudHxlbnwxfHx8fDE3NjQyMTg4NDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Eventos elegantes"
    },
    {
      id: 6,
      url: "https://images.unsplash.com/photo-1665088127661-83aeff6104c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMGluZ3JlZGllbnRzJTIwdmVnZXRhYmxlc3xlbnwxfHx8fDE3NjQyMTg4NDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Ingredientes frescos"
    },
    {
      id: 7,
      url: "https://images.unsplash.com/photo-1706267701248-fbbeeb1f8c7c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZXhpY2FuJTIwZm9vZCUyMHByZXNlbnRhdGlvbnxlbnwxfHx8fDE3NjQyMTg4NDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Presentación gourmet"
    },
    {
      id: 8,
      url: "https://images.unsplash.com/photo-1492102596837-f86a82f4a43e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3JuJTIwa2VybmVscyUyMGdvbGR8ZW58MXx8fHwxNzY0MjE4ODQ0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Maíz dorado"
    },
    {
      id: 9,
      url: "https://images.unsplash.com/photo-1613585270345-5ddf6a78b7af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlc3F1aXRlcyUyMG1leGljYW4lMjBjb3JufGVufDF8fHx8MTc2NDIxODg0Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Nuestros platillos"
    }
  ];

  return (
    <section id="galeria" className="py-24 lg:py-32 bg-[#FAFAF7]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="h-px w-12 bg-[#D9A441]"></div>
            <span className="mx-4 text-[#D9A441] uppercase tracking-wider text-sm">Nuestro Trabajo</span>
            <div className="h-px w-12 bg-[#D9A441]"></div>
          </div>
          <h2 className="text-[#0A1A4A] mb-4" style={{ fontFamily: 'Pacifico, cursive' }}>Galería</h2>
          <p className="text-lg text-[#222222] max-w-2xl mx-auto opacity-80">
            Una muestra de nuestros platillos y eventos realizados
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {imagenes.map((imagen) => (
            <div 
              key={imagen.id}
              className="relative aspect-square rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
            >
              <ImageWithFallback 
                src={imagen.url}
                alt={imagen.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1A4A]/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <p className="text-white p-6 text-sm uppercase tracking-wider">
                  {imagen.alt}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
