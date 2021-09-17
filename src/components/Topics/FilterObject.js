import React, { Component } from 'react';
export default class ObjFilt extends Component{
    constructor(props){
        super(props);
        this.state = {
            unFilteredArray: [{},{}, {}], //properties?
            userInput: "",
            filteredArray: []
        }
    }
    update(){
        //Code here for the function
    }
    //Last thing the method... not so sure what this is supposed to do... come back to it later
    render() {
        return (
        <div className='puzzleBox filterObjectPB'>
            <h4>Filter Object</h4>
            <span className= 'puzzleText'></span>
            <input className='inputLine' onChange = {event=>this.setState({userInput: event.target.value})}/>
            <button className='confirmationButton' onClick={this.update}></button>
            <span className="resultsBox filterObjectRB"></span>
        </div>
            
        )
    }
}
