import Image from 'next/image'
import Link from 'next/link'
import { Container } from '../styles/card2';
import {MdFavorite} from 'react-icons/md'
import React, { useEffect } from 'react';
import {useState} from 'react'

type CardTipo = {
    pokemon: {id: number; name: string; favorited: string;}
}

type RequestTipo = {
    pokemon: {id: number, favorited: string}
}

export default function Card2({pokemon}:CardTipo){
const [favorite, setFavorite] = useState('red');
    
async function handleFavorite({pokemon}:RequestTipo){

    // Alternar cores do ícone
    if(favorite == 'red'){
        setFavorite('gray')
    }
    else if(favorite == 'gray'){
        setFavorite('red')
    }

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
            <button id='button' onClick={() => handleFavorite({pokemon})}><MdFavorite size={30} color={favorite}/></button>
            </div>
            <div className='resto'>
            <Image src={`https://cdn.traction.one/pokedex/pokemon/${pokemon.id}.png`}
            width='100'
            height='100'
            alt={pokemon.name}
            />
            <p>#{pokemon.id}</p>
            <h3>{pokemon.name}</h3>
            <Link href={`/pokemon/${pokemon.id}`}><a>Detalhes</a></Link>
            </div>
        </Container>
    )
    
}

