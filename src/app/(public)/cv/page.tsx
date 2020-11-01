import React from 'react';
import DescriptionBlock from "@/app/(public)/cv/components/description";
import {educationRows, experienceRows} from "@/app/(public)/cv/components/description/category-descriptions";
import SkillSet from "@/app/(public)/cv/components/skills";
import Projects from "@/app/(public)/cv/components/projects";
import CvSection from "@/app/(public)/cv/components/cv-section";
import * as skillSets from './components/skills/sets'
import {workProjects} from "@/app/(public)/cv/components/projects/work-projects";
import {petProjects} from "@/app/(public)/cv/components/projects/pet-projects";
import {FaLink} from "react-icons/fa6";


const contacts = {
    gitHub: 'https://github.com/mrlldd',
    linkedIn: 'https://www.linkedin.com/in/ivan-yeremenko-403a6b188/',
};

const CV: React.FC = () => {
    return (
        <main className='flex justify-center'>
            <div className="flex flex-col min-w-1/2 max-w-3/4 gap-4 py-20">
                <div>
                    <h1 className='font-extrabold text-2xl'>Ivan Yeremenko</h1>
                    Full-Stack Web Developer
                    <br/>
                    <br/>
                    <div className='flex flex-row gap-8'>
                    {Object.entries(contacts).map(([k, v], index) => (
                        <div key={k} className='flex flex-row gap-2 items-center'>
                            <a key={`${index}:contacts`}
                               href={v}
                               className='contact-link font-extralight'
                               target="_blank"
                               rel="noreferrer">{k.substring(0, 1).toUpperCase() + k.substring(1)}{' '}<FaLink className='inline align-middle'/>
                            </a>
                        </div>
                    ))}
                    </div>
                </div>
                <CvSection header="About me" id='me'>
                <span>
                    <span className="font-extralight">
                        5+ years IT specialist in web development in a field of web-oriented
                        applications for small startups, mid-sized businesses, and large
                        enterprises.
                    </span>
                    <br/>
                    <span className='font-thin'>
                        Have solid understanding and knowledge of object-oriented
                        approach, software engineering principles, and concepts.
                        <br/>
                        Experienced in design, development, testing and maintenance of
                        cloud-hosted web-applications.
                        <br/>
                        Also experienced in leading of development team on several projects.
                    </span>
                </span>
                </CvSection>
                <DescriptionBlock rows={educationRows} name="Education" id='education'/>
                <DescriptionBlock rows={experienceRows} name="Experience" id='experience'/>
                <SkillSet {...skillSets.programmingAndLanguages} id='languages'/>
                <SkillSet {...skillSets.frameworks} id='frameworks'/>
                <SkillSet {...skillSets.technologies} id='technologies'/>
                <SkillSet {...skillSets.knowledge} id='knowledge'/>
                <SkillSet {...skillSets.devTools} id='dev-tools'/>
                <SkillSet {...skillSets.applicationHosts} id='hosts'/>
                <SkillSet {...skillSets.databases} id='databases'/>

                <Projects map={workProjects} name="Projects" id='work-projects'/>
                <Projects map={petProjects} name="Pet projects" id='pet-projects'/>
            </div>
        </main>
    );
};

export default CV;
