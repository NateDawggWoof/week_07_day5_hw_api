import React from 'react'

const PokemonCapture= ({pokemonCaught}) =>{


    const capturedPokemon = pokemonCaught.map((pokemon,index) =>{
    
        return <li  key={index}>{pokemon.name}</li>})







    return(
        <div className='pokemonCapture'>
        <h2>I'm the Pokemon Capture</h2>
        <ul>
        {capturedPokemon}
        </ul>
        </div>
    )
}

export default PokemonCapture