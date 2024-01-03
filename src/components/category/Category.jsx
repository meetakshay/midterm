


import React from 'react';
import CategoryList from '../categoryList/CategoryList';
import ProductList from '../productList/ProductList';
import './Category.css'


const Category = ({ categoriesUrl, productsUrl }) => {

  return (
    <div>
      <CategoryList url={categoriesUrl}  />
      <ProductList url={productsUrl} />
    </div>
  );
};

export default Category;
