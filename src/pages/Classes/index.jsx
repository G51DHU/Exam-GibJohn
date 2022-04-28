/** 
 * @module Classes
 */

import "./style.css"
import TopBar from "./TopBar"
import Class from "./Class"
import { useState, useEffect} from "react"

/**
 * Displays the classes a user is a part of.
 * @function
 * @returns {HTML}
 */
export default function Classes(){

    /**
     * Sends request to backend, to get all the classes a user is in.
     * @function
     * @returns {Object}
     */
    function _GetUserClasses(){
        /**
         * @constant
         * @typedef {Array.<String, Function>} 
         */
        const [classes, set_classes] = useState([])
        /**
         * @constant
         * @type {boolean} (true|false)
         */
        const student = localStorage.getItem("student")
        /**
         * @constant
         * @type {string} id
         */
        const id = localStorage.getItem("id")
        useEffect(()=>{
            fetch("http://localhost:8000/user/classes",{
                method: "POST",
                headers: {
                    'accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    "student": student,
                    "id": id
                })
            })
            .then(response => response.json())
            .then(data => set_classes(data))   
        },[student, id])
        return classes      
    }

    return(
        <div className="classes">
            <TopBar />
            <div className="all-classes">
                {
                    _GetUserClasses().map((aclass, index) => (
                        <Class key={index} class_name={(aclass.name||"Year 11")} class_image={(aclass.image_path||"/")} path={(aclass.path||"/")} />
                    ))
                }
            </div>  
        </div>
    )
}
