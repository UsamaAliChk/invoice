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
export default function EditCompnayInfo({open,setopen2,setopen,setcompanyData,companyData}) {

    const valScheema=Yup.object({
        Cname:Yup.string().required(),
        Cemail:Yup.string().required(),
        CNumber:Yup.string().required(),
        Ccountry:Yup.string().required(),
        address1:Yup.string().required(),
        address2:Yup.string().required(),
        address3:Yup.string(),
        town:Yup.string()
    })

    
    const getData=(payload)=>{
        const body={
            Cname:payload.Cname,
            Cemail:payload.Cemail,
            CNumber:payload.CNumber,
            Ccountry:payload.Ccountry,
            address1:payload.address1,
            address2:payload.address2,
            address3:payload.address3,
            town:payload.town
        }
        console.log(body)
        setcompanyData(body);
        setopen(false);
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
                Cname:companyData.companyName,
                Ccountry:companyData.Country,
                Cemail:companyData.companyEmail,
                address3:companyData.Address3,
          address1:companyData.Address1,
          address2:companyData.Address2,
              town:companyData.Town,
              CNumber:companyData.companyPhoneNumber,
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
                <Modal show={open} size="xl">
                    <Modal.Header>Compnay Info</Modal.Header>
                        <Modal.Body>
                            <Form onSubmit={handleSubmit}>
                                <Row>
                                    <Col md="4">
                                        <FormLabel>Name</FormLabel>
                                        <FormControl id="Cname" isInvalid={!!errors.Cname} isValid={errors.Cname} type="text" onChange={handleChange} value={values.Cname}></FormControl>
                                        <Form.Control.Feedback type="invalid">{errors.Cname}</Form.Control.Feedback>
                                    </Col>
                                    <Col md="5">
                                        <FormLabel>Email</FormLabel>
                                        <FormControl id="Cemail" autoComplete={false} type="text" isInvalid={!!errors.Cemail} isValid={errors.Cemail} value={values.Cemail} onChange={handleChange}></FormControl>
                                        <Form.Control.Feedback type="invalid">{errors.Cemail}</Form.Control.Feedback>
                                    </Col>
                                    <Col md="3">
                                        <FormLabel>Company Number</FormLabel>
                                        <FormControl type="text" id="CNumber" isInvalid={!!errors.CNumber} isValid={errors.CNumber} value={values.CNumber} onChange={handleChange}></FormControl>
                                        <Form.Control.Feedback type="invalid">{errors.CNumber}</Form.Control.Feedback>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md="4">
                                        <FormLabel>Address1</FormLabel>
                                        <FormControl id="address1" autoComplete={false} type="text" isInvalid={!!errors.address1} isValid={errors.address1} value={values.address1} onChange={handleChange}></FormControl>
                                        <Form.Control.Feedback type="invalid">{errors.address1}</Form.Control.Feedback>
                                    </Col>
                                    <Col md="4">
                                        <FormLabel>Address 2</FormLabel>
                                        <FormControl type="text" id="address2" isInvalid={!!errors.address2} isValid={errors.address2} value={values.address2} onChange={handleChange}></FormControl>
                                        <Form.Control.Feedback type="invalid">{errors.address2}</Form.Control.Feedback>
                                    </Col>
                                    <Col md="4">
                                        <FormLabel>Address 3</FormLabel>
                                        <FormControl type="text" id="address3" value={values.address3} isInvalid={!!errors.address3} isValid={errors.address3} onChange={handleChange}></FormControl>
                                        <Form.Control.Feedback type="invalid">{errors.address3}</Form.Control.Feedback>
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
                                        <FormControl type="text" id="town" isValid={errors.town} isInvalid={!!errors.town} value={values.town} onChange={handleChange}></FormControl>
                                        <Form.Control.Feedback type="invalid">{errors.town}</Form.Control.Feedback>
                                    </Col>
                                </Row>
                                <Row style={{marginTop:"20px"}}>
                                    <Button type="submit" style={{marginLeft:"15px"}}  > Next </Button>
                                    <Button style={{marginLeft:"50px"}} onClick={e=>setopen(false)} > Cancel </Button>
                                </Row>
                            </Form>
                    </Modal.Body>
                </Modal>
              )}
              </Formik>
        </div>
    )
}
