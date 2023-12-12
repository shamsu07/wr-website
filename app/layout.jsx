import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import "bootstrap/dist/css/bootstrap.min.css";
import './global.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
