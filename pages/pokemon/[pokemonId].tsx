import Image from 'next/image'
import {useRouter} from 'next/router'
import { Container } from '../../styles/pokemon';
import {MdFavorite} from 'react-icons/md'
import {useState} from 'react'

type DataAllPokemons = {
    params: {pokemonId: number}
}

export type DataEachPokemon = {
    pokemon: [{
        name: string;
        id: number;
        height: number;
        weight: number;
        favorited: string;
        types: [string];
    }]
}

type RequestTipo = {
    pokemon: {id: number, favorited: string}
}

export const getStaticPaths = async() => {
    const req = await fetch('http://localhost:5000/pokemon')
    const res = await req.json();
    const data:DataAllPokemons[] = res;
    

    const paths = data.map((_pokemon, index) => {
        return{
            params: {pokemonId: (index+1).toString()}
        }
    })
    
    return {
        paths,
        fallback: true
    }
}



export const getStaticProps = async(context:DataAllPokemons) => {
    const id = context.params.pokemonId

    const res = await fetch(`http://localhost:5000/pokemon/${id}`)
    const data:DataEachPokemon = await res.json()


    return {
        props: {pokemon: data}
    }
 
}

export default function Pokemon({pokemon}: DataEachPokemon) {
    const router = useRouter()
    if(router.isFallback) {
        return <div className='fallback'>Carregando...</div>
    }

    
    const [initFav, setInitFav] = useState('red');
    const [initNotFav, setInitNotFav] = useState('gray');


    async function handleFavorite({pokemon}:DataEachPokemon){

        // JSONs enviados para API
        const data1 = {
            "favorited": "false",
            "id": pokemon[0].id
        }
        const data2 = {
            "favorited": "true",
            "id": pokemon[0].id
        }
    
        // Lógica e envio do Requestt
        if(pokemon[0].favorited == 'true'){
            setInitFav('gray');
            setInitNotFav('gray')
            pokemon[0].favorited = 'false'
            const response = await fetch('http://localhost:5000/pokemon', {
            method: 'PUT',
            body: JSON.stringify(data1),
            headers: {
                'Content-Type': 'application/json'
            }
            })
            return console.log(response)    
        }
        else if(pokemon[0].favorited == 'false'){
            setInitNotFav('red')
            setInitFav('red')
            pokemon[0].favorited = 'true'
            const response = await fetch('http://localhost:5000/pokemon', {
            method: 'PUT',
            body: JSON.stringify(data2),
            headers: {
                'Content-Type': 'application/json'
            }
            })
            return console.log(response)    
        }
    } 


    return (
        <Container>
            <div className='favorite-icon'>
            {pokemon[0].favorited == 'true' ? <button onClick={() => handleFavorite({pokemon})}><MdFavorite size={30} color={initFav}/></button>
            : <button onClick={() => handleFavorite({pokemon})}><MdFavorite size={30} color={initNotFav}/></button>}
            </div>
            <div className='resto'>
                <h1>{pokemon[0].name}</h1>
                <Image src={`https://cdn.traction.one/pokedex/pokemon/${pokemon[0].id}.png`}
                width='200'
                height='200'
                alt={pokemon[0].name}/>
                <div>
                    <h3>Número: </h3>
                    <p>#{pokemon[0].id}</p>
                </div>
                <div>
                    <h3>Tipo: </h3>
                    <div className='types_container'>
                        {pokemon[0].types.map((item, index) => (
                            <span key={index} className={`type ${['type_' + item]}`}>{item}</span>
                        ))}
                    </div>
                </div>
                <div className='data_container'>
                    <div className='data_height'>
                        <h4>Altura: </h4>
                        <p>{pokemon[0].height * 10}cm</p>
                    </div>
                    <div className='data_weight'>
                        <h4>Peso: </h4>
                        <p>{pokemon[0].weight / 10}kg</p>
                    </div>
                </div>
            </div>         
        </Container>
    )
}