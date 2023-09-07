import React from 'react';
import { useState } from 'react';

function Books() {
  const [books, setBooks]  = useState([]);
  const [input, setInput] = useState('');

  return (
    <div>
      <input 
        type="text"
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder="Add a new book!"
        />
        <button onClick={() => {
          setBooks([...books, input]);
          setInput('');
        }}>
          Add Book
        </button>
   
      {books.map((book, index) => (
        <p key={index}>{book}</p>
      ))}
    </div>
  )
}

export default Books



