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
export default function GetBankInfo({setbankData,setopen2,open2,addNewCompany,setfile,setopen}) {

    const valScheema=Yup.object({
        
        
        Ccountry:Yup.string().required(),
        address1:Yup.string().required(),
        address2:Yup.string().required(),
        address3:Yup.string(),
        town:Yup.string()

        // bankName:Yup.string(),
        // accountNumber:Yup.string(),
        // sortCode:Yup.string(),
        // swiftCode:Yup.string(),
        // bicCode:Yup.string(),
        // accountName:Yup.string(),
        // vat:Yup.string().required()
    })

    
    const getData=(payload)=>{
        const body={
           
            Ccountry:payload.Ccountry,
            address1:payload.address1,
            address2:payload.address2,
            address3:payload.address3,
            town:payload.town
            // bankName:payload.bankName,
            // accountNumber:payload.accountNumber,
            // accountName:payload.accountName,
            // bicCode:payload.bicCode,
            // swiftCode:payload.swiftCode,
            // sortCode:payload.sortCode,
            // vat:payload.vat
        }
        console.log(body)
        setbankData(body);
        localStorage.setItem("companyAddress",JSON.stringify(body));
        setopen2(false);
        addNewCompany();
    }


    return (
        <div>
         <Formik 
              enableReinitialize
            validationSchema={valScheema}  
            validateOnChange={false}
            onSubmit={getData}
            initialValues={{
                Ccountry:'',
                address1:'',
                address2:'',
                address3:'',
                town:''
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
                <Modal show={open2} size="xl" style={{marginTop:"-600px",height:"1200px"}} centered={true}>
                    
                        <Modal.Body>
                            <Form onSubmit={handleSubmit}>
                            <Row className='modal-top'>
                                <h3>Company Address</h3>
                            </Row>
                                <Row>
                                   <Col md="6">
                                        <Row>
                                            <Col md="12">
                                                <FormLabel>Address1</FormLabel>
                                                <FormControl id="address1" autoComplete={false} as="textArea" row="3" isInvalid={!!errors.address1} isValid={errors.address1} value={values.address1} onChange={handleChange}></FormControl>
                                                <Form.Control.Feedback type="invalid">{errors.address1}</Form.Control.Feedback>
                                            </Col>
                                            
                                        </Row> 
                                        <Row>
                                            <Col md="6">
                                                <FormLabel>Address2</FormLabel>
                                                <FormControl id="address2" autoComplete={false} as="textArea" row="3" isInvalid={!!errors.address2} isValid={errors.address2} value={values.address2} onChange={handleChange}></FormControl>
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
                                        <Row style={{marginTop:"5px",marginLeft:"2px"}}>
                                            <FormLabel>Logo</FormLabel>
                                            <FormControl type="file" onChange={(e)=>setfile(e.target.files[0])}></FormControl>
                                        </Row>
                                <Row style={{marginTop:"30px"}}>
                                    <Button onClick={e=>{setopen2(false);setopen(true)}} style={{marginLeft:"20px"}}>Previous</Button>
                                    <Button type="submit" style={{marginLeft:"50px"}}>SAVE</Button>
                                    <Button style={{marginLeft:"50px"}} onClick={e=>{setopen2(false)}}>CANCEL</Button>
                                </Row>   
                                    </Col>
                                   
                                    <Col md="6">
                                    <img src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1504&q=80" className="modal-image"/>
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
