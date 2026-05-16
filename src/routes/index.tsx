import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { WhyChooseUs } from "@/components/site/WhyChooseUs";
import { Team } from "@/components/site/Team";
import { Testimonials } from "@/components/site/Testimonials";
import { Gallery } from "@/components/site/Gallery";
import { Booking } from "@/components/site/Booking";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Paul Barber Branch 3 — Best Gents Salon in Muweilah, Sharjah" },
      {
        name: "description",
        content:
          "Premium men's grooming in Muweilah, Sharjah. Expert haircuts, skin fades, beard styling & facials. Rated 4.9★ by 1,441+ clients. Book online or call +971 56 434 9983.",
      },
      { property: "og:title", content: "Paul Barber Branch 3 — Premium Men's Salon, Sharjah" },
      { property: "og:description", content: "Sharjah's premium men's grooming destination. Open daily until 11:30 PM." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyChooseUs />
        <Team />
        <Gallery />
        <Testimonials />
        <Booking />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
