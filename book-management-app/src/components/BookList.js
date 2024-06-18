import React from 'react';
import { useQuery, gql } from '@apollo/client';

const GET_BOOKS = gql`
  query GetBooks {
    books {
      id
      title
      author
      description
    }
  }
`;

function BookList() {
  const { loading, error, data } = useQuery(GET_BOOKS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      <h1>Book List</h1>
      <ul>
        {data.books.map(({ id, title, author, description }) => (
          <li key={id}>
            <h2>{title}</h2>
            <p>{author}</p>
            <p>{description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BookList;
