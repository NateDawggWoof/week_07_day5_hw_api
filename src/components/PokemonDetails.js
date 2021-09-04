import React from 'react'

const PokemonDetails= ({pokemonDetails, handleCaptureButtonToggle, handleCaptureReleasePokemon }) =>{
    const pokemonImageUrl = pokemonDetails.sprites.front_default
    const pokemonAllStats = pokemonDetails.stats
    const pokemonAllTypes = pokemonDetails.types
    console.log(pokemonDetails.held_items.id)


    const pokemonStats= pokemonAllStats.map((statType,index) =>{
    
        return <li  key={index} >{statType.stat.name}: {statType.base_stat}</li>
    })

    const pokemonTypes= pokemonAllTypes.map((species,index) =>{
    
        return <li  key={index} >{species.type.name}</li>
    })

    const buttonText = handleCaptureButtonToggle(pokemonDetails)




    return(
        <div className='pokemonDetails'>
        <h2>I'm the Pokemon Details</h2>
        <img className='pokemonDisplayPic' src={pokemonImageUrl} />
        <h3>Name: {pokemonDetails.name} Pokedex I.D: {pokemonDetails.id}</h3>
        <p>Height:  {pokemonDetails.height/10}m </p>
        <p>Weight: {pokemonDetails.weight/10}Kg </p>

        <ul>
            {pokemonStats}
        </ul>
        <ul>
            {pokemonTypes}
        </ul>
        <button onClick={() => {handleCaptureReleasePokemon(pokemonDetails)}}>{buttonText}</button>
        </div>
    )
}

export default PokemonDetails