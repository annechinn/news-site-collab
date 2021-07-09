import React, {useState, useEffect} from 'react';

import './NYTBooks.css';
import {getBooks} from '../../api/nyt';
import BookGrid from '../../components/BookGrid/BookGrid';

function NYTBooks() {
  
  const [books, setBooks] = useState(null);

  useEffect(() => {
    
      (async () => {
        setBooks(await getBooks('hardcover-fiction'));
      })();

  }, []);


  if (books) {
    return (
      <>
      <BookGrid books={books.books}/>
      </>
      );
  }
  else {
    return (<></>);
  }
}

export default NYTBooks;
