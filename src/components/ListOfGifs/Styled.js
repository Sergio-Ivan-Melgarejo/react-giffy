import Screen from "style/Screen";
import styled from "styled-components";

export const Styles = styled.div`
  display: grid;
  grid-gap: 2em 1em;
  grid-template-columns: repeat(auto-fit, minmax(175px, 1fr));
  grid-template-rows: masonry;
  margin-bottom: 2em;

  ${Screen.md(`
        grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    `)}
`;
