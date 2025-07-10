import BookList from "./BookList.jsx";
import SearchBar from './SeachBar.jsx';
import { useBooks } from './BooksContext';

export default function AdminDashboard() {
    const { books, handleSearch } = useBooks();
  return (
    <>
        <SearchBar onSearch={handleSearch}/>
        <BookList books={books} role="admin"/>
    </>
  );
}