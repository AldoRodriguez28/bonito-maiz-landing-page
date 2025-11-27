import content from '../data/content.json';

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const whatsappLink = `https://wa.me/${content.contact.whatsappNumber}?text=${encodeURIComponent(content.contact.whatsappMessage)}`;

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center bg-[#0A1A4A] overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={content.hero.backgroundImage}
          alt="Esquites"
          className="w-full h-full object-cover opacity-20"
        />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-10 w-32 h-32 border-2 border-[#D9A441] opacity-30 rounded-full"></div>
      <div className="absolute bottom-1/4 left-10 w-24 h-24 border-2 border-[#D9A441] opacity-20"></div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center py-32">
        {/* Decorative Line Top */}
        <div className="flex items-center justify-center mb-8">
          <div className="h-px w-16 bg-[#D9A441]"></div>
          <div className="mx-4">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 3 L14 6 L17 5 L18 8 L21 9 L19 12 L21 15 L18 16 L17 19 L14 18 L12 21 L10 18 L7 19 L6 16 L3 15 L5 12 L3 9 L6 8 L7 5 L10 6 L12 3Z" fill="#D9A441"/>
            </svg>
          </div>
          <div className="h-px w-16 bg-[#D9A441]"></div>
        </div>

        <h1 className="text-white mb-6 text-balance" style={{ fontFamily: 'Pacifico, cursive' }}>
          {content.brand.tagline}
        </h1>
        
        <p className="text-xl lg:text-2xl text-[#FAFAF7] mb-12 max-w-3xl mx-auto opacity-90">
          {content.brand.subtitle}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button 
            onClick={() => scrollToSection('menu')}
            className="px-10 py-4 bg-[#D9A441] text-white rounded-full hover:bg-[#c29037] hover:shadow-2xl hover:scale-105"
          >
            {content.hero.ctaMenu}
          </button>
          <a 
            href={whatsappLink}
            target="_blank" 
            rel="noopener noreferrer"
            className="px-10 py-4 border-2 border-[#D9A441] text-[#D9A441] bg-transparent rounded-full hover:bg-[#D9A441] hover:text-white hover:shadow-2xl hover:scale-105"
          >
            {content.hero.ctaWhatsApp}
          </a>
        </div>

        {/* Decorative Line Bottom */}
        <div className="flex items-center justify-center mt-16">
          <div className="h-px w-24 bg-[#D9A441] opacity-50"></div>
        </div>
      </div>
    </section>
  );
}
