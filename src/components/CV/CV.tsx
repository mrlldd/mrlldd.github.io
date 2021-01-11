import React from 'react';
import { useHistory } from 'react-router-dom';
import './CV.css';
import Context from '../Context/Context';
import { projectsMap } from './projects';

const contacts = {
  gitHub: 'https://github.com/mrlldd',
  telegram: 'https://t.me/mrlldd',
};

interface Row {
  title: string;
  content: string;
  context: string;
}

const educationRows: ReadonlyArray<Row> = [
  {
    title: '2018 - 2021',
    content: 'Zaporizhzhya Institute of Economics and Information Technologies',
    context: 'Bachelor Degree in Software Engineering',
  },
];

const experienceRows: ReadonlyArray<Row> = [
  {
    title: 'October 2019 - March 2020',
    content: 'KM-Ware',
    context: 'Trainee',
  },
  {
    title: 'March 2020 - July 2020',
    content: 'KM-Ware',
    context: 'Junior Fullstack Web Developer',
  },
  {
    title: 'July 2020 - December 2020',
    content: 'Tentonteam',
    context: 'Junior Fullstack Web Developer',
  },
  {
    title: 'January 2021 - Now',
    content: 'Tentonteam',
    context: 'Middle Fullstack Web Developer',
  },
];

function rowMapperFactory(
  contextFactory: (context: string) => JSX.Element,
  category: string
): (periodRow: Row, index: number) => JSX.Element {
  return (periodRow: Row, index: number) => (
    <span key={`${index}:${category}-row`}>
      <small className="italic">{periodRow.title}</small>
      <br />
      <span className="row-content italic lighter">
        {periodRow.content} - {contextFactory(periodRow.context)}
      </span>
      <br />
    </span>
  );
}

function categoryBlockFactory(
  periods: ReadonlyArray<Row>,
  name: string
): JSX.Element {
  const indexOfLast = periods.length - 1;
  const [exceptLast, last] = [
    periods.slice(0, indexOfLast),
    periods[indexOfLast],
  ];
  const lowerCased = name.toLowerCase();
  return (
    <>
      {name}:
      <br />
      <div className="content">
        {exceptLast.map(
          rowMapperFactory((context) => <span>{context}</span>, lowerCased)
        )}
        {rowMapperFactory(
          (context) => <Context>{context}</Context>,
          lowerCased
        )(last, indexOfLast + 1)}
      </div>
    </>
  );
}

const CV: React.FC = () => {
  const history = useHistory();
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
              className="contact-link lighter"
              href={v}
              target="_blank"
              rel="noreferrer">
              {v}
            </a>
            <br />
          </span>
        ))}
        <br />
        <span className="lighter">
          Experienced in <Context>dotnet</Context>, <Context>react</Context> and{' '}
          <Context>angular</Context>.
          <br />
          Also have an experience in developing and managing{' '}
          <Context>NuGet</Context> packages.
        </span>
        <br />
        {categoryBlockFactory(educationRows, 'Education')}
        {categoryBlockFactory(experienceRows, 'Experience')}
        Projects:
        <div className="content">
          {Array.from(projectsMap.entries()).map(([k, v], index) => (
            <span key={`${index}:projects-row`}>
              <a
                className="italic"
                href={v.link}
                target="_blank"
                rel="noreferrer">
                {k}
              </a>
              <br />
              <span className="row-content lighter">
                {v.renderedDescription}
              </span>
              <br />
            </span>
          ))}
        </div>
      </div>
    </>
  );
};

export default CV;
