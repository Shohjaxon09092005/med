import React from 'react'
import '../styles/onB1.css'
import rasm1 from '../images/onB-3.png'
import rasm2 from '../images/onb-3 logo.png'
import { NavLink } from 'react-router-dom'
function Onboarding3() {
  return (
    <div className='onB3'>
      <div className='onB2'>
         <div className="container">
        <div className="onB1_wrapper">
          <img src={rasm1} alt="" />
          <h2>Online konsultatsiya</h2>
          <p>Doimiy aloqa</p>
          <img src={rasm2} alt="" />
          <NavLink to="/hero"><button>Boshlash</button></NavLink>
          <h4>Hoziroq foydalaning</h4>
        </div>
      </div>
      
    </div>
    </div>
  )
}

export default Onboarding3
