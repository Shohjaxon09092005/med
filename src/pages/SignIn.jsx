import React from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/signUp.css'
import rasm1 from '../images/facebook.png'
import rasm2 from '../images/google.png'
import rasm3 from '../images/png-clipart-twitter-twitter-thumbnail.png'
function SignIn() {
  return (
    <div className='signIn'>
      <div className='signUp'>
       
        <div className="container">
        <div className="sign_top">
        </div>
          <div className="sign__content">
            <h1>Tizimga kirish</h1>
            <h2><span>Tizimga xush kelibsiz</span> Tizimga kirish uchun quyidagi amallarni bajaring</h2>


            <form className='sign_form' >

              <label>Email manzilingiz yoki telefon raqamingiz</label>
              <input className='sign_input' type="email" placeholder='Email yoki telefon raqamingizni kiriting' />
              <label>Parol</label>
              <input className='sign_input' type="password" placeholder='**********' />
              <div className="sign_check">
                <div className="sign_check_cont">
                  <input type="checkbox" name="" id="" />
                  <p>Tizimda qolish</p>
                </div>
                <NavLink to="/forgot"><h6>Parolingizni unutdingizmi?</h6></NavLink>


              </div>
              <button type="submit"><NavLink to="/onB1">Kirish </NavLink> </button>
              <div className="sign_after">
                <div></div>
                <p>or</p>
                <div></div>
              </div>
              <div className="sign_logo">
                <img width={50} height={50} src={rasm1} alt="" />
                <img width={50} height={50} src={rasm2} alt="" />
                <img width={50} height={50} src={rasm3} alt="" />
              </div>
            </form>

            <div className="sign_bottom_content">
              <h4>Tizimda yo'qmisiz?<NavLink to="/signUp"><span>Ro'yxatdan o'ting</span></NavLink></h4>
            </div>
          </div>
          <div className="sign_bottom">
          </div>
        </div>
      

      </div>
    </div>
  )
}

export default SignIn
