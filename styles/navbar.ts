import styled from 'styled-components'


export const Container = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1em 1.2em;
    margin-bottom: 2em;
    background-color: #333;
    color: #fff;


div {
    display: flex;
    justify-content: center;
    align-items: center;
}

h1 {
    margin-left: .5em;
}

ul {
    display: flex;
    list-style: none;
}

li {
    margin-right: 1.3em;
}

a {
    color: #fff;
    text-decoration: none;
    padding: 5px;
    transition: .4s;
    border-bottom: 2px solid transparent;
}

a:hover {
    border-color: #fff;
}

`