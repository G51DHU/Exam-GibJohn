<a name="module_User/RecentlyDone"></a>

## User/RecentlyDone
<a name="exp_module_User/RecentlyDone--module.exports"></a>

### module.exports() => ( <code>HTML</code> )
This is a component of the "User" page, for the "Recently Done" section.

**Kind**: Exported function 

<hr/>

### Code

<code>

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
    
</code>
