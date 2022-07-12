import styled from "styled-components";
import Screen from "../../../../style/Screen";

export const Styles = styled.button`
  position: relative;
  width: 4em;
  height: 4em;
  border-radius: 50%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5em;

  background: var(--secondary-background);
  border: 0.2em solid var(--secondary-letter-color);
  box-shadow: 0 0 0.2em 0 rgba(0, 0, 0, 0.2);

  transition: border-color 0.3s ease-in;
  cursor: pointer;

  ${Screen.md(`   
            display: none;
        
    `)}

  & .line-1,
    & .line-2,
    & .line-3 {
    height: 0.3em;
    border-radius: 0.1em;
    background-color: var(--secondary-letter-color);
    box-shadow: 0.2em 0.2em 0.2em 0 rgba(0, 0, 0, 0.2);
    transition: var(--transition);
  }

  & .line-1 {
    width: 3em;
  }
  & .line-2 {
    width: 3.5em;
  }
  & .line-3 {
    width: 3em;
  }

  &.open .line-1 {
    animation: day2-appear-liner-1 0.5s forwards;
  }
  &.open .line-2 {
    animation: day2-appear-liner-2 0.5s forwards;
  }
  &.open .line-3 {
    animation: day2-appear-liner-3 0.5s forwards;
  }

  &.no-animation .line-1,
  &.no-animation .line-2,
  &.no-animation .line-3 {
    animation: none;
  }

  @keyframes day2-appear-liner-1 {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(0.75em) rotate(0);
    }
    100% {
      transform: translateY(0.85em) rotate(45deg) scaleY(1.25);
    }
  }

  @keyframes day2-appear-liner-2 {
    0% {
      transform: scale(100%);
    }
    50% {
      transform: scale(70%);
    }
    51% {
      transform: scale(0%);
    }
    100% {
      transform: scale(0%);
    }
  }

  @keyframes day2-appear-liner-3 {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-0.6em) rotate(0);
    }
    100% {
      transform: translateY(-0.8em) rotate(135deg) scaleY(1.25);
    }
  }

  & .line-1 {
    animation: day2-disappear-liner-1 0.5s forwards;
  }
  & .line-2 {
    animation: day2-disappear-liner-2 0.5s forwards;
  }
  & .line-3 {
    animation: day2-disappear-liner-3 0.5s forwards;
  }

  @keyframes day2-disappear-liner-1 {
    0% {
      transform: translateY(0.75em) rotate(45deg);
    }
    50% {
      transform: translateY(0.75em) rotate(0);
    }
    100% {
      transform: translateY(0);
    }
  }

  @keyframes day2-disappear-liner-2 {
    0% {
      transform: scale(0%);
    }
    49% {
      transform: scale(0%);
    }
    50% {
      transform: scale(70%);
    }
    100% {
      transform: scale(100%);
    }
  }

  @keyframes day2-disappear-liner-3 {
    0% {
      transform: translateY(-0.6em) rotate(135deg);
    }
    50% {
      transform: translateY(-0.6em) rotate(0);
    }
    100% {
      transform: translateY(0);
    }
  }

  &:hover {
    border-color: var(--color);
  }

  &:hover .line-1,
  &:hover .line-2,
  &:hover .line-3 {
    background-color: var(--color);
  }
`;
