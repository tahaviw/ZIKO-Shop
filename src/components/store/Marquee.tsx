export function Marquee() {
  const items = [
    "FREE SHIPPING WITHIN MOROCCO",
    "DROP 01 / FW26",
    "ORDER VIA WHATSAPP",
    "LIMITED QUANTITIES",
    "HANDCRAFTED IN CASABLANCA",
  ];
  const loop = [...items, ...items];
  return (
    <div className="overflow-hidden border-y border-border bg-foreground text-background">
      <div className="marquee-track flex whitespace-nowrap py-3">
        {loop.map((t, i) => (
          <span
            key={i}
            className="mx-8 text-[11px] font-medium uppercase tracking-luxe flex items-center gap-8"
          >
            {t}
            <span className="inline-block h-1 w-1 rounded-full bg-neon" />
          </span>
        ))}
      </div>
    </div>
  );
}
