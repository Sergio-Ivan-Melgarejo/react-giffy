import styled from "styled-components";
import Screen from "../../../../style/Screen";

export const Styles = styled.div`
    position: relative;

  .logo-container {
    position: relative;
    display: block;
    padding: 0;
    width: 3em;
    min-width: 3em;
    height: 3em;
    min-height: 3em;
    margin-right: 5.5em;
    border-radius: 50%;
  }

  .logo {
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }

  .logo-container::after,
  .logo-container::before {
    content: "";
    position: absolute;
    border-radius: 50%;
    border-width: 0.3em;
    border-color: var(--secondary-letter-color) transparent
      var(--secondary-letter-color) var(--secondary-letter-color);
    border-style: solid;
    transition: transform 0.5s ease-in-out, border-color 0.5s ease-in-out;
  }

  .logo-container::before {
    width: calc(100% + 0.7em);
    height: calc(100% + 0.7em);
    left: -0.35em;
    top: -0.35em;
  }

  .logo-container::after {
    width: calc(100% + 1.4em);
    height: calc(100% + 1.4em);
    left: -0.7em;
    top: -0.7em;
  }

  .logo-container:hover::after {
    transform: rotate(360deg);
    border-color: var(--color) transparent var(--color) var(--color);
  }

  .logo-container:hover::before {
    transform: rotate(-360deg);
    border-color: var(--color) transparent var(--color) var(--color);
  }

  .logo-container h1 {
    position: absolute;
    font-size: 1.5em;
    right: 0;
    top: 50%;
    transform: translate(100%, -50%);
    padding: 0.75em;
    margin: 0;
    font-weight: bolder;
    display: none;
  }

    ${Screen.md(`   
        position: sticky;
        top: 1em;
        align-self: flex-start;
        z-index: 10; 

        .logo-container h1{display: block;}
    `)}
`;
