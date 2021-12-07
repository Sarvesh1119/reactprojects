import react from "react"
import {Component} from "react"
import MyInfo from "./components/MyInfo"
import Header from "./components/Header"
import Content from "./components/Content"
import Todo from "./components/Todo"
import ContactCard from "./components/ContactCard"
import reactDom from "react-dom"
import Joke from "./components/Joke"
import jokecomponents from"./jokecomponents.js"
import products from "./products"
import check from "./check"
import Checkcomponent from "./Checkcomponent"
import Header1 from "./components/Header1"
import Greetings from "./components/Greetings"


const productsArr=products.map(item => <Joke key={item.id} product={item}/>)
const ProductsArray=products.map(item => <Joke key={item.id} id={item.id} name={item.name} age={item.age} designation={item.designation}/>)
const checklist=check.map(item => <Checkcomponent key={item.id} item={item}/>)

/*
function App(){
    return(
        <div>
            {checklist}
        </div>
    )
}

//state
class App extends react.Component
{
    constructor(){
        super()
        this.state={name:"Sarveshwaran",age:21}
    }
    render(){
        return(
            <div>
                <h1>{this.state.name}</h1>
                <h3>{this.state.age} years old.</h3>
            </div>
        )
    }
}

//state and conditional rendering using if else
class App extends react.Component{
    constructor(){
        super()
        this.state={isLoggedIn:false}
    }
    render(){
        let status
        if(this.state.isLoggedIn)
        {
            status="in"
        }
        else{
            status="out"
        }
        return(
            <h1>You are currently logged {status}</h1>
        )
    }
}

//state and conditional rendering using ternary operator
class App extends Component{
    constructor()
    {
        super()
        this.state={isLoggedIn:true}
    }
    render(){
        return(
            <h1>You are currently logged {this.state.isLoggedIn? "in":"out"}</h1>
        )
    }
}

//loading data into state
class App extends Component{
    constructor(){
        super()
        this.state={data:check}
    }
    render()
    {
        const data1=this.state.data.map(item => <Checkcomponent item={item}/>)
        return(
            <h1>Hello {data1}</h1>
        )
    }
}

//event handling 
function event(){
    console.log("hovered")
}
function App(){
    return(
        <div className="colorchange">
            <img onMouseOver={event.bind(this)} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqqHX85EQUaMhQ2wH14-SSS-fr55PzrDLs_eZAdM6TJ2-akrf6_UW8Pd-NaCYt66FJ9Qs&usqp=CAU"/>
            <button onClick={event.bind(this)}>click me</button>
            <button onClick={() => console.log("button is clicked")}>submit</button>
        </div>
    )
}

//changing the state when an event occurs(1)
class App extends Component{
    constructor()
    {
        super()
        this.state={count:0}
        this.changestate=this.changestate.bind(this)
    }
    changestate(){
        this.setState(prevState => {
            return{
                count:prevState.count+1
            }
        })
    }
    render(){
        return(
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.changestate}>Change</button>
            </div>
        )
    }
}


//Changing the state when an event occurs(2) 
class App extends Component{
    constructor()
    {
        super()
        this.state={data:check}
        this.event=this.event.bind(this)
    }
    event(key){
        this.setState(prevState => {
            const dataM = prevState.data.map(item => {
                if(item.id===key){
                    item.status=!item.status
                }
                return item
            }
            )
            return{
            data:dataM
            }
        })
    }
    render()
    {
        const array=this.state.data.map(item => <Checkcomponent event={this.event} key={item.id} item={item}/>)
        return(
            <div>
                {array}
                {console.log(this.state.data)}
            </div>
            
        )
    }
}

//conditional rendering using ternary operator
class App extends Component{
    constructor(){
        super()
        this.state={isLoading:true}
    }

    //lifecycle method
    componentDidMount(){
        setTimeout( () => {
            this.setState({
                isLoading:false
            })
        },1500)
    }
    render()
    {
        return(
            <div>
                {this.state.isLoading? <h1>Loading...</h1>:<h1>some cool stuff about conditional rendering</h1>}
            </div>
        )
    }
}

//conditional rendering using && operator (condition && expression_if_condition_is_true)
class App extends Component{
    constructor(){
        super()
        this.state={unreadmessages:[]}
    }
    render()
    {
        return(
            <div>{this.state.unreadmessages.length > 0  && <h1>there are {this.state.unreadmessages.length} unread messages</h1>}
            </div>
        )
    }
}

//conditional rendering , event handling practice
class App extends Component{
    constructor(){
        super()
        this.state={isLoggedin:false}
        this.event=this.event.bind(this)
    }
    event(){
        this.setState(prevState => {
            return{
                isLoggedin:!prevState.isLoggedin
            }
        })
    }
    render(){
        let a
        {this.state.isLoggedin? a="Log out" : a="Log in"}
        return(
            <div>
                <button type="submit" onClick={this.event}>{a}</button>
                {this.state.isLoggedin? <h1>Logged in</h1>: <h1>Logged out</h1>}
            </div>
        )
    }
    
}

//1) If a checkbox is changed, the style of the text will change. 2) updating the status of checkbox in state
class App extends Component{
    constructor(){
        super()
        this.state={data:check}
        this.event=this.event.bind(this)
    }
    event(id){
        this.setState(prevState => {
            const arra=prevState.data.map(item => {
                if(item.id===id){
                    item.status=!item.status
                } return item
              })
            return arra}
            )
    }
    render()
    {
        const arr=this.state.data.map(item => <Checkcomponent  key={item.id} event={this.event} item={item}/>)
        return(
            <div>
                {arr}
                {console.log(this.state.data)}
            </div>
        )
    }
}*/


export default App