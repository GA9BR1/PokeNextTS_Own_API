import styled from 'styled-components'

export const Container = styled.div`
    .favorite-icon{
        display: flex;
        justify-content: flex-end;
        padding-right: 1em;
    }
    button{
       background-color: transparent; 
       border: 0;
       display: flex;
       cursor: pointer;
    }

    button:hover{
        background-color: gray;
    }

    .resto{
        text-align: center;

        h1 {
        font-size: 2.5em;
        text-transform: capitalize;
        background-color: #333;
        color: #fff;
        padding: 0.3em 0.9em;
        margin-top: 0.4em;
        margin-bottom: 0.8em;
        margin-right: auto;
        margin-left: auto;
        width: fit-content;
    }

    h3 {
        margin: .6em auto;
        font-size: 1.2em;
    }

    .types_container {
        display: flex;
        align-items: center;
        justify-content: center;
    }

        .type {
            padding: .6em 1em;
            color: #fff;
            background-color: #000;
            margin-right: .5em;
            border: 1px solid #ccc;
            border-radius: 6px;
            text-transform: uppercase;
            font-size: 0.8em;
        }

        .type_normal {
            background-color: #aa9;
        }
        
        .type_fire {
            background-color: #f42;
        }
        
        .type_water {
            background-color: #39f;
        }
        
        .type_eletric {
            background-color: #fc3;
        }
        
        .type_grass {
            background-color: #7c5;
        }
        
        .type_ice {
            background-color: #6cf;
        }
        
        .type_fighting {
            background-color: #b54;
        }
        
        .type_poison {
            background-color: #a59;
        }
        
        .type_ground {
            background-color: #db5;
        }
        
        .type_flying {
            background-color: #89f;
        }
        
        .type_psychic {
            background-color: #f59;
        }
        
        .type_bug {
            background-color: #ab2;
        }
        
        .type_rock {
            background-color: #ba6;
        }
        
        .type_ghost {
            background-color: #66b;
        }
        
        .type_dragon {
            background-color: #76e;
        }
        
        .type_dark {
            background-color: #754;
        }
        
        .type_steel {
            background-color: #aab;
        }
        
        .type_fairy {
            background-color: #e9e;
        }
        
        .data_container {
            display: flex;
            align-items: center;
            justify-content: center;
            margin-top: 0.5em;
        }

        .data_container div {
            margin: 1em 0;
            padding: 0 1em;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
        }

        .data_height {
            border-right: 1px solid #ccc;
        }

    }



    .fallback {
            text-align: center;
     }

`