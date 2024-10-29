import React, { useEffect, useState } from "react";

const DebouncedSearch = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const handler = setTimeout(() => {
      onSearch(query);
    }, 500);

    return () => clearTimeout(handler);
  }, [query, onSearch]);

  return (
    <input
      type="text"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      placeholder="Search..."
      className="bg-slate-200 border-slate-400 p-2 mx-2"
    />
  );
};

export default DebouncedSearch;
