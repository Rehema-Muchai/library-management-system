import { Link } from 'react-router-dom';

export default function BookCard({ book }) {
  return (
    <Link 
      to={`/books/${book.id}`} 
      className="block bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow border border-gray-100"
    >
      <h3 className="text-lg font-bold mb-1 truncate">{book.title}</h3>
      <p className="text-gray-600 text-sm mb-2">by {book.author}</p>
      <p className="text-xs text-blue-600 font-semibold uppercase tracking-wide">
        {book.genre?.name || 'Unknown Genre'}
      </p>
      <p className="text-xs text-gray-500 mt-3">
        Available: {book.availableCopies} / {book.totalCopies}
      </p>
    </Link>
  );
}