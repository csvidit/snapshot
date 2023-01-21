import React from "react";

const Subtitle = (props: {
  children:
    | string
    | number
    | boolean
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined;
}) => {
  return (
    <React.Fragment>
        <h2 className="text-slate-500 self-center tracking-tight text-3xl font-extralight">{props.children}</h2>
    </React.Fragment>
  );
};

export default Subtitle;
