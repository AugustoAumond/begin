import styled from 'styled-components';

export function ButtonGreen(props){
    return (
        <Button>
            <p id='button'>
                {props.name}
            </p>
        </Button>
    )
}

const Button = styled.button`
position: absolute;
width: 221px;
height: 65px;
left: 447px;
top: 0px;
background: #4BA87D;
border: solid white;
cursor: pointer;

    #button {
        color: white;
        margin-top: 16px;
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 900;
        font-size: 21px;
        line-height: 25px;
        cursor: pointer;
    }

    @media (max-width: 769px){
    width: 100%;
    max-width: 144px;
    height: 42px;
    right: 0px;
    left: unset;

        #button {
            font-size: 13px;
            line-height: 15px;
            margin-top: 10px;
        }
    }

    @media (max-width: 470px){
        top: 90px;
        left: 40px;
    }
`
