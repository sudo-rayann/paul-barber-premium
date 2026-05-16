import { motion } from "framer-motion";
import { Star, Users, Award, ShieldCheck, Wallet, Smile, Clock, Wrench } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const features = [
  { icon: Star, title: "4.9 Google Rating", desc: "Consistently rated 5-stars by our clients." },
  { icon: Users, title: "1,441+ Reviews", desc: "Loved by a growing community of gentlemen." },
  { icon: Award, title: "Experienced Stylists", desc: "Master barbers with years of expertise." },
  { icon: ShieldCheck, title: "Hygienic Environment", desc: "Sterilised tools and premium standards." },
  { icon: Wallet, title: "Affordable Premium", desc: "Luxury craft at honest, fair pricing." },
  { icon: Smile, title: "Friendly Staff", desc: "Welcoming atmosphere from the moment you arrive." },
  { icon: Clock, title: "Open Until 11:30 PM", desc: "We work around your busy schedule." },
  { icon: Wrench, title: "Modern Equipment", desc: "Premium tools for precision results." },
];

export function WhyChooseUs() {
  return (
    <section className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Why Choose Us"
          title={<>The <span className="text-gradient-gold italic">Paul Barber</span> difference</>}
        />

        <div className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.04 }}
              className="group bg-background p-8 transition-colors hover:bg-card"
            >
              <f.icon className="h-7 w-7 text-gold transition-transform group-hover:scale-110" />
              <h3 className="mt-5 font-display text-lg">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
