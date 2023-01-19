import React from "react";
import Link from "next/link";
import { UrlObject } from "url";

const NavItem = (props: { href: string | UrlObject; children: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; }) =>
{
    return(
        <Link className="flex flex-row" href={props.href}>{props.children}</Link>
    )
}

export default NavItem;