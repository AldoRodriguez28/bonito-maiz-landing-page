import { ImageWithFallback } from './figma/ImageWithFallback';
import { useCart } from '../context/CartContext';
import { SNACK_BARS } from '../data/snackBars';

export function Favoritos() {
  const { addItem } = useCart();

  const productos = [
    {
      slug: 'esquites',
      nombre: 'Esquites Especiales',
      descripcion:
        'Maíz tierno con mayonesa, queso cotija, chile piquín y limón. Un clásico irresistible.',
      imagen:
        'https://images.unsplash.com/photo-1613585270345-5ddf6a78b7af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlc3F1aXRlcyUyMG1leGljYW4lMjBjb3JufGVufDF8fHx8MTc2NDIxODg0Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      slug: 'marquesitas',
      nombre: 'Marquesitas',
      descripcion:
        'Queso de bola, combinaciones dulces y crocantes que se preparan al momento para tus invitados.',
      imagen:
        'https://images.unsplash.com/photo-1698854632942-35b25aab3fa6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZXhpY2FuJTIwc3RyZWV0JTIwZm9vZHxlbnwxfHx8fDE3NjQxNzQ3ODR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      slug: 'vasos-locos',
      nombre: 'Vasos locos',
      descripcion:
        'Pepinos, jícamas, gomitas, papitas, cacahuates, fruta y salsas para armar el vaso más antojadizo.',
      imagen:
        'https://images.unsplash.com/photo-1609513167827-2d44a82f5f6f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb3VybWV0JTIwc25hY2tzfGVufDF8fHx8MTc2NDIxODg0Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      slug: 'pastel-individual',
      nombre: 'Cake bar',
      descripcion:
        'Pastelito individual con toppings y salsas dulces para consentir a cada invitado.',
      imagen:
        'https://images.unsplash.com/photo-1492102596837-f86a82f4a43e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3JuJTIwa2VybmVscyUyMGdvbGR8ZW58MXx8fHwxNzY0MjE4ODQ0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
  ];

  const handleAddToCart = (slug: string) => {
    const bar = SNACK_BARS.find((item) => item.slug === slug);
    if (!bar || !bar.tiers[0]) return;
    const baseTier = bar.tiers[0];
    addItem({
      slug: bar.slug,
      name: `${bar.name} snack bar`,
      people: baseTier.people,
      price: baseTier.price,
    });
  };

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
              key={producto.slug} 
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
                <div className="space-y-3">
                  <div className="text-sm text-[#0A1A4A]/70">
                    Desde{' '}
                    <span className="font-semibold text-[#D9A441]">
                      $
                      {SNACK_BARS.find((bar) => bar.slug === producto.slug)?.tiers[0]?.price.toLocaleString(
                        'es-MX'
                      )}
                    </span>{' '}
                    · {SNACK_BARS.find((bar) => bar.slug === producto.slug)?.tiers[0]?.people} personas
                  </div>
                  <button
                    onClick={() => handleAddToCart(producto.slug)}
                    className="inline-block w-full text-center px-6 py-3 bg-[#D9A441] text-white rounded-full hover:bg-[#c29037] hover:shadow-lg transition-colors"
                  >
                    Agregar al carrito
                  </button>
                  <a
                    href={`/barra/${producto.slug}`}
                    className="block text-center text-[#0A1A4A] hover:text-[#D9A441] text-sm font-semibold"
                  >
                    Ver precios por personas
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
