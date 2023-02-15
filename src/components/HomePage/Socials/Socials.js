import React, { useState, useEffect } from "react";
import { HiOutlineArrowTrendingUp } from "react-icons/hi2";
import TwitterCard from "./TwitterCard";
import { Oval } from "react-loader-spinner";
import SocialsLoading from "./SocialsLoading";

// const Socials = () => {

//   async function fetchTrendingTopics() {
//     const response = await fetch(`https://api.twitter.com/1.1/trends/place.json?id=1`, {
//       method: 'GET',
//       headers: {
//         'Authorization': `Bearer ${process.env.NEXT_PUBLIC_TWITTER_BEARER_TOKEN}`,
//         'Access-Control-Allow-Origin': `https://api.twitter.com/*`,
//         'Access-Control-Allow-Headers':`X-Requested-With`
//       }
//     });
//     const data = await response.json();
//     return data[0]?.trends;
//   }

//   const [topics, setTopics] = useState([]);

//   useEffect(() => {
//     fetchTrendingTopics().then(data => setTopics(data));
//   }, []);

//   if(topics)
//   {
//     return (
//       <div className="flex flex-col space-y-1 p-4 rounded-xl col-span-2 font-light h-max">
//         <div className="flex flex-row space-x-1 text-yellow-500 pl-2">
//           <HiOutlineArrowTrendingUp
//             size="2em"
//             className="self-center"
//           ></HiOutlineArrowTrendingUp>
//           <p className="text-2xl ">Trending on Socials</p>
//         </div>
//         <div className="w-100 h-100 flex flex-col space-x-1 justify-center items-center text-white">
//           {/* <p className="text-2xl text-red-500">don&apos;t be sad!</p>
//           <p className="text-2xl">this feature is coming soon.</p> */}
//       </div>
//         <div className="w-full h-full grid lg:grid-rows-2 lg:grid-cols-4">
//         {topics.map(topic => (
//             <TwitterCard key={topic?.name}>{topic?.name}</TwitterCard>
//           ))}
//           {/* <TwitterCard></TwitterCard>
//           <TwitterCard></TwitterCard>
//           <TwitterCard></TwitterCard>
//           <TwitterCard></TwitterCard>
//           <TwitterCard></TwitterCard>
//           <TwitterCard></TwitterCard>
//           <TwitterCard></TwitterCard> */}
//         </div>
//       </div>
//     );
//   }
//   else
//   {
//     <SocialsLoading/>
//   }

// };

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
      <div className="w-100 h-100 flex flex-col space-x-1 justify-center items-center text-white">
        <p className="text-2xl text-red-500">don&apos;t be sad!</p>
        <p className="text-2xl">this feature is coming soon.</p>
      </div>
      <div className="w-full h-full grid lg:grid-rows-2 lg:grid-cols-4"></div>
    </div>
  );
};

export default Socials;
