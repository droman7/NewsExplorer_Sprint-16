import "./Footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <p className="footer__copyright">© 2025 NewsExplorer</p>
      <div className="footer__nav">
        <nav className="footer__links">
          <Link to="/" className="footer__link">
            Home
          </Link>
          <a
            href="https://practicum.com"
            className="footer__link"
            target="_blank"
            rel="noreferrer"
          >
            Practicum
          </a>
        </nav>
        <div className="footer__social">
          <a
            href="https://github.com"
            className="footer__icon"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/github.svg" alt="GitHub" />
          </a>
          <a
            href="https://facebook.com"
            className="footer__icon"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/facebook.svg" alt="Facebook" />
          </a>
        </div>
      </div>
    </footer>
  );
}
