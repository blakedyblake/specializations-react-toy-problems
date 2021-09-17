import React, { Component } from 'react';
export default class Sum extends Component{
    constructor(props){
        super(props);
        this.state = {
            number1:0,
            number2:0,
            sum: null,
            userInput: '',
        }
    }
    add(){
        //Code in here
    }
    render() {
        return (
            <div className="puzzleBox sumPB">
               <h4>Sum</h4>
                <input className="inputLine" onChange={event=> this.state.userInput = event.target.value}/>
                <button className="confirmationButton" onClick={this.add}/>
                <span className="resultsBox"></span>
            </div>
        )
    }
}
