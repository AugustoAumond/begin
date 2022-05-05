import styled from 'styled-components';

import Menu from '../src/components/menu/Menu';
import Background from '../src/components/bg_stuff/Background';
import Hero from '../src/components/hero/Hero';
import Video from '../src/components/video/Video';
import Section1 from '../src/components/section1/Section1';
import Section2 from '../src/components/section2/Section2';
import Section3 from '../src/components/section3/Section3';
import GetStarted from '../src/components/get_started/GetStarted';
import Footer from '../src/components/footer/Footer';

export default function Home() {

  return (
    <Conteiner>
      <Menu/>
      <Background/>
      <Hero/> 
      <Video/>
      <Section1/>
      <Section2/>
      <Section3/>
      <GetStarted/>
      <Footer/>
    </Conteiner> 
  )
}

const Conteiner = styled.div`
position: relative;
max-width: 1420px;
min-width: 330px;
width: 100%;
height: 100%;
margin: 0 auto;
`

