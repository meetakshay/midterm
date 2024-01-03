import congratsImage from "../../assets/congrats.jpg";
import React from "react";
import "./CheckOutPage.css";

const CheckOutPage = () => {
  return (
    <>
      <div className="checkout">
        <div className="congratsImage">
          <img src={congratsImage} alt="background image" />
        </div>

        <div className="checkOutInfo">
          <p className="congratulationsPara">Congratulations🥳</p>
          <p className="para1">
            Your order has been successfully placed. You will receive a
            confirmation email shortly.
          </p>
          <p className="para2">
            Thank you for shopping with us! We appreciate your business 😁.
          </p>
        </div>
      </div>
    </>
  );
};

export default CheckOutPage;
