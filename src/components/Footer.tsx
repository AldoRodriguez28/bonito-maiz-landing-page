import { Facebook, Instagram, Heart } from 'lucide-react';
import logoBonitoMaiz from '../assets/images/logo-bonito-maiz.svg';
import content from '../data/content.json';

export function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0A1A4A] text-white py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 flex items-center justify-center">
                <img
                  src={logoBonitoMaiz}
                  alt="Bonito Maíz logo"
                  className="w-10 h-10 object-contain"
                />
              </div>
              <span className="text-2xl" style={{ fontFamily: 'Pacifico, cursive', color: '#D9A441' }}>{content.brand.name}</span>
            </div>
            <p className="text-[#272726] text-sm opacity-75 leading-relaxed">
              {content.brand.subtitle}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="text-[#D9A441] mb-4" style={{ fontFamily: 'Pacifico, cursive' }}>Enlaces Rápidos</h5>
            <ul className="space-y-2">
              <li>
                <button onClick={() => scrollToSection('inicio')} className="text-[#FAFAF7] text-sm hover:text-[#D9A441] transition-colors">
                  Inicio
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('menu')} className="text-[#FAFAF7] text-sm hover:text-[#D9A441] transition-colors">
                  Menú
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('eventos')} className="text-[#FAFAF7] text-sm hover:text-[#D9A441] transition-colors">
                  Eventos
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('galeria')} className="text-[#FAFAF7] text-sm hover:text-[#D9A441] transition-colors">
                  Galería
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('nosotros')} className="text-[#FAFAF7] text-sm hover:text-[#D9A441] transition-colors">
                  Sobre Nosotros
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('contacto')} className="text-[#FAFAF7] text-sm hover:text-[#D9A441] transition-colors">
                  Contacto
                </button>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h5 className="text-[#D9A441] mb-4" style={{ fontFamily: 'Pacifico, cursive' }}>Contacto</h5>
            <ul className="space-y-2 mb-6">
              <li className="text-[#FAFAF7] text-sm opacity-75">{content.contact.phone}</li>
              <li className="text-[#FAFAF7] text-sm opacity-75">{content.contact.email}</li>
              <li className="text-[#FAFAF7] text-sm opacity-75">{content.contact.location}</li>
            </ul>

            <div>
              <p className="text-[#D9A441] text-sm mb-3">Síguenos</p>
              <div className="flex gap-3">
                <a
                  href={content.contact.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-[#D9A441]/10 rounded-full flex items-center justify-center hover:bg-[#D9A441] transition-all duration-300 group"
                >
                  <Facebook size={18} className="text-[#D9A441] group-hover:text-[#0A1A4A]" />
                </a>
                <a
                  href={content.contact.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-[#D9A441]/10 rounded-full flex items-center justify-center hover:bg-[#D9A441] transition-all duration-300 group"
                >
                  <Instagram size={18} className="text-[#D9A441] group-hover:text-[#0A1A4A]" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#D9A441]/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[#FAFAF7] text-sm opacity-75 text-center md:text-left">
              © {currentYear} Bonito Maíz. Todos los derechos reservados.
            </p>
            <p className="text-[#FAFAF7] text-sm opacity-75 flex items-center gap-2">
              Hecho con <Heart size={14} className="text-[#D9A441] fill-[#D9A441]" /> en Veracruz
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
