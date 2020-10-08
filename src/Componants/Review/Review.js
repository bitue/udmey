import React from 'react';

const Review = (props) => {
    let price=0;
    for (let i = 0; i < props.total.length; i++) {
        const element = props.total[i];
        price =price+element.price
        
    }
    return (
        <div className="review-des">
            <h3>Review Orders :{props.total.length} </h3>
            <ul>
               {props.total.map(ele=><li>{ele.name}</li>)}
            </ul>
            <p> Total Price :{price} USD </p>
            
        </div>
    );
};

export default Review;