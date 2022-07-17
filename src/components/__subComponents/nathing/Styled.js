import styled from "styled-components";

export const Styles = styled.div`
    .msg{
        max-width: 30em;
        padding: 1em 3em;
        margin: 0 auto 5em;

        img{
            width: 100%;
        }

        p{
            text-align: center;
            font-weight: bolder;
            color: var(--primary-letter-color);

            span{
                display: block;
            }
        }
    }
`