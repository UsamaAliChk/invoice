import React,{useState,useEffect} from "react";
//import axios from 'axios'

import {setCompanies, setCompany,setContacts} from '../redux/action/index'
import {useDispatch} from 'react-redux'

import {Link} from 'react-router-dom'
import axios from 'axios'

// react-bootstrap components
import {
FormLabel,FormControl,
  Button,
  Card,
  Table,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import Loader from '../loader/Loading'
import CompanyAddModel from '../Models/CompanyAddModel'
import CompanyEditModel from '../Models/CompanyEditModel'
function TableList() {
const [IsOpen,setIsOpen]=useState(false)
const [companyData,setcompanyData]=useState('');
const [Edit,setEdit]=useState(false);
const [id1,setid1]=useState();

const editCompnay=(id)=>{
    let s={}
    for(let i=0;i<companies.length;i++){
        if(companies[i].companyId===id){
          s=companies[i];
        }
    }
    setcompanyData(s);
    console.log(companyData)
    setid1(id);
    setEdit(true);
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
    
    dispatch(setCompany(company));
    dispatch(setContacts(contacts));
  }

const searchByName=(value)=>{
    value=value.toUpperCase();
    let data=allCompnies;
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
      let invoices=await axios.get("https://spiretechs.co.uk:3000/getNoOfInvoices")
      .then(res=>{return res.data})
      .catch(err=>console.log(err))
      localStorage.setItem("invoiceNo",(invoices.no_Of_invoices+1).toString());

      setcompnies(data)
      setallCompanies(data);
      setloading(false);
      console.log(data)
  }
  useEffect(()=>{
    getCompanies();
  },[])
  const [allCompnies,setallCompanies]=useState([]);
  const [companies,setcompnies]=useState([]);
  const [loading,setloading]=useState(true);
  
  return (
      <>
    <CompanyEditModel setCompanies={setcompnies} setallCompanies={setallCompanies} Edit={Edit} setEdit={setEdit} setloading={setloading} id1={id1} companyData={companyData}/>
    <CompanyAddModel open={IsOpen} setopen={setIsOpen} setloading={setloading} setcompnies={setcompnies} setallCompanies={setallCompanies}/>

      {
        loading?
      <Loader show={true}/>
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
                            <td className="editIcon" onClick={e1=>{editCompnay(e.companyId)}}><i class="far fa-edit"></i></td>
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
