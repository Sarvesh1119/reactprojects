import react from "react"


function Joke(props){
    return(
        <div>
            <div>ID : {props.id}   </div>
            <div>Name : {props.name} </div>
            <div>Age : {props.age} </div>
            <div>Designation :  {props.designation} </div>
            <hr/>
        </div>
    )
}
export default Joke