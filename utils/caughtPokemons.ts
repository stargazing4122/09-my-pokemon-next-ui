const getCaughts = () => {
  const caughts: number[] = JSON.parse(localStorage.getItem('pokemons-caughts') || '[]');
  return caughts;
}

const toggleCaught = (id: number) => {
  let caughts: number[] = [...getCaughts()];
  if( caughts.includes(id) ) {
    caughts = caughts.filter( caughtId => caughtId!==id);
  } else {
    caughts.push( id )
  }
  localStorage.setItem('pokemons-caughts', JSON.stringify(caughts));
}

const isCaught = (id: number): boolean => {
  return getCaughts().includes(id);
}


//exports
const caughtPokemons = {
  getCaughts,
  toggleCaught,
  isCaught,
}

export default caughtPokemons;