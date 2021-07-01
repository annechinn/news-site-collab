import React from 'react';
import './BookCard.css';

function BookCard({book}) {
  return (
    <div className="book">
      <a target="_blank" rel="noreferrer" href={book.amazon_product_url}><img src={book.book_image} alt="" /></a>
      <h3><a target="_blank" rel="noreferrer" href={book.amazon_product_url}>{book.rank} {book.title}</a></h3>
      <div className="profile">Written by ${book.author}</div>
      <p>${book.description}</p>
  </div>
    );
}

export default BookCard;
