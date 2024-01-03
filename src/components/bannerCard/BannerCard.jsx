import React from 'react'
import "./BannerCard.css"


const BannerCard = (props) => {

  const {url, title, description} = props.item;

  return (
    <>
        <div className='poster'>
              <div className="posterImage">
                <img src={url} alt="image" />
              </div>
          
              <div className="posterImage_overlay">
                <div className="posterImage_title">
                  {title}
                </div>
                <p>{description}</p>
              </div>
        </div>
    </>
  )
}

export default BannerCard
