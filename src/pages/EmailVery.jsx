import React from 'react'
import { NavLink } from 'react-router-dom'

function EmailVery() {
    return (
        <div>
            <div className='forgot'>
                <div className='signIn'>
                    <div className='signUp'>

                        <div className="container">
                            <div className="sign_top">
                            </div>
                            <div className="sign__content">
                                <h1>Tasdiqlash kodi</h1>
                                <h2><span>Sizning tasdiqlash kodingiz</span>Yuborilgan 4 raqamni kiriting</h2>


                                <form className='sign_form' >
                                    <div className="form_chek">
                                        <input type="number" />
                                        <input type="number" />
                                        <input type="number" />
                                        <input type="number" />
                                    </div>
                                    <div className="sign_check">
                                        <p>Kod kelmadimi?</p>

                                        <NavLink><h6>Qayta yuborish</h6></NavLink>


                                    </div>

                                    <button type="submit">Tasdiqlash</button>

                                </form>


                            </div>
                            <div className="sign_bottom">
                            </div>
                        </div>


                    </div>
                </div>

            </div>
        </div>
    )
}

export default EmailVery
