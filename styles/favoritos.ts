import styled from 'styled-components'

export const Container = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 2em;

    h1 {
    color: #E33D33;
    text-align: center;
    font-size: 3em;
    margin-right: .4em;
    }

    span{
    color: #333;
    }
`

export const Container2 = styled.div `

    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;
    align-items: center;
    max-width: 100vw;
`