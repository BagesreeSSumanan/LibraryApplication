import BookList from "./BookList.jsx";
import SearchBar from './SeachBar.jsx';
import { useBooks } from './BooksContext';
import { useLocation } from 'react-router-dom';

export default function UserDashboard() {
    const { books, handleSearch } = useBooks();
      const { state } = useLocation();
      const user = state?.user;
  return (
    <>
        <SearchBar onSearch={handleSearch}/>
        <BookList books={books} role="member" user ={user}/>
    </>
  );
}