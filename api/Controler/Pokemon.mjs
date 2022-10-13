import { openDb } from '../configDB.mjs';

export async function updateFavorited(pokemon){
    openDb().then(db=>{
        db.run('UPDATE Pokemon SET favorited = (?) WHERE id = (?)', [pokemon.favorited, pokemon.id])
    });
}

/*export async function getAllPokemons(){
    return openDb().then( async db=>{
        return db.all('SELECT * FROM Pokemon')
        .then(res=>res)
    });
}
*/

export async function getAllPokemons(){
    return openDb().then( async db=> {
        const req1 = await db.all('SELECT * FROM Pokemon')
        const req2 = await db.all('SELECT * FROM Types')

        const pokemonsFormatted = req1.reduce((acc, currentValue) => {
            acc.push(currentValue)
            const filteredTypes = req2.filter(item => item.id_pokemon === currentValue.id)
            currentValue.types = filteredTypes.map(item => item.type)
          
            return acc
          }, [])
   
        return pokemonsFormatted
    })
}

export async function getOnePokemon(id){
    return openDb().then( async db => {
        const req1 = await db.all('SELECT * FROM Pokemon WHERE id = (?)', [id])
        const req2 = await db.all('SELECT * FROM Types WHERE id_pokemon = (?)', [id])

        const pokemonsFormatted = req1.reduce((acc, currentValue) => {
            acc.push(currentValue)
            const filteredTypes = req2.filter(item => item.id_pokemon === currentValue.id)
            currentValue.types = filteredTypes.map(item => item.type)
          
            return acc
          }, [])
   
        return pokemonsFormatted
    })
}