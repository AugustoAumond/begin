import styled from 'styled-components';

import Logo from './logo/Logo';
import Options from './options/Options';
import Links from './links/Links';

function Footer(){
    return (
        <DivFooter>
            <Logo/>
            <Options/>
            <Links/>
        </DivFooter>
         
    )
}
export default Footer;

const DivFooter = styled.div `
position: relative;
margin: 0 auto;
width: 100%;
max-width: 1440px;
height: 433px;
top: 2165px;

    @media (max-width: 769px){
        top: 1177px;
        height: 286px;
    }

    @media (max-width: 565px){
        top: 1075px;
    }

    @media (max-width: 470px){
        max-width: 320px;
        height: 486px;
        top: 585px;
    }
`