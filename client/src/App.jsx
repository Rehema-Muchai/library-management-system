import { Routes, Route } from 'react-router-dom';
import { ReadingListProvider } from './context/ReadingListContext';
import Navbar from './components/Navbar';
import ProtectedRoute from './components/ProtectedRoute';

import HomePage from './pages/HomePage';
import BookDetail from './pages/BookDetail';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import SpaceBookingPage from './pages/SpaceBookingPage';

function App() {
  return (
    // 1. Wrap the whole app in the Provider
    <ReadingListProvider>
      <div className="min-h-screen bg-gray-50">
        {/* 2. Add the Navbar */}
        <Navbar />
        
        <div className="container mx-auto p-4">
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<HomePage />} />
            <Route path="/books/:id" element={<BookDetail />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            
            {/* Protected Route */}
            <Route
              path="/booking"
              element={
                <ProtectedRoute>
                  <SpaceBookingPage />
                </ProtectedRoute>
              }
            />
          </Routes>
        </div>
      </div>
    </ReadingListProvider>
  );
}

export default App;