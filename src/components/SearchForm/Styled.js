import Screen from "style/Screen";
import styled from "styled-components";

export const Styles = styled.form`
  /* position: sticky;
  top: 5em; 
  

  pasarlo a nav
  */
  position: relative;
  width: 100%;
  margin: 0 auto 1em;
  padding: 1em;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 1.2em;
  background: var(--secondary-background);
  border-radius: var(--border-radius);

  z-index: 10;

  .search {
    width: 100%;
    border-radius: 0;
    outline-color: var(--color);
    border-top-left-radius: var(--border-radius);
    border-bottom-left-radius: var(--border-radius);
    background-color: var(--secondary-background);
    color: var(--primary-letter-color);
    border: none;
    box-shadow: 0 0 1em var(--primary-background) inset;
  }

  .btn-search {
    border-radius: 0;
    border-top-right-radius: var(--border-radius);
    border-bottom-right-radius: var(--border-radius);
    border: none;
    max-width: 200px;
  }

  ${Screen.md(`
     .search {
      border-top-left-radius: 2px;
      border-bottom-left-radius: 2px;
    }
    .btn-search {
      border-top-right-radius: 2px;
      border-bottom-right-radius: 2px;
    }
  `)}

  .times{
    position: absolute;
    left: 0;
    top: 0;
    background: #e32020;
    color: #fff;
    font-weight: bolder;
    padding:  .3em .6em; 
    border-radius: .3em;
    transform: translate(-50%,-50%);

    &::after{
      content: "";
      position: absolute;
      width: .5em;
      height: .5em;
      bottom: 0;
      left: 50%;
      transform: translate(50%, 100%);
      background: #e32020;
      clip-path: polygon(80% 0, 0 0, 100% 100%);
    }
  }
`;
