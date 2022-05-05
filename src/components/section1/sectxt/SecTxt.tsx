import styled from 'styled-components';

function SecTxt (){
    return (
        <DivTxt>
            <h1>The source for proven, engaging email campaigns</h1>
            <p>Whether you’re a startup, small business, e-commerce store, or want to promote your app, NinjaMail has the feature set tailored for your business. 
            </p>  
        </DivTxt>
    )
}
export default SecTxt;

const DivTxt = styled.div`
position: absolute;
width:33%;
max-width: 365px;
height: 324px;
left: 64%;
top: 138px;

    h1 {
        position: absolute;
        text-align: justify;
        width: 100%;
        max-width: 365px;
        height: 144px;
        font-family: 'Playfair Display';
        font-style: normal;
        font-weight: 900;
        font-size: 44px;
        line-height: 48px;
    }

    p {
        position: absolute;
        text-align: justify;
        width: 100%;
        max-width: 322px;
        height: 156px;
        left: 1px;
        top: 168px;
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 500;
        font-size: 19px;
        line-height: 26px;
    }

    @media (max-width: 1000px){
        h1 {
            font-size: 34px;
        }

        p {
            font-size: 16px;
        }
    }

    @media (max-width: 769px){
        h1 {
            font-size: 28px;
            line-height: 31px;
        }

        p {
            top: 110px;
            font-size: 12px;
            line-height: 16px;

            @media (max-width: 640px){
                top: 144px;

                @media (max-width: 560px){
                    top: 175px;
                }
            }
        }
    }

    @media (max-width: 470px){
        max-width: 230px;
        height: 206px;
        width: 100%;
        top: 630px;
        right: 2%;
        left: unset;

        p {
            top: 110px;
        }
    }
`

