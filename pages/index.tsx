import { Grid, useTheme } from '@nextui-org/react';
import type { NextPage } from 'next';
import { Layout } from '../components/layouts';
import { GetStaticProps } from 'next';
import { pokeApi } from '../api';
import { PokemonListResponse, SmallPokemon } from '../interfaces';
import { PokemonCard } from '../components/pokemon/PokemonCard';

interface Props {
  pokemons: SmallPokemon[];
}

const HomePage: NextPage<Props> = ({ pokemons }) => {
  const { theme, } = useTheme();

  return (
    <Layout title="Pokemon - Home">

      <Grid.Container gap={1}>
        {
          pokemons.map( pokemon => (
            <PokemonCard key={pokemon.id} pokemon={pokemon} />
            ))
        }
      </Grid.Container>
    </Layout> 
)
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await  pokeApi.get<PokemonListResponse>(`/pokemon?limit=135&offset=251`);
//252 - 386 ~~ 135
  const pokemons = data.results.map( ( pokemon, i ) => ({
    ...pokemon,
    id: i + 252,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${i+252}.png`
  }));

  return {
    props: {
      pokemons,
    }
  }
}

export default HomePage
