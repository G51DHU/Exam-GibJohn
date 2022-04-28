/** 
 * @module StudentLoginRegister
 */
import "./style.css"
import { useState } from "react"

import Login from "./login"
import Register from "./register"

/**
 * Displays the Login or Registration page, for students.
 * @function
 * @returns {HTML}
 */
export default function StudentLoginRegister(){
    /**
     * @constant
     * @typedef {Boolean}  
     */
    const [login, set_login] = useState(true)

    /**
     * @constant
     * @typedef {Object}
     * @property {Object} STYLES["button-active"]
     * @property {string} STYLES["button-active"].backgroundColor
     */
    const STYLES ={
        "button-active": {
            "backgroundColor": "pink"
        }
    }
    
    return(
        <div className="student-login-register">
            <div className="slide-show">
                <img src="https://via.placeholder.com/250"  width="300" alt="GibJohn logo" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, quia natus esse dicta recusandae tempora asperiores pariatur ipsum!</p>
            </div>
            <div className="login-register">
                <div className="selectors">
                    <button style={login ? STYLES["button-active"] : null} onClick={() =>set_login(true)} > student login </button>
                    <button style={login ? null : STYLES["button-active"] } onClick={() =>set_login(false)} > student register </button>
                </div>
                <>
                    {(login === true) ? <Login /> : <Register /> }
                </>
            </div>
        </div>
    )
}