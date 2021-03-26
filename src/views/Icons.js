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


import Loader  from 'react-loader-spinner'
function Icons() {

  const [invoices,setinvoices]=useState([]);
  const [Loading,setLoading]=useState(false)

  const styles = {textAlign: 'center', fontSize: '26px', color: '#ff9900', position: 'fixed', verticalAlign: 'middle', left:'0px', top: '0px', width:'100%', height:'100%', backgroundColor: 'rgba(0,0,0,0.2)'}
  return (
    <>
    {
      Loading?<div style={styles}>
      <div style={{paddingTop:"300px",paddingLeft:"50px"}}>
    <Loader  type="Circles"
    color="#595959"
    height={100}
    width={100}/></div></div>:
      <Container fluid>
          <Col>
          <Card>
              <Card.Body className="table-full-width table-responsive px-0">
              
                <Table className="table-hover table-striped">
                  <thead>
                  <tr>
                      <th className="border-0">ID</th>
                      <th className="border-0">Contact Name</th>
                      <th className="border-0">Issued Date</th>
                      <th className="border-0">Due Date</th>
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
                            <td style={{textTransform:'uppercase'}}>{e.issuedDate}</td>
                            <td >{e.dueDate}</td>
                            <td><Button>SHOW</Button></td>
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
