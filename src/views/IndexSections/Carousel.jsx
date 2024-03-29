/*!

=========================================================
* Argon Design System React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import {UncontrolledCarousel} from 'reactstrap'

// reactstrap components
import { Container, Row, Col } from "reactstrap";
// import Example from "./CarouselCustom";

const items = [
  {
    src: require("assets/img/theme/dashboard.png"),
    altText: "",
    caption: "",
    header: ""
  },
  {
    src: require("assets/img/theme/employee.png"),
    altText: "",
    caption: "",
    header: ""
  }
];

class Carousel extends React.Component {
  render() {
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
                <h1 className="text-white font-weight-light">
                  AIRPOS VIEW
                </h1>
                <p className="lead text-white mt-4">
                  AIRPOS Come With Many Frames To Interact You With Your Business.
                  It's A Very User Friendly Application, That Save Your Money And Precious 
                  Time.
                </p>
                {/* <Button
                  className="btn-white mt-4"
                  color="default"
                  href="https://demos.creative-tim.com/argon-design-system-react/#/documentation/alerts?ref=adsr-landing-page"
                >
                  See all components
                </Button> */}
              </Col>
              <Col className="mb-lg-auto" lg="6">
                <div style={{height : '100px !important'}} className="rounded shadow-lg overflow-hidden transform-perspective-right">
                  {/* <UncontrolledCarousel items={items} /> */}
                  <UncontrolledCarousel items={items} />
                  {/* <Example /> */}
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
}

export default Carousel;
