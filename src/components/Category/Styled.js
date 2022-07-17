import Screen from "style/Screen";
import styled from "styled-components";

export const Styles = styled.section`
  display: block;
  padding: 1em;

  .ul {
    list-style-position: inside;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.5em;
  }

  ${Screen.lg(`
    .ul {
      justify-content: left;
    }
  `)}
`

const generateMultiColorCategory = props => {
  const NEED_WHITE_COLOR = [3, 4]
  const colorIndex = props.index % 5 + 1
  const needWhite = NEED_WHITE_COLOR.includes(colorIndex)
  const colorText = needWhite ? '#fff' : '#222'

  return `
    background-color: var(--brand-color_${colorIndex});
    color: ${colorText};`
}

export const LiStyles = styled.section`
  order: ${({index}) =>  `${index % 5 + 1 }`};

  .btn {
    font-size: 0.75em;  
    ${generateMultiColorCategory}
  }
`
