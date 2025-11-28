import { useMemo, useState } from 'react';
import { Menu, ShoppingCart, X } from 'lucide-react';
import logoBonitoMaiz from '../assets/images/logo-bonito-maiz.svg';
import content from '../data/content.json';
import { useCart } from '../context/CartContext';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { items, openCart } = useCart();

  const cartCount = useMemo(
    () => items.reduce((sum, item) => sum + item.quantity, 0),
    [items]
  );

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between py-5">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src={logoBonitoMaiz}
              alt="Bonito Maíz logo"
              className="w-10 h-10 object-contain"
            />
            <span className="text-2xl" style={{ fontFamily: 'Pacifico, cursive', color: '#0A1A4A' }}>Bonito Maíz</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <button onClick={() => scrollToSection('inicio')} className="text-[#222222] hover:text-[#D9A441]">Inicio</button>
            <button onClick={() => scrollToSection('menu')} className="text-[#222222] hover:text-[#D9A441]">Menú</button>
            <button onClick={() => scrollToSection('pedidos')} className="text-[#222222] hover:text-[#D9A441]">Pedidos</button>
            <button onClick={() => scrollToSection('eventos')} className="text-[#222222] hover:text-[#D9A441]">Eventos</button>
            <button onClick={() => scrollToSection('galeria')} className="text-[#222222] hover:text-[#D9A441]">Galería</button>
            <button onClick={() => scrollToSection('nosotros')} className="text-[#222222] hover:text-[#D9A441]">Sobre Nosotros</button>
            <button onClick={() => scrollToSection('contacto')} className="text-[#222222] hover:text-[#D9A441]">Contacto</button>
          </nav>

          {/* Cart Icon */}
          <button
            onClick={() => openCart()}
            className="relative inline-flex items-center justify-center w-10 h-10 md:w-11 md:h-11 rounded-full border border-[#D9A441]/40 text-[#0A1A4A] hover:border-[#D9A441] hover:text-[#D9A441] transition-colors"
            aria-label="Ver carrito"
          >
            <ShoppingCart size={18} />
            <span className="absolute -top-1 -right-1 bg-[#D9A441] text-white text-[10px] px-1.5 py-0.5 rounded-full min-w-[20px] text-center leading-none">
              {cartCount}
            </span>
          </button>

          {/* CTA Button */}
          <a
            href={`https://wa.me/${content.contact.whatsappNumber}?text=${encodeURIComponent(content.contact.whatsappMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:block px-8 py-3 bg-[#D9A441] text-white rounded-full hover:bg-[#c29037] hover:shadow-lg"
          >
            Pedir por WhatsApp
          </a>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-[#0A1A4A]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Abrir menú"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="lg:hidden pb-6 flex flex-col gap-4">
            <button onClick={() => scrollToSection('inicio')} className="text-left text-[#222222] hover:text-[#D9A441] py-2">Inicio</button>
            <button onClick={() => scrollToSection('menu')} className="text-left text-[#222222] hover:text-[#D9A441] py-2">Menú</button>
            <button onClick={() => scrollToSection('pedidos')} className="text-left text-[#222222] hover:text-[#D9A441] py-2">Pedidos</button>
            <button onClick={() => scrollToSection('eventos')} className="text-left text-[#222222] hover:text-[#D9A441] py-2">Eventos</button>
            <button onClick={() => scrollToSection('galeria')} className="text-left text-[#222222] hover:text-[#D9A441] py-2">Galería</button>
            <button onClick={() => scrollToSection('nosotros')} className="text-left text-[#222222] hover:text-[#D9A441] py-2">Sobre Nosotros</button>
            <button onClick={() => scrollToSection('contacto')} className="text-left text-[#222222] hover:text-[#D9A441] py-2">Contacto</button>
            <a
              href={`https://wa.me/${content.contact.whatsappNumber}?text=${encodeURIComponent(content.contact.whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 px-8 py-3 bg-[#D9A441] text-white rounded-full hover:bg-[#c29037] text-center"
            >
              Pedir por WhatsApp
            </a>
            <button
              onClick={() => openCart()}
              className="flex items-center gap-2 px-4 py-2 border border-[#D9A441]/40 text-[#0A1A4A] rounded-full hover:border-[#D9A441] hover:text-[#D9A441] transition-colors"
            >
              <ShoppingCart size={18} />
              <span>Carrito</span>
              <span className="bg-[#D9A441] text-white text-xs px-2 py-0.5 rounded-full min-w-[28px] text-center">
                {cartCount}
              </span>
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}
