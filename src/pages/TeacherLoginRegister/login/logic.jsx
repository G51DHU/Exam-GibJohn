/** @module TeacherLoginRegister/Login/logic */

import { useNavigate } from "react-router-dom"

export function Login(user_details){
    let navigate = useNavigate()

    console.log(user_details)
    fetch("http://localhost:8000/login/student",{
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user_details)
    })
    .then(response => response.json())
    .then(
        (data) => {
            if (data === true);
                navigate("/")
        }
    )
    return(
        <>
        yus
        </>
    )

}

