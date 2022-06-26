import React, {useState} from 'react'
import Sidebar from './Components/Sidebar';

import Card from './Card/Card';


import './App.css';
import CartData from './Card/CartData';

fetch('https://github.com/datakode/metaclic.git')

export default function App() {
  const[data,setData]=useState(null)
  function getData(val){
    setData(val.target.value)
    console.warn(val.target.value)
  }


  return (
    <div id="App">
      <Sidebar/>
      <div id="page-wrap">
        <h3>En quelle matière avez vous besoin d'aide</h3>< br></br>
        <div className='Search'>
      <input type="text" name="search" onChange={getData} id="search" placeholder="SVT,piano,anglais,maths..." size="60"/>
      </div>< br></br>
        <p class="sous-titre">Les teachers d'{data} qui pourraient vous correspondre</p>
      </div>
      <div id="card-container">
      <Card details={CartData}/>
      <button className="boutton1">Précedent</button> <button class="boutton2"> Suivant</button>
      </div>
      
    </div>
    
  );
}




