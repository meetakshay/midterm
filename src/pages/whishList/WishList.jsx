
import React from 'react';
import { useSelector } from 'react-redux';
import { ProductCard } from '../../components';



const WishListPage = () => {
  const wishListProducts = useSelector((state) => state.wishlist.wishlistItems);
  
  
console.log(wishListProducts)
  return (
    <div>
      <h2>Wishlist</h2>
      <ul>
        {wishListProducts.map((item) => (
          <ProductCard  products={item} className='wishListPage' />
        ))}
      </ul>
    </div>
  );
};

export default WishListPage;
