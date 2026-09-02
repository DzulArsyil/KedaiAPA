import { useCallback, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Ticker from "./components/Ticker";
import QuickInfo from "./components/QuickInfo";
import MenuSection from "./components/MenuSection";
import CateringSection from "./components/CateringSection";
import AboutSection from "./components/AboutSection";
import GallerySection from "./components/GallerySection";
import TestimonialsSection from "./components/TestimonialsSection";
import LocationSection from "./components/LocationSection";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";
import MobileBar from "./components/MobileBar";
import OrderModal from "./components/OrderModal";
import { OrderContext, type OrderIntent } from "./components/OrderContext";

const TICKER_ITEMS = [
  "PESAN VIA WHATSAPP",
  "KARAWANG KULON",
  "CATERING & NASI KOTAK",
  "MAKANAN & MINUMAN",
  "PESAN ANTAR SEKITAR KARAWANG",
  "SEBERANG RICHEESE KERTABUMI",
];

export default function App() {
  const [intent, setIntent] = useState<OrderIntent | null>(null);
  const openOrder = useCallback((i: OrderIntent) => setIntent(i), []);
  const closeOrder = useCallback(() => setIntent(null), []);

  return (
    <OrderContext.Provider value={openOrder}>
      <div className="grain min-h-screen overflow-x-clip bg-cream-50 font-body text-ink-900">
        {/* skip link untuk keyboard */}
        <a
          href="#konten"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-gold-400 focus:px-5 focus:py-3 focus:font-display focus:text-sm focus:font-bold focus:text-pine-950"
        >
          Langsung ke konten
        </a>

        <Navbar />

        <main id="konten">
          <Hero />
          <Ticker items={TICKER_ITEMS} variant="gold" />
          <QuickInfo />
          <MenuSection />
          <CateringSection />
          <AboutSection />
          <GallerySection />
          <Ticker items={["CATERING KARAWANG", "NASI KOTAK", "PRASMANAN", "SNACK BOX", "KONSULTASI GRATIS"]} variant="dark" speed={26} />
          <TestimonialsSection />
          <LocationSection />
          <FinalCTA />
        </main>

        <Footer />
        <MobileBar />

        <OrderModal intent={intent} onClose={closeOrder} />
      </div>
    </OrderContext.Provider>
  );
}
