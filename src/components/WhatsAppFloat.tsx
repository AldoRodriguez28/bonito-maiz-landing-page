import whatsappLogo from '../assets/images/whatsapp-logo.svg';
import content from '../data/content.json';

export function WhatsAppFloat() {
  return (
    <a
      href={`https://wa.me/${content.contact.whatsappNumber}?text=${encodeURIComponent(content.contact.whatsappMessage)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 md:w-16 md:h-16 bg-[#25D366] text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 hover:shadow-3xl transition-all duration-300 group"
      aria-label="Contactar por WhatsApp"c
    >
      <img
        src={whatsappLogo}
        alt="WhatsApp"
        className="w-7 h-7 md:w-8 md:h-8 group-hover:scale-110 transition-transform"
      />
      <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-pulse"></span>
    </a>
  );
}
