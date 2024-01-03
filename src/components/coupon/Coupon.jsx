import React from "react";
import "./Coupon.css";

const Coupon = () => {
  return (
    <>
      <div className="coupon">
        <div className="coupon-left-banner">
          <div className="coupon-title">FLAT ₹300 OFF</div>
          <div className="arrow-icon">
            <i className="fa-solid fa-arrow-right-long"></i>
          </div>
        </div>
        <div className="coupon-right-banner">
            <div className="coupon-offer">
                <div className="coupon-offer-left">
                    <p>Avail Flat</p>
                    <h1>300 OFF</h1>
                </div>
                <div className="coupon-offer-right"></div>
            </div>
            <div className="coupon-code"></div>
            <div className="coupon-extra-benefits"></div>
        </div>
      </div>
    </>
  );
};

export default Coupon;
