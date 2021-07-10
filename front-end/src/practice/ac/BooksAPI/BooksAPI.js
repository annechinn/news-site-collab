import React, {useState, useEffect} from 'react';
import Select from 'react-select';
import './BooksAPI.css';
import {getBooks, getGenres} from '../../../api/nyt';
import BookGrid from '../../../components/BookGrid/BookGrid';

function BooksAPI() {
  const [books, setBooks] = useState(null);
  const [genreOptions, setGenreOptions] = useState([]);
  const [genre, setGenre] = useState('hardcover-fiction');

  useEffect(()=> {

    (async ()=>{

      const genres = await getGenres();
      setGenreOptions(genres.map(x=>({value: x.list_name_encoded, label:x.display_name})));
    
    })();

  }, []);

  useEffect(()=> {

    (async ()=>{
      
      setBooks(await getBooks(genre));
      
    })();

  }, [genre]);

  if (books) {
    return (
      <>
      <div class="select">
        <Select  options={genreOptions} onChange={(selectedOption)=>{
          setGenre(selectedOption.value);
        }}/>
      </div>
      <BookGrid books={books.books}/>
      </>
      );
  }
  else {
    return (<></>);
  }
}

export default BooksAPI;