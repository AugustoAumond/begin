import styled from 'styled-components';

function Logo (){
    return (
        <DivLogo>
            <img id="logo1" src="./assets/Logo1.png" alt="" />     
            <img id="logo2" src="./assets/Logo2.png" alt="" />     
            <img id="logo3" src="./assets/Logo3.png" alt="" />     
            <img id="logo4" src="./assets/Logo4.png" alt="" />     
            <img id="logo5" src="./assets/Logo5.png" alt="" />          
        </DivLogo>
    )
}
export default Logo;

const DivLogo = styled.div`
position: relative;
display: flex;
width: 100%;
max-width: 926px;
height: 48px;
top: -20px;
margin: 0 auto;

    img {
        max-width: 260px;
        width: 20%;
        height: 80px;
    }

    @media (max-width: 769px){
    max-width: 605px;
    height: 31px;
    }

    @media (max-width: 570px){
        top: -40px;
    }

    @media (max-width: 470px){
    display: grid;
    grid-template-columns: repeat(2,1fr);
    max-width: 237px;
    height: 137px;
    top: -20px;
    align-items: center;
    justify-items: start;
    left: 15px;
    
        img {
            max-width: 101px;
            max-height: 50px;
            width: 100%;
        }

        #logo5 {
            left: 50px;
            position: relative;
        }
    }
`