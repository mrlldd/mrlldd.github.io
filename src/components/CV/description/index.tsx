import React from "react";
import TransparentAccordion from "../../../shared/components/TransparentAccordion";
import ContextWrapper from "../components/ContextWrapper";
import DescriptionBlockRow from "./components/DescriptionBlockRow";
import {DescriptionRow} from "../types";

interface Props {
    rows: ReadonlyArray<DescriptionRow>,
    name: string,
    open?: boolean
}

function DescriptionBlock({rows, name, open = false}: Props) {
    const indexOfLast = rows.length - 1;
    const [beforeLast, {context: lastRowContext, ...lastRow}] = [
        rows.slice(0, indexOfLast),
        rows[indexOfLast],
    ];
    return (
        <TransparentAccordion header={name} open={open} arrowPosition='left'>
            <div className="content">
                {beforeLast.map(({context, ...row}, i) =>
                    <DescriptionBlockRow {...row} key={`description:${name}:${i}`}>
                        <span>{context}</span>
                    </DescriptionBlockRow>
                )}
                <DescriptionBlockRow {...lastRow}>
                    <ContextWrapper>{lastRowContext}</ContextWrapper>
                </DescriptionBlockRow>
            </div>
        </TransparentAccordion>
    );
}

export default DescriptionBlock
