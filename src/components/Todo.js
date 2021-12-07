import react from "react"

function Todo()
{
    return(
        <div>
            <div  className="agree">
                <input type="checkbox" id="agree"/>
                <label for="agree"> Agree</label>
            </div>
            <div className="disagree">
                <input type="checkbox" id="disagree"/>
                <label for="disagree"> Disagree</label>
            </div> 
        </div>
    )
}
export default Todo