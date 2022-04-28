/** @module nav-bar */
import "./style.css"

import {Link} from "react-router-dom"
import { useState } from "react"


import logo from "../../assets/logo.svg"

/**
 * Displayable, navigation bar.
 * @returns {HTML}
 */
export default function NavigationBar(){
    /**
     * @constant
     * @type {string}
     */
    const user = localStorage.getItem("id")

    /**
     * @constant
     * @typedef {Array.<String, Function>} useState
     */
    const [active, set_active] = useState("") 

    /**
     * @constant
     * @type {Object}
     * @property {Object} STYLES.active
     * @property {string} STYLES.active.backgroundColor
     */
    const STYLES = {
        "active" : {
            "backgroundColor": "#9EF3FF"
        }
    }
    if (user === null){
        return(
            <nav className="nav-bar">
                <img src={logo}  width="70.49" alt="GibJohn logo" />
    
                <div className="buttons-login-signup">
                    <Link to="/student-login-register">student login/register</Link>
                    <Link to="/teacher-login-register">teacher login/register</Link>
                </div>
            </nav>
        )    
    }


    return(
        <nav className="nav-bar">
            <img src={logo}  width="70.49" alt="GibJohn logo" />

            <div className="nav-bar-buttons">
                <Link to="/user/classes" style={STYLES[(active === "classes") ? "active" : undefined]} onClick={(e) => set_active("classes")}>Classes</Link>
                <div className="vl"></div>
                <Link to="/user/subjects" style={STYLES[(active === "subjects")? "active" : undefined]} onClick={(e) => set_active("subjects")}>Subjects</Link>
                <div className="vl"></div>
                <Link className="home" to="/user" ><img src="https://via.placeholder.com/38x38" alt="A house" /></Link>
                <div className="vl"></div>
                <Link to="/user/favourite-topics" style={STYLES[(active === "favourite-topics")? "active" : undefined]} onClick={(e) => set_active("favourite-topics")} >Favourite topics</Link>
                <div className="vl"></div>
                <Link to="/user/assignments" style={STYLES[(active === "assignments")? "active" : undefined]} onClick={(e) => set_active("assignments")} >Assignments</Link>
            </div>
            <div className="vl"></div>

            <div className="user-tile">
                <label for="user-avatar">
                    woooooahwadwdawdawdawdawdawdawdadawdwadawdadwawdawddawdawdaw {/* Added to support the use of custom usernames. */}
                </label>
                <img id="user-avatar" src="https://via.placeholder.com/45x45" alt="avatar placeholder" />
            </div>
        </nav>

    )
}