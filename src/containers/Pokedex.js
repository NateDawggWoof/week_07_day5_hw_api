import React, { useEffect, useState } from 'react'
import PokedexButtons from '../components/PokedexButtons'
import PokemonCapture from '../components/PokemonCaptured'
import PokemonDetails from '../components/PokemonDetails'
import PokemonPreview from '../components/PokemonPreview'
import PokemonSelect from '../components/PokemonSelect'

const Pokedex = ({pokemons}) =>{
    const[selectedPokemon, SetSelectedPokemon] = useState(null);
    const[pokemonDetails, SetPokemonDetails] = useState(null);
    const[pokemonCaught, SetPokemonCaught] = useState([]);
    const[pokedexScreen1, setPokedexScreen1] = useState("select");
    const[pokedexScreen2, setPokedexScreen2] = useState("preview");

    const getPokemon = function(pokemonName){
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        .then(res => res.json())
        .then(selectedPokemon => SetSelectedPokemon(selectedPokemon));
      }

      const getPokemonDetails = function(){
          SetPokemonDetails(selectedPokemon);
      }

    // console.log('pokedex pokemons', pokemons)

    const handleScreen1Change = function(){
        if (pokedexScreen1 == "select"){
            setPokedexScreen1("caught")
        } else {
            setPokedexScreen1("select")
        }
    }



    const handleDisplayPreview = (pokemonName) => {
        console.log("pokemon Name", pokemonName)
        getPokemon(pokemonName);
        console.log("This is the pokemon preivew", selectedPokemon)
      }

    const handleDisplayDetails = () => {
        console.log("Display Details click has worked")
        getPokemonDetails();
      }

    const handleCaptureReleasePokemon = ((pokemon) => {
        const caught = handleCaptureButtonToggle(pokemon)

        if (caught ==true ){
            return "pass"

        } else {
            const updateCaught = [...pokemonCaught, pokemon ]
        SetPokemonCaught(updateCaught);

        }
    })


      const handleCaptureButtonToggle = ((pokemonSelected) => {
        const capturedPokemon = pokemonCaught.some((pokemon) => {
            return pokemon.name === pokemonSelected.name
        })
        if (capturedPokemon == true) {return "Realease"} else {return "Capture"}
    })

    const screen1 = (pokemons) => {if (pokedexScreen1 == "select"){
        return <PokemonSelect pokemons={pokemons} handleDisplayPreview={handleDisplayPreview} handleDisplayDetails={handleDisplayDetails}/> 
    } else {
        return <PokemonCapture pokemonCaught={pokemonCaught}/>
    }}

    const screen2 = (pokemons) => {if (pokedexScreen2 == "preview"){
        return <PokemonSelect pokemons={pokemons} handleDisplayPreview={handleDisplayPreview} handleDisplayDetails={handleDisplayDetails}/> 
    } else {
        return <PokemonCapture pokemonCaught={pokemonCaught}/>
    }}
        
    return(
        <>
        <h1>I'm the Pokedex</h1>
       
        {screen1(pokemons)}
        {selectedPokemon ?<PokemonPreview  selectedPokemon={selectedPokemon}/>  : null}
        {pokemonDetails ?<PokemonDetails  pokemonDetails={pokemonDetails} handleCaptureButtonToggle={handleCaptureButtonToggle} handleCaptureReleasePokemon={handleCaptureReleasePokemon}/> : null}
        <PokedexButtons handleScreen1Change={handleScreen1Change}/>
        </>

    )
}

export default Pokedex

