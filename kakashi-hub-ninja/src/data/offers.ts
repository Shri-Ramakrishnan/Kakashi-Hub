export type Category = "Futures" | "Forex" | "Crypto" | "Multi";

export interface Offer {
  id: string;
  name: string;
  logo: string;
  category: Category;
  discount: string;
  tagline: string;
  features: string[];
  code: string | null;
  link: string;
  accent: "blue" | "violet" | "amber" | "cyan" | "red";
}

export const offers: Offer[] = [
  {
    id: "blue-guardian",
    name: "Blue Guardian",
    logo: "/src/assets/logos/blueguardian.png",
    category: "Forex",
    discount: "25% OFF",
    tagline: "Trusted forex prop firm with fair rules",
    features: ["Up to $200K accounts", "Bi-weekly payouts", "Scaling plan included"],
    code: "Kakashi",
    link: "https://blueguardian.com/?afmc=Kakashi",
    accent: "blue",
  },
  {
    id: "the5ers",
    name: "The5ers",
    logo: "/src/assets/logos/the5ers.png",
    category: "Forex",
    discount: "BOGO",
    tagline: "Buy one get one — instant funding programs",
    features: ["High-stakes & bootcamp", "Fast scaling", "Trusted since 2016"],
    code: "BOGOTHEMJ",
    link: "https://www.the5ers.com/?afmc=1an0",
    accent: "cyan",
  },
  {
    id: "fundingpips",
    name: "FundingPips",
    logo: "/src/assets/logos/fundingpips.png",
    category: "Forex",
    discount: "EXCLUSIVE",
    tagline: "One of the fastest growing prop firms",
    features: ["Instant funding option", "Up to 90% profit split", "No time limits"],
    code: "30818c35",
    link: "https://app.fundingpips.com/register?ref=30818c35",
    accent: "blue",
  },
  {
    id: "brightfunded",
    name: "BrightFunded",
    logo: "/src/assets/logos/brightfunded.png",
    category: "Forex",
    discount: "PARTNER",
    tagline: "Trade-to-earn rewards on every trade",
    features: ["Reward tokens", "Up to 95% split", "Multi-step & 1-step"],
    code: "b50lZ4ddSd6FRdXvRF_Mzw",
    link: "https://brightfunded.com/a/b50lZ4ddSd6FRdXvRF_Mzw",
    accent: "amber",
  },
  {
    id: "e8-markets",
    name: "E8 Markets",
    logo: "/src/assets/logos/e8markets.png",
    category: "Multi",
    discount: "KAKASHI",
    tagline: "Premium evaluation with flexible challenges",
    features: ["E8, ELEV8, 8eight programs", "Up to 80% split", "Unlimited time"],
    code: "KAKASHI",
    link: "https://e8markets.com/d/KAKASHI",
    accent: "violet",
  },
  {
    id: "alpha-capital",
    name: "Alpha Capital Group",
    logo: "/src/assets/logos/alphacapital.png",
    category: "Forex",
    discount: "PVAAY",
    tagline: "London-based prop firm with elite traders",
    features: ["Up to 100% profit split", "Swing accounts", "Weekly payouts"],
    code: "PVAAY",
    link: "https://app.alphacapitalgroup.uk/signup/PVAAY",
    accent: "cyan",
  },
  {
    id: "aquafunded",
    name: "AquaFunded",
    logo: "/src/assets/logos/aquafunded.png",
    category: "Forex",
    discount: "AFFILIATE",
    tagline: "Smooth challenges, fast onboarding",
    features: ["1-step & 2-step", "Up to 90% split", "Bi-weekly payouts"],
    code: "4uu",
    link: "https://www.aquafunded.com/Kakashi?afmc=4uu",
    accent: "blue",
  },
  {
    id: "crypto-fund-trader",
    name: "Crypto Fund Trader",
    logo: "/src/assets/logos/cryptofundtrader.png",
    category: "Crypto",
    discount: "CRYPTO",
    tagline: "Dedicated crypto prop firm — 24/7 markets",
    features: ["Crypto + perpetuals", "Up to 90% split", "No restrictions"],
    code: null,
    link: "https://cryptofundtrader.com?_by=kakashi",
    accent: "amber",
  },
];
