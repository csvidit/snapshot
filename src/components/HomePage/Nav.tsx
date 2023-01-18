import React from "react";
import Link from "next/link";

const Nav = () => {
  return (
    <nav className="p-3 lg:p-5 flex flex-row justify-between border-b-2 border-b-stone-500 font-semibold">
      <div className="self-center">
        <h1 className="text-amber-600 text-2xl">your snapshot</h1>
      </div>
      <div className="self-center flex flex-row space-x-5 text-lg">
        <Link className="text-stone-500 hover:text-sky-500" href="/preferences">
          preferences
        </Link>
        <Link
          className="text-stone-500 hover:text-sky-500"
          href="/api/auth/logout"
        >
          logout
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
