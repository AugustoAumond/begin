import styled from 'styled-components';

import Txt from './txt/Txt';
import Logo from './logo/Logo';

function Section3(){
    return (
        <DivSection>
            <Txt/>
            <Logo/> 
        </DivSection>
    )
}
export default Section3;

const DivSection = styled.div`
position: absolute;
width: 100%;
max-width: 1440px;
height: 211px;
top: 2640px;

    @media (max-width: 769px){
        height: 138px;
        top: 1805px;
    }

    @media (max-width: 570px){
        top: 1865px;
    }

    @media (max-width: 470px){
        max-width: 281px;
        height: 242px;
        top: 320px;
        margin: auto;
        position: relative;
    }
`