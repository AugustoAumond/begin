import styled from 'styled-components';

export function ButtonGreen(props){
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
left: 0px;
top: 252px;
background: #4BA87D;
cursor: pointer;
border: solid white;

    #button {
        color: white;
        margin-top: 17px;
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 900;
        font-size: 21px;
        line-height: 25px;
    }

    @media (max-width: 768px){
        width: 131px;
        height: 42px;
        top: 166px;

        #button {
            font-size: 13px;
            line-height: 15px;
        }
    }

    @media (max-width: 470px){
        width: 143px;
        height: 40px;
        top: 255px;
    }
`
