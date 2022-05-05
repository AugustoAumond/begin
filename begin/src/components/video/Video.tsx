import styled from 'styled-components';

import {ButtonWhite} from './../../material/buttons/video/ButtonWhite'

function Video(){
    return (
        <DivVideo>
            <Img src="./assets/ImgVideo.png" alt="" />
            <h1>Reach More Customers</h1>
            <ButtonWhite name={'LEARN HOW'}/>
        </DivVideo>
    )
}

export default Video;

const DivVideo = styled.div`
position: absolute;
width: 98%;
top: 779px;
text-align: center;

    h1 {
        position: absolute;
        width: 656px;
        height: 80px;
        left: calc(50% - 656px/2 + 1px);
        margin-top: -350px;
        font-family: 'Playfair Display';
        font-style: normal;
        font-weight: 900;
        font-size: 60px;
        line-height: 80px;
        color: white;
    }

    @media (max-width: 768px){
    top: 505px;

        h1 {
            font-size: 38px;
            line-height: 51px;         
            margin-top: -240px;
        }
    }

    @media (max-width: 470px){
        h1 {
            font-size: 22px;
            line-height: 29px;
            margin-top: -130px;
        }
    }
`

const Img = styled.img`
display: flex;
margin: 0 auto;
width: 100%;
max-width: 944px;
height: 526px;

    @media (max-width: 768px){
        max-width: 616px;
        height: 347px;
    }

    @media (max-width: 470px){
        max-width: 304px;
        height: 171px;
    }

`