import React, { useState, useEffect } from "react";
import StoryCard from "./StoryCard";
import NewsLoading from "./NewsLoading";
import { db } from "@/firebaseConfig";
import { query, collection, getDocs } from "@firebase/firestore";
import NewsTitle from "./NewsTitle";
import NewsContainer from "./NewsContainer";

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
      <NewsContainer>
        <NewsTitle/>
        {stories?.map(x => {return <StoryCard key={x?.title} title={x?.title} source={x?.source?.name} time={x?.publishedAt} href={x?.url}></StoryCard>})}
        {/* <StoryCard title={stories[0]?.title} source={stories[0]?.source?.name} time={stories[0]?.publishedAt}></StoryCard> */}
      </NewsContainer>
    );
  }
  else
  {
    return <NewsLoading/>
  }

  
};

export default News;
