import React from "react";
import Link from "next/link";

const SidePanelTab = (props: {href: string, children: any}) =>
{
    return(<Link className="font-medium m-1 p-1 lg:p-2 rounded-xl text-slate-900 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-800" href={props.href}>{props.children}</Link>)
};
export default SidePanelTab;