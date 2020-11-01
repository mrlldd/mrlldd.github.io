import React from "react";
import DescriptionBlockRow from "./components/DescriptionBlockRow";
import CvSection from "@/app/(public)/cv/components/cv-section";
import {DescriptionRow} from "@/app/(public)/cv/types";
import ContextWrapper from "@/app/(public)/components/context-wrapper";

interface DescriptionBlockProps {
    rows: ReadonlyArray<DescriptionRow>,
    name: string
    id: string
}

function DescriptionBlock({rows, name, id}: DescriptionBlockProps) {
    const indexOfLast = rows.length - 1;
    const [beforeLast, {context: lastRowContext, ...lastRow}] = [
        rows.slice(0, indexOfLast),
        rows[indexOfLast],
    ];
    return (
        <CvSection id={id} header={name}>
            <div className="break-words">
                {beforeLast.map(({context, ...row}, i) =>
                    <DescriptionBlockRow {...row} key={`description:${name}:${i}`}>
                        <span>{context}</span>
                    </DescriptionBlockRow>
                )}
                <DescriptionBlockRow {...lastRow}>
                    <ContextWrapper>{lastRowContext}</ContextWrapper>
                </DescriptionBlockRow>
            </div>
        </CvSection>
    );
}

export default DescriptionBlock
