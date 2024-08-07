import React from 'react'

function HeroCard({rasm,ism,kasb,son,yulduz,yulSon,btn_nomi}) {
  return (
    <div className='heroCard'>
      <div className="hero_avatar">

        <img width={70} height={70} src={rasm} alt="" /> 
             <div className="heroCard_content">
            <h4>{ism}</h4>
            <p>{kasb}</p>
            <h5>Navbatlar soni {son} ta</h5></div>
      </div>
  
            <div className="heroCard_eyes">
                <div className="eyes_img">
                  
                    <img width={30} height={30} src={yulduz} alt="" />
                    <h6>{yulSon}</h6>
                </div>
                <button>{btn_nomi}</button>
            </div>
        
      
    </div>
  )
}

export default HeroCard
