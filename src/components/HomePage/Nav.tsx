import React, { Fragment } from "react";
import Link from "next/link";
import { Menu, Popover, Transition } from "@headlessui/react";
import { BsChevronDown } from "react-icons/bs";
import Nav2 from "./Nav2";

const Nav = () => {
  return (
    <nav className="p-3 lg:p-5 flex flex-row justify-between border-b-2 border-b-stone-500 font-semibold">
      <div className="self-center">
        <h1 className="text-amber-600 text-2xl lg:text-3xl self-center">
          <Link href="/">your snapshot</Link>
        </h1>
      </div>
      <div className="self-center flex flex-row space-x-5 text-md">
        <Nav2></Nav2>
      </div>
    </nav>
  );
};

export default Nav;


{/* <Popover className="relative">
          <Popover.Button className="flex flex-row space-x-1 items-center text-stone-500 focus:outline-none focus:ring-2 focus:ring-stone-900 focus:ring-offset-4 focus:ring-offset-amber-600">
            <p className="">Menu</p>
            <BsChevronDown className="ui-open:rotate-180 ui-open:transform" />
          </Popover.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className="absolute z-10 w-max h-max right-2 p-5 bg-stone-200 dark:bg-stone-900 text-stone-500 rounded-lg border-2 border-stone-500 top-10">
              <div className="flex flex-col space-y-2">
                <a className="self-end" href="/analytics">Analytics</a>
                <a className="self-end" href="/engagement">Engagement</a>
                <a className="self-end" href="/security">Security</a>
                <a className="self-end" href="/integrations">Integrations</a>
              </div>
            </Popover.Panel>
          </Transition>
        </Popover> */}


{
  /* <Link className="text-stone-500 hover:text-sky-500" href="/preferences">
          PREFERENCES
        </Link>
        <Link
          className="text-stone-500 hover:text-sky-500"
          href="/api/auth/logout"
        >
          LOGOUT
        </Link> */
}
