import React, { Key } from 'react'
import './Summary.css'
import spotifyOuterLogo from './links/spotify-outer.svg'
import githubOuterLogo from './links/github-outer.svg'
import telegramOuterLogo from './links/telegram-outer.svg'

const frontendSkills = ['react', 'angular']

const backendSkills = ['dotnet', 'aspnetcore', 'efcore', 'mssql']
const devopsSkills = ['azure', 'heroku']
const languages = ['ts', 'js', 'csharp']

const Summary: React.FC = () => (
    <div className="Summary" data-testid="Summary">
        <div className="summary-paper">
            <div className="info-container">
                <h1>Ivan Yeremenko</h1>
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
            <div className="links-container">
                <div className="links-content-container">
                    <div className="link-side-fill" />
                    <div className="link-container">
                        <img src={githubOuterLogo} className="link-logo" />
                    </div>
                    <div className="link-side-fill" />
                    <div className="link-container">
                        <img src={telegramOuterLogo} className="link-logo" />
                    </div>
                    <div className="link-side-fill" />
                    <div className="link-container">
                        <img src={spotifyOuterLogo} className="link-logo" />
                    </div>
                    <div className="link-side-fill" />
                </div>
                <div className="links-content-container">
                    <div className="link-side-fill" />
                    <div className="link-container">
                        <div className="link-content-name-container">
                            GitHub
                        </div>
                    </div>
                    <div className="link-side-fill" />
                    <div className="link-container">
                        <div className="link-content-name-container">
                            Telegram
                        </div>
                    </div>
                    <div className="link-side-fill" />
                    <div className="link-container">
                        <div className="link-content-name-container">
                            Spotify
                        </div>
                    </div>
                    <div className="link-side-fill" />
                </div>
            </div>
        </div>
    </div>
)

export default Summary
