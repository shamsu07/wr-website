import Footer from "../components/footer/footer";
import Header from "../components/header/header";
import Spacer from "../components/spacer/spacer";
import ScrollToTop from "../components/scrollToTop/scrollToTop";
import { Mulish } from "next/font/google";


import "./globals.css";
import "tailwindcss/tailwind.css";
import next from "next";

const mulish = Mulish({
  subsets: ["vietnamese"],
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html className={mulish.className}>
      <body className="bg-darkGunmetal">
        <Header />
        <Spacer />
        {children}
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}

export const metadata = {
  metadataBase: new URL("https://www.wealth-right.com"),
  title: {
    template: "%s | WealthRight",
    default: "WealthRight",
  },
  category: "Finance",
  alternates: {
    canonical: "/",
  },
  generator: "Next.js",
  applicationName: "WealthRight Website",
  referrer: "origin-when-cross-origin",
  keywords: [
    // General
    "financial broker services",
    "best financial broker",
    "find a financial broker",
    "financial broker reviews",
    "compare financial brokers",
    "agent-assisted financial planning",
    "personalized financial advice",
    "find a financial advisor near me",
    "one-on-one financial consulting",
    "expert financial guidance",
    "custom financial solutions",
    "personalized investment plans",
    "individual needs analysis",
    "bespoke financial strategies",
    "meet your financial goals",

    //finance-related

    "finance",
    "investing",
    "dfs",
    "loans",
    "insurance",
    "mortgage",
    "life insurance",
    "mutual funds",
    "investment",
    "ifa",
    "cfp",
    "financial advisor",
    "fpa",
    "financial management",
    "finance department",
    "fsi",
    "wealth management",
    "financial planner",
    "financial planning",
    "financial institutions",

    // Products
    "life insurance",
    "health insurance",
    "property insurance",
    "liability insurance",
    "disability insurance",
    "critical illness insurance",
    "business insurance",
    "mutual fund investment",
    "diversified portfolio",
    "wealth management",
    "retirement planning",
    "long-term investments",
    "high-growth funds",
    "income-generating funds",

    // Long-tail
    "how to find a financial advisor who understands my needs",
    "compare insurance quotes for [specific coverage]",
    "invest for retirement with personalized advice",
    "financial planning for single parents",
    "grow my wealth with mutual funds",

    // Financial terms
    "risk management",
    "portfolio diversification",
    "asset allocation",
    "financial goals",
    "wealth accumulation",
    "retirement planning",
    "estate planning",

    // Action verbs
    "invest",
    "save",
    "protect",
    "grow",
    "plan",
    "secure",
    "achieve",
  ],
  creator: "Shamsuddeen K S",
  publisher: "Prudelity 360 Technology LLP",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  openGraph: {
    title: "WealthRight",
    description: "The official website of WealthRight",
    url: "https://www.wealth-right.com",
    siteName: "WealthRight",
    images: [
      {
        url: "https://www.wealth-right.com/logo.svg",
        width: 800,
        height: 600,
        alt: "WealthRight Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
  manifest: "https://www.wealth-right.com/manifest.json",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  colorScheme: "dark",
};
