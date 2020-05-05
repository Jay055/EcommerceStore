
import React, { Component } from '../../../node_modules/react';
import Title from '../Title';
import CartColumns from './CartColumns';
import EmptyCart from './EmptyCart';
import {ProductConsumer} from '../../context';
import CartList from '../Cart/CardList';




export default class Cart extends Component {
  render() {
    return (
      <section>
        <Title name="your" title="cart" />
          <CartColumns />


          <ProductConsumer>
            {(value) => { 
              const {cart} = value;

            if(cart.length > 0) {
                return (
               <React.Fragment>
                  <Title name="your" title="cart" />
                  <CartColumns />
                  <CartList value={value}/>

               </React.Fragment>
                )
        
             } else {
              return <EmptyCart /> 
            }

              // if( ) {
              // return null ;
              //    }   else {

                
                  }
              
              }
          

          </ProductConsumer>

      </section>
    )
  }
}


//Make cart.js the index with package.json