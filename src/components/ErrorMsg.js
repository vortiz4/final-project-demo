import React, { Component } from "react";
import AddNote from "./AddNote";

class ErrorMsg extends Component {
    alertMsg(props) {
        if(props.error !== this.props.error) {
            return true;
        }
        return false;
    }

    render() {
        if(this.props.error){
            return (
                <h1>{this.props.errorMsg}</h1>
            )
        } else {
            return <AddNote />
        }
    }
}

export default ErrorMsg;