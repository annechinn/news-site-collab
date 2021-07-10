import React, {useState} from 'react'
import Select from "react-select";

export default function ShirtPrice(){
   
  const [quantity,setQuantity]  = useState(1)

  const price = 32.99
//   const subtotal = quantity * price

  const options = [
   { value: "1", label: "1"},
   { value: "2", label: "2"},
   { value: "3", label: "3"},
 ]

   return ( 
      <>
         <img src="https://m.media-amazon.com/images/I/71ijdc+5X+L._AC_AA220_.jpg" alt=""/> 
         <h1>{quantity * price} </h1>
         <h1> {quantity} </h1>
         <Select options={options} onChange={(event) => {setQuantity(event.value)}} />
      </>
   )
}

