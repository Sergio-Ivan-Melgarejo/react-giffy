import styled from "styled-components";

export const Styles = styled.button`
    position: absolute;
    top: 1em;
    right: 1em;
    width: 2.5em;
    height: 2.5em;
    padding: .4em .3em .1em;
    border-radius: 50%;
    background-color: var(--secondary-background);;
    border: none;
    z-index: 1;
    border: 1px solid var(--primary-letter-color);
    transition: transform .3s ease-in-out, border-color .3s ease-in-out;

    svg{
        fill: var(--primary-letter-color);
        transition: fill .3s ease-in-out;
    }
    
    &.select svg {fill: var(--color)}
    &.select {border-color: var(--color)}

    &:hover{
        transform: scale(1.1);
        border-color: var(--color-hover);
    }
    &:hover > svg{ fill: var(--color-hover);}
`