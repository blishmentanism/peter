import React from "https://cdn.skypack.dev/react@17.0.1";

function App() {
  return (
    <div>
      <h1>Welcome to Peter's Reading Web App!</h1>
      <p>This app helps you keep track of the books you've read and want to read.</p>
    </div>
  );
}

export default App;
import React, { useState } from "https://cdn.skypack.dev/react@17.0.1";

function BookList() {
  const [books, setBooks] = useState([]);

  function handleAddBook(book) {
    setBooks([...books, book]);
  }

  function handleRemoveBook(index) {
    setBooks([...books.slice(0, index), ...books.slice(index + 1)]);
  }

  return (
    <div>
      <h2>My Book List</h2>
      <ul>
        {books.map((book, index) => (
          <li key={index}>
            {book.title} by {book.author} ({book.pages} pages)
            <button onClick={() => handleRemoveBook(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BookList;