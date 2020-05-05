import React from 'react'

// Component to display items card  in the cart component  
// Destructure items, value from this.props, !Consumer
export default function CartItem({item, value}) {
  const {id, title, img, price, total, count } = item;
  const {increment, decrement, removeItem} = value 

  return (
      
    <div className="row my-2 text-capitalize text-center">
      <div className="col-10 mx-auto col-lg-2">
        <img src={img} style={{width:'5rem', height:"5rem"}}
        className="img-fluid" alt="product" />
      </div>
    
      <div className="col-10 mx-auto col-lg-2">
      <span className="d-lg-none">product: </span>
      {title}
      </div> 
      <div className="col-10 mx-auto col-lg-2">
      <span className="d-lg-none">price: </span>
      {price}
      </div>   
      <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
        <div className="d-flex justify-content-center">
          <div>
            <span className="btn btn-black mx-1" onClick={()=> decrement(id)}> -
            </span>
           <span className="btn btn-black mx">{count}</span>
          <span className="btn btn-black mx-1" onClick={()=> decrement(id)}> +
          </span>
          </div>
        </div>

        </div>  

            {/* Delete and Total  */}
        <div className="col-10 mx-auto col-lg-2">
          <div className="cart-icon" onClick={()=>
          removeItem(id)}>
            <i className = "fas fa-trash"></i>
          </div>
          <div className="col-10 mx-auto col-lg-2">
          <strong> item total: $ {total}</strong>
        </div>


        </div>
        
    </div>
  )
}
