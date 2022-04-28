/**
 * @module User/ReccomendedRevision/RevisionCard
 * @memberof ReccomendedRevision
 */
import "./style.css"
import {Link} from "react-router-dom"

/**
 * @function
 * @param {string} subject_name "Name of the subject for the topic the user needs to improve upon."
 * @param {string} topic_name   "Name of the topic within the subject, that needs to be improved upon.""
 * @returns {HTML}
 */
export default function RevisionCard(subject_name = "wow", topic_name = "yay", path = "/"){
    return(
        <div className="revision-card">
            <Link to={path} >
                <div>
                    <h1>Maths</h1>
                    <p>Trigaometry</p>
                </div>
                <p>Click to revise.</p>
            </Link>
        </div>

    )
}