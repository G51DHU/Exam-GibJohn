/** 
 * @module User
 * */
import "./style.css"
import PieChart from "./PieChart"
import ReccomendedRevision from "./ReccomendedRevision"
import RecentlyDone from "./RecentlyDone"

/**
 * Displays "user" page.
 * @function
 * @returns {HTML}
 */
export default function User(){
    return(
        <div className="user">
            <h1>My Home</h1>
            <div className="top-half">
                <div className="overall-progress">
                    <div className="title">
                        <h2>Overall Progress</h2>
                    </div>
                    <PieChart />
                </div>
                <ReccomendedRevision />
            </div>
            <RecentlyDone />
        </div>
    )
}