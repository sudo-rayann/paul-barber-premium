import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const reviews = [
  { name: "Ahmed K.", text: "Excellent service and incredible attention to detail by Mr. Siraj. The fade is razor-perfect every time." },
  { name: "Omar R.", text: "Best salon experience I've had in a long time. Clean, professional and truly premium." },
  { name: "Khalid M.", text: "Professional, friendly and highly skilled team. They actually listen to what you want." },
  { name: "Yousef A.", text: "Worth traveling from Dubai for this quality of service. My go-to barber in the UAE." },
  { name: "Hassan I.", text: "Clean fade, perfect finishing and an amazing atmosphere. Highly recommended." },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % reviews.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="reviews" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Reviews"
          title={<>What our <span className="text-gradient-gold italic">clients say</span></>}
          description="Rated 4.9 stars across 1,441+ verified Google reviews."
        />

        <div className="mx-auto mt-16 max-w-3xl">
          <div className="relative min-h-[260px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="rounded-3xl border border-gold bg-card/60 p-10 shadow-elegant"
              >
                <Quote className="h-10 w-10 text-gold opacity-60" />
                <p className="mt-6 font-display text-2xl leading-relaxed md:text-3xl">
                  "{reviews[i].text}"
                </p>
                <div className="mt-8 flex items-center justify-between">
                  <div>
                    <div className="font-semibold">{reviews[i].name}</div>
                    <div className="text-xs text-muted-foreground">Verified Google Review</div>
                  </div>
                  <div className="flex gap-1 text-gold">
                    {[...Array(5)].map((_, k) => (
                      <Star key={k} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-8 flex justify-center gap-2">
            {reviews.map((_, k) => (
              <button
                key={k}
                onClick={() => setI(k)}
                aria-label={`Review ${k + 1}`}
                className={`h-1.5 rounded-full transition-all ${
                  k === i ? "w-8 bg-gold" : "w-1.5 bg-border"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
