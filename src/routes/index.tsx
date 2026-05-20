import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/store/Header";
import { Hero } from "@/components/store/Hero";
import { Marquee } from "@/components/store/Marquee";
import { ProductGrid } from "@/components/store/ProductGrid";
import { Footer } from "@/components/store/Footer";
import { CartDrawer } from "@/components/store/CartDrawer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "NEO_CULT — The New Era of Streetwear" },
      {
        name: "description",
        content:
          "NEO_CULT Studio: limited-run luxury streetwear from Casablanca. Heavyweight cotton, technical nylon, distressed knits. Order via WhatsApp.",
      },
      { property: "og:title", content: "NEO_CULT — The New Era of Streetwear" },
      {
        property: "og:description",
        content:
          "Limited-run luxury streetwear from Casablanca. Order via WhatsApp.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <Marquee />
        <ProductGrid />
      </main>
      <Footer />
      <CartDrawer />
    </div>
  );
}
