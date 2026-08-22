import type { FC } from 'react';
import './Navbar.css';

const Navbar: FC = () => {
  return (
    <nav className="navbar">
      <div className="container nav-container">
        <div className="logo">
          <img src={`${import.meta.env.BASE_URL}favicon.svg`} alt="Route 86 Visuals Logo" className="logo-img" />
          <span className="logo-text">ROUTE 86 VISUALS</span>
        </div>
        <ul className="nav-links">
          <li><a href="#apps">Apps</a></li>
          <li><a href="#about">About</a></li>
        </ul>
        <div className="nav-cta">
          <a href="mailto:rnbvfx@gmail.com" className="btn btn-primary">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
