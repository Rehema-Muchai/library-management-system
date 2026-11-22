import { useState, useEffect } from 'react';
import axios from 'axios';
import BookCard from './BookCard';

export default function BookGrid({ search, genreId }) {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBooks = async () => {
      setLoading(true);
      setError(null);
      try {
        const params = {};
        if (search) params.search = search;
        if (genreId) params.genreId = genreId;

        // Note: In Week 2, our backend returned { data: [...], meta: {...} }
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/books`, { params });
        setBooks(res.data.data || res.data); 
      } catch (err) {
        setError('Failed to load books. Please ensure the backend is running.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, [search, genreId]); // Re-fetch whenever search or genreId changes

  if (loading) return <p className="text-center py-12 text-gray-500">Loading books...</p>;
  if (error) return <p className="text-center py-12 text-red-500 font-medium">{error}</p>;
  if (books.length === 0) return <p className="text-center py-12 text-gray-500">No books found matching your criteria.</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {books.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
}