/** @module TeacherLoginRegister/Register */

import "./style.css"
import {useState} from "react"

export default function Register(){
    const [email, set_email] = useState("")
    const [password, set_password] = useState("")
    return(
        <form className="login">
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
                <input className="password" type="date" value={password} onChange={(e) => set_password(e.target.value)} />
            </label>
            <input type="submit" value="Login" />
        </form>
    )
}