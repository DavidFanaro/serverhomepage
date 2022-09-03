import React, { useState } from "react";

export const Searchbar = () => {
  const [searchQuery, setsearchQuery] = useState("");

  const search = (e) => {
    e.preventDefualt();
    window.open(searchQuery, "_blank");
  };

  return (
    <input
      placeholder="Search"
      onChange={(e) => setsearchQuery(e.target.value)}
      value={searchQuery}
      onSubmit={() => search()}
    />
  );
};
