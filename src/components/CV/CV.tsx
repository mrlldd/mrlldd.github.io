import React from 'react'
import { useHistory } from 'react-router-dom'
import './CV.css'

const contacts = {
    gitHub: 'https://github.com/mrlldd',
    telegram: 'https://t.me/mrlldd',
}

interface PeriodRow {
    period: string
    at: string
    context: string
}

const educationRows: PeriodRow[] = [
    {
        period: '2018 - 2021',
        at: 'Zaporizhzhya Institute of Economics and Information Technologies',
        context: 'Bachelor Degree in Software Engineering',
    },
]

const experienceRows: PeriodRow[] = [
    {
        period: 'October 2019 - March 2020',
        at: 'KM-Ware',
        context: 'Trainee',
    },
    {
        period: 'March 2020 - July 2020',
        at: 'KM-Ware',
        context: 'Junior Fullstack Web Developer',
    },
    {
        period: 'July 2020 - Now',
        at: 'Tentonteam',
        context: 'Junior Fullstack Web Developer',
    },
]

function periodRowMapperFactory(
    category: string
): (periodRow: PeriodRow, index: number) => JSX.Element {
    return (periodRow: PeriodRow, index: number) => (
        <span key={`${index}:${category}-row`}>
            <small className="italic">{periodRow.period}</small>
            <br />
            <span className="period-row-content italic">
                {periodRow.at} - <span>{periodRow.context}</span>
            </span>
            <br />
        </span>
    )
}

function categoryBlockFactory(periods: PeriodRow[], name: string): JSX.Element {
    const length = periods.length
    const [exceptLast, last] = [
        periods.slice(0, length - 1),
        periods[length - 1],
    ]
    return (
        <>
            {name}:
            <br />
            <div className="period-content">
                {exceptLast.map(periodRowMapperFactory(name.toLowerCase()))}
                <small className="italic">{last.period}</small>
                <br />
                <span className="period-row-content italic">
                    {last.at} - <Context>{last.context}</Context>
                </span>
                <br />
            </div>
        </>
    )
}

const Context: React.FC<React.PropsWithChildren<{ className?: string }>> = (
    props
) => (
    <span className="switching-opacity switch-opacity-a-few-with-color">
        {props.children}
    </span>
)

const CV: React.FC = () => {
    const history = useHistory()
    return (
        <>
            <div onClick={history.goBack} className="back-button">
                <span>{'<|'}</span>
            </div>
            <div className="CV" data-testid="CV">
                Ivan Yeremenko
                <br />
                Fullstack Web Developer
                <br />
                <br />
                {Object.entries(contacts).map(([k, v], index) => (
                    <span key={`${index}:contacts`}>
                        {k.substring(0, 1).toUpperCase() + k.substring(1)}:{' '}
                        <a
                            className="contact-link"
                            href={v}
                            target="_blank"
                            rel="noreferrer"
                        >
                            {v}
                        </a>
                        <br />
                    </span>
                ))}
                <br />
                Experienced in <Context>dotnet</Context>,{' '}
                <Context>react</Context> and <Context>angular</Context>.
                <br />
                Also have an experience in developing and managing{' '}
                <Context>NuGet</Context> packages.
                <br />
                {categoryBlockFactory(educationRows, 'Education')}
                {categoryBlockFactory(experienceRows, 'Experience')}
            </div>
        </>
    )
}

export default CV
