import styled from 'styled-components';

function Options (){
    return (
        <DivOptions>
            <ul>
                <div id='C1'>
                    <li>Features</li>
                    <li>Pricing</li>
                    <li>Services</li>
                    <li>Partners</li>
                </div>
            
                <div id='C2'>
                    <li>About Us</li>
                    <li>Tutorials</li>
                    <li>Resources</li>
                    <li>Help Center</li>
                    <li>Templates</li>
                    <li>Case Studies</li>
                </div>

                <div id='C3'>
                    <li>Medium</li>
                    <li>Twitter</li>
                    <li>Facebook</li>
                    <li>Instagram</li>
                    <li>LinkedIn</li>
                </div>

                <div id='C4'> 
                    <li>Contact Us</li>
                    <li>Slack</li>
                    <li>Jobs</li>
                </div>
            </ul>
        </DivOptions>
    )
}
export default Options;

const DivOptions = styled.div`
position: absolute;
width:100%;
max-width: 563px;
height: 199.86px;
right: 15%;
top: 79px;

    ul {
        list-style: none;
    }

    li {
        margin-top: 10px;
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 19px;
        line-height: 22px;
    }

    #C1 {
        width: 100%;
        max-width: 100px;
    }

    #C2 {
        width: 100%;
        max-width: 100px;
        top: -130px;
        position: relative;
        left: 150px;
    }

    #C3 {
        width: 100%;
        max-width: 100px;
        position: relative;
        left: 300px;
        top: -342px;
    }

    #C4 {
        width: 100%;
        max-width: 100px;
        position: relative;
        left: 438px;
        top: -501px;
    }

    @media (max-width: 915px){
        left: 175px;
    }

    @media (max-width: 769px){
        left: unset;
        right: 1%;
        top: 46px;

        li {
            font-size: 12px;
            line-height: 14px;
        }

        #C1 {
            top: -24px;
            position: relative;
            left: unset;
            right: -33%;
        }

        #C2 {
            top: -122px;
            position: relative;
            left: unset;
            right: -48%;
        }
    
        #C3 {
            position: relative;
            left: unset;
            right: -66%;
            top: -267px;
        }
    
        #C4 {
            position: relative;
            left: unset;
            right: -81%;
            top: -386px;
        }
    
    }

    @media (max-width: 470px){
        left: unset;
        right: 1%;
        top: 46px;

        li {
            font-size: 12px;
            line-height: 14px;
        }

        #C1 {
            top: 62px;
            position: relative;
            left: 1px;
        }

        #C2 {
            top: 58px;
            position: relative;
            left: 1px;
        }
    
        #C3 {
            position: relative;
            left: 165px;
            top: -177px;
        }
    
        #C4 {
            position: relative;
            top: -178px;
            left: 165px;
        }
    }
`