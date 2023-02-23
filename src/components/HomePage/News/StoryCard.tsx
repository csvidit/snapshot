import React from "react";
import { BsDot } from "react-icons/bs";
import Link from "next/link";
import { UrlObject } from "url";

const StoryCard = (props: { title: string | number | boolean | React.ReactFragment | React.ReactPortal | React.ReactElement<any, string | React.JSXElementConstructor<any>> | null | undefined; source: string | number | boolean | React.ReactFragment | React.ReactPortal | React.ReactElement<any, string | React.JSXElementConstructor<any>> | null | undefined; time: string | number | Date; href: string | UrlObject}) => {
  return (
    <Link href={props.href} className="flex flex-col space-y-1 hover:bg-slate-800 p-2 rounded-xl col-span-2 font-light h-max">
      <div className="flex flex-col space-y-1 ">
        <p className="text-md text-emerald-500">{props.title}</p>
        <div className="flex flex-row space-x-1 text-slate-300 text-xs items-center">
            <p className="">{props.source}</p>
            <BsDot className=""></BsDot>
            <p className="">{ new Date(props.time).toLocaleTimeString("en-IN", {timeStyle: "short"})}</p>
        </div>
      </div>
    </Link>
  );
};

export default StoryCard;
