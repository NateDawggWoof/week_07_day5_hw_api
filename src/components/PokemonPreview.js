import React from 'react'

const PokemonPreview = ({selectedPokemon}) =>{
    console.log("This is the pokemon for image", selectedPokemon)
    const pokemonImageUrl = selectedPokemon.sprites.front_default







    return(
        <div className='pokemonPriview'>
        <h2>I'm the Pokemon Preview</h2>
        <img className='pokemonPriviewPic' src={pokemonImageUrl} />
        </div>
    )
}

export default PokemonPreview