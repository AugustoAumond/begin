import styled from 'styled-components';

function Links(){
    return (
        <DivLinks>
            <Line/>
            
            <DivTxt>
                <p id='txt'>
                    NinjaMail is a sample project for Quest AI. © 2019 Quest AI, All rights reserved.
                </p>
            </DivTxt>

            <LastLinks>
                <p id='terms'> Terms & Conditions </p>

                <p id='privacy'> Privacy Policy </p>
            </LastLinks>
        </DivLinks>
         
    )
}
export default Links;

const DivLinks = styled.div `
position: absolute;
bottom: 0px;
height: 96px;
width: 100%;  
top: 390px;

    @media (max-width: 769px){
        top: 210px;
    }

    @media (max-width: 565px){
        top: 225px;
    }

    @media (max-width: 470px){
        top: 360px;
    }
`

const Line = styled.div `
position: absolute;
height: 2px;
left: 176px;
right: 176px;
background: #DBDBDB;

    @media (max-width: 769px){
        left: 29px;
        right: 28px;
    }

    @media (max-width: 470px){
        display: none;
    }
`

const DivTxt = styled.div `
width: 100%;

    #txt {
        position: absolute;
        width:100%;
        max-width: 555px;
        height: 18px;
        right: 42%;
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 15px;
        line-height: 18px;
        color: #000000;
    }

    @media (max-width: 1000px){
        #txt {
            left: 15px;
            max-width: 375px;

            @media (max-width: 769px){   
                margin-top: 15px;
                font-size: 9px;
                line-height: 11px;
            }

            @media (max-width: 590px){
                max-width: 150px;
                
            }

            @media (max-width: 470px){
                max-width: 186px;
            }
        } 
    }
`

const LastLinks = styled.div `
position: relative;
display: flex;
width: 273px;
height: 18px;
right: -70%;
justify-content: space-between;
align-items: center;
top: 15px;

    @media (max-width: 1000px){   
        left: 57%;  
    }

    #terms {
        width: 139px;
        height: 18px;
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 15px;
        line-height: 18px;

    }

    #privacy {
        width: 99px;
        height: 18px;
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 15px;
        line-height: 18px;
    }

    @media (max-width: 769px){
    max-width: 174px;
    top: 17px;
    left: unset;

        #terms {
            font-size: 9px;
            line-height: 11px;
        }

        #privacy {
            font-size: 9px;
            line-height: 11px;
        }
    }

    @media (max-width: 470px){
    display: block;
    max-width: 174px;
    left: 15px;
    top: 50px;

        #privacy {
            margin-top: -8px;
        }
    }

`