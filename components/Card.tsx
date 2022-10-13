import Image from 'next/image'
import Link from 'next/link'
import { Container } from '../styles/card';
import { MdFavorite } from 'react-icons/md';
import {useState} from 'react';


type CardTipo = {
    pokemon: {id: number; name: string; favorited: string;}
}

type RequestTipo = {
    pokemon: {id: number, favorited: string}
}

export default function Card({pokemon}:CardTipo){
    const [initFav, setInitFav] = useState('red');
    const [initNotFav, setInitNotFav] = useState('gray');

    async function handleFavorite({pokemon}:RequestTipo){

        // JSONs enviados para API
        const data1 = {
            "favorited": "false",
            "id": pokemon.id
        }
        const data2 = {
            "favorited": "true",
            "id": pokemon.id
        }
    
        // Lógica e envio do Requestt
        if(pokemon.favorited == 'true'){
            setInitFav('gray');
            setInitNotFav('gray')
            pokemon.favorited = 'false'
            const response = await fetch('http://localhost:5000/pokemon', {
            method: 'PUT',
            body: JSON.stringify(data1),
            headers: {
                'Content-Type': 'application/json'
            }
            })
            return console.log(response)    
        }
        else if(pokemon.favorited == 'false'){
            setInitNotFav('red')
            setInitFav('red')
            pokemon.favorited = 'true'
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
            <div className='icon-favorito'>
            {pokemon.favorited == 'true' ? <button onClick={() => handleFavorite({pokemon})}><MdFavorite size={30} color={initFav}></MdFavorite></button>
             : <button onClick={() => handleFavorite({pokemon})}><MdFavorite size={30} color={initNotFav}/></button>}
            </div>
            <div className='resto'>
            <Image src={`https://cdn.traction.one/pokedex/pokemon/${pokemon.id}.png`}
            width='120'
            height='120'
            alt={pokemon.name}
            />
            <p>#{pokemon.id}</p>
            <h3>{pokemon.name}</h3>
            <Link href={`/pokemon/${pokemon.id}`}><a>Detalhes</a></Link>
            </div>
        </Container>
    )
}