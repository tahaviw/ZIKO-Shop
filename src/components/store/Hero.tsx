import heroImg from "@/assets/hero.jpg";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative grid min-h-screen grid-cols-1 lg:grid-cols-2">
      <div className="relative overflow-hidden bg-secondary order-2 lg:order-1">
        <img
          src={heroImg}
          alt="Avant-garde streetwear model in oversized black techwear"
          width={1280}
          height={1600}
          className="h-full w-full object-cover"
        />
        <div className="absolute bottom-6 left-6 text-[10px] uppercase tracking-luxe text-background/70">
          FW26 / Drop 01
        </div>
      </div>

      <div className="relative flex flex-col justify-between px-6 py-24 lg:px-16 lg:py-32 order-1 lg:order-2">
        <div className="text-[10px] uppercase tracking-luxe text-muted-foreground">
          — Chapter 01
        </div>

        <div className="space-y-10">
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[0.95] uppercase">
            The New Era<br />
            of <span className="italic font-light">Streetwear.</span>
          </h1>
          <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
            An exclusive capsule built from heavyweight cotton, technical nylon and
            distressed jacquard. Engineered in limited runs. Shipped from Morocco.
          </p>

          <a
            href="#catalog"
            className="group inline-flex items-center gap-3 border border-foreground bg-foreground px-8 py-4 text-[11px] font-semibold uppercase tracking-luxe text-background hover-invert hover:bg-background hover:text-foreground"
          >
            Shop the Drop
            <ArrowRight
              size={16}
              strokeWidth={1.5}
              className="transition-transform group-hover:translate-x-1"
            />
          </a>
        </div>

        <div className="flex items-center justify-between text-[10px] uppercase tracking-luxe text-muted-foreground">
          <span>04 Pieces</span>
          <span className="hidden sm:inline">Made in Limited Quantity</span>
          <span>MAD</span>
        </div>
      </div>
    </section>
  );
}
