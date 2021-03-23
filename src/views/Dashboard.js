import React,{useState,useEffect} from "react";
//import axios from 'axios'

import {setCompany,setContacts} from '../redux/action/index'
import {useDispatch} from 'react-redux'
import Image1 from '../Logos/1.jpeg'
import Image5 from '../Logos/5.jpeg'
import {Link} from 'react-router-dom'
import axios from 'axios'
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
} from "react-bootstrap";
import Loader  from 'react-loader-spinner'
function TableList() {



const dispatch=useDispatch()

  const handelClick=async(id)=>{
     const company= await axios
        .get(`https://34.207.140.115:3000/company/${id}`)
        .then(res => {return res.data})
        .catch(err => console.error(err));
      const contacts=await axios
        .get(`https://34.207.140.115:3000/contacts/${id}`)
        .then(res => {return res.data})
        .catch(err => console.error(err));
    
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
      .get("http://localhost:5000/companies")
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