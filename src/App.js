import React, { Component } from 'react';

//The various classes
import TopicBrowser from './components/TopicBrowser/TopicBrowser';
import EnO from './components/Topics/EvenAndOdd'
import ObjFilt from './components/Topics/FilterObject'
import StrFilt from './components/Topics/FilterString'
import Palindrome from './components/Topics/Palindrome';
import Sum from './components/Topics/Sum';


class App extends Component {
    render(){
        return (

          <div>
              <TopicBrowser />
              <EnO prop = {false}/>
              <ObjFilt/>
              <StrFilt/>
              <Palindrome/>
              <Sum/>
          </div>
              

           
        );
    }
}

export default App;
