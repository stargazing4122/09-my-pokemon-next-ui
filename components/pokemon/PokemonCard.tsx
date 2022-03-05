import { Card, Grid, Row, Text } from '@nextui-org/react'
import { useRouter } from 'next/router'
import  { FC } from 'react'
import { SmallPokemon } from '../../interfaces'

interface Props {
  pokemon: SmallPokemon,
}
export const PokemonCard:FC<Props> = ({ pokemon }) => {

  const router = useRouter();
  const {id, name, img} = pokemon;

  const handleClickCard = () => {
    router.push(`/pokemon/${id}`)
  }
  return (
    <Grid xs={6} sm={4} md={4}  lg={2} >
      <Card hoverable clickable onClick={handleClickCard}>
        <Card.Body>
          <Card.Image 
            showSkeleton
            src={img}
            width="100%"
            height={140}
          />
        </Card.Body>
        <Card.Footer>
          <Row justify='space-between'>
            <Text transform='capitalize'>{name}</Text>
            <Text>#{id}</Text>
          </Row>
        </Card.Footer>

      </Card>
    </Grid>

  )
}
