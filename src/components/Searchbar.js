import React, { useState } from "react";

export const Searchbar = () => {
  const [searchQuery, setsearchQuery] = useState("");

  const search = (e) => {
    if (e.key === "Enter")
      window.open(`https://duckduckgo.com/?q=${searchQuery}`, "_blank");
  };

  return (
    <input
      className=" p-2 rounded-md focus:outline-none focus:ring focus ring-cyan-600 transition ease-in-out md:w-1/2 w-screen bg-opacity-60 bg-white shadow-md lg:mt-32"
      placeholder="Search DuckDuckGo"
      onChange={(e) => setsearchQuery(e.target.value)}
      value={searchQuery}
      onKeyDown={(e) => search(e)}
    />
  );
};
