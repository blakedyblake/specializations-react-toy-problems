import React, { Component } from 'react';
export default class strFilt extends Component{
    constructor(props){
        super(props);
        this.state = {
            unFilteredArray : ["and then", "then I", "Kobayashi", "the end", "end of all time"], //Add some strings
            userInput: "",
            filteredArray: []
        }

        this.update = this.update.bind(this)
        this.display = this.display.bind(this)
    }
    update(){
        //Code Here When you figure out what it wants
        console.log("run")
        let {unFilteredArray, filteredArray, userInput} = this.state;
        filteredArray = []
        for (let i = 0; i < unFilteredArray.length; i++){
            console.log(i)

            if(!unFilteredArray[i].includes(userInput)){
                filteredArray.push(unFilteredArray[i])
            }
        }
        document.getElementById("filterStringRB").innerText = this.display(filteredArray)

    }
    display(arr){
        let append = "[";
        for(let i = 0; i< arr.length; i++){
            append =append +"\""+arr[i]+"\", "
        }
        append.substr(append.length -2,2 )
        append = append + ']';

        return append
    }
    render() {
        return (
            <div className= "puzzleBox filterStringPB" >
                <h4>Filter String</h4>
                <p>{this.display(this.state.unFilteredArray)}</p>
                <span className= "puzzleText"></span>
                <input className= 'inputLine' onChange= {event => this.setState({userInput: event.target.value})}/>
                <button className="confirmationButton" onClick={this.update}></button>
                <span className="resultsBox filterStringRB" id="filterStringRB"></span>

            </div>
        )
    }
}
