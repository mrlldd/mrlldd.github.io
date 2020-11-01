import React, {PropsWithChildren} from "react";

function ContextWrapper(props: PropsWithChildren) {
    return <span className="font-bold animate-switch-opacity-color">
        {props.children}
    </span>;
}

export default ContextWrapper;
