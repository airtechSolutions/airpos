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
import { Link } from "react-router-dom";

// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

class About extends React.Component {
  render() {
    return (
      <>
        <section style={{padding: 0}} className="section section-lg section-nucleo-icons pb-250">
          <Container>
            <Row className="justify-content-center">
              <Col className="text-center" lg="8">
                <h2 className="display-3">About AIRPOS</h2>
                <p className="lead">
                  AIRPOS Is Complete Point Of Sale Web Based Application. Designed
                  For Resturant Owners To Completely MAnage The Resturant. Inventory
                  Staff, Sale/Purchase Reports. Makes Management Easier Like Piece Of Cake.
                </p>
                <div className="btn-wrapper">
                <Link to='/login-page'>
                <Button
                    className="btn-neutral btn-icon"
                    // color="black"
                    target="_blank"
                    style={{backgroundColor : '#7187f1'}}
                >

                    <span className="btn-inner--icon">
                    <i style={{color : 'white'}} className="fa fa-sign-in" aria-hidden="true"></i>
                    </span>
                    <span style={{color : 'white'}} className="nav-link-inner--text ml-1">
                    Subscribe
                    </span>
                </Button>
            </Link>
                </div>
              </Col>
            </Row>
            {/* <div className="blur--hover">
              <a href="https://demos.creative-tim.com/argon-design-system-react/#/documentation/icons?ref=adsr-landing-page">
                <div className="icons-container blur-item mt-5 on-screen">
                  <i className="icon ni ni-diamond" />
                  <i className="icon icon-sm ni ni-album-2" />
                  <i className="icon icon-sm ni ni-app" />
                  <i className="icon icon-sm ni ni-atom" />
                  <i className="icon ni ni-bag-17" />
                  <i className="icon ni ni-bell-55" />
                  <i className="icon ni ni-credit-card" />
                  <i className="icon icon-sm ni ni-briefcase-24" />
                  <i className="icon icon-sm ni ni-building" />
                  <i className="icon icon-sm ni ni-button-play" />
                  <i className="icon ni ni-calendar-grid-58" />
                  <i className="icon ni ni-camera-compact" />
                  <i className="icon ni ni-chart-bar-32" />
                </div>
                <span className="blur-hidden h5 text-success">
                  Eplore all the 21.000+ Nucleo Icons
                </span>
              </a>
            </div> */}
          </Container>
        </section>
      </>
    );
  }
}

export default About;
