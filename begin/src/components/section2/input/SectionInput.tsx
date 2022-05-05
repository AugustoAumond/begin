import styled from 'styled-components';

import {ButtonGreen} from '../../../material/buttons/section2/ButtonGreen';
import {EmailStorage} from './Input.action';

function SectionInput(){

    return (
        <DivInput>
            <input id='input'/>
            <label id='label'> Enter your email</label>

            <ButtonGreen onClick={(()=> EmailStorage())} name={'JOIN OUR LIST'}/>

            <p id='txt'>Thanks! Email received.</p>
        </DivInput>
    )
}
export default SectionInput;

const DivInput = styled.div`
position: absolute;
width: 100%;
max-width: 668px;
height: 110px;
left: calc(50% - 668px/2 + 1.5px);
top: 420px;

    input {
        position: absolute;
        padding: 10px;
        width: 100%;
        max-width: 420px;
        height: 65px;
        background: #FFFFFF;
        border: 1px solid #9F9F9F;
        box-sizing: border-box;
        border-radius: 5px;
    }

    label {
        position: absolute;
        width: 176px;
        height: 25px;
        left: 25px;
        top: 19px;
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 500;
        font-size: 21px;
        line-height: 25px;
    }

    #txt {
        position: absolute;
        display: none;
        width: 254px;
        height: 25px;
        left: 25px;
        top: 55px;
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 500;
        font-size: 21px;
        line-height: 25px;
        letter-spacing: 1.05px;
        color: #4BA87D;
    }

    @media (max-width: 769px){
    max-width: 436px;
    width: 100%;
    top: 330px;
    right: 10%;
    left: unset;

        input {
            max-width: 275px;
            height: 42px;
        }

        label {
            margin-top: -8px;
        }

        #txt {
            font-size: 13px;
            line-height: 15px;
        }

    }

    @media (max-width: 535px){
        left: 35px;
    }

    @media (max-width: 470px){
    max-width: 223px;
    height: 111px;
    right: 0px;
    left: 0px;
    top: 670px;

        input {
            max-width: 223px;
        }

        label {
            margin-top: -8px;
            width: 109px;
            height: 15px;
            font-size: 13px;
            line-height: 15px;
        }

        #txt {
            top: 40px;
        }
    }
`