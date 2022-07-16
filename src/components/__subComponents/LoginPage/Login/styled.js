import Screen from "style/Screen";
import styled from "styled-components";

export const Styles = styled.div`
    width: 80vw;
    max-width: 20em;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    font-size: 1em;
    ${Screen.sm("font-size: 1.10em")}
    ${Screen.md("font-size: 1.20em")}
    ${Screen.lg("font-size: 1.30em")}

    .login-container{
        padding: 1em;
        margin: 1em;
        width: 100%;

        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 1em;

        box-shadow: var(--box-shadow);
        border-radius: var(--border-radius);
        background-color: var(--secondary-background);

        h2{
            color: var(--color);
            padding-bottom: .5em;
            text-align: left;
        }

        form{
            display: flex;
            flex-direction: column;
            justify-content: center;
            gap: 1em;

            div:not(div:nth-child(3)){
                position: relative;
                padding-top: .5em;
            }

            label{
                position: absolute;
                top: 0;
                left: 0;
                font-size: .8em;
                color: var(--secondary-letter-color);
                font-weight: bolder;
                transform: translateY(-50%);
            }

            .btn:not(.btn-2){
                width: 100%;
                font-size: 1em;
                box-shadow: var(--box-shadow) inset;
                color: var(--primary-letter-color);
                background-color: var(--primary-background);
            }

            .btn-2{
                width: 100%;
                font-size: 1em;
                color: var(--primary-letter-color);
            }
        }

        .register{
            font-size: .9em;
            color: var(--color);
            transition: all .2s ease;

            &:hover{
               color: var(--color-hover);
               text-decoration: underline;
            }
        }
    }
`