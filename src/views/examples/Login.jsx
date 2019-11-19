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
import CardsFooter from "components/Footers/CardsFooter.jsx";
// import firebaseFile
// import fire from '../../config/Firebase'
// post method
// import axios from "axios";
// reactstrap components
import {
  Button,
  Card,
  // CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
  Label,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter

} from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.jsx";
// import SimpleFooter from "components/Footers/SimpleFooter.jsx";
import Axios from "axios";
// import { strict } from "assert";

const initialState = {
  FirstName : '',
  LastName : '',
  // company : '',
  Email : '',
  Password : '',
  // city : '',
  UserName : '',
  UserType : '',
  PlanType : '',
  modalIsOpen : false,
  modalVisible : true,
  modalHeading : '',
  modalDescription : '',
  // fnameerror : '',
  // lnameerror : '',
  // // companyerror : '',
  // emailerror : '',
  // passworderror : '',
  // // cityerror : '',

}
var lnameerror,fnameerror, emailerror,passworderror, plantypeerror;

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
  handleRadio = (e) => {
    this.setState({
      PlanType : e.target.value
    })
  }

  validate = () => {
    
    // let fnameerror = '';
    // let lnameerror = '';
    // // let companyerror = ''
    // let emailerror = '';
    // let passworderror = ''
    // // let cityerror = ''
    if(!this.state.FirstName) {
      fnameerror = 'Please Insert First Name'
    }
    else {
      fnameerror = ''
    }
    if(!this.state.LastName) {
      lnameerror = 'Please Insert Last Name'
    }
    else {
      lnameerror = ''
    }
    // if(!this.state.company) {
    //   companyerror = 'Please Insert Company Name'
    // }
    if(!this.state.Email) {
      emailerror = 'Please Insert Email Address'
      // this.setState({emailerror : emailerror})
    }
    else if(!this.state.Email.includes('@')) {
      emailerror = 'Invalid Email'
    }
    else {
      emailerror = ''
    }
    if(!this.state.Password) {
      passworderror = 'Please Insert Password'
    }
    else {
      passworderror = ''
    }
    if(!this.state.PlanType){
      plantypeerror = 'Please Select Youn Plan'
    }
    else {
      plantypeerror = ''
    }
    // if(!this.state.city) {
    //   cityerror = 'Please Insert City Name'
    // }
    if(fnameerror || lnameerror ||emailerror || passworderror || plantypeerror) {
      this.setState({fnameerror, lnameerror, emailerror, passworderror, plantypeerror});
      // console.log(this.state);
      
      return false;
    }
    // alert("Our Operator Will Contact You Soon")
    return true;
  }

  toggleModal = () => {
    this.setState({
      modalIsOpen : ! this.state.modalIsOpen
    })
  }

  handleSubmit = event => {
    
    event.preventDefault();
    const isValid = this.validate();
    if(isValid){
      // console.log(this.state);

      // clear form
      this.setState(initialState)
      Axios.post('http://airpos.posit-now.com/api/signup/add',this.state)
      .then(res => {
        // debugger
        console.log(res.data);
        if(res.data.statusid ===1){
          this.setState({
            modalHeading : 'Resigtered Successfully',
            modalDescription : 'Kindly Check You Email',
            modalIsOpen : !this.state.modalIsOpen
          })
        }
        else {
          this.setState({
            modalHeading : 'User Already Registered',
            modalDescription : 'Kindly Use Different Email Account',
            modalIsOpen : !this.state.modalIsOpen
          })          
        }
      })
      .catch(err => {
        console.log(err);
        this.setState({
          modalHeading : 'Something Went Wrong',
          modalDescription : 'Error Arised',
          modalIsOpen : !this.state.modalIsOpen
        })
      })
    }    
  }
  render() {
    return (
      <>
        <DemoNavbar />
        <Modal isOpen ={this.state.modalIsOpen}>
          <ModalHeader toggle={this.toggleModal}>{this.state.modalHeading}</ModalHeader>
          <ModalBody>{this.state.modalDescription}</ModalBody>
          <ModalFooter>
            <Button onClick={this.toggleModal} color='danger'>
              Close
            </Button>
          </ModalFooter>
        </Modal>
        {/* <div style={{position: 'absolute', right :'10%',zIndex:'1', top : '700px', width:'80%'}} className="p-3 bg-success my-2 rounded">
        <Toast>
          <ToastHeader>
            Reactstrap
          </ToastHeader>
          <ToastBody>
            This is a toast on a success background — check it out!
          </ToastBody>
        </Toast>
      </div> */}
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
                    <h2 style={{textAlign : 'center', marginTop : '10px'}} className='display-3'>Sign Up</h2>
                    {/* <CardHeader className="bg-white pb-5">
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
                    </CardHeader> */}
                    <CardBody style={{marginTop : '-30px', paddingTop : '-5px'}} className="px-lg-5 py-lg-5">
                      {/* <div className="text-center text-muted mb-4">
                        <small>Or sign in with credentials</small>
                      </div> */}
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
                             value = {this.state.FirstName}
                             onChange = {e => this.setState({FirstName : e.target.value})}
                             />
                          </InputGroup>
                          {fnameerror 
                           ?<div style={{textAlign : "center", fontSize : 15, color : "#800"}}>{fnameerror}</div>
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
                             value = {this.state.LastName}
                             onChange = {e => this.setState({LastName : e.target.value})}
                              />
                          </InputGroup>
                          {lnameerror 
                           ?<div style={{textAlign : "center", fontSize : 15, color : "#800"}}>{lnameerror}</div>
                           : null
                          }
                        </FormGroup>
                        {/* <FormGroup className="mb-3">
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
                        </FormGroup> */}
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
                             value = {this.state.Email}
                             onChange = {e => this.setState({Email : e.target.value})}
                             />
                          </InputGroup>
                          {emailerror 
                           ?<div style={{textAlign : "center", fontSize : 15, color : "#800"}}>{emailerror}</div>
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
                              value = {this.state.Password}
                              onChange = {e => this.setState({Password : e.target.value})}
                              />
                          </InputGroup>
                          {passworderror
                           ?<div style={{textAlign : "center", fontSize : 15, color : "#800"}}>{passworderror}</div>
                           : null
                          }
                        </FormGroup>
                        <h4>Select Plan</h4>
                        <FormGroup check>
                          <Label check>
                            <Input
                             type="radio" 
                             value='Free' 
                             checked={this.state.PlanType==='Free'} 
                             onChange={this.handleRadio} 
                            //  name="radio1" 
                            />{' '}
                            <strong>Free</strong>
                          </Label>
                          <Label style={{marginLeft : '40px'}} check>
                            <Input
                             type="radio" 
                             value='Paid' 
                             checked={this.state.PlanType === 'Paid'} 
                             onChange={this.handleRadio} 
                            //  name="radio1" 
                            />{' '}
                            <strong>Paid</strong>
                          </Label>
                          {plantypeerror 
                           ?<div style={{textAlign : "center", fontSize : 15, color : "#800"}}>{plantypeerror}</div>
                           : null
                          }
                        </FormGroup>
                        <br/>
                        {/* <FormGroup>
                          <Label for="exampleSelectMulti"><strong>Select Plan</strong></Label>
                          <Input style={{height : '60px', overflowY : 'hidden'}} type="select" name="selectMulti" id="exampleSelectMulti" multiple>
                            <option>Free</option>
                            <option style={{marginTop : '10px'}}>Paid</option>
                          </Input>
                        </FormGroup> */}
                        {/* <FormGroup>
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
                        </FormGroup> */}
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
        {/* <SimpleFooter /> */}
        <CardsFooter />
      </>
    );
  }
}

export default Login;
