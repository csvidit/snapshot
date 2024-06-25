import React, { useState, useEffect } from "react";
import StoryCard from "./StoryCard";
import NewsLoading from "./NewsLoading";
import { db } from "@/firebaseConfig";
import { query, collection, getDocs } from "@firebase/firestore";
import NewsTitle from "./NewsTitle";
import NewsContainer from "./NewsContainer";
import { useUser } from "@auth0/nextjs-auth0/client";
import axios from "axios";

const News = () => {
  const [news, setNews] = useState(null);
  const {user, error, isLoading} = useUser();
//   const options = {
//     method: 'GET',
//     url: 'https://https://dev-o0e6eeis.us.auth0.com/api/v2/users',
//     params: {q: `email: "${user.email}`, search_engine: 'v3'},
//     headers: {authorization: 'Bearer THIS WILL BE THE TOKEN YOU GOT FROM THE ABOVE STEP'}
// };
  
  console.log(user.user_metadata);

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
      </NewsContainer>
    );
  }
  else
  {
    return <NewsLoading/>
  }

  
};

export default News;
