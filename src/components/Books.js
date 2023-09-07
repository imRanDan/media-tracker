import { BookmarkSharp } from '@mui/icons-material';
import React from 'react';
import { useState } from 'react';

function Books() {
  const [books, setBooks]  = useState([])
  const [bookTitle, setBookTitle] = useState('')
  const [bookAuthor, setBookAuthor] = useState('')

  return (
    <div>
      <input 
        type="text"
        value={bookTitle}
        onChange={e => setBookTitle(e.target.value)}
        placeholder="Book Title"
      />
      <input
        type="text"
        value={bookAuthor}
        onChange={e => setBookAuthor(e.target.value)}
        placeholder="Author's name"
      />
      <button onClick={() => {
        const newBook = {
          id: Date.now(),
          title: bookTitle,
          author: bookAuthor,
          status: "unread"
        }
        setBooks([...books, newBook])
        setBookTitle('')
        setBookAuthor('')
      }}>
        Add Book
      </button>

      {books.map((book) => (
        <div key = {book.id}>
          <p>Title: {book.title}</p>
          <p>Author: {book.author}</p>
          <p>Status: {book.status}</p>
        </div>
      ))}

    </div>
  )
}

export default Books



