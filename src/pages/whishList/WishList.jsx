


import React from 'react';
import { useSelector } from 'react-redux';
import ProductCard from '../../components/card/ProductCard';
import './WishList.css'

const WishListPage = () => {
  const wishListProducts = useSelector((state) => state.wishlist.wishlistItems);

  console.log(wishListProducts);

  return (
    <div >
      <h2 className='wishList-Heading'>Wishlist</h2>
      <div className='wishlist'>
        {wishListProducts.map((item) => (
            <ProductCard product={item} />
        ))}
      </div>
    </div>
  );
};

export default WishListPage;

// <div className="wishlist-card" key={item.id}>
//             <img src={item.image} alt="Product Image" />
//             <h2>{item.title.slice(0, 20)}</h2>
//             <span className="price">{item.price}</span>
//             <button  >Add to Cart</button>
//           </div>