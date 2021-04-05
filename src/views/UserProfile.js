import React,{useState} from "react";

import {Link} from 'react-router-dom'

import {
  FormLabel,FormControl,
  Button,
  Card,
  Form,
  Container,
  Row,
  Col,
  Table
} from "react-bootstrap";



import {useSelector} from 'react-redux'
import AddContact from '../Models/AddContact'
import EditContact from '../Models/EditContact'
import Loader from '../loader/Loading'
function User() {


  const [Loading,setLoading]=useState(true)
  const [IsOpen,setIsOpen]=useState(false)
  const [Edit,setEdit]=useState(false)
  const data=useSelector(state=>state.getCompany);
  const contacts=useSelector(state=>state.getContacts);
  if(data.length>0 && Loading===true) {setLoading(false); }
  const [contactData,setcontactData]=useState([]);
  const [id1,setid1]=useState('');
  
  const editContact=(id)=>{
    let s={}
    for(let i=0;i<contacts.length;i++){
        if(contacts[i].contactId===id){
          s=contacts[i];
        }
    }
    setcontactData(s);
    setid1(id);
    //console.log(s);
    setEdit(true);
}
 
  return (
  
    <>
      <EditContact Edit={Edit} setEdit={setEdit} id1={id1} contactData={contactData} setLoading={setLoading}/>
      <AddContact IsOpen={IsOpen} data={data} setLoading={setLoading} contacts={contacts} setIsOpen={setIsOpen}/> 
      {

        Loading? <Loader show={true}/>:

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
                  <Row >
                    
                    <Col className="px-1" md="4" style={{marginLeft:'12px'}}>
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
                    <Col md="4">
                      <Button>Add Account Details</Button>                    
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
                    <h5 className="title" style={{textTransform:'uppercase'}}>{data[0].companyName}</h5>
                  </a>
                  <p className="description">{data[0].chairPersonName}</p>
                </div>
                <p className="description text-center">
                  {data[0].chairPersonEmail}
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
                          <td className="editIcon" onClick={e1=>{editContact(e.contactId)}}><i class="far fa-edit"></i></td>
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
                <Link to={"maps"}><Button style={{marginLeft:"15px",width:"320px",marginTop:'0px'}}>GENERATE INVOICE</Button></Link>
                </Row>
              
              </Col>
            
        </Row>



      </Container>}
    </>
  );
}

export default User;
