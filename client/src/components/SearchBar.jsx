import { useState, useEffect } from 'react';

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    // Schedule the search to happen after 400ms of no typing
    const timer = setTimeout(() => {
      onSearch(query);
    }, 400);

    // Cleanup: cancel the previous timer if the user types again
    return () => clearTimeout(timer);
  }, [query]); // Re-run this effect whenever 'query' changes

  return (
    <input
      type="text"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      placeholder="Search by title or author..."
      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  );
}