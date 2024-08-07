import React from 'react'
import rasm1 from "../images/onboarding-1.png"
import rasm2 from "../images/onB-1.png"
import '../styles/onB1.css'
import { NavLink } from 'react-router-dom'
function Onboarding() {
  return (
    <div className='onB1'>
      <div className="container">
        <div className="onB1_wrapper">
          <img src={rasm1} alt="" />
          <h2>Yuzlab malakali shifokorlar</h2>
          <p>Siz bu loyihamiz orqali o'zingizga kerakli shifokor qabuliga tez va hech qanday ortiqcha navbat kutishlarsiz kira olasiz</p>
          <img src={rasm2} alt="" />
          <NavLink to="/onB2"><button>Keyingi qadam</button></NavLink>
          <h4>Hoziroq foydalaning</h4>
        </div>
      </div>


    </div>
  )
}

export default Onboarding
