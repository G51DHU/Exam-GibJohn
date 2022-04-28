/**
 * @module User/ReccomendedRevision
 * @memberof User
 */
import "./style.css"
import RevisionCard from "./RevisionCard"

/**
 * Displays the "Reccomended revision" section for the user page.
 * @function
 * @returns {HTML}
 */
export default function ReccomendedRevision(){
    return(
        <div className="reccomended-revision">
            <div className="title">
                <h2>Reccomended revision</h2>
            </div>
            <RevisionCard  />
        </div>
    )
}

