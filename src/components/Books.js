import React from 'react';
import { useState } from 'react';

import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

function Books() {
  const [books, setBooks]  = useState([])
  const [bookTitle, setBookTitle] = useState('')
  const [bookAuthor, setBookAuthor] = useState('')
  const [bookStatus, setBookStatus] = useState('Reading')
  // Adding Books


  // Editing Entries
  const [editingId, setEditingId] = useState(null)
  const updateStatus = (id, newStatus) => {
    setBooks((prevBooks) =>
      prevBooks.map((book) =>
        book.id === id ? {...book, status: newStatus } : book
      )
    )
  }

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
      <select value={bookStatus} onChange={(e) => setBookStatus(e.target.value)}>
        <option value="Reading">Reading</option>
        <option value="Completed">Completed</option>
        <option value="Wishlist">Wishlist</option>
        <option value="Abandoned">Abandoned</option>
      </select>
      <button onClick={() => {
        const newBook = {
          id: Date.now(),
          title: bookTitle,
          author: bookAuthor,
          status: bookStatus
        }
        setBooks([...books, newBook])
        setBookTitle('')
        setBookAuthor('')
        setBookStatus('Reading')
      }}>
        Add Book
      </button>

      {books.map((book) => (
        <div key = {book.id}>
          <p>Title: {book.title}</p>
          <p>Author: {book.author}</p>
          <p>Status: {book.status}</p>
          <button onClick={() => setEditingId(book.id)}>Edit</button>
          {editingId === book.id ? (
          <>
            <select 
              value={book.status}
              onChange={(e) => updateStatus(book.id, e.target.value)}
            >
              <option value="Reading">Reading</option>
              <option value="Completed">Completed</option>
              <option value="Wishlist">Wishlist</option>
              <option value="Abandoned">Abandoned</option>
            </select>
            <button onClick={() => setEditingId(null)}>Done</button>
            </>
          ) : (
            <p>Status: {book.status}</p>
          )}
        </div>
      ))}
    </div>
  )
}

export default Books



