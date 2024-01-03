import React, { useEffect, useState } from 'react';
import { RotatingTriangles } from 'react-loader-spinner';
import './ProductList.css';
import ProductCard from '../card/ProductCard';
import { useParams } from 'react-router-dom';
import { BASE_URL } from '../../api/Constants';
import { PRODUCTS_URL } from '../../api/EndPoints';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { category } = useParams();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);

        const apiUrl = category && category.toLowerCase() !== 'all'
          ? `${BASE_URL}${PRODUCTS_URL}/category/${category}`
          : `${BASE_URL}${PRODUCTS_URL}`;

        const response = await fetch(apiUrl);
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [category]);

  return (
    <div className='products'>
      <h2 className='categoryTitle'>{category ? `${category.toUpperCase()}` : 'All Products'}</h2>
      {loading ? (
        <div className="loader-container">
          <RotatingTriangles
            visible={true}
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="rotating-triangles-loading"
            wrapperStyle={{}}
          />
        </div>
      ) : (
        <ul className='productsList'>
          {products.map((product) => (
            <li key={product.id}>
              <ProductCard product={product} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProductList;
