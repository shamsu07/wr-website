import Footer from "./footer/footer";
import Header from "./header/header";
import "./globals.css";
import "tailwindcss/tailwind.css";

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
