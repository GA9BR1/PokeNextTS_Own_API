import Image from 'next/image'
import {useRouter} from 'next/router'
import { Container } from '../../styles/pokemon';

type DataEachPokemon = {
    pokemon: {
        name: string;
        id: number;
        height: number;
        weight: number;
        types: [{type: {
            name: string;
        }}]
    }
}

type SSRcontext = {
    params: {pokemonId: string}
}


export async function getServerSideProps(context: SSRcontext) {
    const id = context.params.pokemonId;

    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    const data:DataEachPokemon[] = await res.json()


    return {
        props: {pokemon:data}
    };
    
}


export default function Pokemon({pokemon}: DataEachPokemon) {

    const router = useRouter()

    if(router.isFallback) {
        return <div className='fallback'>Carregando...</div>
    }

    return (
        <Container>
            <h1>{pokemon.name}</h1>
            <Image src={`https://cdn.traction.one/pokedex/pokemon/${pokemon.id}.png`}
            width='200'
            height='200'
            alt={pokemon.name}/>
            <div>
                <h3>Número: </h3>
                <p>#{pokemon.id}</p>
            </div>
            <div>
                <h3>Tipo: </h3>
                <div className='types_container'>
                    {pokemon.types.map((item, index) => (
                        <span key={index} className={`type ${['type_' + item.type.name]}`}>{item.type.name}</span>
                    ))}
                </div>
            </div>
            <div className='data_container'>
                <div className='data_height'>
                    <h4>Altura: </h4>
                    <p>{pokemon.height * 10}cm</p>
                </div>
                <div className='data_weight'>
                    <h4>Peso: </h4>
                    <p>{pokemon.weight / 10}kg</p>
                </div>
            </div>            
        </Container>
    )
}