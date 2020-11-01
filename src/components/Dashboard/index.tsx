import React from 'react';
import './Dashboard.css';
import TransparentAccordion from '../../shared/components/TransparentAccordion';
import spotifyLogo from './assets/spotify.svg';
import githubLogo from './assets/github.svg';
import telegramLogo from './assets/telegram.svg';
import linkedInLogo from './assets/linked-in.svg';
import { Link } from 'react-router-dom';

function openLinkFactory(url: string): () => void {
  return () => window.open(url, '_blank');
}

interface LogoElement {
  link: string;
  alt: string;
  content: string;
}

const logos: LogoElement[] = [
  {
    alt: 'github-logo',
    content: githubLogo,
    link: 'https://github.com/mrlldd',
  },
  {
    alt: 'linkedin-logo',
    content: linkedInLogo,
    link: 'https://www.linkedin.com/in/ivan-yeremenko-403a6b188/',
  },
  {
    alt: 'telegram-logo',
    content: telegramLogo,
    link: 'https://t.me/mrlldd',
  },
  {
    alt: 'spotify-logo',
    content: spotifyLogo,
    link: 'https://open.spotify.com/user/1ytvagjswjl00avixcs29sh4v?si=C9eGNEyQTNGxSkr4j1o6WA',
  },
];

const Dashboard: React.FC = () => (
  <div className="Dashboard">
    <div className="dashboard-content-header">
      <div className="info-container">
        <h2>mrlldd</h2>
        Forcing electrons to do math
      </div>
      <div className="links-logos">
        {logos.map((x, index) => (
          <img
            alt={x.alt}
            src={x.content}
            key={`${index}:logo`}
            onClick={openLinkFactory(x.link)}
            className="link-logo"
          />
        ))}
      </div>
    </div>
    <TransparentAccordion additionalHeightPx={8}>
      <h2>Ivan</h2>
      <h3>Software Engineer</h3>
      <Link to="/cv" className="centered italic">
        CV
      </Link>
    </TransparentAccordion>
  </div>
);

export default Dashboard;
