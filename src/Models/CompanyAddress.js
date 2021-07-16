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
export default function CompanyAddress({setbankData,setopen2,open2,addNewCompany,setfile,setopen}) {

    const valScheema=Yup.object({
        
        
        Ccountry:Yup.string().required(),
        address1:Yup.string().required(),
        address2:Yup.string().required(),
        address3:Yup.string(),
        town:Yup.string(),
        county:Yup.string(),
        postalcode:Yup.string()
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
            town:payload.town,
            county:payload.county,
            postalcode:payload.postalcode
          
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
                town:'',
                county:'',
                postalcode:""
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
                <Modal show={open2} size="lg" style={{marginTop:"-220px",height:"1000px"}}>
                    
                        <Modal.Body>
                            <Form onSubmit={handleSubmit}>
                            <Row className='modal-top'>
                                <h4 style={{marginTop:'20px'}}>Company Address</h4>
                            </Row>
                                <Row style={{marginTop:"30px",marginLeft:"1px"}}>
                                   <Col md="7">
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
                                        <Row style={{marginTop:"5px",marginLeft:"2px"}}>
                                            <FormLabel>Logo</FormLabel>
                                            <FormControl type="file" onChange={(e)=>setfile(e.target.files[0])}></FormControl>
                                        </Row>
                                <Row className="modal-buttons-container">
                                    <Button className="modal-button" onClick={e=>{setopen2(false);setopen(true)}} style={{marginLeft:"20px"}}>Previous</Button>
                                    <Button className="modal-button" type="submit">SAVE</Button>
                                    <Button className="modal-button" style={{marginRight:"15px"}} onClick={e=>{setopen2(false)}}>CANCEL</Button>
                                </Row>   
                                    </Col>
                                   
                                    <Col md="5">
                                    <img src="https://thumbs.dreamstime.com/b/person-writing-sheet-paper-fixed-to-clipboard-clipboard-165795947.jpg" className="modal-image-compnay-address"/>
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
