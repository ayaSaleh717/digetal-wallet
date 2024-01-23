
import React from "react";
// nodejs library that concatenates classes
import classnames from "classnames";
import './../../assets/css/styl.css'


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
  Col,
  CardImg
} from "reactstrap";

class TabsSection extends React.Component {
  state = {
    iconTabs: 1,
    plainTabs: 1,
  };
  toggleNavs = (e, state, index) => {
    e.preventDefault();
    this.setState({
      [state]: index,
    });
  };
  render() {
    return (
      <section className="cotainer tap-cont">
        
        <Row className="justify-content-center">
          <Col lg="6">
            {/* Tabs with icons */}
            <div className="mb-3">
              <small className="text-uppercase font-weight-bold">
              Manage, recover and secure your favorite assets. Withdraw directly to your bank account with ease.
              </small>
            </div>
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
                      active: this.state.iconTabs === 1,
                    })}
                    onClick={(e) => this.toggleNavs(e, "iconTabs", 1)}
                    href="#pablo"
                    role="tab"
                  >
                    <i className="ni ni-cloud-upload-96 mr-2" />
                    Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  
                </NavItem>
                <NavItem>
                  {/* <NavLink
                    aria-selected={this.state.iconTabs === 3}
                    className={classnames("mb-sm-3 mb-md-0", {
                      active: this.state.iconTabs === 3,
                    })}
                    onClick={(e) => this.toggleNavs(e, "iconTabs", 3)}
                    href="#pablo"
                    role="tab"
                  >
                    <i className="ni ni-calendar-grid-58 mr-2" />
                    Messages
                  </NavLink> */}
                </NavItem>
              </Nav>
            </div>
            <Card className="shadow">
              <CardBody>
                <TabContent activeTab={"iconTabs" + this.state.iconTabs}>
                  <TabPane tabId="iconTabs1">
                    <p className="description">
                    We provide instant withdrawal option of all your assets to any 
                    bank account all over the world 
                    </p>
                    <p className="description">
                    we’re supported by kraken.com, coinbase.com, blockchain.com,
                     ndax.com and more than hundreds of  public exchange wallet across the globe.
                    </p>
                  </TabPane>
                 
                  
                </TabContent>
              </CardBody>
            </Card>
          </Col>
          <Col className="mt-5 mt-lg-0" lg="6">

            <Card className="shadow">
              <CardBody>
              <CardImg
      alt="Card image cap"
      src="https://decentralisedacct.com/wp-content/uploads/2023/06/devices_mockups-macbook_03-1024x653-1.png"
      style={{
        height: 270
      }}
      width="100%"
    />





              </CardBody>
            </Card>
          </Col>
        </Row>
      </section>
    );
  }
}

export default TabsSection;
