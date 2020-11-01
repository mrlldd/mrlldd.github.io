import React from 'react';
import TransparentAccordion from '../../../shared/components/TransparentAccordion';
import { Project } from './types';

interface Props {
  map: Map<string, Project>;
  name: string;
}

function Projects({ name, map }: Props) {
  return (
    <TransparentAccordion header={name} arrowPosition="left">
      <div className="content">
        {Array.from(map.entries()).map(([k, v], index) => (
          <span key={`projects:${name}:${index}`}>
            <a
              className="italic"
              href={v.link}
              target="_blank"
              rel="noreferrer">
              {k}
            </a>
            <br />
            <span className="row-content lighter">{v.renderedDescription}</span>
            <br />
          </span>
        ))}
      </div>
    </TransparentAccordion>
  );
}

export default Projects;
