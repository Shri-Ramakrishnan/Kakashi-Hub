import blueguardian from "@/assets/logos/blueguardian.png";
import the5ers from "@/assets/logos/the5ers.png";
import fundingpips from "@/assets/logos/fundingpips.png";
import brightfunded from "@/assets/logos/brightfunded.png";
import e8markets from "@/assets/logos/e8markets.png";
import alphacapital from "@/assets/logos/alphacapital.png";
import aquafunded from "@/assets/logos/aquafunded.png";
import cryptofundtrader from "@/assets/logos/cryptofundtrader.png";
import alphafutures from "@/assets/logos/alphafutures.png";
import e8x from "@/assets/logos/e8x.png";
import mentfunding from "@/assets/logos/mentfunding.png";
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
    logo: blueguardian,
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
    logo: the5ers,
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
    logo: fundingpips,
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
    logo: brightfunded,
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
    logo: e8markets,
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
    logo: alphacapital,
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
    logo: aquafunded,
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
    logo: cryptofundtrader,
    category: "Crypto",
    discount: "CRYPTO",
    tagline: "Dedicated crypto prop firm — 24/7 markets",
    features: ["Crypto + perpetuals", "Up to 90% split", "No restrictions"],
    code: null,
    link: "https://cryptofundtrader.com?_by=kakashi",
    accent: "amber",
  },
  {
  id: "alpha-futures",
  name: "Alpha Futures",
  logo: alphafutures,
  category: "Futures",
  discount: "FUNDED",
  tagline: "Futures prop firm with structured scaling",
  features: [
    "Evaluation + instant funding",
    "Structured risk model",
    "Fast payouts"
  ],
  code: null,
  link: "https://app.alpha-futures.com/signup/Shri_Ramakrishnan024610/",
  accent: "blue",
},
{
  id: "e8x-futures",
  name: "E8X Futures",
  logo: e8x,
  category: "Futures",
  discount: "KAKASHI",
  tagline: "Futures trading powered by E8 Markets",
  features: [
    "Advanced futures programs",
    "High scaling potential",
    "Backed by E8 ecosystem"
  ],
  code: "KAKASHI",
  link: "https://e8markets.com/d/KAKASHI",
  accent: "violet",
},
{
  id: "ment-funding",
  name: "Ment Funding",
  logo: mentfunding,
  category: "Forex",
  discount: "FUNDED",
  tagline: "One-step evaluation with no time limits",
  features: [
    "1-step challenge model",
    "Up to 90% profit split",
    "No time restrictions"
  ],
  code: null,
  link: "https://dashboard.mentfunding.com/challenges?affiliateId=Kakashi",
  accent: "violet",
},
];