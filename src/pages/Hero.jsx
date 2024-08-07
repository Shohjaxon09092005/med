import React from 'react'
import search from '../images/search.png'
import filtr from '../images/filter-32-128.png'
import burger from '../images/burger.png'
import location from '../images/pngegg.png'
import '../styles/hero.css'
import { NavLink } from 'react-router-dom'
import HeroCard from '../components/HeroCard'
import kardiolog from '../images/kardiolog.png'
import ortoped from '../images/1.png'
import stoma from '../images/stomatolog.png'
import dentist from '../images/dentist.png'
import hirurg from '../images/Hirurg.png'
import nevr from '../images/nevrapatolog.png'
import glav from '../images/glavrach.png'
import oku from '../images/okulist.png'
import yulduz from "../images/star'.png"


function Hero() {
  return (
    <div className='hero'>
        <div className="container">
            <div className="header_hero">
                <div className="hero_logo">
                    <img  width={30} height={30} src={burger} alt="" />
                    <img width={35} height={35} src={location} alt="" />
                </div>
                <div className="hero_content">
                    <h2>O'zingizga kerakli shifokorni toping</h2>
                    <h1>Eng yaxshi shifokorlar</h1>
                </div>
                <form >
                    <img width={18} height={18} src={search} alt="" />
                    <input type="text" placeholder='Qidirish' />

                    <span><img width={35} height={35} src={filtr} alt="" /></span>
                </form>

            </div>
            <div className="hero_card">
                <div className="hero_card_turkum">
                    <h4>Turkumlar</h4>
                    <NavLink>Ko'rish</NavLink>
                </div>
                <div className="hero_card_dr">
                    <h4>Eng yaxshi shifokorlar</h4>
                    <NavLink>Ko'rish</NavLink>
                </div>
                <div className="hero_grid">
                    
                    <HeroCard rasm={kardiolog} ism="Dr.Jamilar Rahimova" kasb="Kardiolog" son="20" yulduz={yulduz} yulSon="5" btn_nomi="Ko'rish" />
                    <HeroCard rasm={ortoped} ism="Dr.Zokir Sharipov" kasb="Ortoped" son="21" yulduz={yulduz} yulSon="4.8" btn_nomi="Ko'rish" />
                    <HeroCard rasm={stoma} ism="Dr.Humora Karimova" kasb="Stomotolog" son="120" yulduz={yulduz} yulSon="4.8" btn_nomi="Ko'rish" />
                    <HeroCard rasm={dentist} ism="Dr.Aliya Jumayeva" kasb="Dentist" son="100" yulduz={yulduz} yulSon="5" btn_nomi="Ko'rish" />
                    <HeroCard rasm={hirurg} ism="Dr.Doniyor" kasb="Hirurg" son="50" yulduz={yulduz} yulSon="5" btn_nomi="Ko'rish" />
                    <HeroCard rasm={nevr    } ism="Dr.Madina Aliyeva" kasb="Hirurg" son="25" yulduz={yulduz} yulSon="5" btn_nomi="Ko'rish" />
                    <HeroCard rasm={glav} ism="Dr.Jamshid Aliyev" kasb="Glavrach" son="60" yulduz={yulduz} yulSon="5" btn_nomi="Ko'rish" />
                    <HeroCard rasm={oku} ism="Dr.Ilhom Shukurov" kasb="Okulist" son="40" yulduz={yulduz} yulSon="4.8" btn_nomi="Ko'rish" />
                </div>


            </div>
        </div>
      
    </div>
  )
}

export default Hero
