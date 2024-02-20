import React from "react";
import Link from "next/link";

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

interface CardProps {
  article: Article;
}

const Card: React.FC<CardProps> = ({ article }) => {
  return (
    <div className="mb-12 flex flex-col lg:flex-row items-center lg:gap-12">
      <div className="lg:w-1/2 h-64 relative">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover mb-4 rounded"
        />
      </div>
      <div className="flex flex-col lg:w-1/2 gap-2">
        <span className="text-gray-400">Source: {article.source.name}</span>
        <span className="text-gray-400">
          Published at: {new Date(article.publishedAt).toLocaleDateString()}
        </span>
        <Link
          href={article.url}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:no-underline mt-2 inline-block text-inherit hover:scale-105 transition duration-200"
        >
          <h1 className="flex flex-1 flex-col font-semibold line-clamp-2 text-lg transition duration-200">
            {article.title}
          </h1>
          <p className=" line-clamp-3 text-base opacity-80 mb-2">
            {article.description}
          </p>
          <span className="text-sky-500"> Read more</span>
        </Link>
      </div>
    </div>
  );
};

export default Card;
