import React from "react";
import { Link } from 'react-router-dom';
import coat1 from '../../assets/images/coat1.jpg';
import coat2 from '../../assets/images/coat2.jpg';

import { getProducts } from "./ProductData";

function Products() {
  const products = getProducts();
  // const products = [
  //   {
  //     productId: 1,
  //     image: coat1
  //   },
  //   {
  //     productId: 2,
  //     image: coat2
  //   }
  // ];

  return (
    <ul>
      
       {products.map((product) => (
        <li key={product.id}>
          <Link to={`/products/${product.id}`}>
            <img src={product.image} alt={`Product ${product.id}`} />
          </Link> 
          </li>
   ))} 
  
   {/* <li>
            {products.map((product) => (
          <Link
            to={`/products/${product.id}`}
            key={product.id}
          >
            {product.name}
          </Link>
     
      ))} 
      </li> */}
    </ul>
  )
}

export default Products;