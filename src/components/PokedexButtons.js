import React from 'react'

const PokedexButtons= ({handleScreen1Change}) =>{







    return(
        <div>
        <h2>Switch Database/Captured</h2>
        <button onClick={handleScreen1Change}>Toggle</button>
        </div>
    )
}

export default PokedexButtons