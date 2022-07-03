import Screen from "style/Screen"
import styled from "styled-components"

export const Styles = styled.nav`
    position: fixed;
    top: 0;
    left: 50%;
    transform: translate(-50%);
    width: 100%;
    padding: 1em;
    z-index: 100; 
    max-width: 1600px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: var(--secondary-background);
    border-bottom: 1px solid var(--primary-background);
    box-shadow: var(--box-shadow);

    ${Screen.md(`
        border-bottom-left-radius: var(--border-radius);
        border-bottom-right-radius: var(--border-radius);
    `)}


    /****************  LOGO  *********************/

    .logo-container{
        position: relative;
        display: block;
        padding: 0;
        width: 3em;
        height: 3em;
        margin-right: 5.5em;
        background-color: var(--primary-background);
        border-radius: 50%;
    }

    .logo{
        display: block;
        width: 100%;
        height: 100%;
        border-radius: 50%;
    }

    .logo-container::after, 
    .logo-container::before{
        content: "";
        position: absolute;
        border-radius: 50%;
        border-width: .3em;
        border-color: var(--primary-background) transparent var(--primary-background) var(--primary-background);
        border-style: solid;
        transition: transform .5s ease-in-out, border-color .5s ease-in-out;
    }

    .logo-container::before{
        width: calc(100% + .7em);
        height: calc(100% + .7em);
        left: -.35em;
        top: -.35em;
    }

    .logo-container::after{
        width: calc(100% + 1.4em);
        height: calc(100% + 1.4em);
        left: -.7em;
        top: -.7em;
    }

    .logo-container:hover::after{
        transform: rotate(360deg);
        border-color: var(--color) transparent var(--color) var(--color);
    }

    .logo-container:hover::before{
        transform: rotate(-360deg);
        border-color: var(--color) transparent var(--color) var(--color);
    }

    .logo-container h1{
        position: absolute;
        font-size: 1.5em;
        right: 0;
        top: 50%;
        transform: translate(100%,-50%);
        padding: .75em;
        margin: 0;
        font-weight: bolder;
        display: none;
    }

    ${Screen.md(`   
        .logo-container h1{display: block;}
    `)}


    /****************  nav-btn  *********************/

    .nav-btn{
        position: relative;
        width: 4em;
        height: 4em;
        border-radius: 50%;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: .5em;

        background: var(--secondary-background);
        border: .2em solid var(--primary-background);
        box-shadow:  0 0 .2em 0 rgba(0,0,0,0.2);

        transition: border-color .3s ease-in;
        cursor: pointer;
    }

    ${Screen.md(`   
        .nav-btn{
            display: none;
        }   
    `)}

    .nav-btn .line-1,
    .nav-btn .line-2,
    .nav-btn .line-3{
        height: .3em;
        border-radius: .1em;
        background-color: var(--primary-background);
        box-shadow: .2em .2em .2em 0 rgba(0,0,0,0.2);
        transition: var(--transition);
    }
        
    .nav-btn .line-1{width: 3em;}
    .nav-btn .line-2{width: 3.5em;}
    .nav-btn .line-3{width: 3em;}

    .nav-btn.open .line-1{animation: day2-appear-liner-1 .5s forwards}
    .nav-btn.open .line-2{animation: day2-appear-liner-2 .5s forwards}
    .nav-btn.open .line-3{animation: day2-appear-liner-3 .5s forwards}

    .nav-btn.no-animation .line-1,
    .nav-btn.no-animation .line-2,
    .nav-btn.no-animation .line-3{animation: none;}

    @keyframes day2-appear-liner-1 {
        0%{transform: translateY(0) }
        50%{transform: translateY(.75em) rotate(0)}
        100%{transform: translateY(.85em) rotate(45deg) scaleY(1.25)}
    }

    @keyframes day2-appear-liner-2 {
        0%{transform: scale(100%)}
        50%{transform: scale(70%)}
        51%{transform: scale(0%)}
        100%{transform: scale(0%)}
    }

    @keyframes day2-appear-liner-3 {
        0%{transform: translateY(0) }
        50%{transform: translateY(-.6em) rotate(0)}
        100%{transform: translateY(-.8em) rotate(135deg) scaleY(1.25)}
    }

    .nav-btn .line-1{animation: day2-disappear-liner-1 .5s forwards}
    .nav-btn .line-2{animation: day2-disappear-liner-2 .5s forwards}
    .nav-btn .line-3{animation: day2-disappear-liner-3 .5s forwards}

    @keyframes day2-disappear-liner-1 {
        0%{transform: translateY(.75em) rotate(45deg)}
        50%{transform: translateY(.75em) rotate(0)}
        100%{transform: translateY(0)}
    }

    @keyframes day2-disappear-liner-2 {
        0%{transform: scale(0%)}
        49%{transform: scale(0%)}
        50%{transform: scale(70%)}
        100%{transform: scale(100%)}
    }

    @keyframes day2-disappear-liner-3 {
        0%{transform: translateY(-.6em) rotate(135deg)}
        50%{transform: translateY(-.6em) rotate(0)}
        100%{transform: translateY(0)}
    }

    .nav-btn:hover{
        border-color: var(--color);
    }

    .nav-btn:hover .line-1,
    .nav-btn:hover .line-2,
    .nav-btn:hover .line-3{
        background-color: var(--color);
    }

    
    /****************  links  *********************/

    .nav__links{
        gap: .5em;
        background-color: var(--bg-card-color);
        display: none;
        visibility: hidden;
        opacity: 0;
        transition: transform .3s ease-in, opacity .3s ease-in, visibility .3s ease-in;
    }

    ${Screen.md(`
        .nav__links{
            display: flex;
            visibility: visible;
            opacity: 1;
        }
    `)}

    .nav__ul{
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        flex-direction: column;
        gap: .5em;
    }

    /****************  side bar  *********************/

    .nav__side-bar{
        position: absolute;
        bottom: -1px;
        right: 0;
        height: 100vh;
        min-width: 300px;
        padding: 1em;

        display: flex;
        flex-direction: column;
        gap: .5em;

        background-color:  var(--secondary-background);
        
        transform: translate(100%,100%);
        transition: transform .5s ease-in-out;
        z-index: 100;
    }

    .nav__side-bar.open{
        transform: translate(0%,100%);
    }

    .nav__side-bar .nav__ul{
        flex-direction: column;
    }

    .nav__side-bar .nav__ul .btn{
        width: 100%;
    }

    .nav-shadow{
        width: 100vw;
        height: 100vh;

        position: absolute;
        left: 0;
        bottom: -1px;

        background-color: #00000099;
        
        z-index: 99;
        cursor: pointer;
        transform: translate(100%,100%);
        transition: transform .5s ease-in-out;
    }

    .nav-shadow.open{transform: translate(0%,100%);}

    ${Screen.md(`
        .nav__side-bar{
            display: none;
            visibility: hidden;
            opacity: 0;
        }

        .nav__ul{
            flex-direction: row;
        }

        .nav__ul .btn{
            width: 100%;
        }

        .nav-shadow{display: none;}
    `)}
` 