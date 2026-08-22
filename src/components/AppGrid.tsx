import type { FC, CSSProperties } from 'react';
import './AppGrid.css';

interface AppEntry {
  name: string;
  tagline: string;
  status: 'Available Now' | 'Coming Soon';
  color: string;
  href: string;
}

const apps: AppEntry[] = [
  {
    name: 'Scaffold',
    tagline: 'Project setup in one click — standardized folder structures and app-specific config for AE, C4D, Flame, and more.',
    status: 'Available Now',
    color: '#d9ea3d',
    href: 'https://rroth42086.github.io/scaffold-website/',
  },
  {
    name: 'The Hydra',
    tagline: 'Bulk YouTube upload with full per-video control, plus a channel health dashboard.',
    status: 'Coming Soon',
    color: '#3bc6eb',
    href: 'https://rroth42086.github.io/hydra-website/',
  },
  {
    name: 'Slater',
    tagline: 'Batch-renames raw footage to a clean, consistent naming convention in one pass.',
    status: 'Coming Soon',
    color: '#f84018',
    href: 'https://rroth42086.github.io/slater-website/',
  },
  {
    name: 'postprod3',
    tagline: 'Shared, S3-backed cloud storage for video teams — a faster, self-hosted alternative to LucidLink.',
    status: 'Coming Soon',
    color: '#6579e2',
    href: 'https://rroth42086.github.io/postprod3-website/',
  },
];

const AppGrid: FC = () => {
  return (
    <section id="apps" className="apps-section">
      <div className="container">
        <div className="apps-header">
          <span className="apps-subtitle">The Lineup</span>
          <h2>Four tools. One pipeline.</h2>
        </div>

        <div className="apps-grid">
          {apps.map((app) => (
            <a key={app.name} href={app.href} className="app-card" style={{ '--app-color': app.color } as CSSProperties}>
              <div className="app-card-top">
                <span className={`app-status ${app.status === 'Available Now' ? 'live' : ''}`}>{app.status}</span>
              </div>
              <h3>{app.name}</h3>
              <p>{app.tagline}</p>
              <span className="app-card-link">Visit site →</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AppGrid;
