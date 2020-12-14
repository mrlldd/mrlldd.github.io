import React from 'react'
import './Dashboard.css'
import spotifyLogo from './links-media/spotify.svg'
import githubLogo from './links-media/github.svg'
import telegramLogo from './links-media/telegram.svg'
import Hideable from '../Hideable/Hideable'
import { Link } from 'react-router-dom'

function openLinkFactory(url: string): () => void {
    return () => window.open(url, '_blank')
}

interface LogoElement {
    link: string
    alt: string
    content: string
}

const logos: LogoElement[] = [
    {
        alt: 'github-logo',
        content: githubLogo,
        link: 'https://github.com/mrlldd',
    },
    {
        alt: 'telegram-logo',
        content: telegramLogo,
        link: 'https://t.me/mrlldd',
    },
    {
        alt: 'spotify-logo',
        content: spotifyLogo,
        link:
            'https://open.spotify.com/user/1ytvagjswjl00avixcs29sh4v?si=C9eGNEyQTNGxSkr4j1o6WA',
    },
]

const Dashboard: React.FC = () => (
    <div className="Dashboard" data-testid="Dashboard">
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
        <Hideable>
            <h2>Ivan Yeremenko</h2>
            <h3>Software Engineer</h3>
            <h4>Zaporizhzhya, Ukraine</h4>
            <Link to="/cv" className="centered">
                CV
            </Link>
        </Hideable>
    </div>
)

export default Dashboard
