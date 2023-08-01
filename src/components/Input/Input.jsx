import React from 'react'

const Input = ({ title , placeholder}) => {
  return (
    <div className='input-wrapper'>
    <h1 className='input-title'>{title}</h1>
    <input placeholder={placeholder}></input>
    </div>
  )
}

export default Input