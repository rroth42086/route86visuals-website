import type { FC } from 'react';
import './Hero.css';

const Hero: FC = () => {
  return (
    <section className="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-badge">macOS Tools for Video Production</div>
          <h1>Software built by people who actually make videos.</h1>
          <p>
            Route 86 Visuals designs focused macOS tools for editors, motion designers, and
            production teams — starting with the tools we built to run our own pipeline.
          </p>
          <div className="hero-actions">
            <a href="#apps" className="btn btn-primary btn-lg">Explore the Apps</a>
            <a href="mailto:rnbvfx@gmail.com" className="btn btn-outline btn-lg">Get in Touch</a>
          </div>
          <p className="hero-meta">Route 86 Visuals LLC &nbsp;·&nbsp; macOS only &nbsp;·&nbsp; Built in-house, one tool at a time.</p>
        </div>
        <div className="hero-visual">
          <div className="hero-image-container">
            <img src={`${import.meta.env.BASE_URL}favicon.svg`} alt="Route 86 Visuals" className="hero-main-icon" />
            <div className="glass-card">
              <div className="card-top">
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
              </div>
              <div className="card-inner">
                <div className="line"></div>
                <div className="line half"></div>
                <div className="line lime"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
