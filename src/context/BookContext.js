import React, { createContext, useState } from 'react';
import uuid from 'uuid/v1';

export const BookContext = createContext();

export const BookContextProvider = (props) => {
  const [books, setBooks] = useState([
    { title: 'name og the wind', auther: 'patrick rothfuss', id: 1 },
    { title: 'booklist', auther: 'sohail shams', id: 2 },
  ]);

  const addBook = (title, author) => {
    setBooks([...bools, { titile, auther, id: uuid() }]);
  };

  const removeBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };
  return (
    <BookContext.Provider value={{ books, addBook, removeBook }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
