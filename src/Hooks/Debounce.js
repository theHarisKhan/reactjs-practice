import React, { useEffect, useState } from "react";

const Debounce = () => {
  const handleSearch = (query) => console.log("Search for:", query);

  const [query, setQuery] = useState("");

  useEffect(() => {
    const handler = setTimeout(() => {
      handleSearch(query);
    }, 500);

    return () => clearTimeout(handler);
  }, [query, handleSearch]);

  return (
    <>
      <h2 className="text-left text-xl text-gray-950 font-bold">
        Debounce Search
      </h2>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
        className="bg-slate-200 border-slate-400 p-2 mx-2"
      />
    </>
  );
};

export default Debounce;
