import styled from 'styled-components';

import { ButtonWhite } from '../../material/buttons/get_started/ButtonWhite';

function GetStarted(){
    return (
        <DivStarted>
            <div id='divtxt'>
                <p id='started'>
                    Get started today!
                </p>
            </div>
         
           <ButtonWhite name={'PICK A PLAN'}/>
        </DivStarted>
    )
}
export default GetStarted;

const DivStarted = styled.div `
position: absolute;
width: 100%;
height: 366px;
left: 0px;
right: 0px;
top: 2860px;
background: #4BA87D;

    #divtxt {
        position: relative;
        display: flex;
        max-width: 944px;
        width: 100%;
        height: 124px;
        margin: 0 auto;
        top: 82px;
        align-items: center;
        justify-content: center;
    }
    
    #started {
        font-family: 'Playfair Display';
        font-style: normal;
        font-weight: 900;
        font-size: 60px;
        line-height: 80px;
        text-align: center;
        color: #FFFFFF;
    }

    @media (max-width: 769px){
    height: 240px;
    top: 2000px;

        #divtxt {
            max-width: 617px;
            height: 81px;
            top: 45px;
        }

        #started {
            font-size: 42px;
            line-height: 56px;
        }
    }

    @media (max-width: 470px){
        top: 2680px;

        #started {
        line-height: 48px;
        }
    }
`