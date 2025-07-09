 import { useState } from 'react';

 function useBooks(){
    const [books, setBooks] = useState([
        { id: 1, title: 'Harry Potter', author: 'J. K. Rowling', status: 'Available', borrowedBy: null, dueDate:null },
        { id: 2, title: 'Adventures of Huckleberry Finn', author: 'Mark Twain', status: ' Not Available', borrowedBy: 'member1',dueDate:'12/07/2025' },
        { id: 3, title: 'Crime and Punishment', author: 'Fyodor Dostoevsky', status: 'Available', borrowedBy: null ,dueDate:null},
    ]);
    const [ filteredBooks, setfilteredBooks] = useState(books);
    function handleSearch(query) {

        const filtered = books.filter(function(book) {
            return book.title.toLowerCase().includes(query.toLowerCase());
        });
        setfilteredBooks(filtered);
    }
    return { books: filteredBooks, handleSearch };
 }

 export default useBooks;
