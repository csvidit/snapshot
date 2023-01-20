import React from "react";
import { HiOutlineArrowTrendingUp } from "react-icons/hi2";
import TwitterCard from "./TwitterCard";

const Socials = () => {
  return (
    <div className="flex flex-col space-y-1 p-4 rounded-xl col-span-2 font-light h-max">
      <div className="flex flex-row space-x-1 text-yellow-500 pl-2">
        <HiOutlineArrowTrendingUp
          size="2em"
          className="self-center"
        ></HiOutlineArrowTrendingUp>
        <p className="text-2xl ">Trending on Socials</p>
      </div>
      <div className="w-full h-full grid lg:grid-rows-2 lg:grid-cols-4">
      <TwitterCard></TwitterCard>
      <TwitterCard></TwitterCard>
      <TwitterCard></TwitterCard>
      <TwitterCard></TwitterCard>
      <TwitterCard></TwitterCard>
      <TwitterCard></TwitterCard>
      <TwitterCard></TwitterCard>
      </div>
      
    </div>
  );
};

export default Socials;