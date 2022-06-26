import React from 'react'
import "../App.css";
import img from "../img/books.png";

import {slide as Menu}   from 'react-burger-menu';


function Sidebar(){
    return(
        <div id='Sidebar'>
         <h1>Teach<strong>'</strong>r</h1>
        <ul>
        <li><strong class="icon"><i class="fa-solid fa-circle-check"  > </i> </strong>Quelle matière ?</li>
        <li id="p"><strong id="icon"><i class="fa-solid fa-2"></i></strong>Presque finit !</li>
      
        <li id="p"><strong id="icon"><i class="fa-solid fa-3"></i></strong>Presque finit !</li>
     
        </ul>
        <img src={img} ></img>
        </div>
        
    );
};

export default Sidebar 