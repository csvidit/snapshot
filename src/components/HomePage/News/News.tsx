import React from "react";
import { HiOutlineBolt } from "react-icons/hi2";
import StoryCard from "./StoryCard";

const News = () => {
  return (
    <div className="flex flex-col space-y-1 p-4 rounded-xl col-span-2 font-light h-max">
      <div className="flex flex-row space-x-1 text-rose-500 pl-2">
        <HiOutlineBolt
          size="2em"
          className="self-center w-max h-max"
        ></HiOutlineBolt>
        <p className="text-2xl ">Top Stories</p>
      </div>
      <StoryCard></StoryCard>
      <StoryCard></StoryCard>
      <StoryCard></StoryCard>
    </div>
  );
};

export default News;
