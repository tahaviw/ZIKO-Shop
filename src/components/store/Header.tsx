import { useEffect, useState } from "react";
import { Heart, Search, ShoppingBag } from "lucide-react";
import { useCart } from "@/lib/cart";

const navLinks = ["New Arrivals", "Apparel", "Collections", "About"];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const items = useCart((s) => s.items);
  const wishlist = useCart((s) => s.wishlist);
  const openCart = useCart((s) => s.openCart);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const cartCount = items.reduce((s, i) => s + i.quantity, 0);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled
          ? "glass border-b border-border/60"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-[1600px] items-center justify-between px-6 lg:px-12">
        <a
          href="#"
          className="font-display text-lg font-bold tracking-luxe uppercase"
        >
          Ziko Shop
        </a>

        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((l) => (
            <a
              key={l}
              href="#catalog"
              className="text-[11px] font-medium uppercase tracking-luxe text-foreground/80 transition-colors hover:text-foreground relative group"
            >
              {l}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-neon transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-5">
          <button
            aria-label="Search"
            className="text-foreground/80 hover:text-neon transition-colors"
          >
            <Search size={18} strokeWidth={1.5} />
          </button>
          <button
            aria-label="Wishlist"
            className="relative text-foreground/80 hover:text-neon transition-colors"
          >
            <Heart size={18} strokeWidth={1.5} />
            {wishlist.length > 0 && (
              <span className="absolute -right-2 -top-2 grid h-4 min-w-4 place-items-center rounded-full bg-foreground px-1 text-[10px] font-semibold text-background">
                {wishlist.length}
              </span>
            )}
          </button>
          <button
            aria-label="Cart"
            onClick={openCart}
            className="relative text-foreground/80 hover:text-neon transition-colors"
          >
            <ShoppingBag size={18} strokeWidth={1.5} />
            {cartCount > 0 && (
              <span className="absolute -right-2 -top-2 grid h-4 min-w-4 place-items-center rounded-full bg-foreground px-1 text-[10px] font-semibold text-background">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
