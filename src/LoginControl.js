import React from "react";

function UserGreeting() {
    return <h1>Welcome back!</h1>;
  }
  
function GuestGreeting() {
    return <h1>Please sign up.</h1>;
  }
function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
      return <UserGreeting />;
    }
    return <GuestGreeting />;
  }

class LoginControl extends React.Component{
    constructor(props){
        super(props)
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = {isLoggedIn: false}
    }

    handleLoginClick(){
        this.setState({isLoggedIn: true})
    }

    handleLogoutClick(){
        this.setState({isLoggedIn: false})
    }


    render(){
        const isLoggedIn = this.state.isLoggedIn
        let button
        if (isLoggedIn){
            // button = <button onclick = {this.handleLogoutClick.bind(this)}>logout</button>
            button = <button onClick={this.handleLogoutClick}>Logout</button>;
        }
        else{
            // button = <button onclick = {this.handleLoginClick.bind(this)}>login</button>
            button = <button onClick={this.handleLoginClick}>Login</button>;
        }

        return(
            <div><Greeting isLoggedIn = {isLoggedIn} />
            {button}
            </div>)
    }
}

export default LoginControl