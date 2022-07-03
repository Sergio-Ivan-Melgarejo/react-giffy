import Screen from "style/Screen";
import styled from "styled-components";

export const AppStyled = styled.div`
    text-align: center;
    min-height: 100vh;
    max-width: 1600px;
    margin: auto;

    display: grid;
    grid-template-rows: min-content 1fr min-content;
    

    ${Screen.md(`
        padding: 0 1em;
    `)}

  .App-main {
    display: grid;
    grid-template-columns: 1fr;
  }

  ${Screen.lg(`
    .App-main {
      grid-template-columns: 1fr 280px;
      position: relative;
    }

    .App-category {
      height: 100%;
      position: static;
    }

    .App-category > div {
      position: sticky;
      top: 6em;
      background:var(--secondary-background);
      margin: 0 1em;
      border-radius: var(--border-radius);
    }

    .Category-list {
      position: sticky;
      top: 200px;
    }
  `)}
`;
