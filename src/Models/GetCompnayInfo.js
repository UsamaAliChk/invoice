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
  
export default function GetCompnayInfo({open,setopen2,setopen,setcompanyData}) {

    const valScheema=Yup.object({
        Cname:Yup.string().required(),
        Cemail:Yup.string().required(),
        CNumber:Yup.string().required(),
        name:Yup.string().required(),
        cpNumber:Yup.string().required(),
        cpEmail:Yup.string().required(),
    })

    
    const getData=(payload)=>{
        const body={
            Cname:payload.Cname,
            Cemail:payload.Cemail,
            CNumber:payload.CNumber,
            name:payload.name,
            cpNumber:payload.cpNumber,
            cpEmail:payload.cpEmail,
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
              Cname:'',
              Cemail:'',
              CNumber:'',
              name:'',
              cpEmail:'',
              cpNumber:'',
              
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
                <Modal show={open} size="xl" style={{marginTop:"-600px",height:"1200px"}} centered={true}>
                   
                        <Modal.Body>
                            <Form onSubmit={handleSubmit}>
                            <Row className='modal-top'>
                                <h3>Company Info</h3>
                            </Row>

                            <Row>
                                <Col md="6">
                                    <img src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1504&q=80" className="modal-image"/>
                                </Col>
                                <Col md="6">
                                <Row className="space-btw-inputs">
                                    <Col md="6">
                                        <FormLabel>Name</FormLabel>
                                        <FormControl id="Cname" type="text" onChange={handleChange} isValid={errors.Cname} isInvalid={!!errors.Cname} value={values.Cemail}></FormControl>
                                        <Form.Control.Feedback type="invalid">{errors.Cname}</Form.Control.Feedback>
                                    </Col>
                                    <Col md="6">
                                        <FormLabel>Email</FormLabel>
                                        <FormControl id="Cemail" autoComplete={false} type="text" isInvalid={!!errors.Cemail} isValid={errors.Cemail} value={values.Cemail} onChange={handleChange}></FormControl>
                                        <Form.Control.Feedback type="invalid">{errors.Cemail}</Form.Control.Feedback>
                                    </Col>
                                </Row>
                                <Row className="space-btw-inputs">
                                    <Col md="6">
                                        <FormLabel>Phone Number</FormLabel>
                                        <FormControl id="CNumber" type="text" onChange={handleChange} isValid={errors.CNumber} isInvalid={!!errors.CNumber} value={values.CNumber}></FormControl>
                                        <Form.Control.Feedback type="invalid">{errors.CNumber}</Form.Control.Feedback>
                                    </Col> 
                                    <Col md="6">
                                        <FormLabel>Compnay Owner Name</FormLabel>
                                        <FormControl id="name" autoComplete={false} type="text" isInvalid={!!errors.name} isValid={errors.name} value={values.name} onChange={handleChange}></FormControl>
                                        <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
                                    </Col>
                                </Row>
                                    <Row className="space-btw-inputs">
                                            <Col md="6">
                                                <FormLabel>Compnay Owner Email</FormLabel>
                                                <FormControl id="cpEmail" autoComplete={false} type="text" isInvalid={!!errors.cpEmail} isValid={errors.cpEmail} value={values.cpEmail} onChange={handleChange}></FormControl>
                                                <Form.Control.Feedback type="invalid">{errors.cpEmail}</Form.Control.Feedback>
                                            </Col>
                                            <Col md="6">
                                                <FormLabel>Company Owner Number</FormLabel>
                                                <FormControl id="cpNumber" autoComplete={false} type="text" isInvalid={!!errors.cpNumber} isValid={errors.name} value={values.cpNumber} onChange={handleChange}></FormControl>
                                                <Form.Control.Feedback type="invalid">{errors.cpNumber}</Form.Control.Feedback>
                                            </Col>         
                                        </Row>
                               
                                <Row style={{marginTop:"30px"}}>
                                    <Button type="submit" style={{marginLeft:"15px"}}  > Next </Button>
                                    <Button style={{marginLeft:"50px"}} onClick={e=>setopen(false)} > Cancel </Button>
                                </Row>

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
