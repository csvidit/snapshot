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
        <Link
          href={props.href}
          className="hover:text-sky-500 text-slate-500 self-center mt-10 text-xl"
          target="_blank"
          rel="noreferrer"
        >
          <p className="">{props.children}</p>
        </Link>
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
