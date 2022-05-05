import styled from 'styled-components';

function Img(){
    return (
        <DivImg>
            <img src="./assets/woman.hero.jpg" alt="" />
        </DivImg>
    )
}
export default Img;

const DivImg = styled.div`
position: absolute;
width: 100%;
max-width: 680px;
right: 0px;

    img {
        position: absolute;
        max-width: 680px;
        width: 75%;
        height: 383px;
        right: 0px;
    }
    
    @media (max-width: 768px){
        img {
            max-width: 445px;
            height: 250px;
        }
    }

    @media (max-width: 470px){
        img {
            height: 169px;
            top: 45px;
        }
    }
`