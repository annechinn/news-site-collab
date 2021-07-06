import React, {useState} from 'react';
import Select from "react-select";
import "./PriceCheck.css";

export default function PriceCheck() {

  const [quantity, setQuantity] = useState(1);

  const PRICE = 32.99;
  const options = [
    { value: "1", label: "1"},
    { value: "2", label: "2"},
    { value: "3", label: "3"},
  ];

  return (
    <>
      <div class="price-check">
        <img src="https://m.media-amazon.com/images/I/71ijdc+5X+L._AC_AA220_.jpg" alt="shirt"/>
        <Select options={options} onChange={(selectedOption) => setQuantity(selectedOption.value)} />
      
        <h4>Subtotal ({quantity} items) {quantity*PRICE}</h4>
      </div>
    </>
  )

}