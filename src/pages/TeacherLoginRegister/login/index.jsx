/** @module TeacherLoginRegister/Login */

import "./style.css"
import {useState} from "react"
import * as logic from "./logic.jsx"

export default function Login(){
    const [email, set_email] = useState("")
    const [password, set_password] = useState("")
    return(
        <form className="login" onSubmit={(e) => logic.Login({"email": email, "password": password})}>
            <label>
                Email
                <input className="email" type="email" value={email} onChange={(e) => set_email(e.target.value)} />
            </label>
            <label>
                Password
                <input className="password" type="password" value={password} onChange={(e) => set_password(e.target.value)} />
            </label>
            <input type="submit" value="Login" />
        </form>
    )
}