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

    console.log("Ali",open2)
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
                <Modal show={open2} size='xl'>
                        <Modal.Header>Add Contact</Modal.Header>
                        <Modal.Body>
                            <Form onSubmit={handleSubmit} autoComplete="off">
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
                                    <Col md="6">
                                        <FormLabel>Address 3</FormLabel>
                                        <FormControl type="text" id="address3" value={values.address3} isInvalid={!!errors.address3} isValid={errors.address3} onChange={handleChange}></FormControl>
                                        <Form.Control.Feedback type="invalid">{errors.address3}</Form.Control.Feedback>
                                    </Col>
                                    <Col md="3">
                                        <FormLabel>Country</FormLabel>
                                        <FormControl type="text" id="Ccountry" isValid={errors.Ccountry} isInvalid={!!errors.Ccountry} value={values.Ccountry} onChange={handleChange}></FormControl>
                                        <Form.Control.Feedback type="invalid">{errors.Ccountry}</Form.Control.Feedback>
                                    </Col>
                                    <Col md="3">
                                        <FormLabel>Postal Code</FormLabel>
                                        <FormControl type="text" id="postalcode" isInvalid={!!errors.postalcode} isValid={errors.postalcode} value={values.postalcode} onChange={handleChange}></FormControl>
                                        <Form.Control.Feedback type="invalid">{errors.postalcode}</Form.Control.Feedback>
                                    </Col>
                                </Row>
                                <Row>
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
                                <Row style={{marginTop:'30px'}}>
                                    <Button style={{marginLeft:'12px',marginRight:'50px'}} onClick={e=>{setopen2(false);setEdit(true)}}>Previous</Button>
                                    <Button style={{marginRight:'50px'}} type="submit">Submit</Button>
                                    <Button onClick={e=>setopen2(false)}>Cancel</Button>
                                </Row>
                            </Form>
                        </Modal.Body>
                </Modal>
              )}
              </Formik>  
        </div>
    )
}
