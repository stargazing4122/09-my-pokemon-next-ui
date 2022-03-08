import { Button, Link, Spacer, Switch, Text, useTheme } from '@nextui-org/react'
import React, { CSSProperties } from 'react'
import { useTheme as useNextTheme } from 'next-themes'
import Image from 'next/image';
import NextLink from 'next/link'
export const Navbar = () => {
  const { setTheme } = useNextTheme();
  const { theme, isDark, type } = useTheme();

  const style: CSSProperties = {
    backgroundColor: theme?.colors.gray900.value,
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px 20px',
    alignItems: 'center',
  }

  return (
    <div  style={style} >
          <Image
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png"
            alt='pokeball'
            width={50}
            height={50}
          />
        
      <NextLink href="/" passHref>
        <Link>
          <Text color='white' h3>Pokemon</Text>
          <Spacer x={0.2} />
          <Text color='white' h6>  3g </Text>
        </Link>
      </NextLink>
      
      <Spacer css={{flex: 1}} />
      <NextLink href="/favorites"><a style={{color: 'white'}}>Catched</a></NextLink>
      <Spacer x={1}/>
      <Switch
        color="primary"
        iconOff={<i className="fa-solid fa-sun-bright"></i>}
        iconOn={<i className="fa-solid fa-moon"></i>}
        checked={isDark}
        onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')}
      />
      
    </div>
  )
}