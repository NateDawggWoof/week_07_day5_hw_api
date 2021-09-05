import React from 'react'

const PokemonSelect = ({pokemons, handleDisplayPreview, handleDisplayDetails, handleScreen2ChangeClick, handleScreen2ChangeHover}) =>{

const pokemonSelection = pokemons.map((pokemon,index) =>{
    
    return <li  key={index} onClick={handleDisplayDetails} onMouseEnter={() => handleDisplayPreview(pokemon.name)}>{pokemon.name}</li>

})




    return(
        <div className='pokemonSelect'>
        <h2>I'm Pokemon Selection</h2>
        <ul className='pokemonSelectionList'>
        {pokemonSelection}
        </ul>
        </div>

    )
}

export default PokemonSelect