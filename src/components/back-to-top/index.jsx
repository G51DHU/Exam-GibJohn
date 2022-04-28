/** @module BackToTop */

import "./style.css"
import img_arrow_up from "../../assets/arrow_up.svg"

/**
 * Bar at the bottom which returns user back tot he top of the page.
 * @function
 * @returns {HTML}
 */
export default function BackToTop(){
    return(
        <div className="back-to-top">
            <img src={img_arrow_up} alt="Arrow pointing up" height="30" />
            <p>Back to top</p>
        </div>
    )
}