/**
 * @module User/RecentlyDone/QuizCard
 * @memberof RecentlyDone
 */
import "./style.css"
import {Link} from "react-router-dom"

/**
 * This is a component for the Recently Done section. This component is displayed for each task in the "Recently Done" section.
 * @function
 * @param {string} props.path  Contains the link to go the the Quiz page.
 * @param {string} props.subject Name of the subject, the quiz is from.
 * @param {string} props.topic Name of the topic the quiz is from.
 * @returns {HTML}
 */
export default function QuizCard(props){
    return(
        <div className="quiz-card">
            <Link to={props.path || "/"}>
                <div>
                    <h3>{props.subject || "Maths"}</h3>
                    <p>{props.topic || "Triganometry"}</p>
                </div>
                <p>Click to see.</p>
            </Link>
        </div>
    )
}
