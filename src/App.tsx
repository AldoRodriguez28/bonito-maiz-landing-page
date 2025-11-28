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
import { CartSnackbar } from './components/CartSnackbar';
import { CartSidebar } from './components/CartSidebar';
import { SnackBarPage } from './pages/SnackBarPage';

export default function App() {
  const path = typeof window !== 'undefined' ? window.location.pathname : '/';
  const parts = path.split('/').filter(Boolean);
  const slug = parts[0] === 'barra' && parts[1] ? parts[1] : null;

  if (slug) {
    return (
      <>
        <SnackBarPage slug={slug} />
        <CartSnackbar />
        <CartSidebar />
      </>
    );
  }

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
      <CartSnackbar />
      <CartSidebar />
    </div>
  );
}
