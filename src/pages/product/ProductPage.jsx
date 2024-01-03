



import React from 'react';
import { Category } from '../../components';
import './ProductPage.css'




const ProductPage = () => {

 return (
    <div>
      <Category
  categoriesUrl="https://fakestoreapi.com/products/categories"
  productsUrl="https://fakestoreapi.com/products"
/>
    </div>
 );
};

export default ProductPage;



