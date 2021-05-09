import {useState} from 'react';
import { getElementError } from '@testing-library/react';
import './App.css';
import React from 'react';
import Heading from './heading';


function App() {
let [counter,setcounter] = useState(0)
let [day,setday]=useState(true)
  return (
    <div className="App">
      <Heading counter={counter}/>
      <button onClick={() => setcounter(++counter) }>Add</button>
      <button onClick={() => setcounter(counter=0) }>Reset</button>
      <div className={`time${(day ? '':'Night')}`}>
        <h1>Good {(day ? "Morning" : "Night ")}</h1>
        <button onClick={
          ()=>setday(!day)}>change time</button>
      </div>
    </div>
  );
}

export default App;