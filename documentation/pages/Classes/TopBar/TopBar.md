<a name="module_TopBar"></a>

## TopBar
<a name="exp_module_TopBar--module.exports"></a>

### module.exports() => ( <code>HTML</code> )
Displays the top bar for the Class page.

**Kind**: Exported function  

<hr/>

### Code

<code>

    /** @module TopBar */

    import "./style.css"
    /**
    * Displays the top bar for the Class page.
    * @function
    * @returns {HTML}
    */
    export default function TopBar(){
        return(
            <div className="top-bar">
                <button>Join class</button>
                <button>Create class</button>
            </div>
        )
    }

</code>