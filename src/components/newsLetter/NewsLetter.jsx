import React from 'react'
import './NewsLetter.css'
import Button from '../button/Button'

const NewsLetter = (props) => {

    const {description} = props

  return (
    <>
        <div className="newsLetter">
        <h2 className="newsLetterHeading">Subscribe to our Newsletter</h2>
        <span className="newsLetterPara">
        {description}
        </span>
          <div className="newsLetterCta">
            <input type="email" className="newsLetterInput" placeholder="Enter your email..."/>
            <Button  title='Subscribe' className='subscribe' />
          </div>
      </div>
    </>
  )
}

export default NewsLetter