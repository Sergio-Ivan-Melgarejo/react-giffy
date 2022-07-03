import styled from "styled-components";
import Screen from "style/Screen";

export const Styles = styled.footer`
    background-color: var(--secondary-background);
    padding: 1em;

    .footer__text{
        margin: 0 0 .5em;
        color: var(--primary-letter-color);
    }

    ${Screen.md(`
        border-top-left-radius: var(--border-radius);
        border-top-right-radius: var(--border-radius); 
    `)}
` 