import styled, { keyframes } from "styled-components";

const appearBg = keyframes`
    0% {
        background-color: #00000000;
    }
    100% {
        background-color: #00000099;
        backdrop-filter: blur(4px);
    }
`

export const Styles = styled.div`
    position: fixed;
    z-index: 1000;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    button {
        position: absolute;
        right: 0;
        top: -1em;
        padding: .2em;
        transform: translateY(-100%);
        transition: box-shadow .3s ease-in-out, background-color .3s ease-in-out;
        
        svg{
            display: block;
            fill: var(--primary-letter-color);
            width: 2.5em;
            height: 2.5em;
        }
    
        &:hover{
            background-color: var(--red);
            box-shadow: 0 0 1em var(--red);
        }
    }
    
    .bg{
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
        width: 100%;
        animation: ${appearBg} .3s ease-in forwards;
    }

    .modal-container{
        position: relative;
        padding: 1em 2em;
        border: 1px solid var(--secondary-background);
        border-radius: var(--border-radius);
        animation: ${appearBg} .3s ease-in forwards;
    }
`