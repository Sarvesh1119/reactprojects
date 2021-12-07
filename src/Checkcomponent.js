import { buildQueries } from "@testing-library/dom"
import react from "react"
import "./App"
class Checkcomponent extends react.Component
{
    changed()
    {
        console.log("changed using external function")
    }
    render()
    {
        return(
            <div>
                <input type="checkbox" id="a"
                defaultChecked={this.props.item.status} 
                onChange={() => this.props.event(this.props.item.id)}
                />
                {this.props.item.status?<label htmlFor="a"><del>{this.props.item.text}</del></label>:
                <label htmlFor="a">{this.props.item.text}</label>}
                <br/>
            </div>
        )
    }
}

export default Checkcomponent