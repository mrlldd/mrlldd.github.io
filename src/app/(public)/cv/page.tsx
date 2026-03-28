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
import {MdEmail} from "react-icons/md";


const contacts = {
    'GitHub': {
        href: 'https://github.com/mrlldd',
        icon: <FaLink className='inline align-middle'/>
    },
    'LinkedIn': {
        href: 'https://www.linkedin.com/in/ivan-yeremenko-403a6b188/',
        icon: <FaLink className='inline align-middle'/>
    },
    'ivan@definitely.dev': {
        href: 'mailto:ivan@definitely.dev',
        icon: <MdEmail className='inline align-middle'/>
    }
};

const CV: React.FC = () => {
    return (
        <main className='flex justify-center text-justify'>
            <div className="flex flex-col min-w-1/2 max-w-3/4 gap-4 py-20">
                <div>
                    <h1 className='font-extrabold text-2xl'>Ivan Yeremenko</h1>
                    Full-Stack Software Engineer
                    <br/>
                    <br/>
                    <div className='flex flex-row gap-x-8 gap-y-4 flex-wrap'>
                        {Object.entries(contacts).map(([k, v], index) => (
                            <a key={`${index}:contacts`}
                               href={v.href}
                               className='contact-link font-extralight'
                               target="_blank"
                               rel="noreferrer">{k}{' '}{v.icon}
                            </a>
                        ))}
                    </div>
                </div>
                <CvSection header="About me" id='me'>
                <span>
                    <span className="font-extralight">
                        Seasoned IT Specialist with 6+ years of experience delivering scalable web applications across startups and enterprise environments. Strong background in software engineering principles.
                    </span>
                    <br/>
                    <span className='font-thin'>
                        Proven expertise in building and maintaining cloud-native systems, with end-to-end ownership of the development lifecycle. Experienced in leading development teams, driving technical decisions, and making engineers deliver high-quality solutions.
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
