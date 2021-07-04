import React, {useState} from 'react';
import Select from "react-select";

import './PriceCheck.css'

function PriceCheck() {
  const [quantity, setQuantity] = useState(0);
  const price=32.99;
  const options = [
    { value: "1", label: "1"},
    { value: "2", label: "2"},
    { value: "3", label: "3"},
  ];

  return (
    <div className="price-check">
      <div>
        <img src="https://m.media-amazon.com/images/I/71ijdc+5X+L._AC_AA220_.jpg" alt="shirts"/>
        <Select options={options} onChange={(event)=> {
            setQuantity(event.value);
        }} />
      </div>
      <h4>Subtotal ({quantity} items): {price*quantity}</h4>
    </div>
  )
}

export default PriceCheck;