"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Card from "@/components/Card";

type Article = {
  title: string;
  description: string;
  url: string;
  image: string;
  publishedAt: string;
  content: string;
  source: {
    name: string;
  };
};

const CardList = () => {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(
          `https://gnews.io/api/v4/top-headlines?token=${process.env.NEXT_PUBLIC_GNEWS_API_KEY}&lang=en`
        );
        setArticles(response.data.articles);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchNews();
  }, []);

  return (
    <div
      className="flex flex-col lg:flex-row lg:flex-wrap"
      style={{ flexGrow: 5 }}
    >
      <h1 className="text-2xl font-bold mb-4">For You</h1>

      {articles.slice(0, 5).map((article, index) => (
        <Card key={index} article={article} />
      ))}
    </div>
  );
};

export default CardList;
