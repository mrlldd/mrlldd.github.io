import TransparentAccordion from '../../../shared/components/TransparentAccordion';
import './styles.css'
import {SkillSetProps} from "./types";

function SkillSet({items, name}: SkillSetProps) {
    return (
        <TransparentAccordion arrowPosition="left" header={name}>
            <div className="skills-grid">
                {items.map((x) => (
                    <span key={`skills:${x}`} className='lighter'>{x}</span>
                ))}
            </div>
        </TransparentAccordion>
    );
}

export default SkillSet;
