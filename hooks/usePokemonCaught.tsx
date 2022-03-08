import { useEffect, useState } from 'react'
import confetti from 'canvas-confetti';
import { caughtPokemons } from '../utils';

export const usePokemonCaught = ( id: number) => {

  //hooks
  const [isCaught, setIsCaught] = useState(false);
  useEffect(() => {
    setIsCaught(caughtPokemons.isCaught(id));
  }, [id]);

  const [pokemonCaughts, setPokemonCaughts] = useState<number[]>([]);
  useEffect(() => {
    setPokemonCaughts(caughtPokemons.getCaughts());
  }, [])

  //functions
  const toggleCaught = () => {
    caughtPokemons.toggleCaught(id);
    setIsCaught(!isCaught);
    if(!isCaught) {
      confetti({
        zIndex: 900,
        particleCount: 100,
        angle: -100,
        spread: 160,
        origin: {
          x: 0,
          y: 0,
        }
      })
    }
  }

  return {
    isCaught,
    toggleCaught,
    pokemonCaughts,
  }
}
