import react from "react"

function ContactCard(props){
    return(
        <div>
            <h1>name : {props.contact.name}</h1>
            <h2>age : {props.contact.age}</h2>
            <h3>designation : {props.contact.Designation}</h3>
        </div>
    )
}

export default ContactCard
