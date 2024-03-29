import React, {useState, useEffect} from 'react'
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import './Store.css';

async function getProducts() {
  const response = await axios.get('https://fakestoreapi.com/products');
  return response.data;
}

function Product({product, addItemToCart}) {
  return (
    <Card className="product-card">
      <Card.Img src={product.image}/>
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>{product.price}</Card.Text>
        <Button variance="primary" size="sm" onClick={()=> {addItemToCart(product)}}>Add Item</Button>
      </Card.Body>
    </Card>
  )
}

function ProductList({products, addItemToCart}) {
  return (
    <div className="products">
      {products.map(x=><Product product={x} addItemToCart={addItemToCart} />)}
    </div>
  )
}

function ShoppingCart({cartItems, addItemToCart, removeItemFromCart}) {
  return (
    <>
    <div className="cart">
      <div className="cart-item">
        <div className="price-info">
          <div>Num</div>
          <div>Name</div>
          <div>Price</div>
          <div>Total</div>
        </div>
      </div>

      {cartItems.map(x=>
        <div className="cart-item" key={x.product.id}>
          <div className="price-info">
            <div>{x.quantity}</div>
            <div>{x.product.title}</div>
            <div>{x.product.price}</div>
            <div>{(x.product.price*x.quantity).toFixed(2)}</div>
          </div>
          <div className="cart-item-buttons">
            <Button variant="primary" size="sm" onClick={()=>{addItemToCart(x.product)}}>+</Button>
            <Button variant="primary" size="sm" onClick={()=>{removeItemFromCart(x)}}>-</Button>
          </div>
        </div>
      )}

      <hr/>
      <div className="cart-total">
        Total: {(cartItems?.reduce((acc, x)=>{acc+=(x.product.price*x.quantity); return acc;},0)).toFixed(2)}
      </div>
    </div>
    </>
  )
}

function Store() {
  const [products, updateProducts] = useState([]);
  const [cartItems, updateCartItems] = useState([]);

  function addItemToCart(item) {
    let found = cartItems.find(x=>x.product.id === item.id);
    if (!found) {
      // create a new one
      const newCartItem = {product: item, quantity:1};
      const newCartItemArray = [...cartItems, newCartItem];
      updateCartItems(newCartItemArray);
    }
    else {
      found.quantity++;
      updateCartItems(cartItems.map(x=>x));
    }
    console.log(cartItems);
  }

  function removeItemFromCart(item) {
    let found = cartItems.find(x=>x.product.id === item.product.id);
    if (found.quantity===1) {
      updateCartItems(cartItems.filter(x=>x.product.id!==item.product.id));
    }
    else {
      found.quantity--;
      updateCartItems(cartItems.map(x=>x));
    }
  }

  useEffect(()=> {

    (async ()=> {
      updateProducts(await getProducts());
    })();

  }, []);

    return (
      <>
      <div className="store">
        <ShoppingCart cartItems={cartItems} addItemToCart={addItemToCart} removeItemFromCart={removeItemFromCart}/>
        <ProductList products={products} addItemToCart={addItemToCart}/>
      </div>
      </>
    )
}

export default Store;