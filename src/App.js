import logo from './logo.svg';
import './App.css';
import './pokemon.css';
import React, { useEffect, useState } from 'react';
import Pokedex from './containers/Pokedex';

function App() {
  const[pokemons, setPokemons] = useState([]);




  const getPokemons = function(){
    fetch(' https://pokeapi.co/api/v2/pokemon?limit=151&offset=0')
    .then(res => res.json())
    .then(pokemons => setPokemons(pokemons.results));
}




useEffect(() => {
  getPokemons();
  console.log("This is the pkemon state", pokemons);
}, [])









  return (
    <>
    <h1>APP</h1>
   <Pokedex pokemons={pokemons}/>
    </>
    


  );
}

export default App;
