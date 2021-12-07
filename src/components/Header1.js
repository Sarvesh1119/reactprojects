import react from "react"

class Header1 extends react.Component{
    render()
    {
        return(
            <h1> Hello world {this.props.username}</h1>
        )
    }
}

export default Header1