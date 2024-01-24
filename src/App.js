import React from "react";
import {
  Animator,
  ScrollContainer,
  ScrollPage,
  batch,
  Fade,
  FadeIn,
  FadeOut,
  Move,
  MoveIn,
  MoveOut,
  Sticky,
  StickyIn,
  StickyOut,
  Zoom,
  ZoomIn,
  ZoomOut,
} from "react-scroll-motion";

// reactstrap components
import { Container, Row } from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";

// index page sections
import Hero from "./components/hero/Hero";
import TabsSection from "components/tabs/Tabs";
import Carousel from "components/carsoural/Carousel";
// import Coins from "components/coins/Coins";
import SimpleFooter from "components/Footers/SimpleFooter";
// import Coins from "components/coinsrc/coins/Coins";
const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
const FadeUp = batch(Fade(), Move(), Sticky());

class Index extends React.Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
       <ScrollContainer>
          <DemoNavbar />
      

          <main ref="main">
          <Hero />
          {/* <ScrollPage>
    <Animator animation={FadeUp}>
            <Hero />
            </Animator>
  </ScrollPage> */}
            <section className="section">
              <Container>
              <Animator animation={MoveIn(-1000, 0)}>
                <TabsSection />
                </Animator>
              </Container>
            </section>
           
            <Carousel />
            

            {/* <Coins /> */}
          </main>
          
          <Container> <SimpleFooter /></Container>
         
          </ScrollContainer>
       
      </>
    );
  }
}

export default Index;
