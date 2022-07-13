import Screen from "style/Screen"
import styled from "styled-components"

export const Styles = styled.nav`
    position: fixed;
    top: 0;
    left: 50%;
    width: 100%;
    /* max-width: 1600px; */
    padding: 1em;

    display: flex;
    align-items: center;
    justify-content: space-between;
    
    background-color: var(--secondary-background);
    border-bottom: 1px solid #00000099;
    box-shadow: var(--box-shadow);
    transform: translate(-50%);
    z-index: 100; 
        box-sizing: border-box;

    ${Screen.md(`
        border-radius: var(--border-radius);
        border: none;
        background-color: transparent;
        box-shadow: none;

        // padding-left: 10em;
        height:10em;
        position: sticky;
        top: -5em;
        transform: translate(0%);
        margin-bottom: 1em;
    `)}
    
    
    /****************  links  *********************/
    
    .nav__links{
        box-sizing: border-box;
        flex: 1 1 1px;
        position: absolute;
        bottom: -1px;
        right: 0;
        height: calc(100vh - 5em);
        padding: 1em;

        display: flex;
        align-items: flex-start;
        flex-direction: column;
        flex-wrap: wrap;
        gap: .5em;

        background-color: var(--secondary-background);
        
        transform: translate(110%,100%);
        /* transition: transform .5s ease-in-out; */
        z-index: 100;
    }

    .nav__links.open{
        transform: translate(0%,100%);
    }

    .nav__ul{
        order: 1;
        width: 100%;
        padding: 0;
        margin: 0;

        display: flex;
        flex-direction: column;
        gap: .5em;

        list-style: none;
    }

    .nav__links .nav__ul .btn{
        width: 100%;
    }

    .btnLogin{
        order: 1;
        font-size: .85em;
        width: 100%;
    }

    .nav-shadow{
        width: 100vw;
        height: 100vh;

        position: absolute;
        left: 0;
        bottom: -1px;

        background-color: #00000099;
        backdrop-filter: blur(4px);
        
        z-index: 99;
        cursor: pointer;
        transform: translate(100%,100%);
        /* transition: transform .5s ease-in-out; */
    }

    .nav-shadow.open{transform: translate(0%,100%);}

    .search-container{
        width: 100%;
    }

    ${Screen.md(`
        .nav__links{
            width: calc(100% - 2em);
            position: absolute;
            bottom: -1px;
            right: 0;
            height: 8em;
            padding: 0;
            margin: .5em 1em;

            align-items: center;
            justify-content: flex-end;
            flex-direction: row;
            gap: 0 .5em;
            // flex-wrap: nowrap;
            
            background-color: transparent;
            transform: translate(0);
            // transition: transform 0s ;
            z-index: 5; 
        }
        
        .nav__links.open{
            transform: translate(0);
        }

        .nav__ul{
            flex-direction: row;
            flex-wrap: nowrap;
            align-items: flex-start;
            width: auto;
            height: 4em;
        }

        .nav__ul .btn{
            width: auto;
        }
        
        .btnLogin{
            order: 1;
            width: auto;
            align-self: flex-start;
        }

        .nav-shadow{display: none;}

        .search-container{
            order: 1;
            height: 4em;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: var(--secondary-background);
            border-radius: var(--border-radius);
            padding: 0 1em 0 8.5em;
            box-shadow: var(--box-shadow);
        }

    `)}

` 