import { useEffect, useState } from "react";
import { X } from "lucide-react";
import type { Product } from "@/lib/products";
import { formatMAD } from "@/lib/products";
import { buildWhatsAppMessage, useCart, whatsappLink } from "@/lib/cart";

export function ProductModal({
  product,
  onClose,
}: {
  product: Product | null;
  onClose: () => void;
}) {
  const [size, setSize] = useState<string | null>(null);
  const add = useCart((s) => s.add);

  useEffect(() => {
    setSize(null);
    if (product) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [product]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  if (!product) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-stretch justify-center bg-foreground/40 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="my-auto grid w-full max-w-6xl grid-cols-1 bg-background shadow-2xl md:grid-cols-2 max-h-[92vh] overflow-y-auto animate-in zoom-in-95 duration-300"
      >
        <div className="relative aspect-square overflow-hidden bg-secondary md:aspect-auto">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="relative flex flex-col p-8 lg:p-12">
          <button
            aria-label="Close"
            onClick={onClose}
            className="absolute right-5 top-5 grid h-9 w-9 place-items-center text-foreground/60 hover:text-foreground"
          >
            <X size={18} strokeWidth={1.5} />
          </button>

          <p className="text-[10px] uppercase tracking-luxe text-muted-foreground">
            {product.category}
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold uppercase leading-tight">
            {product.name}
          </h2>
          <p className="mt-2 font-display text-xl tabular-nums">
            {formatMAD(product.price)}
          </p>

          <p className="mt-8 text-sm leading-relaxed text-muted-foreground">
            {product.description}
          </p>

          <ul className="mt-6 space-y-2 text-xs text-foreground/80">
            {product.details.map((d) => (
              <li key={d} className="flex gap-3">
                <span className="mt-2 h-px w-3 bg-foreground/40" />
                {d}
              </li>
            ))}
          </ul>

          <div className="mt-10">
            <div className="mb-3 flex items-center justify-between text-[10px] uppercase tracking-luxe text-muted-foreground">
              <span>Select Size</span>
              <span>Size Guide</span>
            </div>
            <div className="grid grid-cols-4 gap-2">
              {product.sizes.map((s) => (
                <button
                  key={s}
                  onClick={() => setSize(s)}
                  className={`border py-3 text-xs font-medium uppercase tracking-luxe transition-colors ${
                    size === s
                      ? "border-foreground bg-foreground text-background"
                      : "border-border text-foreground hover:border-foreground"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-3">
            <button
              disabled={!size}
              onClick={() => {
                if (!size) return;
                add(product, size);
                onClose();
              }}
              className="group inline-flex items-center justify-center gap-2 border border-foreground bg-foreground py-4 text-[11px] font-semibold uppercase tracking-luxe text-background transition-all hover:bg-background hover:text-foreground disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-foreground disabled:hover:text-background"
            >
              {size ? `Add to Cart — ${formatMAD(product.price)}` : "Select a size"}
            </button>
            <button
              disabled={!size}
              onClick={() => {
                if (!size) return;
                add(product, size);
                onClose();
              }}
              className="border border-border py-4 text-[11px] font-semibold uppercase tracking-luxe text-foreground transition-colors hover:border-foreground disabled:opacity-40"
            >
              Order via WhatsApp
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
