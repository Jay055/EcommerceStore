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
    detailProduct:detailProduct,
    cart: [], 
    modalOpen: false,
    modalProduct: detailProduct,
    cartSubTotl:0,
    cartTax:0,
    cartTotal:0
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


  // Get product and set the state of the detail product in Products Component  
  handleDetail = (id) => {
    const product = this.getItem(id);
    this.setState(()=>{
      return {detailProduct:product}
    });
  }


  // Add Items to Cart from Products Component 
  addToCart = (id) => {
    let tempProducts = [...this.state.products];
    // Get the product with index not find to avoid mutation 
    const index   = tempProducts.indexOf(this.getItem(id));
    
    const product = tempProducts[index];
    product.inCart = true;
    product.count = 1; 
    const price = product.price;
    product.total = price;
    this.setState(() => { 
      return { products: tempProducts, cart: [...this.state.cart, product]};
    },
    () => { 
      console.log(this.state);
    }
    );
  };

  // Create Methods for Modal 
  // Open a modal of the selected product by setting modal state (Product.js, Detail.js)
  openModal = id => { 
    const product = this.getItem(id);
    this.setState(()=>{
      return {modalProduct:product, modalOpen:true}
     })
  }
  
  // Close Modal 
  closeModal = () => { 
    this.setState(()=> { 
      return {modalOpen:false}
    })
  }

  // increment (Cart)
  increment = (id) => { 
    console.log('increment')
  }

  // Decrement (Cart)
  decrement = (id) => { 
    console.log('decrement')
  }

  // Remove Item (Cart)
 removeItem = (id) => { 
    console.log('removeItem')
  }

  // Clear Cart 
 clearCart = () => { 
    console.log('clearCart')
  }


  render() {
    return (
      <ProductContext.Provider
        // Input global values to be accessed in the entire components 
        // Value possesses the state and state properties 
      value={{
        ...this.state, handleDetail:this.handleDetail, 
        addToCart: this.addToCart, openModal:this.openModal, closeModal:this.closeModal, removeItem:this.removeItem, clearCart:this.clearCart, increment:this.increment, decrement:this.decrement
      }}>
        {this.props.children}
        
      </ProductContext.Provider>
    )
  }
}



// consumer 
const ProductConsumer = ProductContext.Consumer; 

export {ProductProvider, ProductConsumer};