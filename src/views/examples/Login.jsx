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
// import firebaseFile
// import fire from '../../config/Firebase'
// post method
// import axios from "axios";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.jsx";
import SimpleFooter from "components/Footers/SimpleFooter.jsx";

const initialState = {
  id : [],
  employee_name : [],
  fname : '',
  lname : '',
  company : '',
  email : '',
  password : '',
  city : '',
  fnameerror : '',
  lnameerror : '',
  companyerror : '',
  emailerror : '',
  passworderror : '',
  cityerror : '',

}

class Login extends React.Component {



  state = initialState;

  

  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  // handleChange = event => {
  //   const target = event.target;
  //   const value = target.type === 'checkbox' ? target.checked : target.value;
  //   const name = target.name;
  //   this.setState({
  //     [name] : value
  //   })
  // }

  validate = () => {
    
    let fnameerror = '';
    let lnameerror = '';
    let companyerror = ''
    let emailerror = '';
    let passworderror = ''
    let cityerror = ''
    if(!this.state.fname) {
      fnameerror = 'Please Insert First Name'
    }
    else {
      fnameerror = ''
    }
    if(!this.state.lname) {
      lnameerror = 'Please Insert Last Name'
    }
    if(!this.state.company) {
      companyerror = 'Please Insert Company Name'
    }
    if(!this.state.email) {
      emailerror = 'Please Insert Email Address'
      // this.setState({emailerror : emailerror})
    }
    else if(!this.state.email.includes('@')) {
      emailerror = 'Invalid Email'
    }
    if(!this.state.password) {
      passworderror = 'Please Insert Password'
    }
    if(!this.state.city) {
      cityerror = 'Please Insert City Name'
    }
    if(fnameerror || lnameerror || companyerror ||emailerror || passworderror || cityerror) {
      this.setState({fnameerror, lnameerror, companyerror, emailerror, passworderror, cityerror});
      return false;
    }
    return true;
  }

