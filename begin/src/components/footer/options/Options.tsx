import styled from 'styled-components';

function Options (){
    return (
        <DivOptions>
            <ul>
                <div id='C1'>
                    <li><a href="">Features</a> </li>
                    <li><a href="">Pricing</a></li>
                    <li><a href="">Services</a></li>
                    <li><a href="">Partners</a></li>
                </div>
            
                <div id='C2'>
                    <li><a href="">About Us</a></li>
                    <li><a href="">Tutorials</a></li>
                    <li><a href="">Resources</a></li>
                    <li><a href="">Help Center</a></li>
                    <li><a href="">Templates</a></li>
                    <li><a href="">Case Studies</a></li>
                </div>

                <div id='C3'>
                    <li><a href="">Medium</a></li>
                    <li><a href="">Twitter</a></li>
                    <li><a href="">Facebook</a></li>
                    <li><a href="">Instagram</a></li>
                    <li><a href="">LinkedIn</a></li>
                </div>

                <div id='C4'> 
                    <li><a href="">Contact Us</a></li>
                    <li><a href="">Slack</a></li>
                    <li><a href="">Jobs</a></li>
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

    a {
        text-decoration: none;
        color: black;
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