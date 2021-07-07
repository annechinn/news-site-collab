import React, {useState} from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './Store.css';

let items = [
  {
    id: 1,
    name: 'Whole Grain Bread',
    price: 5.99,
    imageURL: 'https://www.kroger.com/product/images/medium/front/0001111008489'
  },
  {
    id: 2,
    name: 'Potato Chips',
    price: 3.99,
    imageURL: 'https://www.kroger.com/product/images/medium/front/0002840051646'
  },
  { 
    id: 3,
    name: 'Roasted Nut Mix',
    price: 7.99,
    imageURL: 'https://www.kroger.com/product/images/medium/front/0001111002480'
  }

];

function Product({product, addItemToCart}) {
  return (
    <Card>
      <Card.Img src={product.imageURL}/>
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>{product.price}</Card.Text>
        <Button variant="primary" size="sm" onClick={()=>{addItemToCart(product)}}>Add to Cart</Button>
      </Card.Body>
    </Card>
  )
}

function ProductList({addItemToCart}) {
  return (
    <div className="products">
      {items.map(x=><Product key={x.id} product={x} addItemToCart={addItemToCart}/>)}
    </div>
  )
}

function ShoppingCart({items, addItemToCart, removeItemFromCart}) {
  return (
    <>
    <div class="cart">
      <div class="cart-item">
        <div class="price-info">
          <div>Num</div>
          <div>Name</div>
          <div>Price</div>
          <div>Total</div>
        </div>
      </div>

      {items.map(x=>
        <div class="cart-item" key={x.id}>
          <div class="price-info">
            <div>{x.quantity}</div>
            <div>{x.name}</div>
            <div>{x.price}</div>
            <div>{(x.price*x.quantity).toFixed(2)}</div>
          </div>
          <div class="cart-item-buttons">
            <Button variant="primary" size="sm" onClick={()=>{addItemToCart(x)}}>+</Button>
            <Button variant="primary" size="sm" onClick={()=>{removeItemFromCart(x)}}>-</Button>
          </div>
        </div>
      )}

      <hr/>
      <div class="cart-total">
        Total: {(items.reduce((acc, x)=>{acc+=(x.price*x.quantity); return acc;},0)).toFixed(2)}
      </div>
    </div>
    </>
  )
}

function Store() {
  const [cartItems, updateCartItems] = useState([]);

  function addItemToCart(item) {
    let found = cartItems.find(x=>x.id===item.id);
    if (!found) {
      updateCartItems([...cartItems, {...item, quantity:1}]);
    }
    else {
      updateCartItems(cartItems.map(x=>x.id===found.id?{...found, quantity:found.quantity+1}:x));
    }
  }

  function removeItemFromCart(item) {
    let found = cartItems.find(x=>x.id===item.id);
    if (found) {
      if (found.quantity===1) {
        updateCartItems(cartItems.filter(x=>x.id!==item.id))
      }
      else {
        updateCartItems(cartItems.map(x=>x.id===found.id?{...found, quantity:found.quantity-1}:x));
      }
    }
  }

  return (
    <>
    <div class="store">
      <ProductList addItemToCart={addItemToCart}/>
      <ShoppingCart items={cartItems} addItemToCart={addItemToCart} removeItemFromCart={removeItemFromCart}/>
    </div>
    </>
  )
}

export default Store;