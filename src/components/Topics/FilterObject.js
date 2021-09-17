import React, { Component } from 'react';
export default class ObjFilt extends Component{
    constructor(props){
        super(props);
        this.state = {
            unFilteredArray: [
                {
                    name:"Korganard",
                    level:24,
                    class: "Psiomage",
                    psionics: true,
                    magic: true
                },
                {
                    name:"Astrix",
                    level:13,
                    class: "Fighter",
                    attack: 16
                }, 
                {
                    name:"Papa Smurf",
                    level:2,
                    position: "Chief"
                    
                }
            ], //properties?
            userInput: "",
            filteredArray: []
        }

        //Fixes the state is undefined problem
        this.update = this.update.bind(this)
        this.displayObjArr = this.displayObjArr.bind(this)
    }
    update(){
        let {userInput, unFilteredArray, filteredArray} = this.state
        
        //It thinks state is undefined... but I did
        let arr = unFilteredArray
        filteredArray = []
        for(let i  in arr){
            if(Object.is(arr[i][userInput], undefined)){
                filteredArray.push(arr[i])
            }
        }
        console.log(this.displayObjArr(filteredArray))
        document.getElementById("filterObjectRB").innerText = this.displayObjArr(filteredArray)
    }
    displayObjArr(arr){
        let append = '['
        for(let obj of arr){
            console.log(obj)
            append = append + "{"
            for(let attr in obj){
                append = append + attr +": "+ obj[attr] +", "
            }
            append.substr(append.length-2,2);
            append = append + "}, "
        }
        append.substr(append.length-2,2);
        append = append + "]"

        return append;
    }
    //Last thing the method... not so sure what this is supposed to do... come back to it later
    render() {
        return (
        <div className='puzzleBox filterObjectPB'>
            <h4>Filter Object</h4>
            <p>{this.displayObjArr(this.state.unFilteredArray)}</p>
            <span className= 'puzzleText'></span>
            <input className='inputLine' onChange = {event=>this.setState({userInput: event.target.value})}/>
            <button className='confirmationButton' onClick={this.update}></button>
            <span className="resultsBox filterObjectRB" id="filterObjectRB"></span>
        </div>
            
        )
    }
}
