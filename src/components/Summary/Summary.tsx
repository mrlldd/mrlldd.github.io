import React from 'react'
import './Summary.css'
import spotifyLogo from './links/spotify.svg'
import spotifyInner from './links/spotify-inner.svg'
const frontendSkills = ['react', 'angular']

const backendSkills = ['dotnet', 'aspnetcore', 'efcore', 'mssql']
const devopsSkills = ['azure', 'heroku']
const languages = ['ts', 'js', 'csharp']

const Summary: React.FC<React.PropsWithChildren<unknown>> = (
    props: React.PropsWithChildren<unknown>
) => {
    return (
        <div className={'Summary'} data-testid="Summary">
            <div className={`summary-paper`}>
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
                    <div className="link-container">github</div>
                    <div className="link-container">telegram</div>
                    <div className="link-container">
                        <img src={spotifyLogo} className="link-logo outer" />
                        <img src={spotifyInner} className="link-logo inner" />
                    </div>
                </div>
            </div>
            {props.children}
        </div>
    )
}

export default Summary
