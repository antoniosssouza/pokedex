import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from '../components/Cards/Card';
import './styles.scss'

const Home = () => {
  const [ pokemons , setPokemons ] = useState([]);
  const [ listSize , setListSize ] = useState(20);
  const [ page , setPage ] = useState(1);

  const getPokemons = () => {
    var endpoints = [];
    let index = page - 1;
    if (index === 0){
      for ( let i = 1 ; i <= listSize; i++)
      {
        endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}`);
      }
    }else{
      for ( let i = (index*listSize+1) ; i <= (page*listSize); i++)
      {
        endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}`);
      }
    }
    

    var response = axios.all(endpoints.map((endpoint) => axios.get(endpoint))).then((res) => setPokemons(res));
    console.log(pokemons)
    return response;
  }
  
  useEffect(() => {
    getPokemons();
  }, []);

  return (
    <div className="home">
      {
        pokemons.map((pokemon, key) => 
          <Card 
            key={key} name={pokemon.data.name} 
            image={pokemon.data.sprites.other.dream_world.front_default}
            types={pokemon.data.types}
          />
        )
      }
    </div>
  )
  
}

export default Home