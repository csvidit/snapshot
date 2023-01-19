import React from "react";

const Container = (props: {children: any}) =>
{
    return(<div className="h-full w-3/4 self-center">{props.children}</div>);
}

export default Container;