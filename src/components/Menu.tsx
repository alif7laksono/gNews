"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";

interface NewsArticle {
  title: string;
  publishedAt: string;
  source: {
    name: string;
    url: string;
  };
}

const Menu: React.FC = () => {
  const [articles, setArticles] = useState<NewsArticle[]>([]);

  useEffect(() => {
    axios
      .get(
        `https://gnews.io/api/v4/top-headlines?category=general&token=${process.env.NEXT_PUBLIC_GNEWS_API_KEY}`
      )
      .then((response) => setArticles(response.data.articles));
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4 px-4">Top Headline News</h1>
      {articles.length > 0 ? (
        articles.map((article, index) => (
          <div
            key={index}
            className="p-4 mb-2 hover:scale-105 transition duration-200 "
          >
            {" "}
            <Link
              href={article.source.url}
              className=" hover:no-underline cursor-pointer no-underline"
            >
              <p className="text-sm text-gray-400 mb-1">
                {article.publishedAt}
              </p>
              <h2 className="text-base font-semi mb-1 ">{article.title}</h2>
              <span className="text-sky-500 text-sm">Read More</span>
            </Link>
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Menu;
