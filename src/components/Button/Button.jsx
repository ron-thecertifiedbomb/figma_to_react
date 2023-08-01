import React from 'react'

const Button = ({backgroundColor, width, height, title, border, borderRadius, marginTop, marginBottom}) => {
  return (
    <button   style={{ backgroundColor: backgroundColor, width: width, height: height, border: border, borderRadius, marginTop, marginBottom, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
    <h1 className='signup-button'>{title}</h1>
    </button>  
  )
}

export default Button