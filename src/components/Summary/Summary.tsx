import React from 'react'
import './Summary.css'
import { Paper } from '@material-ui/core'

const frontendSkills = ['react', 'angular']

const backendSkills = ['dotnet', 'aspnetcore', 'efcore', 'mssql']
const devopsSkills = ['azure', 'heroku']
const languages = ['ts', 'js', 'csharp']

const Summary: React.FC = () => {
    return (
        <div className={'Summary'} data-testid="Summary">
            <Paper elevation={5} className={`summary-paper`}>
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
            </Paper>
        </div>
    )
}

export default Summary
