import { useEffect, useState } from "react";
import { Minus, Plus, X, Check, Phone } from "lucide-react";
import {
  STORE_PHONE,
  buildWhatsAppMessage,
  useCart,
  whatsappLink,
} from "@/lib/cart";
import { formatMAD } from "@/lib/products";

export function CartDrawer() {
  const isOpen = useCart((s) => s.isCartOpen);
  const close = useCart((s) => s.closeCart);
  const items = useCart((s) => s.items);
  const changeQty = useCart((s) => s.changeQty);
  const remove = useCart((s) => s.remove);
  const [confirming, setConfirming] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) setConfirming(false);
  }, [isOpen]);

  const subtotal = items.reduce(
    (s, i) => s + i.product.price * i.quantity,
    0
  );

  const handleWhatsApp = () => {
    if (items.length === 0) return;
    const url = whatsappLink(buildWhatsAppMessage(items));
    setConfirming(true);
    // Open WhatsApp immediately too
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <div
        onClick={close}
        className={`fixed inset-0 z-50 bg-foreground/40 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />
      <aside
        className={`fixed inset-y-0 right-0 z-50 flex w-full max-w-md flex-col bg-background shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-border px-6 py-5">
          <div>
            <p className="text-[10px] uppercase tracking-luxe text-muted-foreground">
              Your Bag
            </p>
            <h2 className="font-display text-lg font-bold uppercase">
              {items.length} {items.length === 1 ? "Item" : "Items"}
            </h2>
          </div>
          <button
            aria-label="Close cart"
            onClick={close}
            className="grid h-9 w-9 place-items-center text-foreground/60 hover:text-foreground"
          >
            <X size={18} strokeWidth={1.5} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-6">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center">
              <p className="font-display text-2xl uppercase">Your bag is empty.</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Discover the latest drop.
              </p>
              <button
                onClick={close}
                className="mt-8 border border-foreground px-6 py-3 text-[10px] font-semibold uppercase tracking-luxe hover-invert hover:bg-foreground hover:text-background"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <ul className="space-y-6">
              {items.map((item) => (
                <li
                  key={`${item.product.id}-${item.size}`}
                  className="flex gap-4 border-b border-border pb-6 last:border-0"
                >
                  <div className="aspect-[4/5] w-24 shrink-0 overflow-hidden bg-secondary">
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex flex-1 flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-3">
                        <h3 className="font-display text-sm font-semibold uppercase leading-tight">
                          {item.product.name}
                        </h3>
                        <button
                          onClick={() => remove(item.product.id, item.size)}
                          aria-label="Remove"
                          className="text-foreground/40 hover:text-foreground"
                        >
                          <X size={14} strokeWidth={1.5} />
                        </button>
                      </div>
                      <p className="mt-1 text-[10px] uppercase tracking-luxe text-muted-foreground">
                        Size {item.size}
                      </p>
                    </div>
                    <div className="flex items-end justify-between">
                      <div className="inline-flex items-center border border-border">
                        <button
                          onClick={() =>
                            changeQty(item.product.id, item.size, -1)
                          }
                          className="grid h-8 w-8 place-items-center hover:bg-secondary"
                          aria-label="Decrease"
                        >
                          <Minus size={12} strokeWidth={1.5} />
                        </button>
                        <span className="w-8 text-center text-xs tabular-nums">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            changeQty(item.product.id, item.size, 1)
                          }
                          className="grid h-8 w-8 place-items-center hover:bg-secondary"
                          aria-label="Increase"
                        >
                          <Plus size={12} strokeWidth={1.5} />
                        </button>
                      </div>
                      <span className="font-display text-sm tabular-nums">
                        {formatMAD(item.product.price * item.quantity)}
                      </span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t border-border px-6 py-6 space-y-4">
            <div className="flex items-center justify-between text-[10px] uppercase tracking-luxe text-muted-foreground">
              <span>Shipping</span>
              <span>Calculated at confirmation</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[10px] uppercase tracking-luxe text-muted-foreground">
                Subtotal
              </span>
              <span className="font-display text-2xl font-bold tabular-nums">
                {formatMAD(subtotal)}
              </span>
            </div>

            {confirming ? (
              <div className="border border-neon/40 bg-neon/10 p-4">
                <div className="flex items-start gap-3">
                  <div className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-neon text-neon-foreground">
                    <Check size={14} strokeWidth={2} />
                  </div>
                  <div className="text-xs leading-relaxed">
                    <p className="font-semibold uppercase tracking-luxe text-[10px]">
                      WhatsApp opened
                    </p>
                    <p className="mt-1 text-muted-foreground">
                      Complete your order with our team. If WhatsApp didn't
                      open, call us directly:
                    </p>
                    <a
                      href={`tel:${STORE_PHONE.replace(/\s/g, "")}`}
                      className="mt-2 inline-flex items-center gap-2 font-display text-sm font-semibold text-foreground"
                    >
                      <Phone size={12} strokeWidth={1.5} />
                      {STORE_PHONE}
                    </a>
                  </div>
                </div>
              </div>
            ) : null}

            <button
              onClick={handleWhatsApp}
              className="w-full border border-foreground bg-foreground py-4 text-[11px] font-semibold uppercase tracking-luxe text-background transition-colors hover:bg-background hover:text-foreground"
            >
              Order via WhatsApp
            </button>
            <p className="text-center text-[10px] uppercase tracking-luxe text-muted-foreground">
              No card required · Confirm with our team
            </p>
          </div>
        )}
      </aside>
    </>
  );
}
