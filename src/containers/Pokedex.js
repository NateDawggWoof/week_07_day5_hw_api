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

    // GET POKEMON OBJECT
    const getPokemon = function(pokemonName){
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        .then(res => res.json())
        .then(selectedPokemon => SetSelectedPokemon(selectedPokemon));
      }

    //   SET POKEMON DETAILS TO SLECTED POKEMON
      const getPokemonDetails = function(){
          SetPokemonDetails(selectedPokemon);
      }

    // HANDLE SCREEN1 TOGGLE
    const handleScreen1Change = function(){
        if (pokedexScreen1 == "select"){
            setPokedexScreen1("caught")
        } else {
            setPokedexScreen1("select")
        }
    }

    //HANDLE SCREEN2 TOGGLE 2XFUNCTIONS
    const handleScreen2ChangeClick = function(){
            setPokedexScreen2("details")
        }

    const handleScreen2ChangeHover = function(){
            setPokedexScreen2("preview")
        }
    


    //GETS IMAGE FOR PREVIEW
    const handleDisplayPreview = (pokemonName) => {
        console.log("pokemon Name", pokemonName)
        getPokemon(pokemonName);
        handleScreen2ChangeHover()
        console.log("This is the pokemon preivew", selectedPokemon)
      }

    // GETS POKEMON DETAILS
    const handleDisplayDetails = () => {
        console.log("Display Details click has worked")
        getPokemonDetails();
        handleScreen2ChangeClick()
      }


    // CAPTURES/RELEASES POKEMON
    const handleCaptureReleasePokemon = ((caughtPokemon) => {
        const caught = handleCaptureButtonToggle(caughtPokemon)
        console.log(caught)
        if (caught =="Realease"){
            const removePokemon = pokemonCaught.filter((pokemon => {
                return pokemon.name !== caughtPokemon.name;}))
                SetPokemonCaught(removePokemon)
        } else {
            const updateCaught = [...pokemonCaught, caughtPokemon ]
        SetPokemonCaught(updateCaught);

        }
    })


    //   BUTTON CAPTURE/RELEASE TOGGLES BUTTON TEXT
      const handleCaptureButtonToggle = ((pokemonSelected) => {
        const capturedPokemon = pokemonCaught.some((pokemon) => {
            return pokemon.name === pokemonSelected.name
        })
        if (capturedPokemon == true) {return "Realease"} else {return "Capture"}
    })


    //  WHAT DISPLAYS ON SCREEN 1
    const screen1 = (pokemons) => {if (pokedexScreen1 == "select"){
        return <PokemonSelect pokemons={pokemons} handleDisplayPreview={handleDisplayPreview} handleDisplayDetails={handleDisplayDetails} handleScreen2ChangeClick ={handleScreen2ChangeClick} handleScreen2ChangeHover={handleScreen2ChangeHover} /> 
    } else {
        return <PokemonCapture pokemonCaught={pokemonCaught} handleDisplayPreview={handleDisplayPreview} handleDisplayDetails={handleDisplayDetails}/>
    }}

    //  WHAT DISPLAYS ON SCREEN 2
    const screen2 = () => {if (selectedPokemon == null){
        return <div className="blankScreen"></div>

    }else if(pokedexScreen2 == "preview"){
        return <PokemonPreview  selectedPokemon={selectedPokemon}/>
    }else{
        return  pokemonDetails ?<PokemonDetails  pokemonDetails={pokemonDetails} handleCaptureButtonToggle={handleCaptureButtonToggle} handleCaptureReleasePokemon={handleCaptureReleasePokemon}/> : null
    }}
        
    return(
        <div className='pokedex'>
        <canvas id="myCanvas" height="200"></canvas>
        <script src="./PokedexCanvas"></script>
        <h1>I'm the Pokedex</h1>
        <div className='screens'>
        {screen1(pokemons)}  
        {screen2()}
        </div>

        <PokedexButtons handleScreen1Change={handleScreen1Change}/>
        </div>

    )
}

export default Pokedex

