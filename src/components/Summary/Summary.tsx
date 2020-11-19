import React from 'react'
import './Summary.css'
import spotifyOuterLogo from './links-media/spotify.svg'
import githubOuterLogo from './links-media/github.svg'
import telegramOuterLogo from './links-media/telegram.svg'
import Hideable from '../Hideable/Hideable'

const frontendSkills = ['react', 'angular']

const backendSkills = ['dotnet', 'aspnetcore', 'efcore', 'mssql']
const devopsSkills = ['azure', 'heroku']
const languages = ['ts', 'js', 'csharp']

function openLinkFactory(url: string): () => void {
    return () => window.open(url, '_blank')
}

const Summary: React.FC = () => (
    <div className="Summary" data-testid="Summary">
        <div className="summary-paper">
            <div className="summary-content">
                <div className="info-container">
                    <h2>mrlldd</h2>
                    <div className="skills-sets-container">
                        {[
                            frontendSkills,
                            backendSkills,
                            devopsSkills,
                            languages,
                        ].map((skillSet, index) => (
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
                        ))}
                    </div>
                </div>
                {/* todo optimize*/}
                <div className="links-container">
                    <div className="links-content-container links-logos">
                        <div className="link-side-fill" />
                        <div
                            className="link-container link-logo-container"
                            onClick={openLinkFactory(
                                'https://github.com/mrlldd'
                            )}
                        >
                            <img
                                src={githubOuterLogo}
                                alt="github-logo"
                                className="link-logo"
                            />
                        </div>
                        <div className="link-side-fill" />
                        <div
                            className="link-container link-logo-container"
                            onClick={openLinkFactory('https://t.me/mrlldd')}
                        >
                            <img
                                src={telegramOuterLogo}
                                alt="telegram-logo"
                                className="link-logo"
                            />
                        </div>
                        <div className="link-side-fill" />
                        <div
                            className="link-container link-logo-container"
                            onClick={openLinkFactory(
                                'https://open.spotify.com/user/1ytvagjswjl00avixcs29sh4v?si=C9eGNEyQTNGxSkr4j1o6WA'
                            )}
                        >
                            <img
                                src={spotifyOuterLogo}
                                alt="spotify-logo"
                                className="link-logo"
                            />
                        </div>
                        <div className="link-side-fill" />
                    </div>
                </div>
            </div>
            <Hideable>Sample content</Hideable>
        </div>
    </div>
)

export default Summary
