import { Scissors, Instagram, Facebook, Phone, MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/40 py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <span className="grid h-9 w-9 place-items-center rounded-full gradient-gold text-background">
                <Scissors className="h-4 w-4" />
              </span>
              <div>
                <div className="font-display text-lg">Paul Barber</div>
                <div className="text-[10px] uppercase tracking-[0.25em] text-gold">Branch 03</div>
              </div>
            </div>
            <p className="mt-5 max-w-md text-sm text-muted-foreground">
              Sharjah's premium men's grooming destination. Expert haircuts, beard styling
              and grooming services in the heart of Muweilah.
            </p>
            <div className="mt-6 flex gap-3">
              {[Instagram, Facebook, Phone, MessageCircle].map((Icon, i) => (
                <a key={i} href="#" className="grid h-10 w-10 place-items-center rounded-full border border-border transition-colors hover:border-gold hover:text-gold">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-gold">Quick Links</div>
            <ul className="mt-5 space-y-3 text-sm">
              {["About", "Services", "Team", "Gallery", "Booking"].map((l) => (
                <li key={l}>
                  <a href={`#${l.toLowerCase()}`} className="text-muted-foreground hover:text-gold">{l}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-gold">Contact</div>
            <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
              <li>Muweilah, Sharjah, UAE</li>
              <li><a href="tel:+971564349983" className="hover:text-gold">+971 56 434 9983</a></li>
              <li>Open Daily · 10:00 AM — 11:30 PM</li>
              <li><a href="https://paulbarberstylist.com" className="hover:text-gold">paulbarberstylist.com</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-border pt-8 text-xs text-muted-foreground md:flex-row">
          <div>© {new Date().getFullYear()} Paul Barber Branch 3. All rights reserved.</div>
          <div className="text-gold">Designed for premium grooming experience.</div>
        </div>
      </div>
    </footer>
  );
}
