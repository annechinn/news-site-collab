import React, {useState, useEffect} from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { getProducts } from '../../../api/fakeproducts';

import './Store.css';

function Product({product, addItemToCart}) {
  return (
    <Card class="product-card">
      <Card.Img src={product.image}/>
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>{product.price}</Card.Text>
        <Button variant="primary" size="sm" onClick={()=>{addItemToCart(product)}}>Add to Cart</Button>
      </Card.Body>
    </Card>
  )
}

function ProductList({products, addItemToCart}) {
  return (
    <div className="products">
      {products.map(x=><Product key={x.id} product={x} addItemToCart={addItemToCart}/>)}
    </div>
  )
}

function ShoppingCart({cartItems, addItemToCart, removeItemFromCart}) {
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

      {cartItems.map(x=>
        <div class="cart-item" key={x.product.id}>
          <div class="price-info">
            <div>{x.quantity}</div>
            <div>{x.product.title}</div>
            <div>{x.product.price}</div>
            <div>{(x.product.price*x.quantity).toFixed(2)}</div>
          </div>
          <div class="cart-item-buttons">
            <Button variant="primary" size="sm" onClick={()=>{addItemToCart(x.product)}}>+</Button>
            <Button variant="primary" size="sm" onClick={()=>{removeItemFromCart(x)}}>-</Button>
          </div>
        </div>
      )}

      <hr/>
      <div class="cart-total">
        Total: {(cartItems?.reduce((acc, x)=>{acc+=(x.product.price*x.quantity); return acc;},0)).toFixed(2)}
      </div>
    </div>
    </>
  )
}

function Store() {
  const [products, updateProducts] = useState([]);
  const [cartItems, updateCartItems] = useState([]);

  useEffect(()=> {

    (async ()=> {
      updateProducts(await getProducts());
    })();

  }, []);

  function addItemToCart(item) {
    // see if the item is already in the shopping cart items
    let found = cartItems.find(x=>x.product.id===item.id);
    if (!found) {
      // create a new item
      const newCartItem = {product: item, quantity:1};
      // use the spread operator to create a shallow copy
      // of the old array and add our new item to it
      const newCartItemsArray = [...cartItems, newCartItem];
      updateCartItems(newCartItemsArray);
    }
    else {
      // update the item
      found.quantity++;
      // use map to create a shallow copy of the old array
      // to trigger a re-render.
      updateCartItems(cartItems.map(x=>x));
    }
  }

  function removeItemFromCart(item) {

    // see if the item is already in the list
    let found = cartItems.find(x=>x.product.id===item.product.id);
    if (found.quantity===1) {
      // we should remove the item from the cart
      updateCartItems(cartItems.filter(x=>x.product.id!==item.product.id))
    }
    else {
      // decrement the quantity and use map to create a shallow
      // copy of the array to trigger a re-render.
      found.quantity--;
      updateCartItems(cartItems.map(x=>x));
    }
  }

    return (
      <>
      <div class="store">
         <ShoppingCart cartItems={cartItems} addItemToCart={addItemToCart} removeItemFromCart={removeItemFromCart}/>
         <ProductList products={products} addItemToCart={addItemToCart}/>

      </div>
      </>
    )
}

export default Store;