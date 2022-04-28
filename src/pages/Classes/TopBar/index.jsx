/** @module TopBar */

import "./style.css"
/**
 * Displays the top bar for the Class page.
 * @function
 * @returns {HTML}
 */
export default function TopBar(){
    return(
        <div className="top-bar">
            <button>Join class</button>
            <button>Create class</button>
        </div>
    )
}