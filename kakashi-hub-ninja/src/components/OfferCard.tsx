import { motion } from "framer-motion";
import { Check, Copy, ExternalLink, Sparkles } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import type { Offer } from "@/data/offers";
import { Button } from "@/components/ui/button";

const categoryStyles: Record<string, string> = {
  Futures: "bg-[hsl(var(--tag-futures)/0.15)] text-[hsl(var(--tag-futures))] border-[hsl(var(--tag-futures)/0.3)]",
  Forex: "bg-[hsl(var(--tag-forex)/0.15)] text-[hsl(var(--tag-forex))] border-[hsl(var(--tag-forex)/0.3)]",
  Crypto: "bg-[hsl(var(--tag-crypto)/0.15)] text-[hsl(var(--tag-crypto))] border-[hsl(var(--tag-crypto)/0.3)]",
  Multi: "bg-primary/15 text-primary border-primary/30",
};

interface Props {
  offer: Offer;
  index: number;
}

export const OfferCard = ({ offer, index }: Props) => {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    if (!offer.code) return;
    await navigator.clipboard.writeText(offer.code);
    setCopied(true);
    toast.success(`Code "${offer.code}" copied`, { description: "Paste it at checkout to unlock the offer." });
    setTimeout(() => setCopied(false), 2000);
  };

  const claim = () => {
    window.open(offer.link, "_blank", "noopener,noreferrer");
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6 }}
      className="group glass chakra-border rounded-2xl p-6 flex flex-col gap-5 relative overflow-hidden"
    >
      {/* corner glow */}
      <div className="absolute -top-20 -right-20 w-48 h-48 rounded-full bg-primary/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

      <header className="flex items-start justify-between gap-3 relative">
        <div className="flex items-center gap-3">
          <div className="relative h-12 w-12 rounded-xl bg-black/40 flex items-center justify-center overflow-hidden transition duration-300 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.5)]">
            <img
              src={offer.logo}
              alt={offer.name}
              className="h-full w-full object-contain p-1 group-hover:scale-110 transition duration-300"
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = "/fallback.png";
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition" />
          </div>
          <div>
            <h3 className="font-display text-lg font-bold tracking-wide">{offer.name}</h3>
            <span className={`inline-block mt-1 text-[10px] uppercase tracking-widest px-2 py-0.5 rounded-full border ${categoryStyles[offer.category]}`}>
              {offer.category}
            </span>
          </div>
        </div>
        <Sparkles className="h-4 w-4 text-primary/60 group-hover:text-primary transition" />
      </header>

      <div className="relative">
        <div className="font-display text-4xl font-black text-gradient-chakra leading-none">
          {offer.discount}
        </div>
        <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{offer.tagline}</p>
      </div>

      <ul className="space-y-2">
        {offer.features.map((f) => (
          <li key={f} className="flex items-start gap-2 text-sm text-foreground/85">
            <Check className="h-4 w-4 mt-0.5 text-primary shrink-0" strokeWidth={2.5} />
            <span>{f}</span>
          </li>
        ))}
      </ul>

      {offer.code && (
        <div className="flex items-stretch gap-2 rounded-xl border border-border bg-secondary/40 p-1.5">
          <div className="flex-1 px-3 py-2 font-mono text-sm text-primary tracking-wider truncate">
            {offer.code}
          </div>
          <button
            onClick={copy}
            className="px-3 rounded-lg bg-secondary hover:bg-primary/20 text-foreground/90 hover:text-primary transition flex items-center gap-1.5 text-xs font-semibold"
            aria-label="Copy code"
          >
            {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
            {copied ? "Copied" : "Copy"}
          </button>
        </div>
      )}

      <Button onClick={claim} variant="chakra" className="mt-auto w-full group/btn">
        Claim Offer
        <ExternalLink className="h-4 w-4 ml-1 group-hover/btn:translate-x-0.5 transition" />
      </Button>
    </motion.article>
  );
};
