import React,{useState} from 'react'
import {
  Form,
    FormGroup,FormLabel,FormControl,
    Button,
    Row,
    Col,
  } from "react-bootstrap";
import axios from 'axios';
import * as Yup from 'yup';
import {Formik} from 'formik';
import { Label,Input,Modal,ModalHeader, ModalBody, ModalFooter } from "reactstrap";
export default function CompanyEditModel({Edit,setEdit,companyData,setloading,setallCompanies,setCompanies}) {

   

    const valScheema = Yup.object({
      Cname:Yup.string().required("Required field"),
      Cemail:Yup.string().email().required("Required field"),
      CNumber:Yup.string().required("Required field"),
      address1:Yup.string().required("Required field"),
      address2:Yup.string(),
      address3:Yup.string(),
      Ccountry:Yup.string().required(),
      county:Yup.string(),
      town:Yup.string().required(),
      postalcode:Yup.string().required(),
      
      bankName:Yup.string().nullable(),
      accountNumber:Yup.string().nullable(),
      sortCode:Yup.string().nullable(),
      swiftCode:Yup.string().nullable(),
      bicCode:Yup.string().nullable(),
      accountName:Yup.string().nullable(),
      vat:Yup.number().required()
    })


    const editCompany=async(payload)=>{
      setEdit(false)
        setloading(true)
        const body={
          id:companyData.companyId,
          Cname:payload.Cname,
          Ccountry:payload.Ccountry,
          Cemail:payload.Cemail
          ,town:payload.town,
          postalcode:payload.postalcode
          ,address1:payload.address1,
          address2:payload.address2,
          address3:payload.address3,
          CNumber:payload.CNumber,
          county:payload.county, 
          bankName:payload.bankName,
          accountNumber:payload.accountNumber,
          accountName:payload.accountName,
          bicCode:payload.bicCode,
          swiftCode:payload.swiftCode,
          sortCode:payload.sortCode,
          vat:payload.vat
        }
        //const body={id:id1,Cname,Ccountry,Cemail,town,postalcode,address1,address2,address3,CNumber,county}
        console.log(body)
         await axios
          .post("http://localhost:5000/companyUpdate",body)
          .then(res => console.log(res))
          .catch(err => console.error(err));
          const data=await axios
            .get("https://spiretechs.co.uk:3000/companies")
            .then(res => {return res.data})
            .catch(err => console.error(err));
            setallCompanies(data);setCompanies(data)
        setloading(false)
      }

    return (
      <div>
          
      <Formik 
          enableReinitialize
        validationSchema={valScheema}  
        validateOnChange={false}
        onSubmit={editCompany}
        initialValues={{
          Cname:companyData.companyName,
          Ccountry:companyData.Country,
          Cemail:companyData.companyEmail,
          county:companyData.County,
          postalcode:companyData.postalCode,
          town:companyData.Town,
          address3:companyData.Address3,
          address1:companyData.Address1,
          address2:companyData.Address2,
          sortCode:companyData.sortCode,
              accountName:companyData.accountName,
              accountNumber:companyData.accountNumber,
              bankName:companyData.bankName,
              swiftCode:companyData.swiftCode,
              bicCode:companyData.bicCode,
              vat:companyData.vat
        }}
      >
        {
          ({
            handleSubmit,
            handleChange,
            handleBlur,
            values,
            touched,
            isValid,
            errors,
            isSubmitting,
            isValidating
          })=>(


         <Modal isOpen={Edit} size="lg">
    
    <ModalHeader>Edit COMAPNAY</ModalHeader>
    <ModalBody>
    <Form onSubmit={handleSubmit}>
      <Row>
        <Col md="4">
          <FormLabel>Name</FormLabel>
          <FormControl id="Cname" type="text" value={values.Cname} onChange={handleChange}></FormControl>
          <Form.Control.Feedback type="invalid">{errors.Cname}</Form.Control.Feedback>
         </Col>
        <Col md="5">
          <FormLabel>Email</FormLabel>
          <FormControl id="Cemail" type="text" isInvalid={!!errors.Cemail} isValid={errors.Cemail} value={values.Cemail} onChange={handleChange}></FormControl>
          <Form.Control.Feedback type="invalid">{errors.Cemail}</Form.Control.Feedback>
        </Col>
        <Col md="3">
        <FormLabel>Postal Code</FormLabel>
          <FormControl type="text" id="postalcode" isInvalid={!!errors.postalcode} isValid={errors.postalcode} value={values.postalcode} onChange={handleChange}></FormControl>
          <Form.Control.Feedback type="invalid">{errors.postalcode}</Form.Control.Feedback>
        </Col>
      </Row>
      <Row>
        <Col md="6">
        <FormLabel>Address 1</FormLabel>
          <FormControl type="text" id="address1" isInvalid={!!errors.address1} isValid={errors.address1} value={values.address1} onChange={handleChange}></FormControl>
          <Form.Control.Feedback type="invalid">{errors.address1}</Form.Control.Feedback>
        </Col>
        <Col md="6">
        <FormLabel>Address 2</FormLabel>
          <FormControl type="text" id="address2" isInvalid={!!errors.address2} isValid={errors.address2} value={values.address2} onChange={handleChange}></FormControl>
          <Form.Control.Feedback type="invalid">{errors.address2}</Form.Control.Feedback>
        </Col>
      </Row>
        <Row>
        
        <Col md="5">
            <FormLabel>Address 3</FormLabel>
              <FormControl type="text" id="address3" value={values.address3} isInvalid={!!errors.address3} isValid={errors.address3} onChange={handleChange}></FormControl>
              <Form.Control.Feedback type="invalid">{errors.address3}</Form.Control.Feedback>
            </Col>
            <Col md="5">
            <FormLabel>Phone Number</FormLabel>
              <FormControl type="text" id="CNumber" isInvalid={!!errors.CNumber} isValid={errors.CNumber} value={values.CNumber} onChange={handleChange}></FormControl>
              <Form.Control.Feedback type="invalid">{errors.CNumber}</Form.Control.Feedback>
            </Col>
            <Col md="2">
            <FormLabel>Vat Percentage</FormLabel>
              <FormControl type="text" id="vat" isInvalid={!!errors.vat} isValid={errors.vat} value={values.vat} onChange={handleChange}></FormControl>
              <Form.Control.Feedback type="invalid">{errors.vat}</Form.Control.Feedback>
            </Col>
      </Row>

      <Row>
        <Col md="4">
        <FormLabel>Country</FormLabel>
          <FormControl type="text" id="Ccountry" isValid={errors.Ccountry} isInvalid={!!errors.Ccountry} value={values.Ccountry} onChange={handleChange}></FormControl>
          <Form.Control.Feedback type="invalid">{errors.Ccountry}</Form.Control.Feedback>
        </Col>
        <Col md="4">
          <FormLabel>Town</FormLabel>
          <FormControl type="text" id="town" isValid={errors.title} isInvalid={!!errors.town} value={values.town} onChange={handleChange}></FormControl>
          <Form.Control.Feedback type="invalid">{errors.town}</Form.Control.Feedback>
        </Col>
        
        <Col md="4">
          <FormLabel>County</FormLabel>
          <FormControl type="text" isInvalid={!!errors.county} isValid={errors.address3} id="county" value={values.county} onChange={handleChange}></FormControl>
          <Form.Control.Feedback type="invalid">{errors.county}</Form.Control.Feedback>
        </Col>
      </Row>
      <Row>
              <Col md="6">
              <FormLabel>Bank Name</FormLabel>
              <FormControl type="text" isInvalid={!!errors.bankName} isValid={errors.bankName} id="bankName" value={values.bankName} onChange={handleChange}></FormControl>
              <Form.Control.Feedback type="invalid">{errors.bankName}</Form.Control.Feedback>
              </Col>
              <Col md="3">
              <FormLabel>Sort Code</FormLabel>
              <FormControl type="text" isInvalid={!!errors.sortCode} isValid={errors.sortCode} id="sortCode" value={values.sortCode} onChange={handleChange}></FormControl>
              <Form.Control.Feedback type="invalid">{errors.sortCode}</Form.Control.Feedback>
              </Col>
              <Col md="3">
              <FormLabel>Bic Code</FormLabel>
              <FormControl type="text" isInvalid={!!errors.bicCode} isValid={errors.bicCode} id="bicCode" value={values.bicCode} onChange={handleChange}></FormControl>
              <Form.Control.Feedback type="invalid">{errors.bicCode}</Form.Control.Feedback>
              </Col>
            </Row>

            <Row>
              <Col md="4">
              <FormLabel>Account Name</FormLabel>
              <FormControl type="text" isInvalid={!!errors.accountName} isValid={errors.accountName} id="accountName" value={values.accountName} onChange={handleChange}></FormControl>
              <Form.Control.Feedback type="invalid">{errors.accountName}</Form.Control.Feedback>
              </Col>
              
              <Col md="5">
              <FormLabel>Account Number</FormLabel>
              <FormControl type="text" isInvalid={!!errors.accountNumber} isValid={errors.accountNumber} id="accountNumber" alue={values.accountNumber} onChange={handleChange}></FormControl>
              <Form.Control.Feedback type="invalid">{errors.accountNumber}</Form.Control.Feedback>
              </Col>
              <Col md="3">
              <FormLabel>Swift Code</FormLabel>
              <FormControl type="text" isInvalid={!!errors.swiftCode} isValid={errors.bicCode} id="swiftCode" value={values.swiftCode} onChange={handleChange}></FormControl>
              <Form.Control.Feedback type="invalid">{errors.swiftCode}</Form.Control.Feedback>
              </Col>
            </Row>

      <Row style={{marginTop:"30px"}}>
        <Col md="4">
        <Button type="submit" >Save</Button>
        </Col>
        <Col md="4">
        <Button color="secondary" onClick={e=>setEdit(false)}>Cancel</Button>
        </Col>
      </Row>
      </Form>
    </ModalBody>
    
  </Modal>
 )}
 </Formik>
    </div>
    )
}
