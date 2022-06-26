import React from 'react'
import "../App.css";
import TouchCarousel from 'react-touch-carousel/lib/TouchCarousel';
import CartData from './CartData';


const Card = (props) => {
  return (
    <>
    {props.details.map((value,index)=>(
    <div className='column' key={index}>
       
       <img src={value.img} alt='image' className="image"></img>
       <p className="nom">{value.nom}</p>
       <p class="charabia">{value.sosuTitre}</p>
       
       <div className='img'>
       
       <div className='first'>
        <img src={value.icone1}  alt="image" id="icone"></img>
        <span>{value.année}</span>
        </div>
        
        <div className='first'>
        <img src={value.icone2} alt="image" id="icone"></img>
        <span> {value.bilingue}</span>
        </div>
        
        <div className='first'>
        <img src={value.icone3} alt="image" id="icone"></img>
        <span>{value.diplome}</span>
        </div>
        
        <div className='first'>
        <img src={value.icone4} alt="image" id="icone"></img>
        <span>{value.localisation}  </span>
        </div>
       
        <p class="noms">{value.description}</p>
        <p class="texte-lorem"> {value.texte} </p>

        <button>Choisir</button>
        </div>

        
        </div>
        ) )}

    </>
  );
};


function renderCard(index, modIndex, cursor){
  const item=CartData[modIndex]
}

<TouchCarousel
  component={Card}
  cardCount={CartData.length}
  cardSize={375}
  renderCard={renderCard}
  loop
  autoplay={3000}
  
/>

export default Card
