import styled from 'styled-components';

function Txt () {
    return (
        <DivTxt>
            <h1>
            All the best brands already use us.
            </h1>
        </DivTxt>
    )
}
export default Txt;

const DivTxt = styled.div `
width: 100%;
position: relative;
max-width: 944px;
height: 124px;
top: 0px;
margin: auto;

    h1 {
        margin: 0 auto;
        width:100%;
        max-width: 400px;
        font-family: 'Playfair Display';
        font-style: normal;
        font-weight: 900;
        font-size: 44px;
        line-height: 48px;
        text-align: center;
        color: #000000;
    }

    @media (max-width: 769px){
    max-width: 617px;
    height: 110px;

        h1 {
            font-size: 28px;
            line-height: 36px;
        }
    }

    @media (max-width: 470px){
        h1 {
            font-size: 26px;
        }
    }
`