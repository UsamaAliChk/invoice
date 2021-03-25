import React from 'react'
import {
  FormGroup,FormLabel,FormControl,
  Badge,
  Button,
  Card,
  Navbar,
  Nav,
  Table,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import image1 from '../assets/img/1.jpg'
import image2 from '../assets/img/2.png'
import image3 from '../assets/img/3.png'
import {Link} from 'react-router-dom';
export default function Notifications() {
  return (
    <div>
      <Container fluid>
          <Row>
            <Col md='12'>
              <FormGroup>
                <FormLabel>Please Select A Template</FormLabel>
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md='4'>
            <Link to='typography' onClick={(e)=>{localStorage.setItem('type','1')}}><img src={image1} style={{width:'150px',height:'200px'}}/></Link>
            </Col>
            <Col md='4'>
            <Link to='typography' onClick={(e)=>{localStorage.setItem('type','2')}}><img src={image2} style={{width:'150px',height:'200px'}}/></Link>
            </Col>
          </Row>
          <Row style={{marginTop:"30px"}}>
            <Col md='4'>
              <Link to='typography'><img src={image3} onClick={(e)=>{localStorage.setItem('type','3')}} style={{width:'150px',height:'200px'}}/></Link>
            </Col>
           
          </Row>
      </Container>
    </div>
  )
}
