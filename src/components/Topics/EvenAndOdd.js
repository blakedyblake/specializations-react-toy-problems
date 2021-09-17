import React, { Component } from 'react';


export default class EnO extends Component{
    constructor(props){
        super(props);
        //Why have state= ??
        this.state = { //state needs this ...dumb vid
            evenArray : [],
            oddArray : [],
            userInput : '',
        }

        //Prop initializers?
        
    }
    //Some of these need this and others don't
    
    calcArray = () =>{
        let tempEven = []
        let tempOdd = []
        let str = this.state.userInput;
        str = str.replace(/\s+/g, "").replace(/\[/g, "").replace(/\]/g,"")
        let arr = str.split(",")
        //map and other functions wern't working
        for(let  letter in arr){
            console.log(letter, arr[letter])
            let regex = /A-Za-z/
            if(regex.test(arr[letter])) continue
            if(+arr[letter] % 2 === 0) tempEven.push(+arr[letter])
            if(+arr[letter] %2 === 1) tempOdd.push(+arr[letter])
        }

        this.state.evenArray = tempEven;
        this.state.oddArray = tempOdd

        console.log(arr)
        console.log("Even" ,this.state.evenArray)
        console.log("odd", this.state.oddArray)
        document.getElementById('evens').innerText = "Evens Array: "+ this.convert(this.state.evenArray)
        document.getElementById('odds').innerText = "Odds Array: "+ this.convert(this.state.oddArray)

    }
    convert(arr){
        let str = '[ ';
        for(let i = 0; i < arr.length; i++){
            str = str + arr[i] 
            if(i !== arr.length -1) str = str + ", "
        }
        str = str + ']'
        return str

    }
   
    render() {

        return (
            //FIXME:: get spans to update
            <div className='puzzleBox evenAndOddPB'>
                <h4>Evens and Odds</h4>
                <input className='inputLine' value={this.state.userInput} onChange= { event => this.setState({  userInput: event.target.value })}/>
                <button className='confirmationButton'  onClick = {this.calcArray}></button>
                <span className='results-box' id="evens"></span>
                <span className='results-box' id ='odds'></span>

            </div>
        )
    }
}
