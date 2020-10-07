import React from 'react';
import "./Product.css";


const Product = (props) => {
   // const[id,name,description,enroll,vdesc,seller,price,img]=props.product;
    //console.log(id)
    // console.log(props)
    return (
        <div className="con">
            <div className="img">
                <img src={props.product.img}/>
            </div>
            <div className="des">
               <h4>{props.product.name}</h4>
                <p>by: {props.product.description}</p>
                <smal>  {props.product.seller}</smal>
                <p> $ {props.product.price} USD</p>
                <div className="flex">
                    <p>{props.product.vdesc}</p>
                    <p>{props.product.enroll} students have already enrolled</p>
                </div>

                <button onClick={()=>{props.enroll(props.product)}} className="btn"> Enroll Now</button>

   
            </div>
        </div>
    );
};

export default Product;