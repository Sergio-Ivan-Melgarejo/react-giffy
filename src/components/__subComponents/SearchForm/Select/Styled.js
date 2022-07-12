import styled from "styled-components";

export const Styles = styled.div`
    order: 3;
    flex: 1 1 1px;
    position: relative;
    margin: 0;
    min-width: 5em;

    select{
        appearance:none;
        width: 100%;
    }

    .arrow{
        width: 1em;
        height: 1em;
        fill: red;
        background-color: var(--color);
        padding: .1em;
        border-radius: 50%;
        position: absolute;
        right: 0;
        top: 50%;
        transform: translate(-50%, -50%);
        user-select: none;
        pointer-events: none;
    }

        &:hover .arrow{
            background-color: var(--color-hover);
        }

`