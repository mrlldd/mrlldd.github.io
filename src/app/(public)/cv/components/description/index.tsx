import React from "react";
import DescriptionBlockRow from "./components/DescriptionBlockRow";
import CvSection from "@/app/(public)/cv/components/cv-section";
import {DescriptionRow} from "@/app/(public)/cv/types";
import TextAttentionCollector from "@/app/(public)/components/context-wrapper";

interface DescriptionBlockProps {
    rows: ReadonlyArray<DescriptionRow>,
    name: string
    id: string
}

function DescriptionBlock({rows, name, id}: DescriptionBlockProps) {
    const [{context: firstRowContext, ...firstRow}, others] = [
        rows[0],
        rows.slice(1, rows.length),
    ];
    return (
        <CvSection id={id} header={name}>
            <div className="break-words">
                <DescriptionBlockRow {...firstRow}>
                    <TextAttentionCollector>{firstRowContext}</TextAttentionCollector>
                </DescriptionBlockRow>
                {others.map(({context, ...row}, i) =>
                    <DescriptionBlockRow {...row} key={`description:${name}:${i}`}>
                        <span>{context}</span>
                    </DescriptionBlockRow>
                )}
            </div>
        </CvSection>
    );
}

export default DescriptionBlock
