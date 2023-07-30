import React from 'react'
import './Form.css'
import Fb from '../../assets/facebook.png'
import Apple from '../../assets/apple.png'
import Google from '../../assets/google.png'
import Toggle from '../Toggle/Toggle'

const Form = () => {
  return (
    <form>
        <div className='form-title-container'>
       <h1 className='form-heading'>Register with</h1>

       <div className='icons'>
        <div className='icon-container'><img src={Fb} alt=''></img></div>
        <div className='icon-container'><img src={Apple} alt=''></img></div>
        <div className='icon-container'><img src={Google} alt=''></img></div>
       </div>
       <p className='or'>or</p>

<div className='inputs'>
<div className='input-wrapper'>
  <h1 className='input-title'>Name</h1>
  <input placeholder="Your full name"></input>
  </div>
<div className='input-wrapper'>
  <h1 className='input-title'>Email</h1>
  <input placeholder="Your email address"></input>
  </div>
<div className='input-wrapper'>
  <h1 className='input-title'>Password</h1>
  <input placeholder="Your password"></input>
  </div>
  <div className='toggle-wrapper'>
    <Toggle />
    </div>
    <button className='form-button'>
      <h1 className='signup-button'>SignUp</h1>
      </button>  

<div className='bottom'>
<h1 className='bottom-text'>Aleady have an account? <span>Sign in</span></h1>
</div>

</div>


       </div>
    </form>
  )
}

export default Form