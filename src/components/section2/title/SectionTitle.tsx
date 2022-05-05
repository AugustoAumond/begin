import styled from 'styled-components';

function SectionTitle(){
    return (
        <DivTitle>
            <div>
                <p>
                Learn how others are reaching their audience easier than ever before.
                </p>
            </div>
        </DivTitle>
    )
}
export default SectionTitle;

const DivTitle = styled.div`
position: absolute;
width: 100%;
height: 126px;
right: 0px;
top: 200px;

    div {
        width: 100%;
        max-width: 904px;
        height: 100%;
        display: flex;
        margin: auto;
    }

    p {
        margin-top: 70px;
        font-family: 'Playfair Display';
        font-style: normal;
        font-weight: 900;
        font-size: 44px;
        line-height: 48px;
        text-align: center;
    }

    @media (max-width: 769px){
        div {
            max-width: 591px;
        }

        p {
            font-size: 28px;
            line-height: 36px;
            margin-top: 3px;
        }
    }

    @media (max-width: 470px){
    top: 516px;

        div {
            max-width: 239px;
        }

        p {
            margin-top: unset;
            font-size: 26px;
        }
    }
`