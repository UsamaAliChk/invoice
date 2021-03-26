import React,{useState,useEffect} from "react";
import Image1 from '../Logos/1.jpeg'
import Image2 from '../Logos/2.jpeg'
import Image3 from '../Logos/3.jpeg'
import Image4 from '../Logos/4.jpeg'
import Image5 from '../Logos/5.jpeg'
import Image6 from '../Logos/6.jpeg'
import invoice from '../Logos/invoice1.png'
import {Link} from 'react-router-dom'
import axios from 'axios'
import BigLoad from '../components/BigLoad'
import { Label,Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
// react-bootstrap components
import {
  FormLabel,FormControl,
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

import {setContacts} from '../redux/action/index'

import {useSelector,useDispatch} from 'react-redux';
import Loader from 'react-loader-spinner';
function User() {

  const dispatch=useDispatch()
  const[title,settitle]=useState('');
  const[first,setfirst]=useState('');
  const[last,setlast]=useState('');
const[Ccountry,setcountry]=useState('');
const[address1,setaddress1]=useState(null);
const[address2,setaddress2]=useState(null);
const[address3,setaddress3]=useState(null);
const[Cemail,setCemail]=useState(null);
const [town,settown]=useState(null);
const[county,setcounty]=useState(null);
const [postalcode,setpostalcode]=useState(null);
const [CNumber,setCNumber]=useState(null);

  const [Loading,setLoading]=useState(true)

  const [IsOpen,setIsOpen]=useState(false)
  const data=useSelector(state=>state.getCompany);
  const contacts=useSelector(state=>state.getContacts);

  if(data.length>0 && Loading===true) {setLoading(false); }

  const handelSubmit=async()=>{
    setIsOpen(false);
    setLoading(true);
  const body={id:data[0].companyId,title,first,last,Ccountry,Cemail,town,postalcode,address1,address2,address3,CNumber,county}
    
  contacts.push({title,firstName:first,lastName:last,contactEmail:Cemail,Country:Ccountry,contactPhoneNumber:CNumber,Address1:address1,
    Address2:address2,Address3:address3,Town:town,County:county,postalCode:postalcode});
    dispatch(setContacts(contacts))

    await axios
      .post("https://spiretechs.co.uk:3000/contact",body)
      .then(res => {console.log(res.data);})
      .catch(err => console.error(err));
    setLoading(false)
  }


  console.log(data)
  const styles = {textAlign: 'center', fontSize: '26px', color: '#ff9900', position: 'fixed', verticalAlign: 'middle', left:'0px', top: '0px', width:'100%', height:'100%', backgroundColor: 'rgba(0,0,0,0.2)'}
 
  return (
    
    <>
     <Modal isOpen={IsOpen} size="lg">
        
        <ModalHeader>ADD CONTACT</ModalHeader>
        <ModalBody>
          <Row>
            <Col md="4">
              <FormLabel>Title</FormLabel>
              <FormControl type="text" onChange={e=>{settitle(e.target.value)}}></FormControl>
             </Col>
             <Col md="4">
              <FormLabel>First Name</FormLabel>
              <FormControl type="text" onChange={e=>{setfirst(e.target.value)}}></FormControl>
             </Col>
             <Col md="4">
              <FormLabel>Last Name</FormLabel>
              <FormControl type="text" onChange={e=>{setlast(e.target.value)}}></FormControl>
             </Col>
          </Row>
          <Row>
          <Col md="6">
              <FormLabel>Email</FormLabel>
              <FormControl type="text" onChange={e=>{setCemail(e.target.value)}}></FormControl>
            </Col>
          <Col md="4">
              <FormLabel>Postal Code</FormLabel>
              <FormControl type="text" onChange={e=>{setpostalcode(e.target.value)}}></FormControl>
            </Col>
          </Row>
          <Row>
            <Col md="6">
              <FormLabel>Address 1</FormLabel>
              <FormControl type="text" onChange={e=>{setaddress1(e.target.value)}}></FormControl>
            </Col>
            <Col md="6">
              <FormLabel>Address 2</FormLabel>
              <FormControl type="text" onChange={e=>{setaddress2(e.target.value)}}></FormControl>
            </Col>
          </Row>
            <Row>
            <Col md="6">
              <FormLabel>Address 3</FormLabel>
              <FormControl type="text" onChange={e=>{setaddress3(e.target.value)}}></FormControl>
            </Col>
            <Col md="6">
              <FormLabel>Phone Number</FormLabel>
              <FormControl type="text" onChange={e=>{setCNumber(e.target.value)}}></FormControl>
            </Col>
          </Row>

          <Row>
            <Col md="4">
              <FormLabel>Country</FormLabel>
              <FormControl type="text" onChange={e=>{setcountry(e.target.value)}}></FormControl>
            </Col>
          <Col md="4">
              <FormLabel>Town</FormLabel>
              <FormControl type="text" onChange={e=>{settown(e.target.value)}}></FormControl>
            </Col>
            
            <Col md="4">
              <FormLabel>County</FormLabel>
              <FormControl type="text" onChange={e=>{setcounty(e.target.value)}}></FormControl>
            </Col>
          </Row>
        </ModalBody>
        <ModalFooter>
          <Button onClick={e=>{handelSubmit()}}>Save</Button>
          <Button color="secondary" onClick={e=>setIsOpen(false)}>Cancel</Button>
        </ModalFooter>
      </Modal>
      {

        Loading? <div style={styles}>
        <div style={{paddingTop:"300px",paddingLeft:"50px"}}>
      <Loader  type="Circles"
      color="#595959"
      height={100}
      width={100}/></div></div>:

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
                  <Button onClick={e=>setIsOpen(true)} style={{marginBottom:'20px'}}>ADD CONTACT</Button>
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
                          <td className="editIcon"><i class="far fa-edit"></i></td>
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
                <Link to={"maps"}><Button style={{marginLeft:"15px",width:"320px",marginTop:'-180px'}}>GENERATE INVOICE</Button></Link>
                </Row>
              
              </Col>
            
        </Row>



      </Container>}
    </>
  );
}

export default User;
