import React from 'react'
import './styles.scss'

const Card = ( {name, image, types} ) => {

  const handleName = () => {
    if (name == 'nidoran-m') {
      let pokemonName = 'Nidoran ♂';
      return (pokemonName);
    } else if (name == 'nidoran-f') {
      let pokemonName = 'Nidoran ♀';
      return (pokemonName);
    } else {
      return name
      .toLowerCase()
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')
    }
  }


  return (
    <div className="pokemonCard">
        <img className="pokemonCard__image" src={image} alt={`${name} photo`}/>
        <h2 className="pokemonCard__name">
          {
            handleName()
          }
        </h2>
        <form className="pokemonCard__types">
            {
                types.map((type) => (
                    <button className="types" key={type.slot}><h4>{type.type.name}</h4></button>
            ))}
        </form>
    </div>
  )
}

export default Card