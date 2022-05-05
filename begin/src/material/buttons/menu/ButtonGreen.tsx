import styled from 'styled-components';

export function ButtonGreen(props){
    return (
        <section>
            <Button>
                <p>
                    {props.name}
                </p>
            </Button>
        </section>
    )
}

const Button = styled.button`
position: relative;
width: 168px;
height: 41px;
display: flex;
align-items: center;
justify-content: center;
border: solid white;
cursor: pointer;
background: #4BA87D;

    p {
        margin-top: 15px;
        font-family: 'Raleway';
        color: white;
        font-style: normal;
        font-weight: 800;
        font-size: 17px;
        line-height: 20px;
    }

    
@media (max-width: 900px){
    width: 110px;
    height: 25px;
    top: 6px;

    p {
        margin-top: 10px;
        font-size: 11px;
        line-height: 13px;
    }
}


    
`