import { useEffect, useMemo, useState } from 'react';
import { ArrowLeft, Info, Users } from 'lucide-react';
import { CartSummary } from '../components/CartSummary';
import { useCart } from '../context/CartContext';
import { SNACK_BARS } from '../data/snackBars';
import { ToggleChip } from '../components/ui/ToggleChip';

type SnackBarPageProps = {
  slug: string;
};

export function SnackBarPage({ slug }: SnackBarPageProps) {
  const bar = useMemo(() => SNACK_BARS.find((item) => item.slug === slug), [slug]);
  const [selectedPeople, setSelectedPeople] = useState<number>(bar?.tiers[0]?.people ?? 0);
  const [selectedFlavors, setSelectedFlavors] = useState<string[]>([]);
  const [selectedExtras, setSelectedExtras] = useState<string[]>([]);
  const { addItem } = useCart();

  useEffect(() => {
    if (bar?.tiers[0]) {
      setSelectedPeople(bar.tiers[0].people);
    }
    setSelectedFlavors([]);
    setSelectedExtras([]);
  }, [bar]);

  if (!bar) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#FAFAF7] px-6">
        <p className="text-[#0A1A4A] text-2xl font-semibold mb-4">Barra no encontrada</p>
        <button
          onClick={() => (window.location.href = '/')}
          className="px-6 py-3 bg-[#D9A441] text-white rounded-full hover:bg-[#c29037]"
        >
          Volver al menú
        </button>
      </div>
    );
  }

  const selectedTier =
    bar.tiers.find((tier) => tier.people === selectedPeople) ?? bar.tiers[0] ?? null;

  const toggleSelection = (value: string, current: string[], setter: (next: string[]) => void) => {
    if (current.includes(value)) {
      setter(current.filter((item) => item !== value));
    } else {
      setter([...current, value]);
    }
  };

  const handleAdd = () => {
    if (!selectedTier) return;
    addItem({
      slug: bar.slug,
      name: `${bar.name} snack bar`,
      people: selectedTier.people,
      price: selectedTier.price,
      flavors: selectedFlavors,
      extras: selectedExtras,
    });
  };

  return (
    <div className="min-h-screen bg-[#FAFAF7]">
      <header className="bg-white shadow-sm fixed top-0 left-0 right-0 z-30">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <button
            onClick={() => (window.location.href = '/')}
            className="flex items-center gap-2 text-[#0A1A4A] hover:text-[#D9A441]"
          >
            <ArrowLeft size={18} />
            <span>Volver</span>
          </button>
          <span className="text-sm text-[#0A1A4A]/70">Selecciona el número de personas</span>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 pt-28 pb-16">
        <div className="bg-gradient-to-r from-[#0A1A4A] to-[#12275f] text-white rounded-3xl p-8 mb-10 shadow-lg">
          <p className="uppercase text-sm tracking-wide text-[#D9A441] font-semibold">
            Barra personalizada
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold mt-2">{bar.name}</h1>
          <p className="text-white/80 mt-3 max-w-3xl">{bar.description}</p>
          {bar.highlights && (
            <div className="flex flex-wrap gap-2 mt-4">
              {bar.highlights.map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center gap-2 bg-white/10 text-white px-3 py-1 rounded-full text-sm"
                >
                  <Info size={14} /> {item}
                </span>
              ))}
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div>
              <p className="text-sm uppercase tracking-wide text-[#D9A441] font-semibold">
                Escoge tu paquete
              </p>
              <h2 className="text-2xl font-semibold text-[#0A1A4A]">Precios por personas</h2>
              <p className="text-[#0A1A4A]/70 text-sm mt-1">
                Selecciona el número de invitados para calcular el precio total de la barra.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {bar.tiers.map((tier) => {
                const isSelected = tier.people === selectedPeople;
                return (
                  <button
                    key={tier.people}
                    onClick={() => setSelectedPeople(tier.people)}
                    className={`text-left rounded-2xl border p-5 shadow-sm transition-all ${
                      isSelected
                        ? 'border-[#D9A441] bg-white shadow-lg'
                        : 'border-[#D9A441]/10 bg-white hover:border-[#D9A441]/40'
                    }`}
                  >
                    <div className="flex items-center gap-2 text-[#0A1A4A] font-semibold">
                      <Users size={18} />
                      {tier.people} personas
                    </div>
                    <p className="text-2xl font-bold text-[#D9A441] mt-2">
                      ${tier.price.toLocaleString('es-MX')}
                    </p>
                    <p className="text-sm text-[#0A1A4A]/70 mt-1">Incluye montaje y servicio</p>
                  </button>
                );
              })}
            </div>

            <div className="flex items-center justify-between bg-white border border-[#D9A441]/10 rounded-2xl p-5 shadow-sm">
              <div>
                <p className="text-sm uppercase tracking-wide text-[#D9A441] font-semibold">
                  Resumen
                </p>
                <p className="text-[#0A1A4A] font-semibold">
                  {selectedTier ? selectedTier.people : 0} personas · $
                  {selectedTier ? selectedTier.price.toLocaleString('es-MX') : '0'}
                </p>
                {(selectedFlavors.length > 0 || selectedExtras.length > 0) && (
                  <p className="text-sm text-[#0A1A4A]/70 mt-1">
                    {selectedFlavors.length > 0 && <>Sabores: {selectedFlavors.join(', ')}. </>}
                    {selectedExtras.length > 0 && <>Extras: {selectedExtras.join(', ')}.</>}
                  </p>
                )}
              </div>
              <button
                onClick={handleAdd}
                className="px-6 py-3 bg-[#D9A441] text-white rounded-full hover:bg-[#c29037] transition-colors font-semibold"
              >
                Agregar al carrito
              </button>
            </div>

            {(bar.flavors?.length || bar.extras?.length) && (
              <div className="space-y-6">
                {bar.flavors && bar.flavors.length > 0 && (
                  <div>
                    <p className="text-sm uppercase tracking-wide text-[#D9A441] font-semibold">
                      Selecciona sabores
                    </p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {bar.flavors.map((flavor) => (
                        <ToggleChip
                          key={flavor}
                          label={flavor}
                          isActive={selectedFlavors.includes(flavor)}
                          onClick={() => toggleSelection(flavor, selectedFlavors, setSelectedFlavors)}
                        />
                      ))}
                    </div>
                  </div>
                )}

                {bar.extras && bar.extras.length > 0 && (
                  <div>
                    <p className="text-sm uppercase tracking-wide text-[#D9A441] font-semibold">
                      Selecciona complementos
                    </p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {bar.extras.map((extra) => (
                        <ToggleChip
                          key={extra}
                          label={extra}
                          isActive={selectedExtras.includes(extra)}
                          onClick={() => toggleSelection(extra, selectedExtras, setSelectedExtras)}
                        />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          <CartSummary />
        </div>
      </main>
    </div>
  );
}
