import React, { Component } from 'react';
import {ProductConsumer} from '../context';
import {Link} from 'react-router-dom';
import {ButtonContainer} from './button';



// Import ProductConsumer to acccess value from the context store 
// Destructure our values from the Product consumer 


export default class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value)=> {
          const {id,company,img,info,price,title,inCart} = value.detailProduct;
          console.log(value.detailProduct);
          
          return (
            <div className="container py-5"> 
            {/* title */}
            <div className="row">
              <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
            <h1>{title}</h1>
            </div>
            </div>

            {/* end title */}
            {/* Product Info  */}
             <div className = "row">
               <div className="col-10 mx-auto col-md-6 my-3">
               <img src={img} className="img-fluid" alt="product-info" />
               </div>
            
            {/* Product Description  */}

               <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                <h2>Model: {title}</h2>
                <h4 className="text-title text-uppercase">
                  made by:<span className="text-uppercase">{company}</span>
                </h4>
                <h4 className="text-blue">
                  <strong>
                    price: <span>$</span>
                  </strong>
                </h4>
                <p className="text-capitalize font-weight-bold mt-3 mb-0">
                  some info about the product:
                </p>
                <p className="text-muted lead">{info}</p>

                {/* Buttons  */}
                <div>
                  <Link to="/">
                    <ButtonContainer>Back to product 
                      </ButtonContainer> 
                      {/* Disable if added to cart and change  the name of the button, include conditional rendering in styled components (cart) */}
                    <ButtonContainer 
                    cart 
                    disabled={inCart ? true : false}
                    onClick={() => {
                      value.addToCart(id);
                      value.openModal(id);
                    }}>
                      {inCart? "inCart" : "add to cart"}
                    </ButtonContainer>
                  </Link>
                </div>
                
                 

              </div>
              
             </div>
             
            </div>
          )

        }}
      </ProductConsumer>
    )
  }
}
