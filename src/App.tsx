import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Favoritos } from './components/Favoritos';
import { Eventos } from './components/Eventos';
import { Pedidos } from './components/Pedidos';
import { PorQueElegirnos } from './components/PorQueElegirnos';
import { Galeria } from './components/Galeria';
import { Testimonios } from './components/Testimonios';
import { SobreNosotros } from './components/SobreNosotros';
import { Contacto } from './components/Contacto';
import { Footer } from './components/Footer';
import { WhatsAppFloat } from './components/WhatsAppFloat';

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Favoritos />
        <Pedidos />
        <Eventos />
        <PorQueElegirnos />
        <Galeria />
        <Testimonios />
        <SobreNosotros />
        <Contacto />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
