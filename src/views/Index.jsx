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

// reactstrap components
import { Container} from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.jsx";
import CardsFooter from "components/Footers/CardsFooter.jsx";

// index page sections
import Hero from "./IndexSections/Hero.jsx";
// import Buttons from "./IndexSections/Buttons.jsx";
// import Inputs from "./IndexSections/Inputs.jsx";
// import CustomControls from "./IndexSections/CustomControls.jsx";
// import Menus from "./IndexSections/Menus.jsx";
// import Navbars from "./IndexSections/Navbars.jsx";
import Tabs from "./IndexSections/Tabs.jsx";
// import Progress from "./IndexSections/Progress.jsx";
// import Pagination from "./IndexSections/Pagination.jsx";
// import Pills from "./IndexSections/Pills.jsx";
// import Labels from "./IndexSections/Labels.jsx";
// import Alerts from "./IndexSections/Alerts.jsx";
// import Typography from "./IndexSections/Typography.jsx";
// import Modals from "./IndexSections/Modals.jsx";
// import Datepicker from "./IndexSections/Datepicker.jsx";
// import TooltipPopover from "./IndexSections/TooltipPopover.jsx";
import Carousel from "./IndexSections/Carousel.jsx";
// import Table from "./IndexSections/Table.jsx";
import Grid from './IndexSections/Grid';
import POSDevice from "./IndexSections/POSDevice.jsx";
import Packages from "./IndexSections/Packages.jsx";
// import Landing from "./examples/Landing.jsx";
// import Icons from "./IndexSections/Icons.jsx";
import About from "./IndexSections/About.jsx";
// import Login from "./IndexSections/Login.jsx";
// import Download from "./IndexSections/Download.jsx";

class Index extends React.Component {
  state = {
    // id : [],
    // employee_name : [],
  }
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  // componentWillMount(){
  //   fetch('http://dummy.restapiexample.com/api/v1/employees').then(res => res.json())
  //   .then(data =>this.setState({
  //     id : data,
  //     employee_name : data,
  //   }))
  // }
  render() {
    return (
      <>
        <DemoNavbar />
        <main ref="main">
          <Hero />
          <About />
          {/* <div className="container">
            <div style={{marginTop : "30px"}} className="jumbotron">
              <Typography />
            </div>
          </div> */}
          {/* <Buttons /> */}
          {/* <Inputs /> */}
          {/* <section className="section">
              <CustomControls />
              <Menus />
          </section> */}
          {/* <Navbars /> */}
          <section className="section section-components" style={{backgroundColor : '#EDEDF0', marginTop : '-80px'}}>
            <Container>
              {/* <Table empdata={this.state.id} /> */}
              <Tabs />
              {/* <Row className="row-grid justify-content-between align-items-center mt-lg">
                <Progress />
                <Pagination />
              </Row> */}
              {/* <Row className="row-grid justify-content-between">
                <Pills />
                <Labels />
              </Row> */}
              {/* <Alerts /> */}
              {/* <Typography /> */}
              {/* <Modals /> */}
              {/* <Datepicker /> */}
              {/* <TooltipPopover /> */}
            </Container>
          </section>
          <section className="section section-components">
            <Container>
              <POSDevice />
            </Container>
          </section>
          <section className="section section-components" style={{backgroundColor : '#EDEDF0'}}>
            <div style={{backgroundColor : '#EDEDF0'}}>
              <Container>
                <Grid />
              </Container>
            </div>
          </section>
          <section className="section section-components">
            <div>
              <Container>
                <Packages />
              </Container>
            </div>
          </section>
          <Carousel />
          {/* <Login /> */}
          {/* <Download /> */}
        </main>
        <CardsFooter />
      </>
    );
  }
}

export default Index;
