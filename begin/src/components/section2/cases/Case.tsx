import styled from 'styled-components';

function Case (){
    return (
            <SectionCase>
                    <div>
                        <img src="./assets/sect2img1.png" alt=""/>
                        <h1>Frankie</h1>
                        <p>Member since 2016</p>
                    </div>

                    <div>
                        <img src="./assets/sect2img2.png" alt=""/>
                        <h1>Camile</h1>
                        <p>Member since 2012</p>
                    </div>

                    <div>
                        <img src="./assets/sect2img3.png" alt=""/>
                        <h1>Elayne</h1>
                        <p>Member since 2018</p>
                    </div>
            </SectionCase>
    )
}
export default Case;

const SectionCase = styled.section`
display: grid;
grid-template-columns: repeat(3,1fr);
width: 100%;
height: 100%;
max-height: 239px;
margin-right: 10px;

    div {
        display: flex;
        width: 90%;
        margin-left: 25px;

        img {
            width: 100%;
            max-width: 342px;
            filter: drop-shadow(0px 8px 16px rgba(0, 0, 0, 0.160784));
            background: linear-gradient(0deg, #000000 -32.5%, rgba(84, 84, 84, 0.0001) 67.78%);
        }

        h1 {
            position: absolute;
            width: 100%;
            max-width: 220px;
            font-family: 'Raleway';
            font-style: normal;
            font-weight: 900;
            font-size: 34px;
            line-height: 40px;
            color: #FFFFFF;
            margin-top: 150px;
            margin-left: 15px;
        }

        p {
            position: absolute;
            width: 100%;
            max-width: 266px;
            font-family: 'Raleway';
            font-style: normal;
            font-weight: 700;
            font-size: 19px;
            line-height: 22px;
            color: #FFFFFF;
            margin-top: 195px;
            margin-left: 15px;
        }
    }

    @media (max-width: 769px){
    max-height: 157px;

        div {
            img {
                max-width: 223px;
                height: 142px;
            }

            h1 {
                font-size: 22px;
                line-height: 26px;
                margin-top: 100px;
            }

            p {
                font-size: 12px;
                line-height: 14px;
                margin-top: 130px;
            }
        }
    }

    @media (max-width: 470px){
        grid-template-columns: repeat(1, 1fr);

        div {
            margin-left: unset;
            margin-top: 25px;
            margin-left: 10px;
            
            h1 {
                margin-top: 90px;
            }

            p {
                margin-top: 115px;
            } 
        }  
    }
`