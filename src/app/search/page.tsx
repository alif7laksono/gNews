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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {articles.map((article, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-md">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-64 object-cover mb-4 rounded-t-lg"
            />
            <h2 className="text-xl font-bold mb-2">{article.title}</h2>
            <p className="text-gray-700">{article.description}</p>
            <p className="text-sm text-gray-500">
              Published at: {new Date(article.publishedAt).toLocaleDateString()}
            </p>
            <p className="text-sm text-gray-500">
              Source: {article.source.name}
            </p>
            <Link
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline mt-2 inline-block"
            >
              Read more
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default SearchPage;
