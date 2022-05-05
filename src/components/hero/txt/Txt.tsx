import styled from 'styled-components';

import { ButtonGreen } from '../../../material/buttons/hero/ButtonGreen';
import {ButtonWhite} from '../../../material/buttons/hero/ButtonWhite';


function Txt(){
    return (
        <DivTxt>
            <h1>Create Stunning Email Campaigns</h1>
            <p id='txt'> Create and launch email campaigns that captivate your customers in just a few clicks.</p>
            <ButtonGreen name={'TRY NOW'}> </ButtonGreen>
            <ButtonWhite name={'GET A DEMO'}></ButtonWhite>
        </DivTxt>
    )
}
export default Txt;

const DivTxt = styled.div`
position: absolute;
width: 489px;
height: 317px;
left: 0px;
top: 22px;
z-index: 2;

    h1 {
        position: absolute;
        width: 100%;
        height: 142px;
        left: 0px;
        top: -45px;
        font-family: 'Playfair Display';
        font-style: normal;
        font-weight: 900;
        font-size: 59px;
        line-height: 71px;
    }

    #txt {
        position: absolute;
        width: 100%;
        height: 52px;
        left: 0px;
        top: 140px;
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 500;
        font-size: 19px;
        line-height: 26px;
    }

    @media (max-width: 768px){
        width: 95%;
        height: 208px;
        left: 20px;

        h1 {
            font-size: 38px;
            line-height: 46px;
            max-width: 290px;
        }

        #txt {
            font-size: 12px;
            line-height: 16px;
            top: 110px;
        }
    }

    @media (max-width: 470px){


        h1 {
            top: -45px;
        }

        #txt {
            top: 190px;
        }
    }

`