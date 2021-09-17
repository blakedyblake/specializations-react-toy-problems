import React, { Component } from 'react';
export default class Palindrom extends Component{
    constructor(props){
        super(props);
        this.state = {
            userInput: '',
            palindrome:""
        }
    }
    update(){
        //Code here
    }
    render() {
        return (
            <div className= "puzzleBox filterStringPB">
                <h4>Palindrome</h4>
                <input className= "inputLine" onChange= {event => this.setState(this.state.userInput = event.target.value)}/>
                <button className= "confirmationButton"  onClick={this.update}></button>
                <span className="resultBox" ></span>
            </div>


             
        )
    }
}
