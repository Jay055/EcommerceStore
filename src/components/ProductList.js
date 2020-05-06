import React, { Component } from 'react';
import Title from './Title';
import {storeProducts} from '../data';
import { ProductConsumer } from '../context';
import Product from './Products';
import styled from 'styled-components';

export default class ProductList extends Component {
  state = {
    products: storeProducts
  }; 

  render() {
    // console.log(this.state.products);
    return (
      <React.Fragment>
    <ProductWrapper className="py-5">
    <div className="container">
      <Title name="Our" title="products" />
    
      {/* Get our values from the context  */}
    <div className="row">
      <ProductConsumer>
        {value => {
        return value.products.map(product  =>{
          return <Product key={product.id} product={product} />
        }) 
      }}
        
      </ProductConsumer>

    </div>
    </div>

    </ProductWrapper>
        </React.Fragment>
        // <Product />
    )
  }
}


//
const ProductWrapper = styled.section``;