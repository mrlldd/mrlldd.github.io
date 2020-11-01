import CvSection from "@/app/(public)/cv/components/cv-section";

export interface SkillSetProps {
    items: string[];
    name: string;
    id: string;
}

function SkillSet({items, name, id}: SkillSetProps) {
    return (
        <CvSection header={name} id={id}>
            <div className="grid grid-cols-2 gap-y-1 gap-x-8 md:w-1/2 items-start">
                {items.map((x) => (
                    <span key={`skills:${x}`} className='font-thin'>{x}</span>
                ))}
            </div>
        </CvSection>
    );
}

export default SkillSet;
