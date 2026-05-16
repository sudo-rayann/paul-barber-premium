import { motion } from "framer-motion";
import { Phone, Star, Calendar } from "lucide-react";
import hero from "@/assets/hero.jpg";

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen overflow-hidden pt-20">
      <div className="absolute inset-0">
        <img
          src={hero}
          alt="Premium barbershop interior with professional barber styling a fade haircut"
          width={1920}
          height={1080}
          className="h-full w-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/70 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/40 to-transparent" />
      </div>

      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-24 md:py-32 lg:grid-cols-[1.2fr_1fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold bg-card/60 px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-gold backdrop-blur">
            <Star className="h-3 w-3 fill-current" />
            4.9 · 1,441+ Google Reviews
          </div>

          <h1 className="font-display text-5xl leading-[1.05] md:text-7xl lg:text-[5.5rem]">
            Sharjah's <span className="text-gradient-gold italic">Premium</span>
            <br /> Men's Grooming
            <br /> Destination
          </h1>

          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            Expert haircuts, beard styling & grooming services in Muweilah, Sharjah —
            trusted by 1,400+ happy customers. Open daily until 11:30 PM.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#booking"
              className="group inline-flex items-center gap-2 rounded-full gradient-gold px-7 py-4 text-sm font-semibold text-background shadow-gold transition-transform hover:scale-105"
            >
              <Calendar className="h-4 w-4" />
              Book Appointment
            </a>
            <a
              href="tel:+971564349983"
              className="inline-flex items-center gap-2 rounded-full border border-gold bg-card/40 px-7 py-4 text-sm font-semibold text-foreground backdrop-blur transition-colors hover:bg-card"
            >
              <Phone className="h-4 w-4 text-gold" />
              +971 56 434 9983
            </a>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-8 text-sm">
            {[
              { k: "4.9★", v: "Google Rating" },
              { k: "1,441+", v: "Happy Clients" },
              { k: "11:30 PM", v: "Open Daily" },
            ].map((s) => (
              <div key={s.v}>
                <div className="font-display text-2xl text-gradient-gold">{s.k}</div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">{s.v}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="hidden lg:block"
        >
          <div className="glass relative aspect-[3/4] overflow-hidden rounded-3xl shadow-elegant">
            <img
              src={hero}
              alt="Barber at work"
              width={800}
              height={1000}
              className="h-full w-full object-cover"
            />
            <div className="absolute bottom-6 left-6 right-6 rounded-2xl glass p-5">
              <div className="text-xs uppercase tracking-[0.2em] text-gold">Signature Service</div>
              <div className="mt-1 font-display text-2xl">The Paul Skin Fade</div>
              <div className="mt-1 text-sm text-muted-foreground">45 min · Precision craftsmanship</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
