import { MessageCircle } from "lucide-react";

export function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/971564349983?text=Hi%20Paul%20Barber%2C%20I%27d%20like%20to%20book%20an%20appointment"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Book on WhatsApp"
      className="fixed bottom-6 right-6 z-40 grid h-14 w-14 place-items-center rounded-full gradient-gold text-background shadow-gold transition-transform hover:scale-110"
    >
      <MessageCircle className="h-6 w-6" />
      <span className="absolute -top-1 -right-1 grid h-4 w-4 place-items-center rounded-full bg-background text-[10px] font-bold text-gold">1</span>
    </a>
  );
}
