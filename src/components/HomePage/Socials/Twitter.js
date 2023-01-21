import { useState, useEffect } from 'react';

async function fetchTrendingTopics() {
  const response = await fetch(`https://api.twitter.com/1.1/trends/place.json?id=1`, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${process.env.NEXT_PUBLIC_TWITTER_BEARER_TOKEN}`
    }
  });
  const data = await response.json();
  return data[0].trends;
}

export default function TrendingTopics() {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    fetchTrendingTopics().then(data => setTopics(data));
  }, []);

  return (
    <div>
      <h2>Trending Topics</h2>
      <ul>
        {topics.map(topic => (
          <li key={topic.name}>{topic.name}</li>
        ))}
      </ul>
    </div>
  );
}
