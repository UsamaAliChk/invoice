import React from 'react'

import {
    FormLabel,FormControl,
    Button,
    Card,
    Form,
    Modal,
    Container,
    Row,
    Col,
    Table
  } from "react-bootstrap";
  import * as Yup from 'yup';
import {Formik} from 'formik';
export default function EditUserInfo({Edit,setEdit,setopen2,contactData,setuserInfo}) {
    //console.log("Usama",open)
    const valScheema = Yup.object({
        first:Yup.string().required("Required field"),
        last:Yup.string().required("Required field"),
        title:Yup.string().required("Required field"),
        Cemail:Yup.string().email().required("Required field"),
        CNumber:Yup.string().required("Required field"),
        companyName:Yup.string().required()
    });

    const getData=(payload)=>{
        const body={
            title:payload.title,
            first:payload.first,
            last:payload.last,
            Cemail:payload.Cemail,
            companyName:payload.companyName,
            CNumber:payload.CNumber
        }
     
        setuserInfo(body);
        setEdit(false);
        setopen2(true);
    }

    return (
        <div>
             <Formik 
              enableReinitialize
            validationSchema={valScheema}  
            validateOnChange={false}
            onSubmit={getData}
            initialValues={{
                first:contactData.firstName,
                last:contactData.lastName,
                title:contactData.title,
                Cemail:contactData.contactEmail,
                companyName:contactData.companyName,
                CNumber:contactData.contactPhoneNumber
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
                <Modal show={Edit} size='xl'>
                        <Modal.Header>Add Contact</Modal.Header>
                        <Modal.Body>
                            <Form onSubmit={handleSubmit} autoComplete='off'>
                                <Row>
                                    <Col md="4">
                                        <FormLabel>Title</FormLabel>
                                        <FormControl id="title" type="text" value={values.title} isInvalid={!!errors.title}  onChange={handleChange} isValid={errors.title}></FormControl>
                                        <Form.Control.Feedback type="invalid">{errors.title}</Form.Control.Feedback>
                                    </Col>
                                    <Col md="4">
                                        <FormLabel>First Name</FormLabel>
                                        <FormControl id="first" type="text" value={values.first} onChange={handleChange} isValid={errors.first} isInvalid={!!errors.first}></FormControl>
                                        <Form.Control.Feedback type="invalid">{errors.first}</Form.Control.Feedback>
                                    </Col>
            
                                    <Col md="4">
                                        <FormLabel>Last Name</FormLabel>
                                        <FormControl id="last" isInvalid={!!errors.last} isValid={errors.last} type="text" value={values.last} onChange={handleChange}></FormControl>
                                        <Form.Control.Feedback type="invalid">{errors.last}</Form.Control.Feedback>
                                    </Col>

                                </Row>
                                <Row>
                                    <Col md="4">
                                        <FormLabel>Email</FormLabel>
                                        <FormControl id="Cemail" type="text" isInvalid={!!errors.Cemail} isValid={errors.Cemail} value={values.Cemail} onChange={handleChange}></FormControl>
                                        <Form.Control.Feedback type="invalid">{errors.Cemail}</Form.Control.Feedback>
                                    </Col>
                                    <Col md="4">
                                        <FormLabel>Phone Number</FormLabel>
                                        <FormControl type="text" id="CNumber" isInvalid={!!errors.CNumber} isValid={errors.CNumber} value={values.CNumber} onChange={handleChange}></FormControl>
                                        <Form.Control.Feedback type="invalid">{errors.CNumber}</Form.Control.Feedback>
                                    </Col>
                                    <Col md="4">
                                        <FormLabel>Company Name</FormLabel>
                                        <FormControl id="companyName" type="text" value={values.companyName} onChange={handleChange} isValid={errors.companyName} isInvalid={!!errors.companyName}></FormControl>
                                        <Form.Control.Feedback type="invalid">{errors.companyName}</Form.Control.Feedback>
                                    </Col>
                                </Row>
                                <Row style={{marginTop:"30px"}}>
                                    <Button type="submit" style={{marginLeft:'12px',marginRight:'40px'}}>Next</Button>
                                    <Button onClick={e=>setEdit(false)}>Cancel</Button>
                                </Row>
                            </Form>
                        </Modal.Body>
                </Modal>
              )}
              </Formik>
        </div>
    )
}
