import React from "react";
import Link from "next/link";

const TwitterCard = () => {
  return (
    <Link
      href="#"
      className="flex flex-row space-x-1 hover:bg-slate-800 p-2 rounded-xl col-span-2 font-light w-1/2"
    >
      <div className="">1.</div>
      <div className="text-sky-500">Taylor Swift</div>
    </Link>
  );
};

export default TwitterCard;
