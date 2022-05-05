import styled from 'styled-components';

import { ButtonGreen } from '../../../material/buttons/menu/ButtonGreen';

function Options (){
    return (
        <DivOptions>
            <DivUL>
                <section>
                    <ul>
                        <li> <div>  <a href="">FEATURES </a>   </div></li>
                        <li> <div> <a href="">PRICING</a>   </div></li>
                        <li> <div><a href="">SERVICES </a></div></li>
                        <li> <div><a href="">PARTNERS</a> </div></li>
                    </ul>
                </section>
            </DivUL>

            <ButtonGreen name={'SIGNE UP FREE'}>  </ButtonGreen>

        </DivOptions>
    )
}
export default Options;

const DivOptions = styled.div `
position: absolute;
width: 100%;
max-width: 680px;
height: 41px;
right: 7%;
top: 28px;
display: flex;

    @media (max-width: 900px){
        max-width: 443px;
        height: 25px;
        right: 15%;
        top: 35px;
    }

    @media (max-width: 565px){
        right: 0px;
        width: 110px;
    }
`

const DivUL = styled.div`
display: flex;
width: 100%;

@media (max-width: 565px){
    display: none;
}

    section {
        display: flex;
    
    ul {
        width: 100%;
        display: flex;
        margin-top: 13px;
        margin-left: 80px;
           
        li {
            width: 18%;
            list-style: none;
            font-size: 17px;
            font-family: 'Raleway';
            font-style: normal;
            font-weight: 800;
            margin-left: 25px;

            @media (max-width: 900px){
                font-size: 11px;
                line-height: 13px;   
            }

            div {
                border-bottom: solid #4BA87D;;
                width: 115%;
            }  

            a {
                text-decoration: none;
                color: black;
            }
        }   
    }

    
`