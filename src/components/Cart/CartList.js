import React from 'react'; 
import CartItem from './CartItem';



  // Destructure value as props from Cart   const {value} = this.props 
export default function CartList({value}) {
  const {cart } = value; 
  // console.log(value, cart);

  // Display CartItem for each added Item to the Cart 
  return (
    <div className="container-fluid">
      {cart.map(item=> {
        return  <CartItem  key={item.id} item={item} value={value} /> 
      })}
    
     

    </div>
  )
}
