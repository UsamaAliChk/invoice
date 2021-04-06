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
export default function AddContactUserInfo({IsOpen,setIsOpen,setopen2,setuserInfo}) {
    //console.log("Usama",open)
    const valScheema = Yup.object({
        first:Yup.string().required("Required field"),
        last:Yup.string().required("Required field"),
        title:Yup.string().required("Required field"),
        Cemail:Yup.string().email().required("Required field"),
        CNumber:Yup.string().required("Required field"),
        companyName:Yup.string().required(),
        contactType:Yup.string().required()
    });

    const getData=(payload)=>{
        const body={
            title:payload.title,
            first:payload.first,
            last:payload.last,
            Cemail:payload.Cemail,
            companyName:payload.companyName,
            CNumber:payload.CNumber,
            contactType:payload.contactType
        }
      
        setuserInfo(body);
        setIsOpen(false);
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
              first:'',
              last:'',
              title:'',
              CNumber:'',
              Cemail:'',
              companyName:'',
              contactType:''
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
                <Modal show={IsOpen} size='lg'  style={{marginTop:"-170px",height:"1000px"}}>
                        <Modal.Body>
                            <Row className='modal-top'>
                                <h4 style={{marginTop:'20px'}}>Contact Information</h4>
                            </Row>
                            <Row style={{marginTop:"30px"}}>
                                <Col md="5">
                                <img src="https://thumbs.dreamstime.com/b/person-writing-sheet-paper-fixed-to-clipboard-clipboard-165795947.jpg" className="modal-image-compnay-address"/>
                                </Col>
                                <Col md="7">
                                <Form onSubmit={handleSubmit} autoComplete='off'>
                                <Row>
                                    <Col md="6">
                                        <FormLabel>Title</FormLabel>
                                        <FormControl id="title" type="text" value={values.title} isInvalid={!!errors.title}  onChange={handleChange} isValid={errors.title}></FormControl>
                                        <Form.Control.Feedback type="invalid">{errors.title}</Form.Control.Feedback>
                                    </Col>
                                    <Col md="6">
                                        <FormLabel>First Name</FormLabel>
                                        <FormControl id="first" type="text" value={values.first} onChange={handleChange} isValid={errors.first} isInvalid={!!errors.first}></FormControl>
                                        <Form.Control.Feedback type="invalid">{errors.first}</Form.Control.Feedback>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md="6">
                                        <FormLabel>Last Name</FormLabel>
                                        <FormControl id="last" isInvalid={!!errors.last} isValid={errors.last} type="text" value={values.last} onChange={handleChange}></FormControl>
                                        <Form.Control.Feedback type="invalid">{errors.last}</Form.Control.Feedback>
                                    </Col>
                                    <Col md="6">
                                        <FormLabel>Company Name</FormLabel>
                                        <FormControl id="companyName" type="text" value={values.companyName} onChange={handleChange} isValid={errors.companyName} isInvalid={!!errors.companyName}></FormControl>
                                        <Form.Control.Feedback type="invalid">{errors.companyName}</Form.Control.Feedback>
                                    </Col>
                                </Row>
                                <Row>
                                <Col md="12">
                                        <FormLabel>Contact Type</FormLabel>
                                        <FormControl id="contactType" as="select" onChange={handleChange} isValid={errors.contactType} isInvalid={!!errors.contactType}>
                                        <option>billing</option>
                                        <option>personal</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                        </FormControl>
                    
                                        <Form.Control.Feedback type="invalid">{errors.contactType}</Form.Control.Feedback>
                                    </Col>  
                                </Row>
                                <Row>
                                    <Col md="12">
                                        <FormLabel>Email</FormLabel>
                                        <FormControl id="Cemail" type="text" isInvalid={!!errors.Cemail} isValid={errors.Cemail} value={values.Cemail} onChange={handleChange}></FormControl>
                                        <Form.Control.Feedback type="invalid">{errors.Cemail}</Form.Control.Feedback>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md="12">
                                        <FormLabel>Phone Number</FormLabel>
                                        <FormControl type="text" id="CNumber" isInvalid={!!errors.CNumber} isValid={errors.CNumber} value={values.CNumber} onChange={handleChange}></FormControl>
                                        <Form.Control.Feedback type="invalid">{errors.CNumber}</Form.Control.Feedback>
                                    </Col>
                                </Row>
                                <Row className="modal-buttons-container">
                                    <Button type="submit" className="modal-button" style={{marginLeft:"85px",width:"80px"}}>Next</Button>
                                    <Button className="modal-button" style={{marginRight:"160px"}}  onClick={e=>setIsOpen(false)}>Cancel</Button>
                                </Row>
                            </Form>
                                </Col>
                            </Row>
                            
                        </Modal.Body>
                </Modal>
              )}
              </Formik>
        </div>
    )
}
