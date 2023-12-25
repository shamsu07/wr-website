import Footer from "../components/footer/footer";
import Header from "../components/header/header";
import ScrollToTop from "../components/scrollToTop/scrollToTop";
import "./globals.css";
import "tailwindcss/tailwind.css";
import { Mulish } from "next/font/google";

const mulish = Mulish({
  subsets: ["vietnamese"],
  display: "swap",
});
export default function RootLayout({ children }) {
  return (
    <html className={mulish.className}>
      <body className="bg-darkGunmetal">
        <Header />
        {children}
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
