import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from '../components/Cards/Card';
import './styles.scss'

const Home = () => {
  const [ pokemons , setPokemons ] = useState([]);
  const [ listSize , setListSize ] = useState(15);
  const [ page , setPage ] = useState(1);
  const [ pokemonCount , setPokemonCount] = useState([]);

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
    return response;
  }

  const countPokemons = () => {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=3000&offset=0")
    .then((res) => setPokemonCount(res.data.count));
  }

  
  useEffect(() => {
    getPokemons();
    countPokemons();
  }, [listSize])


  return (
    <div className="home">
      <div className="home__listSize">
        <label htmlFor="list" style={{marginLeft: "2em", marginRight: ".5em"}}>Tamanho da lista</label>
        <select id="list" style={{marginTop: "2em", marginBottom: "-1em"}} onChange={(e) => setListSize(e.target.value)}>
          <option value="15">15</option>
          <option value="20">20</option>
          <option value="25">25</option>
          <option value="30">30</option>
        </select>
      </div>
      <div className="home__cards">
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
      <div className="home__pages">

      </div>
    </div>
  )
  
}

export default Home