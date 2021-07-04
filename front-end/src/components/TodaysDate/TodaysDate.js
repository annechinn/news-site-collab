
import React, {useState, useEffect} from 'react';
import './TodaysDate.css';

function TodaysDate() {
  const [currentDate, setCurrentDate] = useState('');

  useEffect(()=> {
    const interval = setInterval(()=> {
      setCurrentDate(new Date().toLocaleString());
    }, 1000);

    return ()=> { clearInterval(interval); }
  })
  return (
      <span>{currentDate}</span>
    );
}

export default TodaysDate;
