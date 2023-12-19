import Footer from "./footer/footer";
import Header from "./header/header";
import ScrollToTop from "./scrollToTop/scrollToTop";
import "./globals.css";
import "tailwindcss/tailwind.css";
import {Mulish} from 'next/font/google'

const mulish = Mulish({
  subsets:['vietnamese'],
  display:'swap'
})
export default function RootLayout({ children }) {
  return (
    <html className={mulish.className}>
      <body>
        <Header/>
        {children}
        <Footer/>
        <ScrollToTop/>
      </body>
    </html>
  );
}
