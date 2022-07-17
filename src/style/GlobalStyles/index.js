import { createGlobalStyle } from "styled-components";
import Screen from "style/Screen";

export default createGlobalStyle`
    :root {
        --primary-background: ${({theme}) => theme.primaryBG};
        --secondary-background: ${({theme}) => theme.secondaryBG};
        
        --primary-letter-color: ${({theme}) => theme.primaryLetterColor};
        --secondary-letter-color: ${({theme}) => theme.secondaryLetterColor};

        --color:#187de2;
        --color-hover:#4d9dec;

        --line-color-1:#187de2;
        --line-color-2:#187de260;
        --line-color-3:#187de220;

        --red: #F32424;

        --box-shadow: 0 0 1em #00000050;
        --border-radius: .3em;
        --transition: background-color .3s ease-in-out, color .3s ease-in-out;

        --brand-color_1: #00ff99;
        --brand-color_2: #00ccff;
        --brand-color_3: #9933ff;
        --brand-color_4: tomato;
        --brand-color_5: #fff35c;
        --brand-color_6: #8429de;

        --terciary-background: ${({theme}) => theme.terciaryBG};
    }

    *, *::after, *::before {
        margin: 0;
        box-sizing: border-box;
        outline-color: var(--color);
    }

    body {
        font-family: 'Manrope', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color: var(--primary-background);

        background-color: rgba(255,255,255,0);
        opacity: 1;
        background-image: radial-gradient(var(--terciary-background) 0.25px, var(--primary-background) 0.25px);
        background-size: 5px 5px;
    }

    html {
        font-size: 1.20rem;
        /* scroll-behavior: smooth;    */
    
        ${Screen.sm`  
        font-size: 1.10rem;
        `}

        ${Screen.md`
        font-size: 1.05rem; 
        `}

        ${Screen.lg`
        font-size: 1rem; 
        `}
    }

    a {
        text-decoration: none;
    }
    
    ul {
        list-style: none;
        padding: 0;
    }

    .color {
        color: var(--color);
    }

    .App-title {
        text-transform: uppercase;
        color: var(--primary-letter-color);
        margin-bottom: 1em;
    }
    
    .error-text{
        font-size: .75em;
        color: var(--red);
    }

    .error-input{
        color: var(--red) !important;
        border-color: var(--red) !important;
        outline-color: var(--red) !important;
        box-shadow: 0 0 .5em var(--red) inset !important;
    }


    /****************  btn  *********************/

    button {
        cursor: pointer;
        outline: none;
    }

    .btn {
        display: block;
        padding: .8em 1.4em;
        border-radius: var(--border-radius);
        
        font-weight: bolder;
        text-decoration: none;
        border-style: none;
        
        cursor: pointer; 
        transition: var(--transition), border-color .3s ease-in-out;
    }

    ${Screen.md(`
        .btn {
            border-radius: 5px;
        }
    `)}

    .btn[disabled] {
        opacity: .3;
        pointer-events: none;
    }

    .btn-1 {
        color: var(--color);
        border-width: 1px;
        border-style: solid;
        border-color: var(--color);
        background: var(--primary-background);
    }

    .btn-1:hover {
        color: var(--primary-letter-color);
        border-color: var(--color-hover);
        background-color: var(--color-hover);
    }

    .btn-2 {
        color: var(--secondary-letter-color);
        background-color: var(--color);
    }

    .btn-2:hover {
        color: var(--primary-letter-color);
        background-color: var(--color-hover);
    }
`;