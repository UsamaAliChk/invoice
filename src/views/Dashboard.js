import React,{useState,useEffect} from "react";
//import axios from 'axios'

import {setCompany,setContacts} from '../redux/action/index'
import {useDispatch} from 'react-redux'
import Image1 from '../Logos/1.jpeg'
import Image5 from '../Logos/5.jpeg'
import {Link} from 'react-router-dom'
import axios from 'axios'
import S3 from "aws-sdk/clients/s3";
import { Credentials } from "aws-sdk";
// react-bootstrap components
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
   Form
} from "react-bootstrap";
import Loader  from 'react-loader-spinner'
import { Label,Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
function TableList() {

const [IsOpen,setIsOpen]=useState(false)

const[Cname,setcompanyName]=useState('');
const[Ccountry,setcountry]=useState('');
const[address1,setaddress1]=useState(null);
const[address2,setaddress2]=useState(null);
const[address3,setaddress3]=useState(null);
const[Cemail,setCemail]=useState(null);
const [town,settown]=useState(null);
const[county,setcounty]=useState(null);
const [postalcode,setpostalcode]=useState(null);
const [CNumber,setCNumber]=useState(null);
const [logo,setlogo]=useState(null);

const[file,setfile]=useState()


// const access = new Credentials({
//   accessKeyId: "AKIA5UT2A32QWWX76HOF",
//   secretAccessKey: "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",
// });
const access='';
const s3 = new S3({
  credentials: access,
  region: "eu-west-1"
});

const Upload=async()=>{
  const params = {
    Bucket: "tth-cms1",
    ACL: "public-read",
    Key: `${file.name}`,
    Body: file
  };
  try{
  var s4=await s3.upload(params)
    .promise()
    return s4.Location
  }
  catch(err){
    console.log(err);
  }
}

const handelSubmit=async()=>{
  setIsOpen(false);
  setloading(true);
  var s=await Upload();
  setlogo(s)
console.log(logo)  
const body={Cname,Ccountry,Cemail,town,postalcode,address1,address2,address3,CNumber,county,logo}
  
  await axios
    .post("https://spiretechs.co.uk:3000/company",body)
    .then(res => {setcompnies(res.data);
                  setallCompanies(res.data);})
    .catch(err => console.error(err));
    setloading(false);
  
}

const dispatch=useDispatch()

  const handelClick=async(id)=>{
    console.log(id);
     const company= await axios
        .get(`https://spiretechs.co.uk:3000/company/${id}`)
        .then(res => {return res.data})
        .catch(err => console.error(err));
      const contacts=await axios
        .get(`https://spiretechs.co.uk:3000/contacts/${id}`)
        .then(res => {return res.data})
        .catch(err => console.error(err));
    console.log(contacts)
    debugger
    dispatch(setCompany(company));
    dispatch(setContacts(contacts));
  }

  const searchByName=(value)=>{
      value=value.toUpperCase();
      let data=allCompnies;
      console.log(data)
      let data2=[];
      for(let i=0;i<data.length;i++){
        if(data[i].companyName.toUpperCase().indexOf(value)>-1){
          data2.push(data[i]);
        }
      }
      
        setcompnies(data2)
     
  }
  const searchByCountry=(value)=>{
    value=value.toUpperCase();
      let data=allCompnies;
      console.log(data)
      let data2=[];
      for(let i=0;i<data.length;i++){
        if(data[i].Country.toUpperCase().indexOf(value)>-1){
          data2.push(data[i]);
        }
      }
        setcompnies(data2)
 
  }

  const getCompanies=async()=>{
    dispatch(setCompany([]))
    const data= await axios
      .get("https://spiretechs.co.uk:3000/companies")
      .then(res => {console.log(res.data); return res.data})
      .catch(err => console.error(err));
      setcompnies(data);
      setallCompanies(data);
      

      setloading(false);
      
  }
  useEffect(()=>{
 
    getCompanies();
    console.log(companies);
   
  },[])
  const [allCompnies,setallCompanies]=useState([]);
  const [companies,setcompnies]=useState([]);
  const [loading,setloading]=useState(true);
  const styles = {textAlign: 'center', fontSize: '26px', color: '#ff9900', position: 'fixed', verticalAlign: 'middle', left:'0px', top: '0px', width:'100%', height:'100%', backgroundColor: 'rgba(0,0,0,0.2)'}
  return (
      <>
      <Modal isOpen={IsOpen} size="lg">
        
        <ModalHeader>ADD COMAPNAY</ModalHeader>
        <ModalBody>
          <Row>
            <Col md="4">
              <FormLabel>Name</FormLabel>
              <FormControl type="text" onChange={e=>{setcompanyName(e.target.value)}}></FormControl>
             </Col>
            <Col md="5">
              <FormLabel>Email</FormLabel>
              <FormControl type="text" onChange={e=>{setCemail(e.target.value)}}></FormControl>
            </Col>
            <Col md="3">
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
          <Row>
            <FormLabel>Logo</FormLabel>
              <FormControl type="file" onChange={(e)=>setfile(e.target.files[0])}></FormControl>
            
          </Row>
        </ModalBody>
        <ModalFooter>
          <Button onClick={e=>{handelSubmit()}}>Save</Button>
          <Button color="secondary" onClick={e=>setIsOpen(false)}>Cancel</Button>
        </ModalFooter>
      </Modal>
      {
        loading?
      <div style={styles}>
       <div style={{paddingTop:"300px",paddingLeft:"50px"}}>
     <Loader  type="Circles"
     color="#595959"
     height={100}
     width={100}/>
     </div>
     </div>
   :
      <Container fluid>
        <Row>
          <Col md="10">
            <Card className="strpied-tabled-with-hover">
              <Card.Header>
                <Card.Title as="h4">COMPANIES</Card.Title>
                <p className="card-category">
                  Here is a the list of all companies
                </p>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
              <Row style={{marginLeft:'2px',marginBottom:'10px'}}>
                <Col md="4">
                  <FormLabel>Company Name</FormLabel>
                  <FormControl onChange={e=>searchByName(e.target.value)} type="text"></FormControl>
                </Col>
                <Col md="4">
                  <FormLabel>Country Name</FormLabel>
                  <FormControl onChange={e=>searchByCountry(e.target.value)} type="text"></FormControl>
                </Col>
                <Col>
                  <Button onClick={e=>{setIsOpen(true); console.log(IsOpen)}} style={{marginTop:"25px",height:'40px'}}>ADD COMPANY</Button>
                </Col>
              </Row>
                <Table className="table-hover table-striped">
                  <thead>
                    
                  </thead>
                  <tbody>
                  
                    {
                      companies.map(e=>{
                        return (
                          <tr>
                            <td><img src={e.logoUrl} style={{height:"50px",width:"50px"}} /></td>
                            <td ><Link to={'user'} onClick={e1=>{handelClick(e.companyId)}} style={{textTransform:'uppercase'}}>{e.companyName}</Link></td>
                            <td>{e.companyEmail}</td>
                            <td style={{textTransform:'uppercase'}}>{e.Country}</td>
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
          
        </Row>
      </Container>
}
    </>
  );
}
export default TableList;
