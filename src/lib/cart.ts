import { create } from "zustand";
import type { Product } from "./products";

export type CartItem = {
  product: Product;
  size: string;
  quantity: number;
};

type CartState = {
  items: CartItem[];
  wishlist: string[];
  isCartOpen: boolean;
  add: (product: Product, size: string) => void;
  remove: (id: string, size: string) => void;
  changeQty: (id: string, size: string, delta: number) => void;
  clear: () => void;
  openCart: () => void;
  closeCart: () => void;
  toggleWishlist: (id: string) => void;
};

const key = (id: string, size: string) => `${id}__${size}`;

export const useCart = create<CartState>((set) => ({
  items: [],
  wishlist: [],
  isCartOpen: false,
  add: (product, size) =>
    set((s) => {
      const k = key(product.id, size);
      const existing = s.items.find((i) => key(i.product.id, i.size) === k);
      if (existing) {
        return {
          items: s.items.map((i) =>
            key(i.product.id, i.size) === k
              ? { ...i, quantity: i.quantity + 1 }
              : i
          ),
          isCartOpen: true,
        };
      }
      return {
        items: [...s.items, { product, size, quantity: 1 }],
        isCartOpen: true,
      };
    }),
  remove: (id, size) =>
    set((s) => ({
      items: s.items.filter((i) => key(i.product.id, i.size) !== key(id, size)),
    })),
  changeQty: (id, size, delta) =>
    set((s) => ({
      items: s.items
        .map((i) =>
          key(i.product.id, i.size) === key(id, size)
            ? { ...i, quantity: Math.max(0, i.quantity + delta) }
            : i
        )
        .filter((i) => i.quantity > 0),
    })),
  clear: () => set({ items: [] }),
  openCart: () => set({ isCartOpen: true }),
  closeCart: () => set({ isCartOpen: false }),
  toggleWishlist: (id) =>
    set((s) => ({
      wishlist: s.wishlist.includes(id)
        ? s.wishlist.filter((x) => x !== id)
        : [...s.wishlist, id],
    })),
}));

export const STORE_NAME = "Ziko Shop";
export const STORE_PHONE = "+212 644-606679";
export const STORE_WHATSAPP = "212644606679";

export function buildWhatsAppMessage(items: CartItem[]) {
  const lines = items.map(
    (i) =>
      `- ${i.quantity}x '${i.product.name}' (Size ${i.size}) - ${(
        i.product.price * i.quantity
      ).toLocaleString("en-US")} MAD`
  );
  const total = items.reduce((sum, i) => sum + i.product.price * i.quantity, 0);
  return (
    `Hello, I would like to order from ${STORE_NAME}:\n` +
    lines.join("\n") +
    `\nTotal: ${total.toLocaleString("en-US")} MAD. Please confirm availability.`
  );
}

export function whatsappLink(message: string) {
  return `https://wa.me/${STORE_WHATSAPP}?text=${encodeURIComponent(message)}`;
}
