import styled from "styled-components";
import Screen from "style/Screen";

export const Styles = styled.div`
  /* margin-bottom: 1.5em;
  min-height: 15em;
  max-height: 25em; */
  /* width: 100%; */
  height: 20em;
  text-align: center;
  position: relative;

  .gif__link {
    display: block;
    background-color: var(--color);
    height: 100%;
    width: 100%;
    position: relative;
    overflow: hidden;
  }

  .gif__img {
    display: block;
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: center;
    transition: all 0.3s ease-in;
  }

  .gif__title {
    position: absolute;
    bottom: 0;
    left: 0;
    margin: 0;
    padding: 0 .5em;
    width: 100%;
    height: 50%;
    font-size: 0.9em;

    display: flex;
    align-items: center;
    justify-content: center;

    background: linear-gradient(180deg, transparent 0%, #000);
    color: #fff;

    transition: all 0.3s ease-in;
  }

  .gif__link:hover > .gif__img {
    transform: scale(1.5);
  }

  .gif__link:hover > .gif__title {
    background: linear-gradient(180deg, transparent 0%, var(--color));
  }

  .gif__footer {
    height: 1em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .gif__line {
    flex: 1 1 1px;
    margin: auto;
  }

  .gif__line:nth-child(1) {
    width: 100%;
    background-color: var(--line-color-1);
  }
  .gif__line:nth-child(2) {
    width: 90%;
    background-color: var(--line-color-2);
  }
  .gif__line:nth-child(3) {
    width: 80%;
    background-color: var(--line-color-3);
  }

  ${Screen.md(`
    .gif__link {
      border-top-left-radius: var(--border-radius);
      border-top-right-radius: var(--border-radius);
    }
    .gif__line{
        border-bottom-left-radius: var(--border-radius);
        border-bottom-right-radius: var(--border-radius);
    }
  `)}
`;
