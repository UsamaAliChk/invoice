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


import AddAcountDetail from '../Models/AddAcountDetail'
import {useSelector} from 'react-redux'
import AddContact from '../Models/AddContact'
import EditContact from '../Models/EditContact'
import Loader from '../loader/Loading'
function User() {

  const [open,setopen]=useState(false)
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
      <AddAcountDetail open={open} setopen={setopen} data={data} setLoading={setLoading}/>
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
                    <Col className="pr-1" md="3">
                      <Form.Group>
                        <label>Company</label>
                        <p>{data[0].companyName}</p>
                        {/* <Form.Control
                          defaultValue={data[0].companyName}
                          disabled
                          placeholder="SAMWAYS"
                          type="text"
                        ></Form.Control> */}
                      </Form.Group>
                    </Col>
                    <Col className="px-1" md="3">
                      <Form.Group>
                        <label>Contact Number</label>
                        <p>{data[0].companyPhoneNumber}</p>
                        {/* <Form.Control
                          defaultValue={data[0].companyPhoneNumber}
                          placeholder="Number"
                          type="text"
                          disabled
                        ></Form.Control> */}
                      </Form.Group>
                    </Col>
                    <Col className="pl-1" md="4">
                      <Form.Group>
                        {
                          (data[0].companyEmail!=='')?
                          <div>
                            <label htmlFor="exampleInputEmail1">
                          Email address
                        </label>
                        <p>{data[0].companyEmail}</p>
                          </div>
                          :null
                        }
                        
                        {/* <Form.Control
                        defaultValue={data[0].companyEmail}
                          placeholder="Email"
                          type="email"
                          disabled
                        ></Form.Control> */}
                      </Form.Group>
                    </Col>
                  </Row>
                  
                  <Row>
                    <Col md="6">
                      <Form.Group>
                        <label>Address 1</label>
                        <p>{data[0].Address1}</p>
                        {/* <Form.Control
                          defaultValue={data[0].Address1}
                          placeholder="Address"
                          type="text"
                        ></Form.Control> */}
                      </Form.Group>
                    </Col>
                    {
                      (data[0].address2!=="")?
                      <Col md="6">
                      <Form.Group>
                        <label>Address 2</label>
                        <p>{data[0].Address2}</p>
                        {/* <Form.Control
                          defaultValue={data[0].Address1}
                          placeholder="Address"
                          type="text"
                        ></Form.Control> */}
                      </Form.Group>
                      </Col>:null
                    }
                  </Row>
                  <Row>
                  {
                      (data[0].Address3!=="")?<Col className="pl-1" md="3" style={{marginLeft:'15px'}}>
                      <Form.Group>
                        <label>Address 3</label>
                        <p>{data[0].Address3}</p>
                        {/* <Form.Control
                          defaultValue={data[0].postalCode}
                          disabled
                          placeholder="ZIP Code"
                          type="text"
                        ></Form.Control> */}
                      </Form.Group>
                    </Col>:null
                    }
                    <Col className="px-1" md="4" style={{marginLeft:'15px'}}>
                      <Form.Group>
                        <label>Country</label>
                        <p>{data[0].Country}</p>
                        {/* <Form.Control
                          defaultValue={data[0].Country}
                          placeholder="Country"
                          type="text"
                          disabled
                        ></Form.Control> */}
                      </Form.Group>
                    </Col>
                    {
                      (data[0].postalCode!=="")?<Col className="pl-1" md="3">
                      <Form.Group>
                        <label>Postal Code</label>
                        <p>{data[0].postalCode}</p>
                        {/* <Form.Control
                          defaultValue={data[0].postalCode}
                          disabled
                          placeholder="ZIP Code"
                          type="text"
                        ></Form.Control> */}
                      </Form.Group>
                    </Col>:null
                    }
                    </Row>
                  <Row >
                    <Col md="4">
                      <Button style={{color:"black"}} onClick={e=>setopen(true)}>Update Company</Button>                    
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
                      style={{objectFit:'contain'}}
                      className="avatar border-gray"
                      src={data[0].logoUrl}
                    />
                   
                  </a>
                  
                  <h5  style={{textTransform:'uppercase',fontWeight:'bold'}}>{data[0].companyName}</h5>
                  <p className="description">{data[0].chairPersonName}</p>
                  <p className="description">{data[0].companyPhoneNumber}</p>
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
