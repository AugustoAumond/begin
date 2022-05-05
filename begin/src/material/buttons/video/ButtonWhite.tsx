import styled from 'styled-components';

export function ButtonWhite(props){
    return (
        <section>
            <Button>
                <p id='button'>
                    {props.name}
                </p>
            </Button>
        </section>
    )
}

const Button = styled.button`
position: absolute;
width: 200px;
height: 65px;
left: calc(50% - 200px/2);
margin-top: -200px;
background: #FFFFFF;
border: solid white;
cursor: pointer;

    #button {
        color: #4BA87D;
        margin-top: 17px;
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 900;
        font-size: 21px;
        line-height: 25px;
    }

    @media (max-width: 769px){
        max-width: 132px;
        height: 42px; 
        left: calc(50% - 132px/2);  
        margin-top: -150px;

        #button {
            font-size: 13px;
            line-height: 15px;
            margin-top: 10px;
        }
    }

    @media (max-width: 470px){
        max-width: 65px;
        height: 21px;
        margin-top: -80px;
        left: calc(50% - 65px/2);

        #button {
            font-size: 6px;
            line-height: 7px;
            margin-top: 4px;
        }

    }
`