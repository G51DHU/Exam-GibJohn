/** 
 * @module Class
 */
import "./style.css"
import { Link } from "react-router-dom"

/**
 * This is the template for each class, displatyed on the "Classes" page.
 * @function
 * @param {string} props.class_path The website path to go to the class page.
 * @param {string} props.image_path The link for the class image.
 * @param {string} props.class_name The class name.
 * @returns {HTML}
 */
export default function Class(props){
    return(
        <Link className="class" to={(props.class_path || "/")}>
            <img src={(props.image_path || "https://via.placeholder.com/100x100")} alt="class avatar" />
            <h2>{(props.class_name || "Year 11")}</h2>
        </Link>
    )
}