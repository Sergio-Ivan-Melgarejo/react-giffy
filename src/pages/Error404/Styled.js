import styled from "styled-components";

export const Styles = styled.div`

    .msg{
        width: 100%;
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

    .btn{
        position: fixed;
        bottom: 1em;
        left: 50%;
        transform: translateX(-50%);
        box-shadow: var(--box-shadow);
    }
`