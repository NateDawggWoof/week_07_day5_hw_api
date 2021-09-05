import React from 'react'
import Chart from "react-google-charts";

const PokemonDetails= ({pokemonDetails, handleCaptureButtonToggle, handleCaptureReleasePokemon }) =>{
    const pokemonImageUrl = pokemonDetails.sprites.front_default
    const pokemonAllStats = pokemonDetails.stats
    const pokemonAllTypes = pokemonDetails.types
    const stats = [['Stat', 'Value']]


  
    


    const pokemonStats= pokemonAllStats.map((statType,index) =>{
        const stat =[] 
        stat.push(statType.stat.name)
        stat.push(statType.base_stat)
        stats.push(stat) 
        console.log(stats)    
        return <li  key={index} >{statType.stat.name}: {statType.base_stat}</li>
    })

    const pokemonTypes= pokemonAllTypes.map((species,index) =>{
    
        return <li  key={index} >{species.type.name}</li>
    })

    const buttonText = handleCaptureButtonToggle(pokemonDetails)




    return(
        <div className='pokemonDetails'>
        <img id='one' className='pokemonDisplayPic' src={pokemonImageUrl} />
        <p id='two'>Name: {pokemonDetails.name}</p>
        <p id='three'>Pokedex I.D: {pokemonDetails.id}</p>
        <p id='four'>Height:  {pokemonDetails.height/10}m </p>
        <p id='five'>Weight: {pokemonDetails.weight/10}Kg </p>

        <ul id='seven'>
            {pokemonStats}
        </ul>
        <ul id='six'>
            {pokemonTypes}
        </ul>
        <Chart id='eight'
  width={'300px'}
  height={'200px'}
  chartType="PieChart"
  loader={<div>Loading Chart</div>}
  data={stats}
  options={{
    title: 'Stats Proportion',
  }}
  rootProps={{ 'data-testid': '1' }}
/>
        <button id='nine' onClick={() => {handleCaptureReleasePokemon(pokemonDetails)}}>{buttonText}</button>
        </div>

    )
}

export default PokemonDetails