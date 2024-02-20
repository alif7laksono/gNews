import React from "react";
import Featured from "@/components/Featured";
import CardList from "@/components/CardList";
import Menu from "@/components/Menu";

export default function Home() {
  return (
    <div>
      <Featured />
      <div className="flex gap-12 mt-14">
        <div className="w-full sm:w-3/5">
          <CardList />
        </div>
        <div className="hidden sm:block sm:w-2/5">
          <Menu />
        </div>
      </div>
    </div>
  );
}
