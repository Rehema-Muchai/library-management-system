import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

export default function BookDetail() {
  const { id } = useParams(); // Reads the :id from the URL
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBook = async () => {
      setLoading(true);
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/books/${id}`);
        setBook(res.data);
      } catch (err) {
        setError('Failed to load book details.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchBook();
  }, [id]); // Re-fetch if the ID in the URL changes

  if (loading) return <p className="text-center py-12 text-gray-500">Loading book details...</p>;
  if (error) return <p className="text-center py-12 text-red-500 font-medium">{error}</p>;
  if (!book) return <p className="text-center py-12 text-gray-500">Book not found.</p>;

  return (
    <div className="container mx-auto p-4 max-w-2xl">
      <Link to="/" className="text-blue-600 hover:underline mb-6 inline-block font-medium">
        &larr; Back to Catalog
      </Link>
      
      <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
        <h1 className="text-3xl font-bold mb-2 text-gray-900">{book.title}</h1>
        <p className="text-xl text-gray-600 mb-6">by {book.author}</p>
        
        <div className="space-y-3 text-gray-700">
          <p><strong className="text-gray-900">Genre:</strong> {book.genre?.name || 'Unknown'}</p>
          <p><strong className="text-gray-900">ISBN:</strong> {book.isbn}</p>
          <p><strong className="text-gray-900">Copies Available:</strong> {book.availableCopies} / {book.totalCopies}</p>
          {book.description && (
            <div className="mt-6 pt-6 border-t border-gray-200">
              <p className="text-gray-600 leading-relaxed">{book.description}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}