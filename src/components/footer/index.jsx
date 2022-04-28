/** @module footer  */

import "./style.css"
import logo from "../../assets/logo.svg"
import logo_facebook from "../../assets/logo_facebook.svg"
import logo_twitter from "../../assets/logo_twitter.svg"

/**
 * Displayable, footer component.
 * @function
 * @returns {HTML}
 */
export default function Footer(){
    return(
        <div className="footer">
            <img src={logo}  alt="GibJohn logo" width="70.49"></img>

            <section className="legal-info">
                <p>Terms & Conditions</p>
                <p>About Us</p>
            </section>

            <section className="logos-social-media">
                <img src={logo_facebook} alt="Facebook logo" />
                <img src={logo_twitter} alt="Twitter logo" />
            </section>
        </div>
    )
}