  handleSubmit = event => {
    
    event.preventDefault();
    const isValid = this.validate();
    if(isValid){
      console.log(this.state);

      // clear form
      this.setState(initialState)

      // post method        
    }
    // fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u) =>{
    // }).then((u) => {console.log(u);
    // }).catch((error) =>{
    //   console.log(error);
      
    // })
    // console.log(this.state);
    

    
  }
  render() {
    return (
      <>
        <DemoNavbar />
        <main ref="main">
          <section className="section section-shaped section-lg">
            <div className="shape shape-style-1 bg-gradient-default">
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
            <Container className="pt-lg-md">
              <Row className="justify-content-center">
                <Col lg="5">
                  <Card className="bg-secondary shadow border-0">
                    <CardHeader className="bg-white pb-5">
                      <div className="text-muted text-center mb-3">
                        <small>Sign in with</small>
                      </div>
                      <div className="btn-wrapper text-center">
                        <Button
                          className="btn-neutral btn-icon"
                          color="default"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          <span className="btn-inner--icon mr-1">
                            <img
                              alt="..."
                              src={require("assets/img/icons/common/github.svg")}
                            />
                          </span>
                          <span className="btn-inner--text">Github</span>
                        </Button>
                        <Button
                          className="btn-neutral btn-icon ml-1"
                          color="default"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          <span className="btn-inner--icon mr-1">
                            <img
                              alt="..."
                              src={require("assets/img/icons/common/google.svg")}
                            />
                          </span>
                          <span className="btn-inner--text">Google</span>
                        </Button>
                      </div>
                    </CardHeader>
                    <CardBody className="px-lg-5 py-lg-5">
                      <div className="text-center text-muted mb-4">
                        <small>Or sign in with credentials</small>
                      </div>
                      <Form role="form">
                        <FormGroup className="mb-3">
                          <InputGroup className="input-group-alternative">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="ni ni-single-02" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                             placeholder="First Name" 
                             type="text"
                             value = {this.state.fname}
                             onChange = {e => this.setState({fname : e.target.value})}
                             />
                          </InputGroup>
                          {this.state.fnameerror 
                           ?<div style={{textAlign : "center", fontSize : 15, color : "#800"}}>{this.state.fnameerror}</div>
                           : null
                          }
                        </FormGroup>
                        <FormGroup className="mb-3">
                          <InputGroup className="input-group-alternative">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="ni ni-single-02" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                             placeholder="Last Name" 
                             type="text"
                             value = {this.state.lname}
                             onChange = {e => this.setState({lname : e.target.value})}
                              />
                          </InputGroup>
                          {this.state.lnameerror 
                           ?<div style={{textAlign : "center", fontSize : 15, color : "#800"}}>{this.state.lnameerror}</div>
                           : null
                          }
                        </FormGroup>
                        <FormGroup className="mb-3">
                          <InputGroup className="input-group-alternative">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="ni ni-briefcase-24" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                             placeholder="Company Name" 
                             type="text"
                             value = {this.state.company}
                             onChange = {e => this.setState({company : e.target.value})}
                              />
                          </InputGroup>
                          {this.state.companyerror 
                           ?<div style={{textAlign : "center", fontSize : 15, color : "#800"}}>{this.state.companyerror}</div>
                           : null
                          }
                        </FormGroup>
                        <FormGroup className="mb-3">
                          <InputGroup className="input-group-alternative">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="ni ni-email-83" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                             placeholder="Email" 
                             type="email"
                             value = {this.state.email}
                             onChange = {e => this.setState({email : e.target.value})}
                             />
                          </InputGroup>
                          {this.state.emailerror 
                           ?<div style={{textAlign : "center", fontSize : 15, color : "#800"}}>{this.state.emailerror}</div>
                           : null
                          }
                        </FormGroup>
                        <FormGroup>
                          <InputGroup className="input-group-alternative">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="ni ni-lock-circle-open" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              placeholder="Password"
                              type="password"
                              autoComplete="off"
                              value = {this.state.password}
                              onChange = {e => this.setState({password : e.target.value})}
                              />
                          </InputGroup>
                          {this.state.passworderror
                           ?<div style={{textAlign : "center", fontSize : 15, color : "#800"}}>{this.state.passworderror}</div>
                           : null
                          }
                        </FormGroup>
                        <FormGroup>
                          <InputGroup className="input-group-alternative">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="ni ni-square-pin" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              placeholder="City"
                              type="text"
                              autoComplete="off"
                              value = {this.state.city}
                              onChange = {e => this.setState({city : e.target.value})}
                              />
                          </InputGroup>
                          {this.state.cityerror 
                           ?<div style={{textAlign : "center", fontSize : 15, color : "#800"}}>{this.state.cityerror}</div>
                           : null
                          }
                        </FormGroup>
                        {/* <div className="custom-control custom-control-alternative custom-checkbox">
                          <input
                            className="custom-control-input"
                            id=" customCheckLogin"
                            type="checkbox"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor=" customCheckLogin"
                          >
                            <span>Remember me</span>
                          </label>
                        </div> */}
                        <div className="text-center">
                          <Button
                            className="my-4"
                            color="primary"
                            type="submit"
                            onClick={this.handleSubmit}
                          >
                            Subscribe
                          </Button>
                        </div>
                      </Form>
                    </CardBody>
                  </Card>
                  {/* <Row className="mt-3">
                    <Col xs="6">
                      <a
                        className="text-light"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        <small>Forgot password?</small>
                      </a>
                    </Col>
                    <Col className="text-right" xs="6">
                      <a
                        className="text-light"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        <small>Create new account</small>
                      </a>
                    </Col>
                  </Row> */}
                </Col>
              </Row>
            </Container>
          </section>
        </main>
        <SimpleFooter />
      </>
    );
  }
}

export default Login;
