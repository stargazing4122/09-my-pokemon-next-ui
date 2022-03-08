import { Card, Grid, Image } from '@nextui-org/react';
import { useRouter } from 'next/router';
import React, { FC } from 'react'

interface Props {
  id: Number;
}

export const PokemonCaughtCard: FC<Props> = ({ id }) => {
  const router = useRouter();
  const handleClick = () => {
    router.push(`/pokemon/${id}`)
  }
  return (
    <Grid xs={6} md={2} xl={2}>
      <Card 
        hoverable clickable shadow
        onClick={handleClick}
      >
        <Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${id}.png`}  
          alt={`pokemon-${id}`}
          width={"100%"}
          height={200}
        />

      </Card>
    </Grid>
  )
}
