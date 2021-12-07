import react from "react"

class Greetings extends react.Component{
    render()
    {
        const date=new Date()
        const hours=date.getHours()
        let timeofday
        if(hours<12)
        {
            timeofday="Morning"
        }
        else if(hours>12 && hours<17)
        {
            timeofday="Afternoon"
        }
        else{
            timeofday="Night"
        }
        return(
            <div>
            <h1> Good {timeofday}</h1>
            </div>
        )
    }
}

export default Greetings