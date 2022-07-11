import Screen from "style/Screen";
import styled from "styled-components";

export const Styles = styled.form`
  position: relative;
  width: 100%;
  max-width: 12em;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: .5em;

  font-size: 1.2em;
  background: var(--secondary-background);
  border-radius: var(--border-radius);

  z-index: 10;

  .search {
    width: 100%;
    border-radius: 0;
    border: none;
    outline-color: var(--color);
    border-radius: var(--border-radius);

    background-color: var(--primary-background);
    color: var(--primary-letter-color);
    box-shadow: var(--box-shadow) inset;
  }

  .btn-search {
    flex: 1 1 1px;
    border-radius: 0;
    border-radius: var(--border-radius);
    border: none;
  }

  .btn-select:hover{
    color: var(--color);
    background-color: var(--primary-background);
  }

  .times{
    position: absolute;
    left: 0;
    top: 0;
    background: #e32020;
    color: #fff;
    font-weight: bolder;
    padding:  .3em .6em; 
    border-radius: .3em;
    transform: translate(-100%,-1.5em);

    &::after{
      content: "";
      position: absolute;
      width: .5em;
      height: .5em;
      bottom: 1px;
      right: 0;
      transform: translate(-50%, 100%);
      background: #e32020;
      clip-path: polygon(80% 0, 0 0, 100% 100%);
    }
  }

  .container{}

  .container{
    width: 100%;
    position: relative;
  }

  ${Screen.md(`
    flex: 1 1 1px;
    max-width: none;
    flex-wrap: nowrap;
    gap: 0;

    .search {
      border-radius: 0;
    }
    
    .container{order: 2;}

    .btn-search {
      order: 1;
      border-top-right-radius: 2px;
      border-bottom-right-radius: 2px;
    }

    .btn-select{
      order: 3;
      border-top-left-radius: 2px;
      border-bottom-left-radius: 2px;
    }
  `)}
`;
