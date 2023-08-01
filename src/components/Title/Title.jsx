import React from 'react'
import './Title.css'

const Title = ({heading , para, marginTop, marginBottom}) => {
  return (
    <main className='title-container' style={{ marginTop :marginTop, marginBottom: marginBottom}}>
        <h1 className='heading'>{heading}</h1>
        <p>{para}</p>
    </main>
  )
}

export default Title