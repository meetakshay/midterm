import React from 'react'
import Carousel from '../../components/slider/Slider'
import Navbar from '../../components/navbar/Navbar'
import Promotion from '../../components/promotion/Promotion'
import NewsLetter from '../../components/newsLetter/NewsLetter'
import "./HomePage.css"

const HomePage = () => {
  return (
    <>
    
    <Carousel/>
    <Promotion 
      heading='🌟 Unlock Exclusive Savings! Sign Up Now for $500 Off Your First
          Delivery! 🌟'
          image="https://img.lovepik.com/free-template/bg/20200729/bg/dfb9ab5d3cb4d_398193.png_list.jpg"
          
          para1="Join us on this exciting journey of great finds, unbeatable prices,
          and exclusive perks! Don't miss out - sign up now and make your
          shopping experience extraordinary! 🌈"
          para2=' Ready to indulge in the joy of savings?'
    />
    <NewsLetter 
      description=' Hello Lo.&.Go Fam, Exciting news! Dive into the joy of savings with
          our latest newsletter. 🚀 Explore exclusive deals, stay in the loop
          with our socials, and snag a special $500 off on your first delivery
          when you sign up!'
    />
    
    </>
  )
}

export default HomePage