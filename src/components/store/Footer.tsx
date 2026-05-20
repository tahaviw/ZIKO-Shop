import { Instagram, MessageCircle } from "lucide-react";

const TikTokIcon = ({ size = 16 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-[1600px] px-6 py-20 lg:px-12">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <h3 className="font-display text-3xl font-bold uppercase leading-tight max-w-md">
              Join the cult.<br />
              <span className="font-light italic">First access.</span>
            </h3>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              Subscribe for drop previews, restocks, and early access to
              limited capsules.
            </p>
            <form className="mt-8 flex max-w-md border-b border-foreground">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 bg-transparent py-3 text-sm placeholder:text-muted-foreground/70 focus:outline-none"
              />
              <button
                type="submit"
                className="px-4 text-[11px] font-semibold uppercase tracking-luxe text-foreground hover:text-neon transition-colors"
              >
                Join
              </button>
            </form>
          </div>

          <FooterCol
            title="Customer Care"
            links={[
              "Shipping & Returns",
              "Order via WhatsApp",
              "Size Guide",
              "Contact",
              "FAQ",
            ]}
          />
          <FooterCol
            title="House"
            links={["About", "Sustainability", "Collections", "Stockists", "Press"]}
          />
        </div>

        <div className="mt-20 flex flex-col items-start justify-between gap-6 border-t border-border pt-8 md:flex-row md:items-center">
          <p className="text-[10px] uppercase tracking-luxe text-muted-foreground">
            © {new Date().getFullYear()} Ziko Shop Studio · Casablanca, Morocco
          </p>

          <div className="flex items-center gap-4">
            <SocialButton label="Instagram">
              <Instagram size={14} strokeWidth={1.5} />
            </SocialButton>
            <SocialButton label="TikTok">
              <TikTokIcon size={14} />
            </SocialButton>
            <SocialButton label="WhatsApp">
              <MessageCircle size={14} strokeWidth={1.5} />
            </SocialButton>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <p className="mb-5 text-[10px] uppercase tracking-luxe text-muted-foreground">
        {title}
      </p>
      <ul className="space-y-3">
        {links.map((l) => (
          <li key={l}>
            <a
              href="#"
              className="text-sm text-foreground/80 transition-colors hover:text-foreground"
            >
              {l}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SocialButton({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href="#"
      aria-label={label}
      className="grid h-10 w-10 place-items-center border border-border text-foreground/70 transition-colors hover:border-foreground hover:text-foreground"
    >
      {children}
    </a>
  );
}
