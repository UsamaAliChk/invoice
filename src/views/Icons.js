import React,{useEffect,useState} from "react";

// react-bootstrap components
import {
  FormGroup,FormLabel,FormControl,
  Badge,
  Button,
  Card,
  Navbar,
  Nav,
  Container,
  Row,
  Table,
  Col,
} from "react-bootstrap";
import axios from 'axios'
import Loader from '../loader/Loading'

function Icons() {
  const [link,setlink]=useState('')
  const [invoices,setinvoices]=useState([]);
  const [allinvoices,setallinvoices]=useState([]);
  const [Loading,setLoading]=useState(true)

  const getInvoices=async()=>{
    const data= await axios
      .get("https://spiretechs.co.uk:3000/invoices")
      .then(res => {console.log(res.data); return res.data})
      .catch(err => console.error(err));
      setinvoices(data);
      setallinvoices(data);
      setLoading(false);
  }
  useEffect(()=>{
    getInvoices();
   
  },[])

  const searchByName=(value)=>{
    value=value.toUpperCase();
    let data=invoices;
    if(!value) { setinvoices(allinvoices); return}
    let data2=[];
    for(let i=0;i<data.length;i++){
      if(data[i].contactName.toUpperCase().indexOf(value)>-1){
          data2.push(data[i]);
      }
    } 
      setinvoices(data2)
  }


  const searchByCompany=(value)=>{
    if(!value){ setinvoices(allinvoices); return}
    value=value.toUpperCase();
    let data=invoices;

    let data2=[];
    for(let i=0;i<data.length;i++){
      if(data[i].companyName.toUpperCase().indexOf(value)>-1){
          data2.push(data[i]);
      }
    }
    
    setinvoices(data2)
  }
  return (
    <>
    {
      Loading?<Loader show={true}/>:
      <Container fluid>
          <Col>
          <Card>
              <Card.Body className="table-full-width table-responsive px-0">
              <Row style={{marginLeft:'2px',marginBottom:'10px'}}>
                <Col md="4">
                  <FormLabel>Contact Name</FormLabel>
                  <FormControl onChange={e=>searchByName(e.target.value)} type="text"></FormControl>
                </Col>
                <Col md="4">
                  <FormLabel>Company Name</FormLabel>
                  <FormControl onChange={e=>searchByCompany(e.target.value)} type="text"></FormControl>
                </Col>
              </Row>
                <Table className="table-hover table-striped">
                  <thead>
                  <tr>
                      <th className="border-0">ID</th>
                      <th className="border-0">Contact Name</th>
                      <th className="border-0">Company Name</th>
                      <th className="border-0">Issued Date</th>
                      <th className="border-0">Due Date</th>
                      <th className="border-0">Pdf Link</th>
                      <th className="border-0"></th>
                    </tr>
                  </thead>
                  <tbody>
                  
                    {
                      invoices.map((e,i)=>{
                        return (
                          <tr>
                            <td>{i+1}</td>
                      
                            <td>{e.contactName}</td>
                            <td>{e.companyName}</td>
                            <td >{e.dueDate}</td>
                            <td>{e.issuedDate}</td>
                            
                            <td> <a target="blank" href={e.link}>link</a></td>
                        </tr>
                        )
                      })
                    }
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
         
            
        </Container> }    
    </>
  );
}

export default Icons;
