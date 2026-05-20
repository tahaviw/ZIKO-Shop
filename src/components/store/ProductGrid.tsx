import { useState } from "react";
import { products, type Product } from "@/lib/products";
import { ProductCard } from "./ProductCard";
import { ProductModal } from "./ProductModal";

export function ProductGrid() {
  const [active, setActive] = useState<Product | null>(null);

  return (
    <section id="catalog" className="px-6 py-24 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-[1600px]">
        <div className="mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-4 text-[10px] uppercase tracking-luxe text-muted-foreground">
              — The Drop / FW26
            </p>
            <h2 className="font-display text-4xl font-bold uppercase leading-none sm:text-5xl lg:text-6xl">
              Collection 01
            </h2>
          </div>
          <div className="flex gap-3">
            {["All", "Apparel", "Knitwear", "Pants"].map((f, i) => (
              <button
                key={f}
                className={`border px-4 py-2 text-[10px] font-medium uppercase tracking-luxe transition-colors ${
                  i === 0
                    ? "border-foreground bg-foreground text-background"
                    : "border-border text-muted-foreground hover:border-foreground hover:text-foreground"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-x-6 gap-y-16 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-8">
          {products.map((p, i) => (
            <ProductCard
              key={p.id}
              product={p}
              index={i}
              onOpen={setActive}
            />
          ))}
        </div>
      </div>

      <ProductModal product={active} onClose={() => setActive(null)} />
    </section>
  );
}
