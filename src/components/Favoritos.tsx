import { ImageWithFallback } from './figma/ImageWithFallback';

export function Favoritos() {
  const productos = [
    {
      id: 1,
      nombre: "Esquites Especiales",
      descripcion: "Maíz tierno con mayonesa, queso cotija, chile piquín y limón. Un clásico irresistible.",
      imagen: "https://images.unsplash.com/photo-1613585270345-5ddf6a78b7af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlc3F1aXRlcyUyMG1leGljYW4lMjBjb3JufGVufDF8fHx8MTc2NDIxODg0Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      id: 2,
      nombre: "Snacks Artesanales",
      descripcion: "Botanas mexicanas preparadas al momento con ingredientes frescos y auténticos.",
      imagen: "https://images.unsplash.com/photo-1698854632942-35b25aab3fa6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZXhpY2FuJTIwc3RyZWV0JTIwZm9vZHxlbnwxfHx8fDE3NjQxNzQ3ODR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      id: 3,
      nombre: "Combos para Eventos",
      descripcion: "Paquetes especiales diseñados para tu fiesta. Variedad, calidad y sabor garantizado.",
      imagen: "https://images.unsplash.com/photo-1609513167827-2d44a82f5f6f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb3VybWV0JTIwc25hY2tzfGVufDF8fHx8MTc2NDIxODg0Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      id: 4,
      nombre: "Papas & Nachos",
      descripcion: "Papas a la francesa y nachos crujientes con toppings especiales y salsas artesanales.",
      imagen: "https://images.unsplash.com/photo-1492102596837-f86a82f4a43e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3JuJTIwa2VybmVscyUyMGdvbGR8ZW58MXx8fHwxNzY0MjE4ODQ0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    }
  ];

  return (
    <section id="menu" className="py-24 lg:py-32 bg-[#FAFAF7]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="h-px w-12 bg-[#D9A441]"></div>
            <span className="mx-4 text-[#D9A441] uppercase tracking-wider text-sm">Nuestro Menú</span>
            <div className="h-px w-12 bg-[#D9A441]"></div>
          </div>
          <h2 className="text-[#0A1A4A] mb-4" style={{ fontFamily: 'Pacifico, cursive' }}>Nuestros Favoritos</h2>
          <p className="text-lg text-[#222222] max-w-2xl mx-auto opacity-80">
            Descubre nuestras especialidades hechas con los mejores ingredientes
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {productos.map((producto) => (
            <div 
              key={producto.id} 
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="relative h-64 overflow-hidden">
                <ImageWithFallback 
                  src={producto.imagen}
                  alt={producto.nombre}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1A4A]/60 to-transparent"></div>
              </div>
              
              <div className="p-6">
                <h4 className="text-[#0A1A4A] mb-3" style={{ fontFamily: 'Pacifico, cursive' }}>{producto.nombre}</h4>
                <p className="text-[#222222] text-sm mb-6 opacity-75">
                  {producto.descripcion}
                </p>
                
                <a 
                  href="https://wa.me/5212281234567?text=Hola%20Bonito%20Maíz,%20me%20interesa:%20" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block w-full text-center px-6 py-3 bg-[#D9A441] text-white rounded-full hover:bg-[#c29037] hover:shadow-lg"
                >
                  Pedir
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
