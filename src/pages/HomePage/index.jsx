/** @module HomePage */

import "./style.css"

/**
 * The Home Page.
 * @function
 * @return {HTML}
 */
export default function HomePage(){
    return(
        <div className="home-page">
            <div className="main-tile">
                <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo</h1>
                <img src="https://via.placeholder.com/675x375" width="675" height="375" alt="welcome"  ></img>
            </div>
            <div className="tile">
                <img src="https://via.placeholder.com/250" width="250" height="250" alt="a person"></img>
                <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam ut porttitor leo a diam sollicitudin tempor id.</h2>
            </div>
        </div>

    )
}