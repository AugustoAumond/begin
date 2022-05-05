import styled from 'styled-components';

function Logo (){
    return (
        <DivLogo>
            <DivSvg>
                <svg id='mail' width="129" height="64" viewBox="0 0 129 64" fill="none" xmlns="http://www.w3.org/2000/svg" href="http://www.w3.org/1999/xlink">
                <path d="M0 -0.25H129V64.25H0V-0.25Z" fill="url(#pattern0)"/>
                <defs>
                <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use href="#image0_1_129" transform="translate(0.00905105) scale(0.000833333 0.00166667)"/>
                </pattern>
                <image id="image0_1_129" width="1200" height="600" href="data:image/png;base64,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"/>
                </defs>
                </svg> 
            </DivSvg> 
            <Txt>NinjaMail</Txt>          
        </DivLogo>
    )
}
export default Logo;

const DivLogo = styled.div`
position: absolute;
display: flex;
top: 22px;
left: 4%;
max-width: 269.77px;
width: 100%;
height: 81.28px;

    @media (max-width: 900px){
        left: 0px;
        width: 155px;
        height: 52px;
    }
`

const DivSvg = styled.div `
position: relative;
width: 129px;
left: 0px;
top: 0px;
bottom: 17.28px;
    
    
    #mail {
        position: absolute;
        max-width: 129px;
        width: 100%;
        right: 0px;
        top: -0.25px;
        bottom: -0.25px;
    }

    @media (max-width: 900px){
        width: 84px;
    }

    @media (max-width: 565px){      

        #mail {
            width: 84px;
        }
    }
`

const Txt = styled.p `
position: absolute;
height: 41px;
left: 39.95%;
right: -0.37%;
top: calc(7% - 41px/2 - 12.76px);
font-family: 'Raleway';
font-style: normal;
font-weight: 900;
font-size: 35px;
line-height: 41px;

    @media (max-width: 900px){
        font-size: 22px;
        line-height: 26px;
        top: -3px;
    }

    @media (max-width: 565px){
        font-size: 22px;
        line-height: 26px;
        left: 42%;
    }


`