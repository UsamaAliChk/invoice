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

import ShowList from './ShowList'

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
      phoneNumber=contacts[i].contactPhoneNumber;
      contactCompanyName=contacts[i].companyName;
      Email=contacts[i].contactEmail
      con=contacts[i].Country;
      t=contacts[i].Town;
      p=contacts[i].postalCode
    }
  }

  let bankInfo={}
  if(selectedCompany[0].bankName!==null){
    bankInfo.bankName=selectedCompany[0].bankName;
  }
  else{
    bankInfo.bankName=null
  }
  if(selectedCompany[0].accountNumber!==null){
    bankInfo.accountNumber=selectedCompany[0].accountNumber;
  }
  else{
    bankInfo.accountNumber=null
  }
  if(selectedCompany[0].sortCode!==null){
    bankInfo.sortCode=selectedCompany[0].sortCode;
  }
  else{
    bankInfo.sortCode=null
  }
  // if(selectedCompany[0].accountName!==null){
  //     bankInfo.push(selectedCompany[0].accountName);
  // }
  // if(selectedCompany[0].bicCode!==null){
  //   bankInfo.push(selectedCompany[0].bicCode);
  // }
  // if(selectedCompany[0].swiftCode!==null){
  //   bankInfo.push(selectedCompany[0].swiftCode);
  // }
let p1=totalPrice

let per,p2=''
console.log(selectedCompany[0].vat)
if(selectedCompany[0].vat!==null){
 p2=parseInt(selectedCompany[0].vat);
 per=(totalPrice*p2)/100;}
else{
   p2=0;
 per=0;
}


let billing={Name,Town:t,PostalCode:p,Country:con,phoneNumber,address,contactCompanyName,Email,id}
//console.log(billing)

  dispatch(setData({bankInfo,company,dueDate,billing,tax:per,items,subTotal:p1,totalPrice:totalPrice+per}))
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
                  <Form.Control type="text" value={tax}>
                  </Form.Control>
                </Col>
                </Row>
              <ShowList items={items} tax={tax} setitems={setitems} total={totalPrice} settotalPrice={settotalPrice} settax={settax} vat={selectedCompany[0].vat}/>

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
                    <Button style={{marginTop:"30px",color:"black"}} onClick={e=>{
                      let s5=0
                      if(!isNaN(qty)){
                      let total=qty*price;
                      let total2=totalPrice+total;
                      s5=total2
                      settotalPrice(total2); 
                      setitems(old=>[...old,{description,qty,price,total,id:Math.random()}])}
                      else{
                        setitems(old=>[...old,{description,qty:0,price:0,total:0,id:Math.random()}])
                      }
                      
                      if(selectedCompany[0].vat!==null){
                        let p2=parseInt(selectedCompany[0].vat);
                        let per=(s5*p2)/100;                       
                        settax(per)
                      }
                        else{
                        settax(0)
                        }


                      }} disabled={!canAdd}>ADD</Button>
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
