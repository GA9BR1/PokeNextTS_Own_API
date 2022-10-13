import {updateFavorited, getAllPokemons, getOnePokemon} from './Controler/Pokemon.mjs'
import express from 'express';
import cors from 'cors'

const app = express();
app.use(express.json());
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE')
    app.use(cors())
    next();
})


// Da um get de todas as informações do pokemon
app.get('/pokemon', async function(req, res){
    let pokemons = await getAllPokemons();
    res.json(pokemons);
})

// Get em um pokemon específico
app.get(`/pokemon/:id`, async function (req, res) {  
    const {id} = req.params
    let pokemon = await getOnePokemon(id);
    res.json(pokemon)

})

// Atualiza o Status de favorito do Pokemon
app.put('/pokemon', function (req, res) { 
    if(req.body && !req.body.id && !req.body.favorited){
        res.json({
            "statusCode": 400,
            "msg": "Você precisa informar um id, e(ou) 'true' ou 'false'"
        })
    }else{
    updateFavorited(req.body)
    res.json({
        statusCode: 200
    })
}});

app.listen(5000, ()=>console.log("Api Rodando"))