import { motion } from "framer-motion";
import { Scissors, Sparkles, User, Wind, Heart, Baby, Droplets, Brush } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const services = [
  { icon: Scissors, name: "Signature Haircuts", desc: "Classic & modern cuts tailored to your face shape.", price: "From AED 50" },
  { icon: Sparkles, name: "Skin Fade", desc: "Razor-sharp blended fades — our most-loved signature.", price: "From AED 60" },
  { icon: Brush, name: "Beard Styling", desc: "Precision shaping, lining and hot-towel finish.", price: "From AED 40" },
  { icon: User, name: "Hair Styling", desc: "Premium styling for events and everyday confidence.", price: "From AED 45" },
  { icon: Heart, name: "Hair Care Consultation", desc: "Personalised advice for scalp & hair health.", price: "Complimentary" },
  { icon: Baby, name: "Kids Haircuts", desc: "Patient, gentle haircuts for the little gents.", price: "From AED 35" },
  { icon: Wind, name: "Facial & Grooming", desc: "Deep cleanse, exfoliation and skin renewal.", price: "From AED 70" },
  { icon: Droplets, name: "Hair Wash & Styling", desc: "Luxury wash with scalp massage and blow-dry.", price: "From AED 30" },
];

export function Services() {
  return (
    <section id="services" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Our Services"
          title={<>Crafted for the <span className="text-gradient-gold italic">modern gentleman</span></>}
          description="A complete grooming menu — from precision haircuts to skin-renewing facials."
        />

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card/60 p-7 transition-all duration-500 hover:-translate-y-1 hover:border-gold hover:shadow-gold"
            >
              <div className="absolute inset-0 -z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="absolute inset-0 bg-gradient-to-br from-[color-mix(in_oklab,var(--gold)_10%,transparent)] to-transparent" />
              </div>
              <div className="mb-5 grid h-12 w-12 place-items-center rounded-xl gradient-gold text-background">
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="font-display text-xl">{s.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              <div className="mt-5 text-xs uppercase tracking-widest text-gold">{s.price}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
