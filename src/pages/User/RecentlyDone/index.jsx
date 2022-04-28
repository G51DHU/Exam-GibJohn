/**
 * @module User/RecentlyDone
 */
import "./style.css"
import QuizCard from "./QuizCard"

/**
 * This is a component of the "User" page, for the "Recently Done" section. 
 * @function
 * @returns {HTML}
 */
export default function RecentlyDone(){
    return(
        <div className="recently-done">
            <h1>Recently done quizzes</h1>
            <div>
                <QuizCard />
            </div>
        </div>
    )
}