import { createContext, useContext, useReducer, useEffect } from 'react';

const ReadingListContext = createContext();

// The Reducer: Defines exactly how the state can change
function readingListReducer(state, action) {
  switch (action.type) {
    case 'ADD_BOOK':
      // Prevent duplicates
      if (state.some((book) => book.id === action.payload.id)) return state;
      return [...state, action.payload];
    case 'REMOVE_BOOK':
      return state.filter((book) => book.id !== action.payload);
    case 'CLEAR_LIST':
      return [];
    default:
      return state;
  }
}

export function ReadingListProvider({ children }) {
  // Initialize state from localStorage if it exists
  const [readingList, dispatch] = useReducer(
    readingListReducer,
    [],
    () => {
      const localData = localStorage.getItem('readingList');
      return localData ? JSON.parse(localData) : [];
    }
  );

  // Sync state to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('readingList', JSON.stringify(readingList));
  }, [readingList]);

  return (
    <ReadingListContext.Provider value={{ readingList, dispatch }}>
      {children}
    </ReadingListContext.Provider>
  );
}

// Custom hook for easy access
export const useReadingList = () => useContext(ReadingListContext);