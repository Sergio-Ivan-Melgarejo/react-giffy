import styled from "styled-components";
import Screen from "style/Screen";

export const Styles = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: hidden;

    .detail__gif{
        max-width: 800px;
        width: 95%;
        margin: 0 auto;
        padding: 2em;
    }

    .detail__container-img{
        position: relative;
        background-color: var(--color);
    }

    .detail__img{
        display: block;
        width: 100%;
        height: 100%;
        object-fit: fill;
        pointer-events: none;
        user-select: none;
    }

    .detail__id{
        position: absolute;
        top: .5em;
        left: .5em;
        margin: 0;
        color: var(--text-color-1);
        opacity: 0.5;
        text-shadow: 0 0 3px #000, 0 0 3px #000, 0 0 3px #000;
    }

    .detail__top,
    .detail__bottom,
    .detail__right,
    .detail__left{
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .detail__top,
    .detail__bottom{
        flex-direction: column;
        height: 1.5em;
        position: absolute;
        width: 100%;
        left: 0;
    }

    .detail__top .detail__line,
    .detail__bottom .detail__line{
        height: .5em;
    }

    .detail__top .detail__line:nth-child(3),
    .detail__bottom .detail__line:nth-child(1){
        width: calc(100% - 2px);
    }

    .detail__top .detail__line:nth-child(2),
    .detail__bottom .detail__line:nth-child(2){
        width: 80%;
    }

    .detail__top .detail__line:nth-child(1),
    .detail__bottom .detail__line:nth-child(3){
        width: 60%;
    }

    .detail__top{
        top: 1px;
        transform: translateY(-100%);
    }

    .detail__bottom{
        bottom: 1px;
        transform: translateY(100%);
    }

    .detail__right,
    .detail__left{
        position: absolute;
        width: 1.5em;
        height: 100%;
        top: 0;
    }

    .detail__right{
        right: 1px;
        transform: translate(100%);
    }

    .detail__left{
        left: 1px;
        transform: translate(-100%);
    }

    .detail__right .detail__line,
    .detail__left .detail__line{
        width: .5em;
    }

    .detail__left .detail__line:nth-child(3),
    .detail__right .detail__line:nth-child(1){
        height: calc(100% - 2px);
    }

    .detail__left .detail__line:nth-child(2),
    .detail__right .detail__line:nth-child(2){
        height: 80%;
    }

    .detail__left .detail__line:nth-child(1),
    .detail__right .detail__line:nth-child(3){
        height: 60%;
    }

    ${Screen.md(`
        .detail__top .detail__line{
            border-top-left-radius: var(--border-radius);
            border-top-right-radius: var(--border-radius);
        }

        .detail__bottom .detail__line{
            border-bottom-left-radius: var(--border-radius);
            border-bottom-right-radius: var(--border-radius);
        }

        .detail__right .detail__line{
            border-top-right-radius: var(--border-radius);
            border-bottom-right-radius: var(--border-radius);
        }

        .detail__left .detail__line{
            border-top-left-radius: var(--border-radius);
            border-bottom-left-radius: var(--border-radius);
        }
    `)}

    .detail__top,
    .detail__bottom {
        animation: detail-1 1s ease-in forwards;
        opacity: 0;
        height: 0em;
    }

    .detail__right,
    .detail__left{
        animation: detail-2 1s ease-in forwards;
        opacity: 0;
        width: 0em;
    }

    .detail__line-1{animation-delay: .1s;
        background: var(--line-color-3);
    } 
    .detail__line-2{animation-delay: .2;
        background: var(--line-color-2);
    } 
    .detail__line-3{animation-delay: .3s;
        background: var(--line-color-1);
    }

    @keyframes detail-1 {
        100%{ 
            height: 1.5em;
            opacity: 1;
            width: calc(100% + 1em);
            left: -.5em;
        }
    }

    @keyframes detail-2 {
        100%{      
        width: 1.5em;
            opacity: 1;
            height: calc(100% + 1em);
            top: -.5em;
        }
    }
`