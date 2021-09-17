import React, { Component } from 'react';
export default class strFilt extends Component{
    constructor(props){
        super(props);
        this.state = {
            unFilteredArray : [], //Add some strings
            userInput: "",
            filteredArray: []
        }
    }
    update(){
        //Code Here When you figure out what it wants
    }
    render() {
        return (
            <div className= "puzzleBox filterStringPB" >
                <h4>Filter String</h4>
                <span className= "puzzleText"></span>
                <input className= 'inputLine' onChange= {event => this.setState({userInput: event.target.value})}/>
                <button className="confirmationButton" onClick={this.update}></button>
                <span className="resultsBox filterStringRB"></span>

            </div>
        )
    }
}
