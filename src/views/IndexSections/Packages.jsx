import React from 'react';
import { Link } from "react-router-dom";
import {
    Badge,
    Button,
    Card,
    CardBody,
    // CardImg,
    // FormGroup,
    // Input,
    // InputGroupAddon,
    // InputGroupText,
    // InputGroup,
    Container,
    Row,
    Col
  } from "reactstrap";import './Grid.css';
  import AttachMoneyRoundedIcon from '@material-ui/icons/AttachMoneyRounded';

// const styles = {
//   largeIcon : {
//     width : '50px',
//     height : '50px',
//   }
// }
const Packages = (props) => {
  return (
    <>
      <section className="section section-lg pt-lg-0">
      <h2 style={{textAlign : 'center', marginTop : '20px'}} className="display-3">Packages</h2>
            <Container>
              <Row className="justify-content-center">
                <Col lg="12">
                  <Row className="row-grid">
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-success rounded-circle mb-4">
                            <i className="ni ni-check-bold" />
                          </div>
                          <h6 className="text-success text-uppercase">
                            Startup
                            <br/>14 Days Free Trial
                          </h6>
                          <p className="description mt-3">
                            Argon is a great free UI package based on Bootstrap
                            4 that includes the most important components and
                            features.
                          </p>
                          <div>
                            <Badge color="success" pill className="mr-1">
                              business
                            </Badge>
                            <Badge color="success" pill className="mr-1">
                              vision
                            </Badge>
                            <Badge color="success" pill className="mr-1">
                              success
                            </Badge>
                          </div>
                          <Link to='/login-page'>
                            <Button
                                className="mt-4"
                                color="success"
                                href="#pablo"
                                onClick={e => e.preventDefault()}
                            >
                                Subscribe
                            </Button>
                          </Link>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-primary rounded-circle mb-4">
                          <AttachMoneyRoundedIcon className="ni ni-istanbul" />
                          </div>
                          <h6 className="text-primary text-uppercase">
                            Gold Membership
                            <br/>$10 Per Month
                          </h6>
                          <p className="description mt-3">
                            Argon is a great free UI package based on Bootstrap
                            4 that includes the most important components and
                            features.
                          </p>
                          <div>
                            <Badge color="primary" pill className="mr-1">
                              design
                            </Badge>
                            <Badge color="primary" pill className="mr-1">
                              system
                            </Badge>
                            <Badge color="primary" pill className="mr-1">
                              creative
                            </Badge>
                          </div>
                          <Link to='/login-page'>
                            <Button
                                className="mt-4"
                                color="primary"
                                href="#pablo"
                                onClick={e => e.preventDefault()}
                            >
                                Subscribe
                            </Button>
                          </Link>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-default rounded-circle mb-4">
                            <i className="ni ni-planet" />
                          </div>
                          <h6 className="text-default text-uppercase">
                            Platimun Membership
                            <br/> $20 Per Month
                          </h6>
                          <p className="description mt-3">
                            Argon is a great free UI package based on Bootstrap
                            4 that includes the most important components and
                            features.
                          </p>
                          <div>
                            <Badge color="default" pill className="mr-1">
                              marketing
                            </Badge>
                            <Badge color="default" pill className="mr-1">
                              product
                            </Badge>
                            <Badge color="default" pill className="mr-1">
                              launch
                            </Badge>
                          </div>
                          <Link to='/login-page'>
                            <Button
                                className="mt-4"
                                color="default"
                                href="#pablo"
                                onClick={e => e.preventDefault()}
                            >
                                Subscribe
                            </Button>
                          </Link>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </section>
      </>
  );
}

export default Packages;