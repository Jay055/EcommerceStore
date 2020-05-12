import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../home.png';
// styled components 
import styled from "styled-components";
import {ButtonContainer} from './button';




export default class Navbar extends Component {
  render() {
    return (
      <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
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
      </NavWrapper>
    );
  }
}



const NavWrapper = styled.nav`
  background: var(--mainBlue);
  .nav-link{
    color:var(--mainWhite)!important;
    font-size:1.3rem;
    text-transform: capitalize !important;
  }
   
  
`
