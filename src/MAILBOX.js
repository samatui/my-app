import React from "react";

class Mailbox extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        const unreadMessages = this.props.unreadMessages

        return(<div>
            <h1>Hello!</h1>
            {unreadMessages.length > 0 &&
            <h2>You have {unreadMessages.length} unread messages</h2>}
        </div>)
    }
}

export default Mailbox