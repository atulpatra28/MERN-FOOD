/* Menu.js */
import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addToCart } from '../actions/cartActions';
import './Menu.css'; // Make sure to adjust the path based on your project structure

export default function Menu({ items }) {
  const [quantity, setquantity] = useState(1);
  const [varient, setvarient] = useState(items.varients[0]);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch();

  function addtocart() {
    dispatch(addToCart(items, quantity, varient));
  }

  return (
    <div className='shadow-lg p-3 mb-5 bg-white rounded'>
      <div onClick={handleShow}>
        <h1>{items.name}</h1>
        <img src={items.image} alt="img" className="img-fluid" style={{ height: '200px', width: '200px' }} />
      </div>
      <div className="flex-container">
        <div className='w-100 m-1 position-relative'>
          <p>Variants</p>
          <div className="variant-dropdown">
            <select className='form-control mb-2' value={varient} onChange={(e) => { setvarient(e.target.value) }}>
              {items.varients.map((varient, idx) => {
                return <option value={varient} key={idx}>{varient}</option>
              })}
            </select>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-compact-down dropdown-arrow" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67"/>
            </svg>
          </div>
        </div>
        <div className='w-100 m-1 position-relative'>
          <p>Quantity</p>
          <div className="variant-dropdown">
            <select className='form-control' value={quantity} onChange={(e) => { setquantity(e.target.value) }}>
              {[...Array(10).keys()].map((x, i) => {
                return <option value={i + 1} key={i}>{i + 1}</option>
              })}
            </select>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-compact-down dropdown-arrow" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67"/>
            </svg>
          </div>
        </div>
      </div>
      <div className="flex-container">
        <div className='m-1 w-100'>
          <h1 className='mt-1'>Price: ₹{items.prices[0][varient] * quantity} </h1>
        </div>
        <div className='m-1 w-100'>
          <button className="btn" onClick={addtocart}>ADD TO CART</button>
        </div>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{items.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={items.image} alt="img" style={{ height: '250px', width: '250px' }}></img>
          <p>{items.description}</p>
        </Modal.Body>
        <Modal.Footer>
          <button className="btn" onClick={handleClose}>CLOSE</button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}