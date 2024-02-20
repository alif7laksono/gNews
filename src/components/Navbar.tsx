"use client";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaSun, FaMoon } from "react-icons/fa";
import { ThemeContext } from "@/context/ThemeContext";

const Navbar = () => {
  const { theme, toggle } = useContext(ThemeContext);
  const router = useRouter();
  const [query, setQuery] = useState("");

  const searchNews = (event: React.FormEvent) => {
    event.preventDefault();
    router.push(`/search?query=${query}`);
  };

  return (
    <div
      className={`flex items-center justify-between h-[100px] mx-auto ${theme}`}
    >
      <div className=" gap-4 hidden lg:flex">
        <Image src="/facebook.png" alt="facebook" width={24} height={24} />
        <Image src="/instagram.png" alt="instagram" width={24} height={24} />
        <Image src="/tiktok.png" alt="tiktok" width={24} height={24} />
        <Image src="/youtube.png" alt="youtube" width={24} height={24} />
      </div>
      <div className="flex font-bold text-xl">
        <Link href="/">gNews</Link>
      </div>
      <div className="flex items-center gap-5 text-lg">
        <form onSubmit={searchNews}>
          <input
            type="text"
            placeholder="Search..."
            className="border px-2 py-1 rounded-md text-base bg-transparent"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </form>
        <button onClick={toggle}>
          {theme === "dark" ? <FaSun /> : <FaMoon />}
        </button>
        <Link href="/" className="text-base">
          Sign In
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
