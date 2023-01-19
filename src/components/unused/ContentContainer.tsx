import React from "react";

const ContentContainer = (props: {children: any}) =>
{
    return(<div className="flex flex-row h-full w-3/4 self-center self-right">{props.children}</div>);
}

export default ContentContainer;