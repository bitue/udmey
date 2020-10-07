import React from 'react';
import './main.css'
import data from '../fakedata/fake.json'
import { useState } from 'react';
import { useEffect } from 'react';
import Product from '../Product/Product';
import Review from '../Review/Review';

const Main = () => {
    const [product , setProduct]=useState([])
    useEffect(()=>{
        setProduct(data)
    },[])

    const [course , setCourse] =useState([])
  
   
    
    function enrollClick(enrolled){
       
       
       
        const  total = [...course,enrolled ]
        
        
        setCourse(total);
      
       
    }


    return (
        <div className="productContainer">
            <div className="product">
              {product.map( pro=>  <Product enroll={enrollClick} product={pro} ></Product>)}
            </div>
            <div className="review">
                <Review total={course}></Review>
            </div>
        </div>
    );
};

export default Main;