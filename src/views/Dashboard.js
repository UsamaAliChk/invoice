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
  Form,
  Card,
  Table,
  Modal,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import Loader from '../loader/Loading'
import CompanyAddModel from '../Models/CompanyAddModel'
import CompanyEditModel from '../Models/CompanyEditModel'
function TableList() {



const [open,setopen]=useState(false)

const handleSubmit=()=>{
  console.log("Hello Usama")
}



  
  return (
      <>
      <Form.Label>PLAESE GO TO COMPANIES</Form.Label>
    </>
  );
}
export default TableList;
