import styled from 'styled-components';

function Thumb2 (){
    return (
        <DivThumb>
              <img src='./assets/imgsect2.png' alt=''/>

            <DivText>
                <p id='txt'>Launch campaigns but also find new customers. Our unique platform handles campaigns from start to end.</p>
                <p id='learn'> Learn More {'>'}</p>
            </DivText>
        </DivThumb>
    )
}
export default Thumb2;

const DivThumb = styled.div`
position: absolute;
width:30%;
max-width: 320px;
height: 445px;
left: 32%;
top: 88px; 

    img {
        width: 100%;
        max-width: 320px;
    }

    @media (max-width: 769px){
        max-width: 209px;
    }

    @media (max-width: 470px){      
        height: 294px;
        width: 100%;
        right: 5px;
        top: 335px;
        left: unset;
    }
`

const DivText = styled.div `
position: absolute;
margin-top: -15px;
width: 100%;
height: 196px;
background: white;

    #txt {
        position: absolute;
        text-align: justify;
        width: 80%;
        height: 120px;
        left: 10px;
        margin-top: 10px;
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 26px;
    }

    #learn {
        position: absolute;
        width: 251px;
        height: 28px;
        top: 120px;
        color: #4BA87D;
        left: 10px;
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 800;
        font-size: 16px;
        line-height: 19px;
    }

    @media (max-width: 769px){
    height: 128px;

        #txt {
            font-size: 12px;
            line-height: 16px;
        }

        #learn {
            font-size: 12px;
            line-height: 14px;
            top: 90px;
        }
    }
`