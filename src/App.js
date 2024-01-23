import React from "react";

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

class Index extends React.Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
      <DemoNavbar />
      <main ref="main">
        <Hero />
        <section className="section">
          <Container>
            <TabsSection />
          </Container>
        </section>
        <section className="section section-components">
          <Container></Container>
        </section>
       <Carousel />
       {/* <Coins /> */}
      </main> 
      <SimpleFooter />
    </>
    );
  }
}

export default Index;
