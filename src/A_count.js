import React,{Component} from 'react'

class App extends Component{
    constructor(props){
        super(props)
        this.state = {
            index : 0
        }
    }
    
    countPlus = (index) =>{
        index++;
        this.setState(
           {index : index} 
            )
        //this.forceUpdate()
    }
    render(){
        return(
        <div>
            index = {this.state.index}<br/>
            <button onClick = {() => {this.countPlus(this.state.index)}}>count++</button>
            <br/>
            <button onClick = {() => {this.setState({index : 0})}}>reset</button>
        </div>
        )
    }
}

export default App