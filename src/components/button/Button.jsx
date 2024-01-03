import React from 'react';
import './Button.css'

const Button = (props) => {
const { title, onClick, disabled, className, type} = props


  return (
    <div className="button">
         <button className={className} type={type} onClick={onClick} disabled={disabled}>
      {title}
    </button>
    </div>
 
  );
};

export default Button;



// usage // usage // usage // usage //
// <div>
// <p>Content of your component...</p>
// <Button title="Click me" className='customButton' onClick={handleButtonClick}  /> 
// </div>