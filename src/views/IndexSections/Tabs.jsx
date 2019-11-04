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
import './ListStyle.css';
import React from "react";
// nodejs library that concatenates classes
import classnames from "classnames";

// reactstrap components
import {
  Card,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Row,
  Col
} from "reactstrap";

class TabsSection extends React.Component {
  state = {
    iconTabs: 1,
    plainTabs: 1
  };
  toggleNavs = (e, state, index) => {
    e.preventDefault();
    this.setState({
      [state]: index
    });
  };
  render() {
    return (
      <>
        <h2 style={{textAlign : 'center'}} className="display-3">Features</h2>
        <Row className="justify-content-center">
          <Col lg='6'>
            <img style={{width : '100%', height : '387px', borderRadius : '5px'}} alt="Analytics" src={require('../../assets/img/productImages/analytics.jpg')} />
          </Col>
          <Col lg="6">
            {/* Tabs with icons */}
            <div className="nav-wrapper">
              <Nav
                className="nav-fill flex-column flex-md-row"
                id="tabs-icons-text"
                pills
                role="tablist"
              >
                <NavItem>
                  <NavLink
                    aria-selected={this.state.iconTabs === 1}
                    className={classnames("mb-sm-3 mb-md-0", {
                      active: this.state.iconTabs === 1
                    })}
                    onClick={e => this.toggleNavs(e, "iconTabs", 1)}
                    href="#pablo"
                    role="tab"
                  >
                    <i className="ni ni-bold-right" />
                    Analytics
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    aria-selected={this.state.iconTabs === 2}
                    className={classnames("mb-sm-3 mb-md-0", {
                      active: this.state.iconTabs === 2
                    })}
                    onClick={e => this.toggleNavs(e, "iconTabs", 2)}
                    href="#pablo"
                    role="tab"
                  >
                    <i className="ni ni-bold-right" />
                    Management
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    aria-selected={this.state.iconTabs === 3}
                    className={classnames("mb-sm-3 mb-md-0", {
                      active: this.state.iconTabs === 3
                    })}
                    onClick={e => this.toggleNavs(e, "iconTabs", 3)}
                    href="#pablo"
                    role="tab"
                  >
                    <i className="ni ni-bold-right" />
                    Cloud Based
                  </NavLink>
                </NavItem>
              </Nav>
            </div>
            <Card className="shadow">
              <CardBody>
                <TabContent activeTab={"iconTabs" + this.state.iconTabs}>
                  <TabPane tabId="iconTabs1">
                    <p className="description">
                      Your Dashboard Is Your Main Frame. Where You Have Bird Eyeview On Your Business Stats.
                      Sales Record, Anually Graph Comparision.
                    </p>
                  </TabPane>
                  <TabPane tabId="iconTabs2">
                    <p className="description">
                      Without Proper Management No Business In The World Can Survive Long. AIRPOS Mainly Focused
                      On Managing You Business Activity. Our Management Portal Cantains
                      <br/>
                    </p>
                    <ul className="liststyle">
                      <li><strong>HR Management</strong></li>
                      <li><strong>Sales Management</strong></li>
                      <li><strong>Inventory Management</strong></li>
                      <li><strong>Customer Data Management</strong></li>
                    </ul>
                  </TabPane>
                  <TabPane tabId="iconTabs3">
                    <p className="description">
                      AIRPOS Is Web Based Point Of Sale Software. You Can Login Anywhere In The Globe No 
                      Restrictions. With This POS Application You May Have Many Advantages Like
                    </p>
                    <ul className="liststyle">
                      <li><strong>You Can Login Anywhere In The Globe</strong></li>
                      <li><strong>Give We Give You Complete Data Backup In Any Case </strong></li>
                      <li><strong>You Can Continue You Sales If Internet Is Not Working</strong></li>
                      <strong>And Much More</strong>
                    </ul>
                  </TabPane>
                </TabContent>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </>
    );
  }
}

export default TabsSection;
