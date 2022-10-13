import React, {useEffect, useState} from "react";
import {Container, Container2} from '../styles/favoritos'
import Card2 from '../components/Card2'


type Data = {
    name: string;
    id: number;
    height: number;
    weight: number;
    favorited: string;
    types: [string];
}

export default function Favoritos() {
    
const [pokemons, setPokemons] = useState<Data[]>([]);
const [fav, setFav] = useState(0);

useEffect(()=>{
        const getAllPokemons = async () => {
            const api = 'http://localhost:5000/pokemon';
            const res = await fetch(api);
            const data:Data[] = await res.json();

            if(fav == 0){
                    data.map(function(pokemon){
                    if(pokemon.favorited == 'true'){
                        setFav(1)
                    }
                })
            }   
            setPokemons(data)
    }

    getAllPokemons();
}, []);


    return (
        <>
        <Container>
            <h1>Favoritos</h1>
        </Container>

        <Container2>
                {fav == 0 ? <h1>Não há Pokemons Favoritados</h1> : pokemons.map((pokemon) => (
                    (pokemon.favorited == 'true' ? <Card2 key={pokemon.id} pokemon={pokemon}/> : null)
                ))}
        </Container2>
        </>
    )
}