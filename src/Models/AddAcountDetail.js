import React from 'react'
import {Formik} from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
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
  import {useDispatch} from 'react-redux'
  import { setCompany,setBankDetail} from '../redux/action/index'
export default function AddAcountDetail({open,setopen,data,setLoading}) {
    const dispatch=useDispatch();
    const schema=Yup.object({
        bankName:Yup.string().required("Bank Name is required"),
        accountNumber:Yup.string("Account Number is required"),
        sortCode:Yup.string(),
        swiftCode:Yup.string(),
        bicCode:Yup.string(),
        accountName:Yup.string(),
    })

    const addAccount=async (payload)=>{
        //console.log("Usama ALI KHAN SHB")
        setopen(false)
        setLoading(true)
        //console.log(data)
        const body={
            companyId:data[0].companyId,
            bankName:payload.bankName,
            accountNumber:payload.accountNumber,
            accountName:payload.accountName,
            bicCode:payload.bicCode,
            swiftCode:payload.swiftCode,
            sortCode:payload.sortCode
            }
            let id=data[0].companyId;
       const s= await axios
          .post("https://spiretechs.co.uk:3000/bankdetails",body)
          .then(res => {console.log(res);return res})
          .catch(err => console.error(err));
        const company= await axios
          .get(`https://spiretechs.co.uk:3000/company/${id}`)
          .then(res => {console.log("Hello Usama",res);return res.data})
          .catch(err => console.error(err));
          dispatch(setCompany(company));
          //console.log("Usama ALI KHAN SHB")
          setLoading(false);
          
    }

    return (
        <div>
            <Formik 
              enableReinitialize
            validationSchema={schema}  
            validateOnChange={false}
            onSubmit={addAccount}
            initialValues={{
                bankName:'',
                accountName:'',
                accountNumber:'',
                bicCode:'',
                sortCode:'',
                bicCode:''
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
                  <Modal show={open} size="lg" style={{marginTop:"-250px",height:"1000px"}}>
                      <Modal.Body>
                        <Row className='modal-top'>
                            <h4 style={{marginTop:"20px"}}>Account Details</h4>
                        </Row>
                        <Row style={{marginTop:'20px'}}>
                          <Col md="6">
                            <img className="account-modal-image" src={'https://images.unsplash.com/photo-1497215641119-bbe6d71ebaae?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80'}/>
                          </Col>
                          <Col md="6">
                          <Form onSubmit={handleSubmit}>
                              <Row>
                                  <Col md="12">
                                    <Form.Label>Bank Name</Form.Label>
                                    <Form.Control type="text" value={values.bankName} onChange={handleChange} id="bankName" isValid={errors.bankName} isInvalid={errors.bankName}></Form.Control>
                                    <Form.Control.Feedback type="invalid">{errors.bankName}</Form.Control.Feedback>
                                  </Col>
                              </Row>
                            <Row>
                                <Col md="12">
                                    <Form.Label>Account Name</Form.Label>
                                    <Form.Control type="text" value={values.accountName} onChange={handleChange} id="accountName" isValid={errors.accountName} isInvalid={errors.accountName}></Form.Control>
                                    <Form.Control.Feedback type="invalid">{errors.accountName}</Form.Control.Feedback>
                                </Col>
                            </Row>
                            <Row>
                                <Col md="12">
                                    <Form.Label>Account Number</Form.Label>
                                    <Form.Control type="text" value={values.accountNumber}  onChange={handleChange} id="accountNumber" isValid={errors.accountNumber} isInvalid={errors.accountNumber}></Form.Control>
                                    <Form.Control.Feedback type="invalid">{errors.accountNumber}</Form.Control.Feedback>
                                </Col>
                            </Row>
                            <Row>
                                <Col md="12">
                                    <Form.Label>Bic Code</Form.Label>
                                    <Form.Control type="text" value={values.bicCode} id="bicCode" onChange={handleChange} isValid={errors.bicCode} isInvalid={errors.bicCode}></Form.Control>
                                    <Form.Control.Feedback type="invalid">{errors.bicCode}</Form.Control.Feedback>
                                </Col>
                            </Row>
                            <Row>
                                <Col md="12">
                                    <Form.Label>Swift Code</Form.Label>
                                    <Form.Control type="text" value={values.swiftCode} onChange={handleChange} id="swiftCode" isValid={errors.swiftCode} isInvalid={errors.swiftCode}></Form.Control>
                                    <Form.Control.Feedback type="invalid">{errors.swiftCode}</Form.Control.Feedback>
                                </Col>
                            </Row>
                            <Row>
                                <Col md="12">
                                    <Form.Label>Sort Code</Form.Label>
                                    <Form.Control type="text" value={values.sortCode} onChange={handleChange} id="sortCode" isValid={errors.sortCode} isInvalid={errors.sortCode}></Form.Control>
                                    <Form.Control.Feedback type="invalid">{errors.sortCode}</Form.Control.Feedback>
                                </Col>
                            </Row>
                            <Row className="modal-buttons-container">
                                <Button className="modal-button" style={{marginLeft:"15px"}} type="submit">Submit</Button>
                                <Button className="modal-button" style={{marginRight:"15px"}} onClick={e=>setopen(false)}>Cancel</Button>
                            </Row>
                          </Form></Col></Row>
                      </Modal.Body>
                  </Modal>
              )}
              </Formik>
        </div>
    )
}
