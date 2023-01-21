import Link from "next/link";
import React from "react";

const MoreInfo = (props: {
  link: string;
  href: string;
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
  if (props.link === "true") {
    return (
      <React.Fragment>
        <div
          className="text-slate-500 self-center mt-10 text-xs flex flex-col items-center text-center"
        >
          <p className="">{props.children}</p>
        </div>
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <h2 className="text-stone-500 mt-5 self-center text-xl">
          {props.children}
        </h2>
      </React.Fragment>
    );
  }
};

export default MoreInfo;
