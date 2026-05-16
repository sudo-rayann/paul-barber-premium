import { motion } from "framer-motion";

export function SectionHeading({
  eyebrow,
  title,
  description,
  center = true,
}: {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  center?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}
    >
      <div className="mb-4 text-xs uppercase tracking-[0.3em] text-gold">{eyebrow}</div>
      <h2 className="font-display text-4xl md:text-5xl">{title}</h2>
      {description && (
        <p className="mt-4 text-muted-foreground">{description}</p>
      )}
    </motion.div>
  );
}
