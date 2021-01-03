import React , {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'

const App = props => {
  const [PersonState, setPersonstate]= useState({
      persons : [
        {name:'Max'},
        {name:'Aparna'}
      ],
      otherstate:'value'
    });
  
    const [otherstate,setOtherstate]=useState ({otherstate:'value'})
    console.log(PersonState,otherstate);
  
    const switchNmaeHandler = () => {
    // console.log("Was Clicked");
    setPersonstate({persons:[
      {name:'Maxmillian '},
      {name:'Aparna U'}
    ]})
  }
 
    return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        > */}
          {/* Learn React
        </a> */}
       
       <h1 >Hey, Aparna!</h1>
       <p>Welcome to React App</p>
       <button className="btn btn-secondary btn-lg" onClick={switchNmaeHandler} > Switch </button>
       <Person name={PersonState.persons[0].name} >Welcome!</Person>
       <Person name={PersonState.persons[1].name} >Hey</Person>

       </header>
     </div>
   
  );
}


export default App;

// state = {
//   persons : [
//     {name:'Max'},
//     {name:'Aparna'}
//   ],
//   otherstate:'value'
// }

// switchNmaeHandler = () => {
//   // console.log("Was Clicked");
//   this.setState({persons:[
//     {name:'Max '},
//     {name:'Aparna U'}
//   ]})
// }