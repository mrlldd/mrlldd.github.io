import React from 'react'
import './Summary.css'
import spotifyLogo from './links-media/spotify.svg'
import githubLogo from './links-media/github.svg'
import telegramLogo from './links-media/telegram.svg'
import Hideable from '../Hideable/Hideable'

const frontendSkills = ['react', 'angular']

const backendSkills = ['dotnet', 'aspnetcore', 'efcore', 'mssql']
const devopsSkills = ['azure', 'heroku']
const languages = ['ts', 'js', 'csharp']

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

const Summary: React.FC = () => (
    <div className="Summary" data-testid="Summary">
        <div className="summary-content-header">
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
            <h4>Ukraine, Zaporizhzhya</h4>
            <div className="skills-sets-container">
                {[frontendSkills, backendSkills, devopsSkills, languages].map(
                    (skillSet, index) => (
                        <div
                            key={`${index}:skill-set`}
                            className={`skill-set-container ${
                                index % 2 === 0 ? 'even' : 'odd'
                            }`}
                        >
                            {skillSet.map((x, skillIndex) => (
                                <span
                                    key={`${index}:${skillIndex}:skill`}
                                    className="skill-container"
                                >
                                    {x}
                                </span>
                            ))}
                        </div>
                    )
                )}
            </div>
        </Hideable>
    </div>
)

export default Summary
