import {PropsWithChildren} from "react";

interface CvSectionProps {
    header: string;
    id: string;
}

function CvSection({id, header, children}: PropsWithChildren<CvSectionProps>) {
    return <section id={id} className='flex flex-col gap-2'>
        <a href={'#' + id} className='block'>{header}</a>
        {children}
    </section>
}

export default CvSection;