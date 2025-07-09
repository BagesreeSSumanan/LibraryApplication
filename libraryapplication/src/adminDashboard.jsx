import BookList from "./BookList.jsx";
import SearchBar from './SeachBar.jsx'

export default function AdminDashboard() {
  return (
    <>
        <SearchBar />
        <BookList />
    </>
  );
}