import styled from 'styled-components';

import SectionCase from './cases/Case';
import SectionTitle from './title/SectionTitle';
import SectionInput from './input/SectionInput';

function Section2 (){
    return (
        <DivSection>
            <SectionCase/>
            <SectionTitle/>
            <SectionInput/>
        </DivSection>
    )
}
export default Section2;

const DivSection = styled.div`
position: relative;
display: flex;
margin: 0 auto;
width:100%;
max-width: 1098px;
height: 530px;
top: 1520px;

    section {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        flex-wrap: wrap;
        width:100%
    }

    @media (max-width: 769px){
        top: 800px;
    }

    @media (max-width: 565px){
        top: 720px;
    }

    @media (max-width: 470px){
        max-width: 239px;
        height: 843px;
        top: 300px;

        section {
            grid-template-columns: repeat(1, 1fr);
        }
    }
    
`