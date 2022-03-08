import React, { FC } from 'react'
import { Grid } from '@nextui-org/react';
import { PokemonCaughtCard } from './PokemonCaughtCard';

interface Props {
  pokemonsCaught: number[];
}

export const CaughtPokemons: FC<Props> = ({pokemonsCaught}) => {
  return (
    <Grid.Container gap={1} wrap="wrap" justify='space-evenly' css={{padding: '30px'}}>
      {
        pokemonsCaught.map( pokemonId => (
          <PokemonCaughtCard key={pokemonId} id={pokemonId} />
        ))
      }
    </Grid.Container>
  )
}
