import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import { Search, Twitter, Instagram, ArrowDown, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { OfferCard } from "@/components/OfferCard";
import SharinganEye from "@/components/SharinganEye";
import { offers, type Category } from "@/data/offers";
import heroBg from "@/assets/hero-bg.jpg";

const filters: ("All" | Category)[] = ["All", "Forex", "Futures", "Crypto", "Multi"];

const Index = () => {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState<(typeof filters)[number]>("All");

  const filtered = useMemo(() => {
    return offers.filter((o) => {
      const matchesCat = active === "All" || o.category === active;
      const q = query.trim().toLowerCase();
      const matchesQ = !q || o.name.toLowerCase().includes(q) || o.tagline.toLowerCase().includes(q);
      return matchesCat && matchesQ;
    });
  }, [query, active]);

  return (
    <div className="min-h-screen text-foreground relative overflow-x-hidden">
      {/* HERO */}
      <header className="relative min-h-[100svh] flex flex-col">
        <img
          src={heroBg}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-60 pointer-events-none"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background pointer-events-none" />
        <div className="absolute inset-0 grid-overlay pointer-events-none" />

        {/* mist layers */}
        <div className="absolute inset-x-0 top-1/3 h-64 bg-primary/10 blur-3xl animate-mist pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-64 bg-accent/10 blur-3xl animate-mist [animation-delay:-6s] pointer-events-none" />

        {/* Nav */}
        <nav className="relative z-10 flex items-center justify-between px-6 md:px-12 py-6">
          <div className="flex items-center gap-3">
            <SharinganEye size={35} variant="static" className="glow-sharingan" />
            <span className="font-display font-bold text-lg tracking-widest">KAKASHI<span className="text-primary">.HUB</span></span>
          </div>
          <div className="flex items-center gap-2">
            <a href="https://x.com/Kakashi_05_" target="_blank" rel="noopener noreferrer" aria-label="Follow on X"
               className="h-10 w-10 rounded-full glass flex items-center justify-center hover:text-primary hover:border-primary/40 transition">
              <Twitter className="h-4 w-4" />
            </a>
            <a href="https://www.instagram.com/kakashi.0.5/" target="_blank" rel="noopener noreferrer" aria-label="Follow on Instagram"
               className="h-10 w-10 rounded-full glass flex items-center justify-center hover:text-primary hover:border-primary/40 transition">
              <Instagram className="h-4 w-4" />
            </a>
          </div>
        </nav>

        {/* Hero content */}
        <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-6 pb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative mb-8"
          >
            <div className="absolute inset-0 rounded-full bg-primary/30 blur-3xl animate-pulse-glow" />
            <div className="relative h-28 w-28 md:h-32 md:w-32 rounded-full glass flex items-center justify-center animate-float">
              <SharinganEye size={80} variant="hero" className="md:h-[96px] md:w-[96px]" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass mb-6 text-xs uppercase tracking-[0.25em] text-muted-foreground"
          >
            <Shield className="h-3.5 w-3.5 text-primary" />
            Elite Prop Firm Access — Handpicked
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="font-display text-5xl md:text-7xl lg:text-8xl font-black leading-[0.95] max-w-5xl"
          >
            Kakashi <span className="text-gradient-chakra">Trading</span> Hub
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.5 }}
            className="mt-6 text-base md:text-lg text-muted-foreground max-w-xl"
          >
            A silent ninja's vault of the most trusted prop firm offers.
            Discount codes, exclusive deals — all in one place.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.7 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-3"
          >
            <Button asChild variant="chakra" size="lg" className="px-8 text-base">
              <a href="#offers">Explore Offers</a>
            </Button>
            <Button asChild variant="ghostNinja" size="lg" className="px-6 text-base">
              <a href="https://x.com/Kakashi_05_" target="_blank" rel="noopener noreferrer">Follow Sensei</a>
            </Button>
          </motion.div>

          <motion.a
            href="#offers"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="absolute bottom-8 text-muted-foreground/70 hover:text-primary transition flex flex-col items-center gap-2 text-xs uppercase tracking-widest"
          >
            Scroll
            <ArrowDown className="h-4 w-4 animate-bounce" />
          </motion.a>
        </div>
      </header>

      {/* OFFERS */}
      <section id="offers" className="relative py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-xs uppercase tracking-[0.3em] text-primary/80">The Scroll</span>
          <h2 className="font-display text-4xl md:text-6xl font-black mt-3">
            Affiliate <span className="text-gradient-chakra">Offers</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Curated discounts on the world's top prop firms. Copy a code, claim, and trade.
          </p>
        </div>

        {/* Filter / Search */}
        <div className="flex flex-col md:flex-row gap-4 mb-10 items-stretch md:items-center justify-between">
          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider border transition ${
                  active === f
                    ? "bg-primary text-primary-foreground border-primary shadow-[0_0_20px_hsl(var(--primary)/0.5)]"
                    : "glass hover:border-primary/50 hover:text-primary"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
          <div className="relative md:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search firms…"
              className="w-full pl-9 pr-4 py-2.5 rounded-full glass text-sm placeholder:text-muted-foreground/70 focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((offer, i) => (
            <OfferCard key={offer.id} offer={offer} index={i} />
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-muted-foreground py-16">No offers match your search — try another keyword.</p>
        )}
      </section>

      {/* FOOTER */}
      <footer className="relative border-t border-border/60 mt-10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <SharinganEye size={40} variant="slowSpin" />
            <span className="font-display font-bold tracking-widest text-sm">KAKASHI.HUB</span>
          </div>
          <p className="text-xs text-muted-foreground text-center max-w-md">
            Affiliate disclosure: Some links may earn a commission at no extra cost to you.
            Trading involves significant risk.
          </p>
          <div className="flex items-center gap-2">
            <a href="https://x.com/Kakashi_05_" target="_blank" rel="noopener noreferrer" aria-label="X"
               className="h-9 w-9 rounded-full glass flex items-center justify-center hover:text-primary transition">
              <Twitter className="h-4 w-4" />
            </a>
            <a href="https://www.instagram.com/kakashi.0.5/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"
               className="h-9 w-9 rounded-full glass flex items-center justify-center hover:text-primary transition">
              <Instagram className="h-4 w-4" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
