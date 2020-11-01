import React, {ReactNode} from 'react';
import CvSection from "@/app/(public)/cv/components/cv-section";
import {FaLink} from "react-icons/fa6";

export interface Project {
    link: string;
    description: ReactNode;
}


interface ProjectsProps {
    map: Map<string, Project>;
    name: string;
    id: string;
}

function Projects({name, map, id}: ProjectsProps) {
    return (
        <CvSection header={name} id={id}>
            <div className='flex flex-col gap-8'>
                {Array.from(map.entries()).map(([k, v], index) => (
                    <span key={`projects:${name}:${index}`}>
            <a
                className="italic"
                href={v.link}
                target="_blank"
                rel="noreferrer">
                    {k}{' '}<FaLink size={16} className='inline align-middle'/>
            </a>

            <br/>
            <span className="break-words ml-16 font-thin">{v.description}</span>
            <br/>
          </span>
                ))}
            </div>
        </CvSection>
    );
}

export default Projects;
