"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useSearchParams } from "next/navigation";
import axios from "axios";
import { useEffect, useState } from "react";
import Link from "next/link";

interface NewsArticle {
  title: string;
  description: string;
  url: string;
  image: string;
  publishedAt: string;
  content: string;
  source: {
    name: string;
  };
}

const SearchPage: React.FC = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get("query");

  const [articles, setArticles] = useState<NewsArticle[]>([]);
  const apiKey = process.env.NEXT_PUBLIC_GNEWS_API_KEY;

  useEffect(() => {
    if (query) {
      axios
        .get(`https://gnews.io/api/v4/search?q=${query}&token=${apiKey}`)
        .then((response) => setArticles(response.data.articles));
    }
  }, [query]);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article, index) => (
          <div
            key={index}
            className="p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out flex flex-col justify-between"
          >
            <div>
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-64 object-cover mb-6 rounded-t-lg"
              />
              <Link
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:no-underline mt-2 inline-block hover:scale-105 transition-transform duration-300 ease-in-out"
              >
                <h2 className="text-2xl font-bold mb-4 line-clamp-2">
                  {article.title}
                </h2>
                <p className="text-base text-gray-400 mb-4 line-clamp-4">
                  {article.description}
                </p>
                <p className="text-sm text-gray-500 mb-2">
                  Published at:{" "}
                  {new Date(article.publishedAt).toLocaleDateString()}
                </p>
                <p className="text-sm text-gray-500 mb-4">
                  Source: {article.source.name}
                </p>
              </Link>
            </div>
            <Link
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:no-underline mt-2 inline-block hover:scale-105 transition-transform duration-300 ease-in-out"
            >
              <span className="text-sky-500 h-12">Read more</span>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default SearchPage;
