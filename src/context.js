// Context API to act as our  Redux store 

import React, { Component } from 'react';
import { storeProducts, detailProduct } from './data';



const ProductContext = React.createContext(); 
  
// Comes with the Provider and Consumer 
//Provider 
// Consumer 

 class ProductProvider extends Component {
  state ={
    products:[],
    detailProduct:detailProduct
  }
  

// Create A Lifecycle method to set product state 
componentDidMount() {
  this.setProducts();
}


  // Create an array and loop through the product list to insert items into the array, we would want to get new set of values 
  setProducts = () => { 
    let tempProducts = []; 
    storeProducts.forEach(item => {
      const singleItem = {...item};
      tempProducts = [...tempProducts, singleItem]
    });
    this.setState(()=> {
      return { products: tempProducts}
    })
  }


  // Get Item with ID
  getItem = id =>{ 
    const product = this.state.products.find(item => item.id === id);
    return product; 
  }


  // Get product and set the state of the detail product 
  handleDetail = (id) => {
    const product = this.getItem(id);
    this.setState(()=>{
      return {detailProduct:product}
    });
  }

  addToCart = () => {
    console.log('hello from add to cart')
  };
  render() {
    return (
      <ProductContext.Provider
      value={{
        ...this.state, handleDetail:this.handleDetail, 
        addToCart: this.addToCart
      }}>
        {this.props.children}
        
      </ProductContext.Provider>
    )
  }
}

// consumer 
const ProductConsumer = ProductContext.Consumer; 

export {ProductProvider, ProductConsumer};