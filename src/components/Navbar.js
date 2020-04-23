import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';
// styled components 
import styled from "styled-components";




export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm bg-primary navbar-dark px-sm-5">
        {/* www.iconfinder.com */}
        <Link to="/" className="nav-item">
        {/* FANCYSOLES */}
        {/* <h2>FancySoles</h2> */}
          <img src={logo} alt="store" className="navbar-brand" />
        </Link>
        <ul className="navbar-nav align-items-center">
          
          <li className="nav-item ml-5">
            <Link to="/" className="nav-link">
              Products
            </Link>
          </li>
        </ul>
        <Link to="/cart" className="ml-auto">
          <ButtonContainer>
            <span className="mr-2">
              <i className="fas fa-cart-plus " />
            </span>
            My Cart
          </ButtonContainer>
        </Link>
      </nav>
    );
  }
}


// Styled Component 
const ButtonContainer = styled.button`
  text-transform: capitalize;
font - size: 1.4rem;
background: transparent;
border: 0.05rem solid var(--lightBlue);
border - radius: 0.5rem;
padding: 0.2rem 0.5rem;
outline - color: red;
cursor: pointer;
display: inline - block;
margin: 0.2rem 0.5rem 0.2rem 0;
transition: all 0.5s ease -in -out;
  &: hover {
  background: var(--lightBlue);
  color: var(--mainBlue);
}
`;