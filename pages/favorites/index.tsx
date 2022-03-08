import React from 'react'
import { CaughtEmpty, CaughtPokemons } from '../../components/favorites'
import { Layout } from '../../components/layouts'
import { usePokemonCaught } from '../../hooks/usePokemonCaught';

const FavoritePage = () => {

  const {pokemonCaughts} = usePokemonCaught(0);

  return (
    <Layout title='Pokemons favorites'>
      {
        pokemonCaughts.length !== 0 
          ? <CaughtPokemons pokemonsCaught={pokemonCaughts} />
          : <CaughtEmpty />
      }
    </Layout>
  )
}

export default FavoritePage
