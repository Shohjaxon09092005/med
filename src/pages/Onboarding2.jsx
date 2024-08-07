import React from 'react'
import '../styles/onB1.css'
import rasm1 from '../images/onB-2.png'
import rasm2 from '../images/onB-2 logo.png'
import { NavLink } from 'react-router-dom'
function Onboarding2() {
  return (
    <div className='onB2'>
         <div className="container">
        <div className="onB1_wrapper">
          <img src={rasm1} alt="" />
          <h2>Shifokor qabuli endi tez</h2>
          <p>O'z shifokoringiz bilan tez bog'lanish yo'li</p>
          <img src={rasm2} alt="" />
          <NavLink to="/onB3"><button>Keyingi qadam</button></NavLink>
          <h4>Hoziroq foydalaning</h4>
        </div>
      </div>
      
    </div>
  )
}

export default Onboarding2
