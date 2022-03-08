import React from 'react'
import { FavoritesEmpty } from '../../components/favorites'
import { Layout } from '../../components/layouts'

const index = () => {
  return (
    <Layout title='Pokemons favorites'>
      <FavoritesEmpty />
    </Layout>
  )
}

export default index
