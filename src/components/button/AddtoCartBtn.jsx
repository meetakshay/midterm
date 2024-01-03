import React from 'react';
import './Button.css'

const AddtoCartBtn = (props) => {
const { title, onClick, disabled, className} = props


  return (
    <div className="button">
         <button className={className} onClick={onClick} disabled={disabled}>
         <i className="fa-solid fa-cart-arrow-down" style={{marginRight:"7px", fontSize:"1.2rem", color:"orange"}}></i> 
      {title}
    </button>
    </div>
 
  );
};

export default AddtoCartBtn;