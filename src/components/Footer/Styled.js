import styled from "styled-components";
import Screen from "style/Screen";

export const Styles = styled.footer`
    text-align: center;
    padding: 1em;
    background-color: var(--secondary-background);

    .footer__text{
        margin: 0 0 .5em;
        color: var(--primary-letter-color);
    }

    ${Screen.md(`
        border-top-left-radius: var(--border-radius);
        border-top-right-radius: var(--border-radius); 
    `)}
` 