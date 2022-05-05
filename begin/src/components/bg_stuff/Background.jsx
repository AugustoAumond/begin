import styled from 'styled-components';

function Background(){
    return (
        <DivBackground>
            <img src={`./assets/background_oficial.png`} alt="" />
        </DivBackground>
         
    )
}
export default Background;

const DivBackground = styled.div`
position: relative;
margin: 0 auto;
max-width: 1440px;

    img {
        position: absolute;
        height: 2648px;
        width: 100%;
    }

@media (max-width: 769px){
    img {
        height: 1705px;
    }
}
`