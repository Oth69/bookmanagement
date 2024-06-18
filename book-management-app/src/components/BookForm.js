// BookForm.js
import React, { useState } from 'react';
import { useMutation, gql } from '@apollo/client';

const ADD_BOOK = gql`
  mutation AddBook($title: String!, $author: String!, $description: String!) {
    addBook(title: $title, author: $author, description: $description) {
      id
      title
      author
      description
    }
  }
`;

function BookForm() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [description, setDescription] = useState('');

  const [addBook, { loading, error, data }] = useMutation(ADD_BOOK, {
    onCompleted: () => {
      setTitle('');
      setAuthor('');
      setDescription('');
    },
    onError: (error) => {
      console.error('Error adding book:', error);
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    addBook({ variables: { title, author, description } });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title</label>
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div>
        <label>Author</label>
        <input value={author} onChange={(e) => setAuthor(e.target.value)} />
      </div>
      <div>
        <label>Description</label>
        <input value={description} onChange={(e) => setDescription(e.target.value)} />
      </div>
      <button type="submit" disabled={loading}>Add Book</button>
      {error && <p>Error adding book: {error.message}</p>}
      {data && <p>Book added successfully!</p>}
    </form>
  );
}

export default BookForm;
