import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";

const team = [
  { name: "Mr. Siraj", role: "Master Barber", specialty: "Signature skin fades & classic cuts", initial: "S" },
  { name: "Fahis", role: "Senior Stylist", specialty: "Modern textures & beard sculpting", initial: "F" },
  { name: "Jumail", role: "Stylist", specialty: "Precision lining & kids haircuts", initial: "J" },
  { name: "Rinshad", role: "Stylist", specialty: "Hair styling & wash treatments", initial: "R" },
  { name: "Wajid", role: "Stylist", specialty: "Beard styling & hot towel shaves", initial: "W" },
  { name: "Rethin", role: "Stylist", specialty: "Facials & grooming consultations", initial: "R" },
];

export function Team() {
  return (
    <section id="team" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Our Team"
          title={<>Meet the <span className="text-gradient-gold italic">master stylists</span></>}
          description="Skilled hands, perfected craft. Each barber brings their own signature style."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((m, i) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-3xl border border-border bg-card/60 p-8 transition-all hover:border-gold hover:shadow-gold"
            >
              <div className="flex items-center gap-5">
                <div className="grid h-20 w-20 place-items-center rounded-full gradient-gold font-display text-3xl text-background">
                  {m.initial}
                </div>
                <div>
                  <h3 className="font-display text-2xl">{m.name}</h3>
                  <div className="text-xs uppercase tracking-[0.2em] text-gold">{m.role}</div>
                </div>
              </div>
              <p className="mt-6 text-sm text-muted-foreground">{m.specialty}</p>
              <div className="mt-6 flex items-center justify-between border-t border-border pt-4 text-xs text-muted-foreground">
                <span>★★★★★ 4.9</span>
                <a href="#booking" className="text-gold hover:underline">Book with {m.name.split(" ").pop()} →</a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
