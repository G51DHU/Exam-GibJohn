/** @module ServicesDown */

import "./style.css"
import sad_penguin from "../../assets/sad_penguin.jpg"

/**
 * This page is displayed, when one of the following services is down:
 *  - Frontend
 *  - Backend
 *  - Database
 * @function
 * @returns {HTML}
 */
export default function ServicesDown(){
    return(
        <div className="services-down">
            <div className="msg-area">
                <div>
                    <h1>Ooops!</h1>
                    <h2>Looks like there has been a problem on our end!</h2>
                    <h3>Please be patient, while we try to bring our services back online.</h3>
                </div>
                <img src={sad_penguin} alt="sad penguin sitting down" height="218" width="218"></img>
            </div>
        </div>
    )
}