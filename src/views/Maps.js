import React,{useState,useEffect} from "react";
import {setData} from '../redux/action/index'
import {useDispatch,useSelector} from 'react-redux'
import axios from 'axios';
// react-bootstrap components
import {Col, Row,Badge, 
  Button, Navbar, Nav,
   Container,Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import Loader  from 'react-loader-spinner'

function Maps() {
  const [Caddress,setCaddress]=useState([]);
  const contacts=useSelector(state=>state.getContacts)
  const selectedCompany=useSelector(state=>state.getCompany)
  const dispatch=useDispatch();
  const [loading ,setloading]=useState(true);
  const [price,setprice]=useState(0);
const [totalPrice,settotalPrice]=useState(0);
const [Uints,setUnits]=useState([]);
const [qty,setqty]=useState(0);
const [description,setdescription]=useState('')
const [items,setitems]=useState([]);
const [selectedMemberId,setselectedMemberId]=useState('');
const [tax,settax]=useState(0);
const [dueDate,setdueDate]=useState('');
const canAdd=description.length>0 && qty!==0 && price!==0;
const isEnabled=canAdd && selectedMemberId!==''


useEffect(()=>{
  console.log(selectedCompany)
  let companyAddress=[]
  if(selectedCompany[0].Address1!==null){
    companyAddress.push(selectedCompany[0].Address1);
  }
  if(selectedCompany[0].Address2!==null){
    companyAddress.push(selectedCompany[0].Address2);
  }
  if(selectedCompany[0].Address3!==null){
    companyAddress.push(selectedCompany[0].Address3);
  }
  if(selectedCompany[0].Address4!==null){
    companyAddress.push(selectedCompany[0].Address4);
  }
  setCaddress(companyAddress);
  console.log("ADDRESS===",Caddress);
})



const handelDelete=async(index)=>{
//  console.log("index is ",index)
  let Total=totalPrice;
     let data=[]
     for(let i=0;i<items.length;i++){
       if(i===index){
          Total=Total-items[i].total
          await settotalPrice(Total)
          continue;
       }
       else
        data.push(items[i])
     }
     await setitems(data)
}


const handelClick=()=>{

  let companyAddress=[]
  if(selectedCompany[0].Address1!==null){
    companyAddress.push(selectedCompany[0].Address1);
  }
  if(selectedCompany[0].Address2!==null){
    companyAddress.push(selectedCompany[0].Address2);
  }
  if(selectedCompany[0].Address3!==null){
    companyAddress.push(selectedCompany[0].Address3);
  }
  if(selectedCompany[0].Address4!==null){
    companyAddress.push(selectedCompany[0].Address4);
  }

  let company={name:selectedCompany[0].companyName,PostalCode:selectedCompany[0].postalCode,Country:selectedCompany[0].Country,Email:selectedCompany[0].companyEmai
    ,Town:selectedCompany.Town,companyAddress,Number:selectedCompany[0].companyPhoneNumber};

    
    let address=[]
    let Name=''
    let phoneNumber=''
    let contactCompanyName=''
    let Email='';
    let id='';
    let con='';
    let t='';
    let p='';
  for(let i =0;i<contacts.length;i++){
    if( contacts[i].contactId==selectedMemberId){
      if(contacts[i].Address1!==null){
        address.push(contacts[i].Address1);
      }
      if(contacts[i].Address2!==null){
        address.push(contacts[i].Address2);
      }
      if(contacts[i].Address3!==null){
        address.push(contacts[i].Address3);
      }
      if(contacts[i].Address4!==null){
        address.push(contacts[i].Address4);
      }
      id=contacts[i].contactId;
      Name=contacts[i].title+' '+contacts[i].firstName+' '+contacts[i].lastName;
      phoneNumber=contacts[i].companyPhoneNumber;
      contactCompanyName=contacts[i].companyName;
      
      con=contacts[i].Country;
      t=contacts[i].Town;
      p=contacts[i].postalCode
    }
  }
 
  axios
    .post("https://spiretechs.co.uk:3000/invoice",{items,totalPrice,contactCompanyName,Name})
    .then(res => console.log(res))
    .catch(err => console.error(err));
let p1=totalPrice
let billing={Name,Town:t,PostalCode:p,Country:con,phoneNumber,address,contactCompanyName,Email,id}
console.log(billing)

  dispatch(setData({company,dueDate,billing,tax,items,subTotal:p1,totalPrice:totalPrice+tax}))
}
const styles = {textAlign: 'center', fontSize: '26px', color: '#ff9900', position: 'fixed', verticalAlign: 'middle', left:'0px', top: '0px', width:'100%', height:'100%', backgroundColor: 'rgba(0,0,0,0.2)'}
  return (

      <Container fluid>
        <Row>
          <Col md="12">
            <Form>
              <Row>
                <Col md="4">
                    <Form.Label style={{fontSize:"30px",marginBottom:'30px',textTransform:'uppercase'}}>{selectedCompany[0].companyName}</Form.Label>
                </Col>
              </Row>
              <Row>
                <Col md="4">
                <Form.Group>
                  <Form.Label>Select Billing Member</Form.Label>
                  <Form.Control as="select" onChange={e=>{setselectedMemberId(parseInt(e.target.value))}}>
                      <option>Select a member</option>
                      {
                        contacts.map(e=>{
                          let name=e.title+' '+e.firstName+' '+e.lastName;
                          return(
                            <option value={e.contactId}>{name}</option>
                          )
                        })
                      }
                  </Form.Control>
                </Form.Group>
                
                </Col>
                <Col md="4">
                  <Form.Label>Due Date</Form.Label>
                  <Form.Control type="date" onChange={e=>setdueDate(e.target.value)}>
                  </Form.Control>
                </Col>
                <Col md="4">
                  <Form.Label>Tax</Form.Label>
                  <Form.Control type="text" onChange={e=>{let s=parseInt(e.target.value);settax(s)}}>
                  </Form.Control>
                </Col>
                </Row>
              {
                (items!==[])?
                items.map((e,i)=>{
                  return(
                    <div style={{marginBottom:"20px"}} key={i}>
                        <Row>
                          <Col md="5">
                            <Form.Control as="textarea" rows={3} defaultValue={e.description}></Form.Control>
                          </Col>
                          <Col md="1">
                            <Form.Control type="text" defaultValue={e.qty}></Form.Control>
                          </Col>
                          <Col md="2">
                       
                            <Form.Control type="text" defaultValue={e.price}></Form.Control>
                          </Col>
                          <Col md="1">
                           
                            <Form.Control defaultValue={e.total} disabled></Form.Control>
                          </Col>
                          <Col md="1">
                              <Button variant="danger" id={i} onClick={e=>{handelDelete(parseInt(e.target.id))}} >DELETE</Button>
                          </Col>
                        </Row>
                    </div>
                  )
                }):null
              }

              <Row>
                <Col md="6">
                
                    <Form.Label>Description</Form.Label>
                    <Form.Control as="textarea" rows={3} type="text" onChange={e=>{setdescription(e.target.value);}} >
                    </Form.Control>
                </Col>
                <Col md="2">
                  <Form.Label>QTY</Form.Label>
                <Form.Control as="select" onChange={(e)=>{let val=parseInt(e.target.value);setqty(val)}}>
                      <option>Select QTY</option>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                      <option>6</option>
                      <option>7</option>
                      <option>8</option>
                      <option>9</option>
                      <option>10</option>
                  </Form.Control>
                </Col>
                <Col md="2">
                    <Form.Label>Price</Form.Label>
                    <Form.Control type="text" onChange={(e)=>{let value=parseInt(e.target.value) ;setprice(value)}}></Form.Control>
                </Col>
                <Col md="1">
                    <Button style={{marginTop:"30px",color:"black"}} onClick={e=>{let total=qty*price;let total2=totalPrice+total;settotalPrice(total2); setitems(old=>[...old,{description,qty,price,total}])}} disabled={!canAdd}>ADD</Button>
                </Col>
              </Row>
              <Row>
                <Link to={'notifications'}><Button style={{marginTop:"20px",marginLeft:"15px",color:'black'}} onClick={handelClick} disabled={!isEnabled}>CREATE</Button></Link>
              </Row>
            </Form>
          </Col>
        </Row>
      </Container>
    
  );
}

export default Maps;
