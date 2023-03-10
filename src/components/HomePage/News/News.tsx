import React, { useState, useEffect } from "react";
import { HiOutlineBolt } from "react-icons/hi2";
import StoryCard from "./StoryCard";
import axios from "axios";
import NewsLoading from "./NewsLoading";
import { db } from "@/firebaseConfig";
import { query, collection, getDocs } from "@firebase/firestore";

const News = () => {
  const [news, setNews] = useState(null);

  useEffect(() => {
    const q = query(collection(db, "news"));
    const fetchQuerySnapshot = async () =>
    {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setNews(doc.data());
      });
    }
    fetchQuerySnapshot();
  }, []);
  
  let stories = news?.articles;
  stories = stories?.slice(0, 5);

  if(stories)
  {
    return (
      <div className="flex flex-col space-y-1 p-4 rounded-xl col-span-2 font-light h-max">
        <div className="flex flex-row space-x-1 text-rose-500 pl-2">
          <HiOutlineBolt
            size="2em"
            className="self-center w-max h-max"
          ></HiOutlineBolt>
          <p className="text-2xl ">Top Stories</p>
        </div>
        {stories?.map(x => {return <StoryCard key={x?.title} title={x?.title} source={x?.source?.name} time={x?.publishedAt} href={x?.url}></StoryCard>})}
        {/* <StoryCard title={stories[0]?.title} source={stories[0]?.source?.name} time={stories[0]?.publishedAt}></StoryCard> */}
      </div>
    );
  }
  else
  {
    return <NewsLoading/>
  }

  
};

export default News;
