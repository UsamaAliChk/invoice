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
export default function EditUserAddress({setopen2,setEdit,open2,editContact,contactData}) {
    const valScheema = Yup.object({
        address1:Yup.string().required("Required field"),
        address2:Yup.string(),
        address3:Yup.string(),
        Ccountry:Yup.string().required(),
        county:Yup.string(),
        town:Yup.string().required(),
        postalcode:Yup.string()
    });

    const getData=(payload)=>{
        const body={
            Ccountry:payload.Ccountry,
            town:payload.town,
            postalcode:payload.postalcode,
            address1:payload.address1,
            address2:payload.address2,
            address3:payload.address3,
            county:payload.county
        }
        localStorage.setItem("userAddressInfo",JSON.stringify(body));
        setopen2(false);
        editContact();
    }

    return (
        <div>
           <Formik 
              enableReinitialize
            validationSchema={valScheema}  
            validateOnChange={false}
            onSubmit={getData}
            initialValues={{
                Ccountry:contactData.Country,
                county:contactData.County,
                postalcode:contactData.postalCode,
                town:contactData.Town,
                address3:contactData.Address3,
                address1:contactData.Address1,
                address2:contactData.Address2
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
                <Modal show={open2} size='lg' style={{marginTop:"-200px",height:"1000px"}}>
                         <Modal.Body>
                            <Row className='modal-top'>
                                <h4 style={{marginTop:'20px'}}>Contact Address</h4>
                            </Row>
                            <Row style={{marginTop:"30px"}}>
                                <Col md="5">
                                <img src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1504&q=80" className="modal-image-compnay-address"/>
                                </Col>
                                <Col md="7">
                                <Form onSubmit={handleSubmit} autoComplete="off">
                                <Row>
                                    <Col md="12">
                                        <FormLabel>Address 1</FormLabel>
                                        <FormControl as="textArea" row={3} id="address1" isInvalid={!!errors.address1} isValid={errors.address1} value={values.address1} onChange={handleChange}></FormControl>
                                        <Form.Control.Feedback type="invalid">{errors.address1}</Form.Control.Feedback>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md="6">
                                        <FormLabel>Address 2</FormLabel>
                                        <FormControl as="textArea" row={3} id="address2" isInvalid={!!errors.address2} isValid={errors.address2} value={values.address2} onChange={handleChange}></FormControl>
                                        <Form.Control.Feedback type="invalid">{errors.address2}</Form.Control.Feedback>
                                    </Col>
                                    <Col md="6">
                                        <FormLabel>Address 3</FormLabel>
                                        <FormControl as="textArea" row={3} id="address3" value={values.address3} isInvalid={!!errors.address3} isValid={errors.address3} onChange={handleChange}></FormControl>
                                        <Form.Control.Feedback type="invalid">{errors.address3}</Form.Control.Feedback>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md="6">
                                        <FormLabel>Country</FormLabel>
                                        <FormControl type="text" id="Ccountry" isValid={errors.Ccountry} isInvalid={!!errors.Ccountry} value={values.Ccountry} onChange={handleChange}></FormControl>
                                        <Form.Control.Feedback type="invalid">{errors.Ccountry}</Form.Control.Feedback>
                                    </Col>
                                    <Col md="6">
                                        <FormLabel>Postal Code</FormLabel>
                                        <FormControl type="text" id="postalcode" isInvalid={!!errors.postalcode} isValid={errors.postalcode} value={values.postalcode} onChange={handleChange}></FormControl>
                                        <Form.Control.Feedback type="invalid">{errors.postalcode}</Form.Control.Feedback>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md="6">
                                        <FormLabel>Town</FormLabel>
                                        <FormControl type="text" id="town" isValid={errors.title} isInvalid={!!errors.town} value={values.town} onChange={handleChange}></FormControl>
                                        <Form.Control.Feedback type="invalid">{errors.town}</Form.Control.Feedback>
                                    </Col>
                                    <Col md="6">
                                        <FormLabel>County</FormLabel>
                                        <FormControl type="text" isInvalid={!!errors.county} isValid={errors.address3} id="county" value={values.county} onChange={handleChange}></FormControl>
                                        <Form.Control.Feedback type="invalid">{errors.county}</Form.Control.Feedback>
                                    </Col>
                                </Row>
                                <Row className="modal-buttons-container">
                                    <Button style={{marginLeft:'15px'}} className="modal-button" onClick={e=>{setopen2(false);setEdit(true)}}>Previous</Button>
                                    <Button className="modal-button" type="submit">Submit</Button>
                                    <Button style={{marginRight:'15px'}} className="modal-button" onClick={e=>setopen2(false)}>Cancel</Button>
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
