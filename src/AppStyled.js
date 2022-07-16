import Screen from "style/Screen";
import styled from "styled-components";

export const AppStyled = styled.div`
  min-height: 100vh;
  max-width: 1600px;
  margin: auto;
  padding: 6em 1em 0;

  display: grid;
  grid-template-rows: 1fr min-content;

  .App-main {
    display: grid;
    grid-template-columns: 1fr;
    margin: 1em 0;
  }

  ${Screen.md(`
    padding-top: 0;
    grid-template-rows: min-content 1fr min-content;
  `)}

  ${Screen.lg(`
    .App-main {
      grid-template-columns: 17em 1fr;
      position: relative;
    }

    .App-results{
      order: 2;
    }

    .App-category {
      height: 100%;
      position: static;
    }

    .App-category > div {
      position: sticky;
      top: 6em;
      background:var(--secondary-background);
      margin-right: 1em;
      border-radius: var(--border-radius);
      box-shadow: var(--box-shadow);
    }

    .Category-list {
      position: sticky;
      top: 200px;
    }
  `)}
`;
