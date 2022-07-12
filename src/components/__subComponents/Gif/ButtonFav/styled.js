import styled from "styled-components";

export const Styles = styled.button`
    position: absolute;
    top: 1em;
    right: 1em;
    width: 2em;
    height: 2em;
    padding: .3em .2em .1em;
    border-radius: 50%;
    background-color: var(--secondary-background);;
    border: none;
    z-index: 1;
    border: 1px solid var(--primary-letter-color);

    svg{fill: var(--primary-letter-color)}
    
    &.select svg {fill: var(--color)}
    &.select {border-color: var(--color)}

    &:hover{
        transform: scale(1.1);
        border-color: var(--color-hover);
    }
    &:hover > svg{ fill: var(--color-hover);}
`