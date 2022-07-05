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
      margin-left: 1em;
      border-radius: var(--border-radius);
    }

    .Category-list {
      position: sticky;
      top: 200px;
    }
  `)}
`;
