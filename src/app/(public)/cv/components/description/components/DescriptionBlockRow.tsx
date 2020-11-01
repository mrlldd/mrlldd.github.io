import React, {PropsWithChildren} from "react";
import {DescriptionRow} from "@/app/(public)/cv/types";

type DescriptionRowProps = Pick<DescriptionRow, 'content' | 'title'>

function DescriptionBlockRow({title, content, children}: PropsWithChildren<DescriptionRowProps>) {
    return <span>
      <small className="italic font-extralight">{title}</small>
      <br/>
      <span className="break-words ml-16 italic">
          <span className='font-thin'>{content}</span> - <span className='font-extralight'>{children}</span>
      </span>
      <br/>
    </span>
}

export default DescriptionBlockRow;
