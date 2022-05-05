import styled from 'styled-components';

import Txt from './txt/Txt';
import Img from './img/Img';

function Hero(){

    return (
        <DivHero>
            <Txt/>
            <Img/>
        </DivHero>
    )
}
export default Hero;

const DivHero = styled.div `
position: absolute;
max-width: 1088px;
width: 100%;
height: 383px;
left: calc(50% - 1088px/2);
top: 130px;

    @media(max-width: 1100px){
        margin: auto;
        left: unset;
    }

    @media(max-width: 769px){
        top: 100px;
    }

    @media (max-width: 470px){
        max-width: 321px;
        height: 324px;
        position: relative;
        top: -4px;
    }
    
`