import React,{useState,useEffect} from "react";
import Image1 from '../Logos/1.jpeg'
import Image2 from '../Logos/2.jpeg'
import Image3 from '../Logos/3.jpeg'
import Image4 from '../Logos/4.jpeg'
import Image5 from '../Logos/5.jpeg'
import Image6 from '../Logos/6.jpeg'
import invoice from '../Logos/invoice1.png'
import {Link} from 'react-router-dom'
import BigLoad from '../components/BigLoad'
// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Form,
  Navbar,
  Nav,
  Container,
  Row,
  Col,
  Table
} from "react-bootstrap";

import {useSelector} from 'react-redux';
import Loader from 'react-loader-spinner';
function User() {



  const data=useSelector(state=>state.getCompany);
  const contacts=useSelector(state=>state.getContacts);
  console.log(data)
  const styles = {textAlign: 'center', fontSize: '26px', color: '#ff9900', position: 'fixed', verticalAlign: 'middle', left:'0px', top: '0px', width:'100%', height:'100%', backgroundColor: 'rgba(0,0,0,0.2)'}
  if(data.length===0){
      return(
        <div style={styles}>
          <div style={{paddingTop:"300px",paddingLeft:"50px"}}>
        <Loader  type="Circles"
        color="#595959"
        height={100}
        width={100}/></div></div>
      )   
  }
  else{
  return (
    
    <>
      <Container fluid>
        <Row>
          <Col md="8">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Companey Profile</Card.Title>
              </Card.Header>
              <Card.Body>
                <Form>
                  <Row>
                    <Col className="pr-1" md="5">
                      <Form.Group>
                        <label>Company</label>
                        <Form.Control
                          defaultValue={data[0].companyName}
                          disabled
                          placeholder="SAMWAYS"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="px-1" md="3">
                      <Form.Group>
                        <label>Contact Number</label>
                        <Form.Control
                          defaultValue={data[0].companyPhoneNumber}
                          placeholder="Number"
                          type="text"
                          disabled
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="pl-1" md="4">
                      <Form.Group>
                        <label htmlFor="exampleInputEmail1">
                          Email address
                        </label>
                        <Form.Control
                        defaultValue={data[0].companyEmail}
                          placeholder="Email"
                          type="email"
                          disabled
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  {/* <Row>
                    <Col className="pr-1" md="6">
                      <Form.Group>
                        <label>First Name</label>
                        <Form.Control
                          defaultValue="Mike"
                          placeholder="Company"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="pl-1" md="6">
                      <Form.Group>
                        <label>Last Name</label>
                        <Form.Control
                          defaultValue="Andrew"
                          placeholder="Last Name"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row> */}
                  <Row>
                    <Col md="12">
                      <Form.Group>
                        <label>Address</label>
                        <Form.Control
                          defaultValue={data[0].Address1}
                          placeholder="Home Address"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    
                    <Col className="px-1" md="4">
                      <Form.Group>
                        <label>Country</label>
                        <Form.Control
                          defaultValue={data[0].Country}
                          placeholder="Country"
                          type="text"
                          disabled
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="pl-1" md="4">
                      <Form.Group>
                        <label>Postal Code</label>
                        <Form.Control
                          defaultValue={data[0].postalCode}
                          disabled
                          placeholder="ZIP Code"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12">
                      <Form.Group>
                        <label>About</label>
                        <Form.Control
                          cols="80"
                          defaultValue="Samways, Inc. is a Pakistani online travel company that operates a website and mobile app with user-generated content and a comparison shopping website.It also offers online hotel reservations and bookings for transportation, lodging, travel experiences, and restaurants."
                          placeholder="Here can be your description"
                          rows="4"
                          as="textarea"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>

        
                  {/* <Button
                    className="btn-fill pull-right"
                    type="submit"
                    variant="info"
                  >
                    
                  </Button> */}
                  <div className="clearfix"></div>
                </Form>
              </Card.Body>
            </Card>
           
          </Col>
          <Col md="4">
            <Card className="card-user">
              <div className="card-image">
                <img
                  alt="..."
                  src={
                    "https://crm-companies-logos.s3.amazonaws.com/background.jpeg"
                  }
                ></img>
              </div>
              <Card.Body>
                <div className="author">
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <img
                      alt="..."
                      className="avatar border-gray"
                      src={data[0].logoUrl}
                    ></img>
                    <h5 className="title">SAMWAYS</h5>
                  </a>
                  <p className="description">michael24</p>
                </div>
                <p className="description text-center">
                  "Lamborghini Mercy <br></br>
                  Your chick she so thirsty <br></br>
                  I'm in that two seat Lambo"
                </p>
              </Card.Body>
              <hr></hr>
              <div className="button-container mr-auto ml-auto">
                <Button
                  className="btn-simple btn-icon"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  variant="link"
                >
                  <i className="fab fa-facebook-square"></i>
                </Button>
                <Button
                  className="btn-simple btn-icon"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  variant="link"
                >
                  <i className="fab fa-twitter"></i>
                </Button>
                <Button
                  className="btn-simple btn-icon"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  variant="link"
                >
                  <i className="fab fa-google-plus-square"></i>
                </Button>
              </div>
            </Card>
          </Col>
        </Row>

 
        
            <Row>
              <Col md='8'>
              <Card>
                  <Card.Header>
                <Card.Title as="h4">Samways Contacts List</Card.Title>
                <p className="card-category">
                  Here is a list of all contacts
                </p>
              </Card.Header>
                  <Card.Body>
                <Table >
                <thead>
                    <tr>
                      <th className="border-0">ID</th>
                      <th className="border-0">Name</th>
                      <th className="border-0">Company</th>
                      <th className="border-0">Email</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                       contacts.map((e,i)=>{
                         let name=e.title+' '+e.firstName+' '+e.lastName;
                        return(
                          <tr>
                          <td>{i+1}</td>
                        <td>{name}</td>
                          <td>{e.companyName}</td>
                          <td>{e.contactEmail}</td>
                        </tr>
                        )
                      })
                    }
                   
                    
                    
                   
                  
                  </tbody>
                </Table>
              </Card.Body>
              </Card>
              </Col>
                
              <Col md="4">
                <Row>
                <div>
                <img src={invoice} style={{height:"300px",width:"330px",marginLeft:'10px',marginTop:'-120px'}}/>
                </div>
                </Row>
                <Row>
                <Link to={"maps"}><Button style={{marginLeft:"15px",width:"320px",marginTop:'20px'}}>GENERATE INVOICE</Button></Link>
                </Row>
              
              </Col>
            
        </Row>



      </Container>
    </>
  );}
}

export default User;
