import Image from 'next/image'
import Card from '../components/Card'
import { Container1, Container2 } from '../styles/index'

export type DataPokemon = {
  id: number;
  pokemons: [{id: number; name: string; favorited: string}]
}

export async function getStaticProps(){

  const api = 'http://localhost:5000/pokemon';
  const res = await fetch(api);
  const data:DataPokemon[] = await res.json();


  // add pokemon index
  data.forEach((item, index) => {
    item.id = index + 1
  })

  return{
    props: {
      pokemons: data
    }
  }

}

export default function Home({ pokemons }:DataPokemon) {
  return (
    <>
      <Container1>
        <h1>Poke<span>Next</span></h1>
        <Image src='/images/pokeball.png' width='50' height='50' alt='PokeNext'/>
      </Container1>
      <Container2>
        {pokemons.map((pokemon) => (
          <Card key={pokemon.id} pokemon={pokemon} />
        ))}
      </Container2>
    </>
  )
}
