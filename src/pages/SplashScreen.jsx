import React from 'react'
import "../styles/splash.css"
import { NavLink } from 'react-router-dom'
function SplashScreen() {
    return (
        <div className='splash'>
            <div className="container">
                <div className="splash_content">
                    <h2><span>Smart</span> Med loyihasi</h2>
                   <NavLink to="signUp"><button>Boshlash</button></NavLink> 
                </div>
            </div>



        </div>
    )
}

export default SplashScreen
