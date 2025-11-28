import {
  createContext,
  ReactNode,
  useContext,
  useMemo,
  useState,
  useCallback,
  useEffect,
} from 'react';

export type CartItem = {
  id: string;
  slug: string;
  name: string;
  people: number;
  price: number;
  quantity: number;
};

type CartContextValue = {
  items: CartItem[];
  total: number;
  lastAdded: CartItem | null;
  isOpen: boolean;
  addItem: (item: Omit<CartItem, 'id' | 'quantity'> & { quantity?: number }) => void;
  removeItem: (id: string) => void;
  openCart: () => void;
  closeCart: () => void;
  toggleCart: () => void;
  clearLastAdded: () => void;
};

const CartContext = createContext<CartContextValue | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>(() => {
    if (typeof window === 'undefined') return [];
    try {
      const stored = localStorage.getItem('cart-items');
      if (!stored) return [];
      const parsed = JSON.parse(stored) as CartItem[];
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  });
  const [lastAdded, setLastAdded] = useState<CartItem | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const addItem: CartContextValue['addItem'] = useCallback((item) => {
    const quantity = item.quantity ?? 1;
    setItems((prev) => {
      const existingIndex = prev.findIndex(
        (entry) => entry.slug === item.slug && entry.people === item.people
      );

      if (existingIndex !== -1) {
        const updated = [...prev];
        const existing = updated[existingIndex];
        const merged = {
          ...existing,
          price: item.price,
          quantity: existing.quantity + quantity,
        };
        updated[existingIndex] = merged;
        setLastAdded(merged);
        return updated;
      }

      const newItem: CartItem = {
        id: `${item.slug}-${item.people}-${Date.now()}`,
        slug: item.slug,
        name: item.name,
        people: item.people,
        price: item.price,
        quantity,
      };
      setLastAdded(newItem);
      return [...prev, newItem];
    });
  }, []);

  const removeItem: CartContextValue['removeItem'] = useCallback((id) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  }, []);

  const openCart = useCallback(() => setIsOpen(true), []);
  const closeCart = useCallback(() => setIsOpen(false), []);
  const toggleCart = useCallback(() => setIsOpen((prev) => !prev), []);

  const total = useMemo(
    () => items.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [items]
  );

  useEffect(() => {
    if (typeof window === 'undefined') return;
    try {
      localStorage.setItem('cart-items', JSON.stringify(items));
    } catch {
      // ignore write errors
    }
  }, [items]);

  const clearLastAdded = () => setLastAdded(null);

  const value: CartContextValue = {
    items,
    total,
    lastAdded,
    isOpen,
    addItem,
    removeItem,
    openCart,
    closeCart,
    toggleCart,
    clearLastAdded,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
