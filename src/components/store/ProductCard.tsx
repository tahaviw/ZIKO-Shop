import { Heart, Plus } from "lucide-react";
import type { Product } from "@/lib/products";
import { formatMAD } from "@/lib/products";
import { useCart } from "@/lib/cart";

export function ProductCard({
  product,
  onOpen,
  index,
}: {
  product: Product;
  onOpen: (p: Product) => void;
  index: number;
}) {
  const wishlist = useCart((s) => s.wishlist);
  const toggleWishlist = useCart((s) => s.toggleWishlist);
  const liked = wishlist.includes(product.id);

  return (
    <article className="product-card group relative flex flex-col">
      <div
        onClick={() => onOpen(product)}
        className="relative aspect-[4/5] cursor-pointer overflow-hidden bg-secondary"
      >
        <img
          src={product.image}
          alt={product.name}
          width={1024}
          height={1280}
          loading="lazy"
          className="product-img h-full w-full object-cover"
        />

        <span className="absolute left-4 top-4 text-[10px] font-medium uppercase tracking-luxe text-foreground/70">
          0{index + 1}
        </span>

        <button
          aria-label="Add to wishlist"
          onClick={(e) => {
            e.stopPropagation();
            toggleWishlist(product.id);
          }}
          className={`absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full border border-foreground/10 bg-background/80 backdrop-blur transition-all hover:border-foreground ${
            liked ? "text-neon" : "text-foreground/70"
          }`}
        >
          <Heart size={14} strokeWidth={1.5} fill={liked ? "currentColor" : "none"} />
        </button>

        <button
          onClick={(e) => {
            e.stopPropagation();
            onOpen(product);
          }}
          className="absolute inset-x-4 bottom-4 flex translate-y-3 items-center justify-between border border-foreground bg-foreground px-4 py-3 text-[10px] font-semibold uppercase tracking-luxe text-background opacity-0 transition-all duration-300 hover:bg-background hover:text-foreground group-hover:translate-y-0 group-hover:opacity-100"
        >
          Quick Add
          <Plus size={14} strokeWidth={1.5} />
        </button>
      </div>

      <div className="flex items-start justify-between pt-5">
        <div className="space-y-1">
          <p className="text-[10px] uppercase tracking-luxe text-muted-foreground">
            {product.category}
          </p>
          <h3 className="font-display text-base font-semibold uppercase tracking-tight">
            {product.name}
          </h3>
        </div>
        <span className="font-display text-sm font-medium tabular-nums">
          {formatMAD(product.price)}
        </span>
      </div>
    </article>
  );
}
