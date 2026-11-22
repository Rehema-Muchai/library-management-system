import { useState } from 'react';
import SearchBar from '../components/SearchBar';
import BookGrid from '../components/BookGrid';

export default function HomePage() {
  // State lives in the parent, passed down to children (Lifting State Up)
  const [search, setSearch] = useState("");
  const [genreId, setGenreId] = useState("");

  return (
    <div className="container mx-auto p-4 max-w-6xl">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Library Catalog</h1>
      
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="flex-1">
          <SearchBar onSearch={setSearch} />
        </div>
        <div className="w-full md:w-64">
          <select 
            value={genreId} 
            onChange={(e) => setGenreId(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
          >
            <option value="">All Genres</option>
            {/* Hardcoded to match our Week 2 seed data IDs */}
            <option value="1">Science Fiction</option>
            <option value="2">Fantasy</option>
            <option value="3">History</option>
            <option value="4">Non-Fiction</option>
          </select>
        </div>
      </div>

      <BookGrid search={search} genreId={genreId} />
    </div>
  );
}