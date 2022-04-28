/** @module TeacherLoginRegister */

import "./style.css"
import { useState } from "react"

import Login from "./login"
import Register from "./register"

export default function TeacherLoginRegister(){
    const [login, set_login] = useState(true)
    const STYLES ={
        "button-active": {
            "backgroundColor": "pink"
        }
    }
    
    return(
        <div className="teacher-login-register">
            <div className="slide-show">
                <img src="https://via.placeholder.com/250"  width="300" alt="GibJohn logo" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, quia natus esse dicta recusandae tempora asperiores pariatur ipsum!</p>
            </div>
            <div className="login-register">
                <div className="selectors">
                    <button style={login ? STYLES["button-active"] : null} onClick={() =>set_login(true)} > teacher login </button>
                    <button style={login ? null : STYLES["button-active"] } onClick={() =>set_login(false)} > teacher register </button>
                </div>
                <>
                    {(login === true) ? <Login /> : <Register /> }
                </>
            </div>
        </div>
    )
}