import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {ProductConsumer} from '../context';


export default class Products extends Component {
  // props from ProductList
  render() {
    const {id, title, img, price, inCart} = this.props.product;
    return (
      <ProductWrapper className="col-9 mx-auto ">
        <h2>Hello from the product  </h2>
      </ProductWrapper>
    )
  }
}


// Styled Components 

const ProductWrapper = styled.div`

`;