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
position: relative;
width: 200px;
height: 65px;
top: 104px;
display: flex;
margin: 0 auto;
background: #FFFFFF;
border: solid #4BA87D;
justify-content: center;
align-items: center;
cursor: pointer;

    #button {
        color: #4BA87D;
        margin-top: 22px;
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 900;
        font-size: 21px;
        line-height: 25px;
    }

@media (max-width: 769px){
width: 131px;
height: 42px;

    #button {
        font-size: 13px;
        line-height: 15px;
        top: 60px;
    }
}
`