import React, {PropsWithChildren} from "react";
import {DescriptionRow} from "../../types";

type DescriptionRowProps  = Pick<DescriptionRow, 'content' | 'title'>

function DescriptionBlockRow({title, content, children}: PropsWithChildren<DescriptionRowProps>) {
    return <span>
      <small className="italic">{title}</small>
      <br />
      <span className="row-content italic lighter">
        {content} - {children}
      </span>
      <br />
    </span>
}

export default DescriptionBlockRow;
