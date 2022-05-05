import styled from 'styled-components';

import Logo from './logo/Logo';
import Options from './options/Options';

function Menu (){
    return (
        <BodyMenu>
            <Logo/>
            <Options/>
        </BodyMenu>
    )
}

export default Menu;

const BodyMenu = styled.div`
position: absolute;
width: 100%;
max-width: 1440px;
min-width: 320px;
height: 102px;
margin: 0 auto;
z-index: 5;

    @media (max-width: 565px){
        position: relative;
        margin: auto;
        display: flex;    
    }
`