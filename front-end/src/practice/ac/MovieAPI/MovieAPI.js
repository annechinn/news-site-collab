import React, {useState, useEffect} from 'react';
import Card from 'react-bootstrap/Card';
import Select from 'react-select';
import './MovieAPI.css';
import {getMovieReviews, getMovieCritics} from '../../../api/nyt';

function ReviewCard({review}) {
  return (

    <Card style={{width: '18rem' }}>
      <Card.Img  src={review.multimedia?.src} />
      <Card.Body>
        <Card.Title> {review.display_title} </Card.Title>
          <Card.Text>
          {review.summary_short} 
          </Card.Text>
      </Card.Body>
    </Card>

  );
}

function MovieReviewGrid({reviews}) {
  return (
    <section className="books">
      {reviews.map(x=><ReviewCard key={x.display_title} review={x}/>)}
    
    </section>

    );
}

function MovieAPI() {
  const [reviews, setReviews] = useState(null);
  const [criticOptions, setCriticOptions] = useState([]);
  const [critic, setCritic] = useState('A.%20O.%20Scott');

  useEffect(()=> {

    (async ()=>{

      const critics = await getMovieCritics();
      setCriticOptions(critics.map(x=>({value: x.display_name, label:x.display_name})));
    
    })();

  }, []);

  useEffect(()=> {

    (async ()=>{
      
      setReviews(await getMovieReviews(critic));
      
    })();

  }, [critic]);

  if (reviews) {
    return (
      <>
      <div className="select">
        <Select  options={criticOptions} onChange={(selectedOption)=>{
          setCritic(selectedOption.value);
        }}/>
      </div>
      <MovieReviewGrid reviews={reviews} />
      </>
      );
  }
  else {
    return (<></>);
  }
}

export default MovieAPI;