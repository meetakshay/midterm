import React from 'react'
import './Promotion.css'
import Button from '../button/Button'




const Promotion = (props) => {

const {heading, image, para1, para2} = props


  return (
    <>
        <div className="makeSignIn">
        <h2 className="makeSignInHeading"> 
          {heading}
        </h2>
        <img
          className="makeSignInImage"
          src={image}
          alt="image"
        />
        <h4 className="extraordinary">
         {para1}
        </h4>
        <h5>
         {para2}
          <span style={{ color: "red" }}>Let's get started!</span> 🛍️
        </h5>
        <Button  className="promotionSignInBtn" title='Sign In'   />
      </div>

    </>
  )
}

export default Promotion