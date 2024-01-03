


import React from "react";
import './ItemCard.css'
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { deleteItem , decreaseQuantity ,
    increaseQuantity,} from "../../store/cartSlice";

const ItemCard = ({ item }) => {
  console.log(item)
  const dispatch = useDispatch();

  return (
    <div className="item-card">

      <div className="item-info">

      <div className="icon-image">
        <div className="deleteIcon">
            <i className="fa-solid fa-trash-can delete-icon" onClick={()=> dispatch(deleteItem(item.id)) } ></i>
          </div>

          <div className="cartImages">
          <Link to={`/products/details/${item.id}`} >
          <img className="item-image" src={item.image} alt="productImage" />
          </Link>
          </div>
      </div>

        <div className="item-name">{item.title.slice(0,20)}</div>
        
      </div>

      <div className="item-details">

        <div className="item-price">${item.price}</div>

        <div className="item-quantity">
          <span
            onClick={()=> dispatch(decreaseQuantity(item.id)) }
            className="quantity-button" 
          >
            -
          </span>

          <p className="quantity" style={{color:"red"}}>{item.quantity}</p>

          <span
            onClick={()=> dispatch(increaseQuantity(item.id)) }
            className="quantity-button"
          >
            +
          </span>
        </div>

        <div className="item-total">${(item.quantity * item.price).toFixed(2)}</div>
      </div>
     </div>

  );
};

export default ItemCard;
