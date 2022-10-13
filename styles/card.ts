import styled from 'styled-components'


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 2em;
    width: 23%;
    border-radius: 1em;
    border: 2px solid #E33d33;
    box-shadow: 5px 5px 12px rgba(0, 0, 0, 0.5);
    background-color: #333;
    color: #fff;

    .icon-favorito{
        justify-content: flex-end;
        display: flex;
        padding-top: 0.5em;
        padding-right: 0.5em
    }

    .resto{
        padding: 2em 1em;
        flex-direction: column;
        display:flex;
        align-items: center;
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

    p{
    margin: 1em 0;
    background-color: #E33d33;
    border-radius: 5px;
    padding: 5px;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
}

    h3{
    text-transform: capitalize;
    margin-bottom: 1em;
    font-size: 1.4em;
}

    a{
    text-decoration: none;
    background-color: #fff;
    color: #222;
    padding: .7em 1.2em;
    border-radius: 5px;
    font-weight: bold;
    transition: .4s;
}

    a:hover{
    background-color: #e33d33;
    color: white;
}
`