import { Link } from 'react-router-dom';
import { useReadingList } from '../context/ReadingListContext';

export default function Navbar() {
  const { readingList } = useReadingList();
  const token = localStorage.getItem('token');

  return (
    <nav className="bg-white shadow-md p-4 mb-8">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-blue-700">
          Library App
        </Link>
        
        <div className="flex items-center gap-6">
          <Link to="/" className="text-gray-700 hover:text-blue-600">Catalog</Link>
          
          {/* Reading List Link with Count */}
          <Link to="/reading-list" className="text-gray-700 hover:text-blue-600">
            Reading List ({readingList.length})
          </Link>

          {/* Auth Links */}
          {token ? (
            <>
              <Link to="/booking" className="text-gray-700 hover:text-blue-600">Book Space</Link>
              <button 
                onClick={() => {
                  localStorage.removeItem('token');
                  window.location.href = '/login';
                }}
                className="text-red-500 hover:text-red-700"
              >
                Logout
              </button>
            </>
          ) : (
            <Link to="/login" className="text-blue-600 font-semibold hover:underline">
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}