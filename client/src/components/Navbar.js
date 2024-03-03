import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { logoutUser } from '../actions/userAction';

export default function NavigationBar() {
  const cartState = useSelector((state) => state.cartReducer);
  const userState = useSelector((state) => state.loginUserReducer);
  const { userInfo } = userState;
  const dispatch=useDispatch()

  return (
    <Navbar bg="light" variant="light" className='shadow'>
      <Navbar.Brand as={Link} to="/">
        <img src={require('../Foodie_delights_logo.jpg')} alt="Foodie Delights Logo" height="50" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
        <Nav>
          {userInfo ? (
            <NavDropdown title={userInfo.name} id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#">Orders</NavDropdown.Item>
              <NavDropdown.Item href="#" onClick={() => dispatch(logoutUser())}>Logout</NavDropdown.Item>
            </NavDropdown>
          ) : (
            <Nav.Link as={Link} to="/login">
              Login
            </Nav.Link>
          )}
          <Nav.Link as={Link} to="/cart">
            Cart {cartState.cartItems.length}
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
