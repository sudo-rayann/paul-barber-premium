import { MapPin, Phone, Clock, Globe, MessageCircle } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

export function Contact() {
  return (
    <section id="contact" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Visit Us"
          title={<>Find us in <span className="text-gradient-gold italic">Muweilah, Sharjah</span></>}
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          <div className="overflow-hidden rounded-3xl border border-gold shadow-elegant">
            <iframe
              title="Paul Barber Branch 3 Location"
              src="https://www.google.com/maps?q=Muweilah%2C+Sharjah%2C+UAE&output=embed"
              className="h-[500px] w-full"
              loading="lazy"
            />
          </div>

          <div className="space-y-4">
            {[
              { icon: MapPin, k: "Location", v: "Muweilah, Sharjah, UAE" },
              { icon: Phone, k: "Phone", v: "+971 56 434 9983", href: "tel:+971564349983" },
              { icon: Clock, k: "Hours", v: "Open Daily until 11:30 PM" },
              { icon: Globe, k: "Website", v: "paulbarberstylist.com", href: "https://paulbarberstylist.com" },
            ].map((c) => (
              <a
                key={c.k}
                href={c.href || "#"}
                className="flex items-center gap-5 rounded-2xl border border-border bg-card/60 p-6 transition-all hover:border-gold hover:shadow-gold"
              >
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl gradient-gold text-background">
                  <c.icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-[0.2em] text-gold">{c.k}</div>
                  <div className="mt-1 font-medium">{c.v}</div>
                </div>
              </a>
            ))}

            <a
              href="https://wa.me/971564349983"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 rounded-2xl gradient-gold px-6 py-5 font-semibold text-background shadow-gold transition-transform hover:scale-[1.02]"
            >
              <MessageCircle className="h-5 w-5" />
              Book via WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
