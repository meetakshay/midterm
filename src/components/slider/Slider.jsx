import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { BannerDetails } from '../../api/BannerDetails';
import BannerCard from '../bannerCard/BannerCard';


const Slider = () => {
  return (
    <>
         <div className="poster">
        <Carousel
          showThumbs={false}
          showStatus={false}
          autoPlay={true}
          infiniteLoop={true}
          transitionTime={2000}
        >
          {BannerDetails.map((item, index) => (
            <BannerCard item={item} key={index} />
          ))}
        </Carousel>
      </div>
    </>
  )
}

export default Slider