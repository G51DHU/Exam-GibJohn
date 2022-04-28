/** @module StudentLoginRegister/Register */

import "./style.css"
import {useState} from "react"


/**
 * This function, displays the register section, and handles the logic behind registration.
 * @function
 * @returns {HTML}
 */
export default function Register(){
    /**
     * "email" stores the users email, and "set_email" is a function, which is used to change the value of "email".
     * @constant
     * @typedef {Array.<String, Function>}
     */
    const [email, set_email] = useState("")
    /**
     * "password" stores the users email, and "set_password" is a function, which is used to change the value of "password".
     * @constant
     * @typedef {Array.<String, Function>}
     */
    const [password, set_password] = useState("")
    /**
     * "date_of_birth" stores the users email, and "set_date_of_birth" is a function, which is used to change the value of "date_of_birth".
     * @constant
     * @typedef {Array.<String, Function>}
     */
    const [date_of_birth, set_date_of_birth] = useState("")

    /**
     * This function sends a request to the backend, to register the new user. 
     * @function
     * @param {Object.<{"email": email, "password": password, "date_of_birth": date_of_birth}>} user_details 
     */
    function _Register(user_details){
        console.log(user_details)
        fetch("http://localhost:8000/register/student",{
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user_details)
        })
        .then(response => response.json())
        .then(response_json => console.log(`register status: ${response_json}`))
    }

    return(
        <form className="login" onSubmit={(e) => {_Register({"email": email, "password": password, "date_of_birth": date_of_birth})}}>
            <label>
                Email
                <input className="email" type="email" value={email} onChange={(e) => set_email(e.target.value)} />
            </label>
            <label>
                Password
                <input className="password" type="password" value={password} onChange={(e) => set_password(e.target.value)} />
            </label>
            <label>
                Date of birth
                <input className="date-of-birth" type="date" value={date_of_birth} onChange={(e) => set_date_of_birth(e.target.value)} />
            </label>
            <input type="submit" value="Login" />
        </form>
    )
}