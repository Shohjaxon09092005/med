import React from 'react'
import '../styles/signUp.css'
import { NavLink } from 'react-router-dom'
function SignUp() {
  return (
    <div className='signUp'>

      <div className="container">
        <div className="sign_top">



        </div>
        <div className="sign__content">
          <h1>Registratsiyadan o'tish</h1>

          <h2>DAVOM ETISH UCHUN REGISTRATSIYADAN O'TING</h2>

          <form className='sign_form' >
            <label>Foydalanuvchi ismi</label>
            <input className='sign_input' type="text" placeholder='Fotima' />
            <label>Email</label>
            <input className='sign_input' type="email" placeholder='demo.mail@gmail.com' />
            <label>Parol</label>
            <input className='sign_input' type="password" placeholder='**********' />
            <label>Parolni tasdiqlash</label>
            <input className='sign_input' type="password" placeholder='**********' />
            <button type="submit"><NavLink to="/onB1">Registratsiyadan o'tish</NavLink></button>
          </form>
          <div className="sign_bottom_content">
            <h4>Allaqachon tizimda bo'lsangiz unda <NavLink to="/signIn"><span>Kirish</span></NavLink></h4>
          </div>
        </div>
        <div className="sign_bottom">


        </div>
      </div>


    </div>
  )
}

export default SignUp
