<a name="module_User"></a>

## User
<a name="exp_module_User--module.exports"></a>

### module.exports() => (<code>HTML</code>)
Displays "user" page.

**Kind**: Exported function  

<hr/>

### Code

<code>

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

</code>