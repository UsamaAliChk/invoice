import React from 'react'
import * as Yup from 'yup';
import {Formik} from 'formik';
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
    Modal,
     Form
  } from "react-bootstrap";
export default function EditCompanyBankInfo({setopen2,open2,editCompany,companyData,setopen}) {

    console.log(companyData)
    const valScheema=Yup.object({
        name:Yup.string().required(),
        cpNumber:Yup.string().required(),
        cpEmail:Yup.string().required(),
        
        bankName:Yup.string(),
        accountNumber:Yup.string(),
        sortCode:Yup.string(),
        swiftCode:Yup.string(),
        bicCode:Yup.string(),
        accountName:Yup.string(),
        vat:Yup.string().required()
    })

    
    const getData=(payload)=>{
        const body={
            name:payload.name,
            cpNumber:payload.cpNumber,
            cpEmail:payload.cpEmail,
            bankName:payload.bankName,
            accountNumber:payload.accountNumber,
            accountName:payload.accountName,
            bicCode:payload.bicCode,
            swiftCode:payload.swiftCode,
            sortCode:payload.sortCode,
            vat:payload.vat
        }
        console.log(body)
        
        localStorage.setItem("bankdata",JSON.stringify(body));
        setopen2(false);
        editCompany()
    }


    return (
        <div>
         <Formik 
              enableReinitialize
            validationSchema={valScheema}  
            validateOnChange={false}
            onSubmit={getData}
            initialValues={{
              name:companyData.chairPersonName,
              cpEmail:companyData.chairPersonEmail,
              cpNumber:companyData.chairPersonNumber,
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
                <Modal show={open2} size="lg">
                    <Modal.Header>Compnay Info</Modal.Header>
                        <Modal.Body>
                            <Form onSubmit={handleSubmit}>
                            <Row>
                                <Col md="4">
                                    <FormLabel>CEO Name</FormLabel>
                                    <FormControl id="name" autoComplete={false} type="text" isInvalid={!!errors.name} isValid={errors.name} value={values.name} onChange={handleChange}></FormControl>
                                    <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
                                </Col>
                                <Col md="4">
                                    <FormLabel>CEO Email</FormLabel>
                                    <FormControl id="cpEmail" autoComplete={false} type="text" isInvalid={!!errors.cpEmail} isValid={errors.cpEmail} value={values.cpEmail} onChange={handleChange}></FormControl>
                                    <Form.Control.Feedback type="invalid">{errors.cpEmail}</Form.Control.Feedback>
                                </Col>
                                <Col md="4">
                                    <FormLabel>CEO Number</FormLabel>
                                    <FormControl id="cpNumber" autoComplete={false} type="text" isInvalid={!!errors.cpNumber} isValid={errors.name} value={values.cpNumber} onChange={handleChange}></FormControl>
                                    <Form.Control.Feedback type="invalid">{errors.cpNumber}</Form.Control.Feedback>
                                </Col>
                            </Row>
                            
            <Row style={{marginTop:"30px"}}>
            <Col md="4">
              <FormLabel>Bank Name</FormLabel>
              <FormControl type="text" isInvalid={!!errors.bankName} isValid={errors.bankName} id="bankName" value={values.bankName} onChange={handleChange}></FormControl>
              <Form.Control.Feedback type="invalid">{errors.bankName}</Form.Control.Feedback>
              </Col>
              <Col md="4">
              <FormLabel>Account Name</FormLabel>
              <FormControl type="text" isInvalid={!!errors.accountName} isValid={errors.accountName} id="accountName" value={values.accountName} onChange={handleChange}></FormControl>
              <Form.Control.Feedback type="invalid">{errors.accountName}</Form.Control.Feedback>
              </Col>
              
              <Col md="4">
              <FormLabel>Account Number</FormLabel>
              <FormControl type="text" isInvalid={!!errors.accountNumber} isValid={errors.accountNumber} id="accountNumber" value={values.accountNumber} onChange={handleChange}></FormControl>
              <Form.Control.Feedback type="invalid">{errors.accountNumber}</Form.Control.Feedback>
              </Col>
            </Row>

            <Row style={{marginTop:"30px"}}>
              
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
              <Col md="3">
              <FormLabel>Swift Code</FormLabel>
              <FormControl type="text" isInvalid={!!errors.swiftCode} isValid={errors.bicCode} id="swiftCode" value={values.swiftCode} onChange={handleChange}></FormControl>
              <Form.Control.Feedback type="invalid">{errors.swiftCode}</Form.Control.Feedback>
              </Col>
              <Col md="2">
                <FormLabel>Vat</FormLabel>
                <FormControl type="text" id="vat" isInvalid={!!errors.vat} isValid={errors.vat} value={values.vat} onChange={handleChange}></FormControl>
                <Form.Control.Feedback type="invalid">{errors.vat}</Form.Control.Feedback>
            </Col>
            </Row>
                                <Row style={{marginTop:"30px"}}>
                                    <Button onClick={e=>{setopen2(false);setopen(true)}} style={{marginLeft:"20px"}}>Previous</Button>
                                    <Button type="submit" style={{marginLeft:"50px"}}>SAVE</Button>
                                    <Button onClick={e=>setopen2(false)} style={{marginLeft:"50px"}}>CANCEL</Button>
                                </Row>
                            </Form>
                    </Modal.Body>
                </Modal>
              )}
              </Formik>
        </div>
    )
}
