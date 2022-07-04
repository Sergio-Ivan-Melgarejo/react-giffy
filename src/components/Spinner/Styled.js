import styled, { keyframes } from "styled-components";

const animation = keyframes`
0% {
    transform: translateY(100%) scale(.7);
    background: var(--color);
}
50%{
    transform: translateY(-200%) scale(1.1);
    background: var(--color-hover);
}
100% {
    transform: translateY(100%) scale(.7);
    background: var(--color);
}
`;

export const Styles = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  min-width: 10em;
  min-height: 10em;

  .container {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 10em;
    height: 10em;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1em;

    transform: translate(-50%, -50%);

    div {
      width: 1em;
      height: 1em;
      transform: translateY(100%) scale(0.5);
      animation: ${animation} 1.2s ease-in-out infinite;
      background: var(--color);
    }

    div:nth-child(1) {
      animation-delay: 0.15s;
    }
    div:nth-child(2) {
      animation-delay: 0.3s;
    }
    div:nth-child(3) {
      animation-delay: 0.45s;
    }
    div:nth-child(4) {
      animation-delay: 0.6s;
    }
    div:nth-child(5) {
      animation-delay: 0.75s;
    }
  }
`;
