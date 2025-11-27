import { useState } from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Send } from 'lucide-react';
import content from '../data/content.json';

export function Contacto() {
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    evento: '',
    fecha: '',
    mensaje: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mensaje = `Hola Bonito Maíz! Me llamo ${formData.nombre}. 
Teléfono: ${formData.telefono}
Tipo de evento: ${formData.evento}
Fecha: ${formData.fecha}
Mensaje: ${formData.mensaje}`;
    
    const whatsappUrl = `https://wa.me/${content.contact.whatsappNumber}?text=${encodeURIComponent(mensaje)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contacto" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="h-px w-12 bg-[#D9A441]"></div>
            <span className="mx-4 text-[#D9A441] uppercase tracking-wider text-sm">Contáctanos</span>
            <div className="h-px w-12 bg-[#D9A441]"></div>
          </div>
          <h2 className="text-[#0A1A4A] mb-4" style={{ fontFamily: 'Pacifico, cursive' }}>Haz tu Pedido</h2>
          <p className="text-lg text-[#222222] max-w-2xl mx-auto opacity-80">
            Estamos listos para hacer tu evento inolvidable
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="nombre" className="block text-[#222222] mb-2">Nombre completo *</label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  required
                  value={formData.nombre}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-[#D9A441]/30 rounded-xl focus:border-[#D9A441] focus:outline-none transition-colors bg-[#FAFAF7]"
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <label htmlFor="telefono" className="block text-[#222222] mb-2">Teléfono *</label>
                <input
                  type="tel"
                  id="telefono"
                  name="telefono"
                  required
                  value={formData.telefono}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-[#D9A441]/30 rounded-xl focus:border-[#D9A441] focus:outline-none transition-colors bg-[#FAFAF7]"
                  placeholder="10 dígitos"
                />
              </div>

              <div>
                <label htmlFor="evento" className="block text-[#222222] mb-2">Tipo de evento *</label>
                <select
                  id="evento"
                  name="evento"
                  required
                  value={formData.evento}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-[#D9A441]/30 rounded-xl focus:border-[#D9A441] focus:outline-none transition-colors bg-[#FAFAF7]"
                >
                  <option value="">Selecciona una opción</option>
                  <option value="Boda">Boda</option>
                  <option value="XV Años">XV Años</option>
                  <option value="Bautizo">Bautizo</option>
                  <option value="Fiesta Privada">Fiesta Privada</option>
                  <option value="Evento Corporativo">Evento Corporativo</option>
                  <option value="Otro">Otro</option>
                </select>
              </div>

              <div>
                <label htmlFor="fecha" className="block text-[#222222] mb-2">Fecha del evento *</label>
                <input
                  type="date"
                  id="fecha"
                  name="fecha"
                  required
                  value={formData.fecha}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-[#D9A441]/30 rounded-xl focus:border-[#D9A441] focus:outline-none transition-colors bg-[#FAFAF7]"
                />
              </div>

              <div>
                <label htmlFor="mensaje" className="block text-[#222222] mb-2">Mensaje adicional</label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  rows={4}
                  value={formData.mensaje}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-[#D9A441]/30 rounded-xl focus:border-[#D9A441] focus:outline-none transition-colors bg-[#FAFAF7] resize-none"
                  placeholder="Cuéntanos más sobre tu evento..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-[#D9A441] text-white rounded-full hover:bg-[#c29037] hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                <Send size={20} className="group-hover:translate-x-1 transition-transform" />
                Enviar por WhatsApp
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            {/* WhatsApp CTA */}
            <div className="bg-[#FAFAF7] rounded-2xl p-8 text-center shadow-md">
              <h4 className="text-[#0A1A4A] mb-4" style={{ fontFamily: 'Pacifico, cursive' }}>
                ¿Prefieres llamar?
              </h4>
              <p className="text-[#222222] mb-6 opacity-80">
                Contáctanos directamente por WhatsApp
              </p>
              <a 
                href={`https://wa.me/${content.contact.whatsappNumber}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block px-8 py-4 bg-[#25D366] text-white rounded-full hover:bg-[#20BA5A] hover:shadow-xl transition-all duration-300"
              >
                Abrir WhatsApp
              </a>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#D9A441]/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone size={20} className="text-[#D9A441]" />
                </div>
                <div>
                  <h5 className="text-[#0A1A4A] mb-1">Teléfono</h5>
                  <p className="text-[#222222] opacity-75">{content.contact.phone}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#D9A441]/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail size={20} className="text-[#D9A441]" />
                </div>
                <div>
                  <h5 className="text-[#0A1A4A] mb-1">Email</h5>
                  <p className="text-[#222222] opacity-75">{content.contact.email}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#D9A441]/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin size={20} className="text-[#D9A441]" />
                </div>
                <div>
                  <h5 className="text-[#0A1A4A] mb-1">Ubicación</h5>
                  <p className="text-[#222222] opacity-75">{content.contact.location}</p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="pt-8 border-t border-[#D9A441]/20">
              <h5 className="text-[#0A1A4A] mb-4">Síguenos en redes</h5>
              <div className="flex gap-4">
                <a 
                  href={content.contact.social.facebook} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-[#D9A441]/10 rounded-full flex items-center justify-center hover:bg-[#D9A441] hover:text-white transition-all duration-300 group"
                >
                  <Facebook size={20} className="text-[#D9A441] group-hover:text-white" />
                </a>
                <a 
                  href={content.contact.social.instagram} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-[#D9A441]/10 rounded-full flex items-center justify-center hover:bg-[#D9A441] hover:text-white transition-all duration-300 group"
                >
                  <Instagram size={20} className="text-[#D9A441] group-hover:text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
