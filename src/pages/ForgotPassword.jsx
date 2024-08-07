import React from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/signUp.css'
import '../styles/forgot.css'

function ForgotPassword() {
  return (
    <div className='forgot'>
         <div className='signIn'>
      <div className='signUp'>
       
        <div className="container">
        <div className="sign_top">
        </div>
          <div className="sign__content">
            <h1>Parolingiz esdan <br /> chiqdimi?</h1>
            <h2><span>Email yoki telefon raqamini kiriting</span>O'z akkauntingizga biriktirilgan email yoki telefon raqamingizni kiriting</h2>


            <form className='sign_form' >

              <label>Email </label>
              <input className='sign_input' type="email" placeholder='demo.mail@gmail.com' />
             <button type="submit"><NavLink to="/email">Parolni tiklash</NavLink> </button>
             
            </form>

           
          </div>
          <div className="sign_bottom">
          </div>
        </div>
      

      </div>
    </div>
      
    </div>
  )
}

export default ForgotPassword
