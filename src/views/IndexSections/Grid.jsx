import React from 'react';
import { Row, Col } from 'reactstrap';
import './Grid.css';
import TimelineRoundedIcon from '@material-ui/icons/TimelineRounded';
import ReceiptRoundedIcon from '@material-ui/icons/ReceiptRounded';
import FastfoodRoundedIcon from '@material-ui/icons/FastfoodRounded';
import RestaurantRoundedIcon from '@material-ui/icons/RestaurantRounded';
import StorefrontRoundedIcon from '@material-ui/icons/StorefrontRounded';
// import TableChartRoundedIcon from '@material-ui/icons/TableChartRounded';
import ListAltRoundedIcon from '@material-ui/icons/ListAltRounded';

const styles = {
  largeIcon : {
    width : '50px',
    height : '50px',
  }
}
const Grid = (props) => {
  return (
    <>
      {/* <h2 style={{textAlign : 'center', marginTop : '20px'}} className="display-3">Features</h2> */}
      <h2 style={{textAlign : 'center', marginTop : '20px'}} className="display-3">POS Deliverables</h2>
      <Row style={{marginTop : '20px', marginRight : '-10px'}}>
          <Col style={{textAlign : 'center', display : 'block'}} className='gridCardHover gridCard' lg="4" sm="12" md='12' xs="12">
            <TimelineRoundedIcon style={styles.largeIcon} />
            <h6>Complete Analytic Report</h6>
          </Col>
          <Col style={{textAlign : 'center', display : 'block'}} className='gridCardHover gridCard' lg="4" sm="12" md='12' xs="12">
            <ReceiptRoundedIcon style={styles.largeIcon} />
            <h6>Complete Analytic Report</h6>
          </Col>
          <Col style={{textAlign : 'center', display : 'block'}} className='gridCardHover gridCard' lg="4" sm="12" md='12' xs="12">
            <FastfoodRoundedIcon style={styles.largeIcon} />
            <h6>Complete Analytic Report</h6>
          </Col>
          <Col style={{textAlign : 'center', display : 'block'}} className='gridCardHover gridCard' lg="4" sm="12" md='12' xs="12">
            <RestaurantRoundedIcon style={styles.largeIcon} />
            <h6>Complete Analytic Report</h6>
          </Col>
          <Col style={{textAlign : 'center', display : 'block'}} className='gridCardHover gridCard' lg="4" sm="12" md='12' xs="12">
            <StorefrontRoundedIcon style={styles.largeIcon} />
            <h6>Complete Analytic Report</h6>
          </Col>
          <Col style={{textAlign : 'center', display : 'block'}} className='gridCardHover gridCard' lg="4" sm="12" md='12' xs="12">
            <ListAltRoundedIcon style={styles.largeIcon} />
            <h6>Complete Analytic Report</h6>
          </Col>
          {/* <Col style={{textAlign : 'center', display : 'block'}} className='gridCardHover gridCard' lg="4" sm="12" md='12' xs="12">
            <TimelineRoundedIcon style={styles.largeIcon} />
            <h6>Complete Analytic Report</h6>
          </Col>
          <Col style={{textAlign : 'center', display : 'block'}} className='gridCardHover gridCard' lg="3" sm="12" md='12' xs="12">
            <TimelineRoundedIcon style={styles.largeIcon} />
            <h6>Complete Analytic Report</h6>
          </Col>
          <Col style={{textAlign : 'center', display : 'block'}} className=' gridCard' lg="3" sm="12" md='12' xs="12">
            <div style={styles.largeIcon} />
            <h6>Complete Analytic Report</h6>
          </Col>
          <Col style={{textAlign : 'center', display : 'block'}} className='gridCardHover gridCard' lg="3" sm="12" md='12' xs="12">
            <TimelineRoundedIcon style={styles.largeIcon} />
            <h6>Complete Analytic Report</h6>
          </Col>
          <Col style={{textAlign : 'center', display : 'block'}} className='gridCardHover gridCard' lg="3" sm="12" md='12' xs="12">
            <TimelineRoundedIcon style={styles.largeIcon} />
            <h6>Complete Analytic Report</h6>
          </Col>
          <Col style={{textAlign : 'center', display : 'block'}} className=' gridCard' lg="3" sm="12" md='12' xs="12">
            <div style={styles.largeIcon} />
            <h6>Complete Analytic Report</h6>
          </Col> */}
          {/* <Col style={{textAlign : 'center', display : 'block'}} className='gridCardHover gridCard' lg="6" sm="12" md='12' xs="12">
            <TimelineRoundedIcon style={styles.largeIcon} />
            <h6>Complete Analytic Report</h6>
          </Col>
          <Col style={{textAlign : 'center', display : 'block'}} className='gridCardHover gridCard' lg="6" sm="12" md='12' xs="12">
            <TimelineRoundedIcon style={styles.largeIcon} />
            <h6>Complete Analytic Report</h6>
          </Col> */}
          {/* <Col className='gridCard' style={{backgroundColor : '#EDEDF0', height : '100px',marginTop : '5px', marginLeft : '0px'}} lg="2" sm="4" xs="12">.col-6 .col-sm-4</Col> */}
          {/* <Col style={{backgroundColor : 'grey'}} xs="6" sm="4">.col-6 .col-sm-4</Col>
          <Col style={{backgroundColor : 'grey'}} sm="4">.col-sm-4</Col> */}
        </Row>
      </>
  );
}

export default Grid;