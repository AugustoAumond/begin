import styled from 'styled-components';

import Thumb1 from './thumb1/Thumb1';
import Thumb2 from './thumb2/thumb2';
import SecTxt from './sectxt/SecTxt';

function Section1 (){
    return (
        <DivSection>
            <Thumb1/>
            <Thumb2/>
            <SecTxt/>
        </DivSection>
    )
}
export default Section1;

const DivSection = styled.div`
position: relative;
display: flex;
margin: 0 auto;
width:100%;
max-width: 1098px;
height: 533px;
top: 1385px;

    @media (max-width: 769px){
        top: 880px;
    }

    @media (max-width: 565px){
        top: 800px;
    }

    @media (max-width: 470px){
        top: 275px;
        max-width: 302px;
        height: 823px;
    }
`