import type { FC } from 'react';
import './About.css';

const About: FC = () => {
  return (
    <section id="about" className="about-section">
      <div className="container about-container">
        <div>
          <span className="about-subtitle">About</span>
          <h2>A video production company that builds its own tools.</h2>
        </div>
        <div className="about-body">
          <p>
            Route 86 Visuals is a video production company first — every tool we ship started
            as something we needed for our own jobs, from setting up a new project to renaming
            a card of footage to running our YouTube channel.
          </p>
          <p>
            We build for macOS, for Apple Silicon, and for the way editors and motion designers
            actually work — not around a hypothetical enterprise workflow.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
