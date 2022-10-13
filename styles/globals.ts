import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        font-family: Arial, Helvetica, sans-serif;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    .main-container{
        min-height: 70vh;
    }
`;