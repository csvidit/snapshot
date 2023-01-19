import React from "react";
import Link from "next/link";

const SidePanelTab = (props: {href: string, children: any}) =>
{
    return(<Link className="font-medium m-1 lg:m-3 p-1 lg:p-2 rounded-xl text-stone-900 dark:text-stone-300 dark:hover:bg-stone-300 dark:hover:text-stone-900" href={props.href}>{props.children}</Link>)
};
export default SidePanelTab;