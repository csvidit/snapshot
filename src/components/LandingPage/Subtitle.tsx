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
        <h2 className="text-stone-500 self-center text-4xl">{props.children}</h2>
    </React.Fragment>
  );
};

export default Subtitle;
