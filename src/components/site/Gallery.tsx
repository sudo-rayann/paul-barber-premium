import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";

const images = [
  { src: g1, label: "Skin Fade", span: "row-span-2" },
  { src: g2, label: "Beard Styling", span: "" },
  { src: g4, label: "Salon Interior", span: "" },
  { src: g3, label: "Modern Hairstyle", span: "" },
  { src: g6, label: "Hot Towel Facial", span: "row-span-2" },
  { src: g5, label: "Premium Tools", span: "" },
];

export function Gallery() {
  return (
    <section id="gallery" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Gallery"
          title={<>The <span className="text-gradient-gold italic">craft</span> in motion</>}
          description="A glimpse into our salon, our work and the gentlemen who trust us."
        />

        <div className="mt-16 grid auto-rows-[220px] grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {images.map((img, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className={`group relative overflow-hidden rounded-2xl border border-border ${img.span}`}
            >
              <img
                src={img.src}
                alt={img.label}
                width={800}
                height={1000}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />
              <figcaption className="absolute bottom-4 left-4 text-xs uppercase tracking-[0.2em] text-gold">
                {img.label}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
