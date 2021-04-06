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
      Ccountry:Yup.string().required("Country is Required"),
      address1:Yup.string().required("This Field is Required"),
      address2:Yup.string().required("This Field is Required"),
      address3:Yup.string(),
      town:Yup.string(),
      postalcode:Yup.string(),
      county:Yup.string()
    })

    
    const getData=(payload)=>{
        const body={
          Ccountry:payload.Ccountry,
          address1:payload.address1,
          address2:payload.address2,
          address3:payload.address3,
          town:payload.town,
          postalcode:payload.postalcode,
          county:payload.county
          
        }
    
        localStorage.setItem("companyAddress",JSON.stringify(body));
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
                address3:companyData.Address3,
                address1:companyData.Address1,
                address2:companyData.Address2,
                Ccountry:companyData.Country,
                town:companyData.Town,
                postalcode:companyData.postalCode,
                county:companyData.County
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
                <Modal show={open2} size="lg" style={{marginTop:"-190px",height:"1000px"}}>
                    
                     <Modal.Body>
                            <Form onSubmit={handleSubmit}>
                            <Row className='modal-top'>
                                <h4 style={{marginTop:'20px'}}>Edit Company Address</h4>
                            </Row>
                                <Row style={{marginTop:"30px",marginLeft:"1px"}}>
                                   <Col md="7">
                                        <Row>
                                            <Col md="12">
                                                <FormLabel>Address1</FormLabel>
                                                <FormControl id="address1"  as="textArea" row="3" isInvalid={!!errors.address1} isValid={errors.address1} value={values.address1} onChange={handleChange}></FormControl>
                                                <Form.Control.Feedback type="invalid">{errors.address1}</Form.Control.Feedback>
                                            </Col>
                                            
                                        </Row> 
                                        <Row>
                                            <Col md="6">
                                                <FormLabel>Address2</FormLabel>
                                                <FormControl id="address2"  as="textArea" row="3" isInvalid={!!errors.address2} isValid={errors.address2} value={values.address2} onChange={handleChange}></FormControl>
                                                <Form.Control.Feedback type="invalid">{errors.address2}</Form.Control.Feedback>
                                            </Col>
                                            <Col md="6">
                                                <FormLabel>Address3</FormLabel>
                                                <FormControl id="address3" autoComplete={false} as="textArea" row="3" isInvalid={!!errors.address3} isValid={errors.address3} value={values.address3} onChange={handleChange}></FormControl>
                                                <Form.Control.Feedback type="invalid">{errors.address3}</Form.Control.Feedback>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col md="6">
                                                <FormLabel>Country</FormLabel>
                                                <FormControl id="Ccountry"  type="text" isInvalid={!!errors.Ccountry} isValid={errors.Ccountry} value={values.Ccountry} onChange={handleChange}></FormControl>
                                                <Form.Control.Feedback type="invalid">{errors.Ccountry}</Form.Control.Feedback>
                                            </Col>
                                            <Col md="6">
                                                <FormLabel>Town</FormLabel>
                                                <FormControl id="town"  type="text" isInvalid={!!errors.town} isValid={errors.town} value={values.town} onChange={handleChange}></FormControl>
                                                <Form.Control.Feedback type="invalid">{errors.town}</Form.Control.Feedback>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col md="6">
                                                <FormLabel>County</FormLabel>
                                                <FormControl id="county"  type="text" isInvalid={!!errors.county} isValid={errors.county} value={values.county} onChange={handleChange}></FormControl>
                                                <Form.Control.Feedback type="invalid">{errors.county}</Form.Control.Feedback>
                                            </Col>
                                            <Col md="6">
                                                <FormLabel>Postal Code</FormLabel>
                                                <FormControl id="postalcode"  type="text" isInvalid={!!errors.postalcode} isValid={errors.postalcode} value={values.postalcode} onChange={handleChange}></FormControl>
                                                <Form.Control.Feedback type="invalid">{errors.postalcode}</Form.Control.Feedback>
                                            </Col>
                                        </Row>
                                        
                                <Row className="modal-buttons-container">
                                    <Button className="modal-button" onClick={e=>{setopen2(false);setopen(true)}} style={{marginLeft:"20px"}}>Previous</Button>
                                    <Button className="modal-button" type="submit">SAVE</Button>
                                    <Button className="modal-button" style={{marginRight:"15px"}} onClick={e=>{setopen2(false)}}>CANCEL</Button>
                                </Row>   
                                    </Col>
                                   
                                    <Col md="5">
                                    <img src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1504&q=80" className="modal-image-compnay-address"/>
                                </Col>
                                </Row>
                            </Form>
                    </Modal.Body>
                </Modal>
              )}
              </Formik>
        </div>
    )
}