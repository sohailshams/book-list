import userEvent from '@testing-library/user-event';
import React, { useContext, useState } from 'react';
import { BookContext } from '../context/BookContext';

const NewBookForm = () => {
  const { addBook } = useContext(BookContext);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  return (
    <form>
      <input
        type="text"
        placeholder="book title"
        value={title}
        onClick={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="book author"
        value={author}
        onClick={(e) => setAuthor(e.target.value)}
        required
      />
      <input type="submit" value="Add Book" />
    </form>
  );
};

export default NewBookForm;
