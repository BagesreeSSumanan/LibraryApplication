// BooksContext.jsx
import React, { createContext, useContext, useState } from 'react';

const BooksContext = createContext();

const initialBooks = [
  { id: 1, title: 'Harry Potter', author: 'J. K. Rowling', status: 'Available', borrowedBy: null, dueDate: null , returnRequest: false, borrowRequest:true, borrowRequestby :null},
  { id: 2, title: 'Adventures of Huckleberry Finn', author: 'Mark Twain', status: 'Not Available', borrowedBy: 'member1', dueDate: '12/07/2025',returnRequest: true ,borrowRequest:false,borrowRequestby :null},
  { id: 3, title: 'Crime and Punishment', author: 'Fyodor Dostoevsky', status: 'Available', borrowedBy: null, dueDate: null ,returnRequest: false,borrowRequest:false,borrowRequestby :null},
];

export function BooksProvider({ children }) {
  const [books, setBooks] = useState(initialBooks);
  const [filteredBooks, setFilteredBooks] = useState(initialBooks);

  const handleSearch = (query) => {
    const filtered = books.filter((book) =>
      book.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredBooks(filtered);
  };
 const ReturnrequestedBooks = books.filter(book => book.returnRequest === true);
 const BorrowrequestedBooks = books.filter(book => book.borrowRequest === true);

  return (
    <BooksContext.Provider value={{ books: filteredBooks, allbooks: books, setBooks, setFilteredBooks, handleSearch ,
    ReturnrequestedBooks ,BorrowrequestedBooks}}>
      {children}
    </BooksContext.Provider>
  );
}

export function useBooks() {
  return useContext(BooksContext);
}
