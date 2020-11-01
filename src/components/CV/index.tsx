import React from 'react';
import { useHistory } from 'react-router-dom';
import './styles.css';
import TransparentAccordion from '../../shared/components/TransparentAccordion';
import ContextWrapper from './components/ContextWrapper';
import {
  educationRows,
  experienceRows,
} from './description/category-descriptions';
import DescriptionBlock from './description';
import { petProjects } from './projects/pet-projects';
import Projects from './projects';
import { workProjects } from './projects/work-projects';
import SkillSet from "./skills";
import * as skillSets from "./skills/sets";

const contacts = {
  gitHub: 'https://github.com/mrlldd',
  telegram: 'https://t.me/mrlldd',
};

const CV: React.FC = () => {
  const history = useHistory();
  return (
    <>
      <div onClick={() => history.push('/')} className="back-button">
        <span>{'<|'}</span>
      </div>
      <div className="CV">
        Ivan
        <br />
        Full-Stack Web Developer
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
        <TransparentAccordion header="About me" arrowPosition="left" open>
          <span className="lighter">
            4+ years IT specialist in web development in a field of web-oriented
            applications for small startups, mid-sized businesses, and large
            enterprises.
            <br /> Have solid understanding and knowledge of object-oriented
            approach, software engineering principles, and concepts. <br />
            Experienced in design, development, testing and maintenance of
            cloud-hosted web-applications. <br /> Also experienced in leading of
            development team on several projects.
          </span>
        </TransparentAccordion>
        <DescriptionBlock rows={educationRows} name="Education" open />
        <DescriptionBlock rows={experienceRows} name="Experience" open />
        <SkillSet {...skillSets.programmingAndLanguages}/>
        <SkillSet {...skillSets.frameworks}/>
        <SkillSet {...skillSets.technologies}/>
        <SkillSet {...skillSets.knowledge}/>
        <SkillSet {...skillSets.devTools}/>
        <SkillSet {...skillSets.applicationHosts}/>
        <SkillSet {...skillSets.databases}/>

        <Projects map={workProjects} name="Projects" />
        <Projects map={petProjects} name="Pet projects" />
      </div>
    </>
  );
};

export default CV;
