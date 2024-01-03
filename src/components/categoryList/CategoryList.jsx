




import React, { useEffect, useState } from 'react';
import {Link, useLocation} from 'react-router-dom'
import './CategoryList.css'

const CategoryList = ({ url }) => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  const location = useLocation()

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setCategories(['All', ...data]);
      } catch (error) {
        console.error('Error fetching categories:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, [url]);

  return (
    <div  className='categorySection' >
      {loading ? (
        <p style={{textAlign:'center'}}>Loading categories...</p>
      ) : (
        <ul className='categories'>
        {categories &&
           categories.map((category, index) => (
           
            <li key={index} className='category-listItem'>
            <Link to={`/products/${category.toLowerCase()}`}
            className={location.pathname === `/products/${category.toLowerCase()}` ? 'active' : ''} >
              {category.toUpperCase()}
              </Link>
            </li>

          ))}
        </ul>
      )}
    </div>
  );
};

export default CategoryList;


