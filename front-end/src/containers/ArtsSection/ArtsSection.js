import React, {useState} from 'react';
import './ArtsSection.css';

const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71'];
const DEFAULT_BACKGROUND_COLOR = '#1d1d1d';
const DEFAULT_BOX_SHADOW = '0 0 2px #000';
const numSquares = 500;
let styles = [];

for (let i = 0; i < numSquares; i++) {
  styles.push({
      background: DEFAULT_BACKGROUND_COLOR,
      boxShadow: DEFAULT_BOX_SHADOW
  });
}

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)]
}

function ArtsSection() {
  const [squareStyles, setSquareStyles] = useState(styles);

  function updateStyles(index, background, boxShadow) {
    setSquareStyles(prevState => 
        prevState.map((x,i)=>i===index?{background:background, boxShadow:boxShadow}:x));
  }

  function setColor(index) {
    const color = getRandomColor();
    updateStyles(index, color, `0 0 2px ${color}, 0 0 10px ${color}`);
  }
  
  function removeColor(index) {
    updateStyles(index, DEFAULT_BACKGROUND_COLOR, DEFAULT_BOX_SHADOW);
  }

  return (
    <div className="arts">
      <div className="squares">
        {squareStyles.map((x,index)=>{
          return <div key={index}
                      className="square" 
                      style={squareStyles[index]} 
                      onMouseOver={()=> setColor(index)}
                      onMouseOut ={() => removeColor(index)}>
                  </div>
        })}
      </div>
    </div>
  );
}

export default ArtsSection;
