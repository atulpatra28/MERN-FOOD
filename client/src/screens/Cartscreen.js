// Cartscreen.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faTrash, faPlus } from '@fortawesome/free-solid-svg-icons';
import { addToCart, deleteFromCart } from '../actions/cartActions';
import Checkout from '../components/Checkout'

export default function Cartscreen() {
  const cartState = useSelector(state => state.cartReducer);
  const cartItems = cartState.cartItems;
  var subtotal = cartItems.reduce((x, item) => x + item.price, 0);
  const dispatch = useDispatch();

  return (
    <div>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2 style={{ fontSize: "45px" }}>My Cart</h2>

          <div className='d-flex flex-column'>
            {cartItems.map(item => (
              <div key={item.id} className='d-flex align-items-center border-bottom p-3'>
                <div className='flex-grow-1'>
                  <h1>{item.name}({item.varient})</h1>
                  {item.prices && item.prices[0] && (
                    <h1>Price: {item.quantity} * {item.prices[0][item.varient]} = {item.price}</h1>
                  )}
                  <div className='d-flex align-items-center'>
                    <span style={{ display: 'inline' }}>Quantity: </span>
                    <FontAwesomeIcon
                      icon={faPlus}
                      style={{ fontSize: '14px', color: 'blue', marginLeft: '5px', cursor: 'pointer' }}
                      onClick={() => { dispatch(addToCart(item, item.quantity + 1, item.varient)) }}
                    />
                    <b className='mx-2'>{item.quantity}</b>
                    <FontAwesomeIcon icon={faMinus} style={{ fontSize: '14px', color: 'blue', cursor: 'pointer' }} onClick={() => { dispatch(addToCart(item, item.quantity - 1, item.varient)) }}/>
                  </div>
                </div>
                <div className='text-center m-1 w-100'>
                  <img src={item.image} alt={item.name} style={{ height: '100px', width: '120px' }} />
                </div>
                <div className='text-left'>
                  <FontAwesomeIcon icon={faTrash} style={{ fontSize: '24px', color: 'darkblue', cursor: 'pointer' }} onClick={() => { dispatch(deleteFromCart(item)) }} />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="col-md-4">
          <h2 style={{fontSize:'45px'}}>Sub Total : ₹{subtotal}</h2>
          <Checkout subtotal={subtotal}/>
        </div>
      </div>
    </div>
  );
}
