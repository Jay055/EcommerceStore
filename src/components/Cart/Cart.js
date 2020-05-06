
import React, { Component } from '../../../node_modules/react';
import Title from '../Title';
import CartColumns from './CartColumns';
import EmptyCart from './EmptyCart';
import {ProductConsumer} from '../../context';
import CartList from './CartList';
import CartTotals from './CartTotals';



// Cart Page 
export default class Cart extends Component {
  render() {
    return (
      <section>
        <Title name="your" title="cart" />
          <CartColumns />

            {/* Pass down value with Consumer (Context) */}
          <ProductConsumer>
            {(value) => { 
              const {cart} = value;
                // Conditional Statement to display Empty Cart 
            if(cart.length > 0) {
                return (
               <React.Fragment>
                  
                    {/* Pass value as props to CartList */}
                  <CartList value={value}/>
                  <CartTotals value={value} 
                  history={this.props.history}
                  /> 

               </React.Fragment>
                )
        
             } else {
              return <EmptyCart /> 
            }                
             }
              
              }
          

          </ProductConsumer>

      </section>
    )
  }
}


//Make cart.js the index with package.json