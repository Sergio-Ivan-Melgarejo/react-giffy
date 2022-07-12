import styled from "styled-components";

export const Styles = styled.div`
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .container{
        padding: 1em;
        width: 90%;
        max-width: 30em;

        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 1em;

        box-shadow: var(--box-shadow);
        border-radius: var(--border-radius);
        background-color: var(--secondary-background);


        h2{
            color: var(--primary-letter-color);
        }

        form{
            display: flex;
            flex-direction: column;
            justify-content: center;
            gap: .5em;

            .btn{
                width: 100%;
                box-shadow: var(--box-shadow) inset;
            }

            .error{
                font-size: .9em;
                color: var(--red);
            }
        }
    }
`