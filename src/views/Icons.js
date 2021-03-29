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
import {Document,pdf} from '@react-pdf/renderer'
import ShowPdf from './ShowPdf'
function Icons() {
  const [link,setlink]=useState('')
  const [invoices,setinvoices]=useState([]);
  const [Loading,setLoading]=useState(true)
  const [pdfLink,setpdfLink]=useState('')
const openPdf=async()=>{
  let blob= await pdf(
    <ShowPdf/>
  ).toBlob()
  setpdfLink(window.URL.createObjectURL(blob));
  console.log(pdfLink)
  //setpdfBlob(blob);
}

  const getInvoices=async()=>{
    const data= await axios
      .get("https://spiretechs.co.uk:3000/invoices")
      .then(res => {console.log(res.data); return res.data})
      .catch(err => console.error(err));
      setinvoices(data);
      setLoading(false);
  }
  useEffect(()=>{
    getInvoices();
    openPdf();
  },[])
  return (
    <>
    {
      Loading?<Loader show={true}/>:
      <Container fluid>
          <Col>
          <Card>
              <Card.Body className="table-full-width table-responsive px-0">
              
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
                            <td style={{textTransform:'uppercase'}}>{e.issuedDate}</td>
                            <td >{e.dueDate}</td>
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
