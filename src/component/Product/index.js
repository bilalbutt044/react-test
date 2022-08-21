import React from 'react';

const Product = ({product}) => {
    return ( 
        <div style={{   height:"200px", width:"250px", border:"1px solid black", paddingLeft:"10px" }}>
            <p> <strong>Name:</strong> {product?.name}</p>
            <p><strong>Description:</strong> {product?.description}</p>
            <p><strong>Price:</strong>{product?.price}</p>
            <p><strong>Date:</strong> {product?.inventoryDate}</p>
        </div>
     );
}
 
export default Product;