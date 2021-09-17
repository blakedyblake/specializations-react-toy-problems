import React, { Component } from 'react';
export default class Palindrom extends Component{
    constructor(props){
        super(props);
        this.state = {
            userInput: '',
            palindrome:""
        }
        this.update = this.update.bind(this)
    }
   
    update(){
        //Code here
        let {userInput, palindrome} = this.state
        let reverse = userInput.split("").reverse().join("")
        palindrome = reverse === userInput ? "True" : "False"
        document.getElementById('palBool').innerText = palindrome
    }
    render() {
        return (
            <div className= "puzzleBox filterStringPB">
                <h4>Palindrome</h4>
                <input className= "inputLine" onChange= {event => this.setState(this.state.userInput = event.target.value)}/>
                <button className= "confirmationButton"  onClick={this.update}></button>
                <span className="resultsBox"  id="palBool"></span>
            </div>


             
        )
    }
}
