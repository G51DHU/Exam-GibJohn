<a name="User.module_User/ReccomendedRevision"></a>

## User/ReccomendedRevision
<a name="exp_User.module_User/ReccomendedRevision--module.exports"></a>

### .module.exports() => ( <code>HTML</code> )
Displays the "Reccomended revision" section for the user page.

**Kind**: static method of [<code>User/ReccomendedRevision</code>](#User.module_User/ReccomendedRevision)  

<hr/>

### Code

<code>

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

</code>
