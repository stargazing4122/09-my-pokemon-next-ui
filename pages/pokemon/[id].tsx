import { NextPage } from 'next';
import { GetStaticPaths, GetStaticProps } from 'next';

import { Layout } from '../../components/layouts';
import { Pokemon } from '../../interfaces';
import pokeApi from '../../api/pokeApi';
import Image from 'next/image';
import { Button, Card, Container, Grid, Row, Text } from '@nextui-org/react';
import { usePokemonCaught } from '../../hooks/';
import { getPokemonInfo } from '../../utils/getPokemonInfo';

interface Props {
  pokemon: Pokemon;
}

const PokemonPage: NextPage<Props> = ({ pokemon }) => {

  const {isCaught, toggleCaught} = usePokemonCaught(pokemon.id);

  return (
    <Layout title={`Pokemon ${pokemon.name}`}>
      <Grid.Container gap={1} wrap="wrap" direction="row" justify="space-evenly">
        <Grid md={6} xs={12}>
          <Card>
            <Card.Header >
              <Row justify='center'>
                <Text h3>Pokemon Info</Text>
              </Row>
            </Card.Header >
            <Card.Body>
              <Container >
                <Text>Name: {pokemon.name}</Text>
                <Text>A ability: {pokemon.abilities[0].ability.name}</Text>
                <Text>Height: {pokemon.height}</Text>
                <Text>Weight: {pokemon.weight}</Text>
                <Text>State: {isCaught ? 'Caught' : 'No caught'}</Text>
              </Container>
            </Card.Body>
            <Card.Footer>
              <Row justify='center'>
                <Button 
                  onClick={toggleCaught}
                  color="gradient" 
                  ghost={!isCaught}
                  shadow>{isCaught ? 'Release' : 'Catch' }</Button>
              </Row>
            </Card.Footer>
          </Card>
        </Grid>
        <Grid md={6} xs={12}>
          <Card>
            <Card.Body>
              <Card.Image 
                src={pokemon.sprites.other?.dream_world.front_default || ''}
                alt={pokemon.name}
                width="100%"
                height={200}
              />
            </Card.Body>
            <Card.Footer>
              <Row justify='center'>
                <Text>Dream World</Text>
              </Row>
            </Card.Footer>
          </Card>
        </Grid>

        <Grid md={6} xs={12}>
          <Card>
            <Card.Body>
              <Card.Image
                src={pokemon.sprites.other?.home.front_default|| ''}
                alt={pokemon.name}
                width="100%"
                height={200}
              />
            </Card.Body>
            <Card.Footer>
              <Row justify='center'>
                <Text>Home</Text>
              </Row>
            </Card.Footer>
          </Card>
        </Grid>



        <Grid md={6} xs={12}>
          <Card>
            <Card.Body>
              <Card.Image
                src={pokemon.sprites.other?.['official-artwork'].front_default || ''}
                alt={pokemon.name}
                width="100%"
                height={200}
              />
            </Card.Body>
            <Card.Footer>
              <Row justify='center'>
                <Text>Official Artwork</Text>
              </Row>
            </Card.Footer>
          </Card>
        </Grid>
            
        <Grid md={6} xs={12}>
          <Card>
            <Card.Body>
              <Card.Image
                src={pokemon.sprites.other?.home.front_shiny || ''}
                alt={pokemon.name}
                width="100%"
                height={200}
              />
            </Card.Body>
            <Card.Footer>
              <Row justify='center'>
                <Text>Home Shiny</Text>
              </Row>
            </Card.Footer>
          </Card>
        </Grid>
        
      </Grid.Container>
    </Layout>
  )
}

// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  //252 - 386 ~~ 135
  const pokemonsIds = [...Array(135)].map( (value, i) => (`${i+252}`) );

  return {
    paths: pokemonsIds.map( id => ({
      params: { id },
    })),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({params}) => {
  const {id} = params as {id: string};
  
  return {
    props: {
      pokemon: await getPokemonInfo(id),
    }
  }
}

export default PokemonPage;
