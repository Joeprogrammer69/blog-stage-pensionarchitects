import type { AppProps } from "next/app";
import NavBarBlog from "./components/navbarblog";
import "@/styles/globals.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="site-shell">
      <NavBarBlog />
      <Component {...pageProps} />
      <footer className="site-footer">
        <div className="footer-inner">
          <span>Steven Van Cleemput · werkplekleren Pension Architects</span>
          <span>2025 — 2026</span>
        </div>
      </footer>
    </div>
  );
}
