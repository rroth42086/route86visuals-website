import type { FC } from 'react';
import './Footer.css';

const Footer: FC = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-info">
          <div className="logo">
            <span className="logo-text">Route 86 Visuals</span>
          </div>
          <p>macOS Tools for Video Production.</p>
          <p className="copyright">© 2026 Route 86 Visuals LLC. All Rights Reserved.</p>
        </div>
        <div className="footer-links">
          <div className="link-group">
            <h4>Apps</h4>
            <ul>
              <li><a href="https://rroth42086.github.io/scaffold-website/">Scaffold</a></li>
              <li><a href="https://rroth42086.github.io/hydra-website/">Depot</a></li>
              <li><a href="https://rroth42086.github.io/slater-website/">Anvil</a></li>
              <li><a href="https://rroth42086.github.io/postprod3-website/">Vault</a></li>
            </ul>
          </div>
          <div className="link-group">
            <h4>Company</h4>
            <ul>
              <li><a href="#about">About</a></li>
              <li><a href="mailto:rnbvfx@gmail.com">Contact</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
