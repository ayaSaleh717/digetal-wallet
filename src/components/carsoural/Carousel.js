import React from "react";
import { useState , useEffect } from "react";

// reactstrap components
import { Button, Container, Row, Col, UncontrolledCarousel } from "reactstrap";

const items = [
  {
    src: require("assets/img/1.jpg"),
    altText: "",
    caption: "",
    header: "",
  },
  {
    src: require("assets/img/bitcoin.jpg"),
    altText: "",
    caption: "",
    header: "",
  },
];

const Carousel = () => {
  const [data, setData] = useState([
    { icon:"fas fa-user-lock",
    title: "  Secured",
    caption: "We can help you recover lost funds and crypto assets and withdraw directly to your bank account.",
   },
   {
    icon:"far fa-share-square",
    title: "  Cashback",
    caption: "We can help you recover lost funds and crypto assets and withdraw directly to your bank account.",
   
  },
  {
    icon:"fab fa-rocketchat",
    title: "  24/7 Live Support",
    caption: "Our support is always ready to help you. Get quick and efficient response via live chat or email.",
   
  },
  ]);
  
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
    }, 3000);
  
    return () => clearInterval(interval);
  }, [data]);
  

    return (
      <>
        <section className="section section-shaped">
          <div className="shape shape-style-1 shape-default">
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
          <Container className="py-md">
            <Row className="justify-content-between align-items-center">
              <Col className="mb-5 mb-lg-0" lg="5">
             
                <div className="rounded shadow-lg overflow-hidden transform-perspective-right iconp container">
                  {/* <UncontrolledCarousel  items={items1}> */}
                  <div className="row justify-content-center">
                  
                
               
                  <h1 className="text-white font-weight-light">
                  <i className=  {data[currentIndex].icon}  />  {data[currentIndex].title}
                </h1>
                </div>
                <p className="lead text-white mt-4">
                {data[currentIndex].caption}
                </p>
               
                  {/* </UncontrolledCarousel> */}
                </div>
                
              </Col>
              <Col className="mb-lg-auto" lg="6">
                <div className="rounded shadow-lg overflow-hidden transform-perspective-right">
                  <UncontrolledCarousel items={items} />
                </div>
              </Col>
            </Row>
          </Container>
          {/* SVG separator */}
          <div className="separator separator-bottom separator-skew">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon className="fill-white" points="2560 0 2560 100 0 100" />
            </svg>
          </div>
        </section>
      </>
    );
  }

export default Carousel;
