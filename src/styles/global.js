import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`

    @import url('https://fonts.googleapis.com/css2?family=Ruda:wght@400;500;700&display=swap');

    *{
        box-sizing: border-box;
        font-family: 'Ruda', sans-serif;
        padding: 0;
        margin: 0;
    }

    :root {
        --primary-color: #ffc107;
        --secondary-color: #b8930c;
        --light-color: #f8f9fa;
        --dark-color: #343a40;
        --black-color: #000;
    }

    body {
        background-color: var(--black-color);
        color: var(--light-color);
    }

    a{
        text-decoration: none;

    }

    span{
        color:var(--primary-color);
        font-weight: bold;
    }  

`;

export default Global;