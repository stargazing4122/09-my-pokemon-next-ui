import { Container, Image, Text } from '@nextui-org/react'
import React from 'react'
import { callbackify } from 'util'

export const FavoritesEmpty = () => {
  return (
    <Container css={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: 'calc(100vh - 100px)',
    }}>
      <Text h1>No caught pokemons</Text>
      <Image
        src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/252.svg'
        alt='empty-favorites'
        width={250}
        height={250}
        css={{
          opacity: 0.1
        }}
      >

      </Image>
    </Container>
  )
}
