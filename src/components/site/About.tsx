import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import gallery from "@/assets/gallery-4.jpg";

export function About() {
  return (
    <section id="about" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="overflow-hidden rounded-3xl border border-gold shadow-elegant">
              <img
                src={gallery}
                alt="Paul Barber Branch 3 luxury interior"
                width={800}
                height={1000}
                loading="lazy"
                className="h-[600px] w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-4 hidden rounded-2xl glass p-6 md:block">
              <div className="font-display text-4xl text-gradient-gold">10+</div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground">
                Years of craft
              </div>
            </div>
          </motion.div>

          <div>
            <SectionHeading
              eyebrow="Our Story"
              center={false}
              title={
                <>
                  Where <span className="text-gradient-gold italic">precision</span> meets premium grooming
                </>
              }
            />
            <div className="mt-6 space-y-5 text-muted-foreground leading-relaxed">
              <p>
                Paul Barber Branch 3 is one of the most trusted men's grooming destinations
                in Sharjah. Located in the heart of Muweilah, our salon brings together
                experienced master barbers, premium products, and a refined atmosphere
                designed for the modern gentleman.
              </p>
              <p>
                From signature skin fades and beard sculpting to relaxing facials and hair
                care consultations, every service is delivered with obsessive attention to
                detail and the highest hygiene standards. Customers travel from across the
                UAE — including Dubai — for the consistency and quality we deliver.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-4">
              {[
                "Professional Barbers",
                "Premium Hygiene",
                "Friendly Atmosphere",
                "Precision Haircuts",
              ].map((f) => (
                <div
                  key={f}
                  className="rounded-xl border border-border bg-card/50 px-5 py-4 text-sm"
                >
                  <span className="text-gold">—</span> {f}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
