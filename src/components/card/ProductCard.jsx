import React, { useState } from "react";
import "./ProductCard.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, deleteItem } from "../../store/cartSlice";
import AddtoCartBtn from "../button/AddtoCartBtn";
import {  isLikedToggle } from '../../store/wishListSlice';

const ProductCard = (props) => {
  const [add, setAdd] = useState(false);

  const { id , title, image, description, price, className } = props.product || {};
  

  const dispatch = useDispatch();



  const wishList = useSelector((state) => state.wishlist.wishlistItems);
  const isLiked = wishList.includes(props.product) ;

  const handleToggleWishlist = () => {
      dispatch(isLikedToggle(props.product));
    }



  const handleAddtoCart = () => {
    if (add) {
      // If already added, remove from cart
      dispatch(deleteItem(props.product.id));
    } else {
      // If not added, add to cart
      dispatch(addToCart({ ...props.product, quantity: 1 }));
    }
    setAdd(!add);
  };

  return (
    
    <div className="productCard" key={id}>

      <Link to={"/products/details/" + id}>
        <img src={image} alt={title} /> 
      </Link>
      <h3>{title.slice(0, 20)}</h3>
      <p>{description.slice(0, 20)}...</p>
      <p className="price">Price: ${price}</p>
      <AddtoCartBtn
        className="productBtn"
        title={add ? "Remove from Cart" : "Add to Cart"}
        onClick={handleAddtoCart}
      />




      <div className={className}>
        <div className="wishListBtn" key={id}>
          <i
            className={`fa-solid fa-heart ${isLiked? "red" : ''} `}
            onClick={handleToggleWishlist}
          ></i>
        </div>
      </div>



    </div>
  );
};

export default ProductCard;
