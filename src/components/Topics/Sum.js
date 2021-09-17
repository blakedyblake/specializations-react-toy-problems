import React, { Component } from 'react';
export default class Sum extends Component{
    constructor(props){
        super(props);
        this.state = {
            sum: null,
            userInput: '',
        }
        this.add = this.add.bind(this)
    }
    add(){
        //Code in here
        let {userInput, sum} = this.state
        sum = 0
        let str = userInput.replace(/\D/g, " ")
        let arr = str.split(/\s+/)
        console.log(arr)
        for(let i =0; i < arr.length; i++){
            sum += +arr[i]
        }
        document.getElementById('sum').innerText = sum
    }
    render() {
        return (
            <div className="puzzleBox sumPB">
               <h4>Sum</h4>
                <input className="inputLine" onChange={event=> this.state.userInput = event.target.value}/>
                <button className="confirmationButton" onClick={this.add}/>
                <span className="resultsBox" id='sum'></span>
            </div>
        )
    }
}
