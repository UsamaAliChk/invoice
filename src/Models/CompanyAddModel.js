
//import { Button } from 'bootstrap';
import React,{useState} from 'react'

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
    
     Form
  } from "react-bootstrap";
  import * as Yup from 'yup';
import {Formik} from 'formik';
import axios from 'axios';
import S3 from "aws-sdk/clients/s3";
import { Credentials } from "aws-sdk";
import { Label,Input,Modal,ModalHeader, ModalBody, ModalFooter } from "reactstrap";

export default function CompanyAddModel({open,setopen,setallCompanies,setcompnies,setloading}) {
    
    const [logo,setlogo]=useState(null);

    const[file,setfile]=useState()



    const valScheema = Yup.object({
      name:Yup.string().required(),
      cpEmail:Yup.string().required(),
      cpNumber:Yup.string().required(),
      Cname:Yup.string().required("Required field"),
      Cemail:Yup.string().email(),
      CNumber:Yup.string().required("Required field"),
      address1:Yup.string().required("Required field"),
      address2:Yup.string(),
      address3:Yup.string(),
      Ccountry:Yup.string().required(),
      county:Yup.string(),
      town:Yup.string().required(),
      postalcode:Yup.string(),
      logo:Yup.string(),
      bankName:Yup.string(),
      accountNumber:Yup.string(),
      sortCode:Yup.string(),
      swiftCode:Yup.string(),
      bicCode:Yup.string(),
      accountName:Yup.string(),
      vat:Yup.string().required()
    })


 const access = new Credentials({
  accessKeyId: "AKIA5UT2A32QWWX76HOF",
  secretAccessKey: "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",
});

const s3 = new S3({
  credentials: access,
  region: "eu-west-1"
});

const Upload=async()=>{
  const params = {
    Bucket: "tth-cms1",
    ACL: "public-read",
    Key: `${file.name}`,
    Body: file
  };
  try{
  var s4=await s3.upload(params).promise();
    console.log(s4)
    return s4.Location
  }
  catch(err){
    console.log(err);
  }
}

    const addNewCompany=async(payload)=>{
        //console.log("Usama Ali Khan Khna")
        setopen(false);
        setloading(true);
        var s=await Upload();
      
    debugger

      const body={
        Cname:payload.Cname,
        Ccountry:payload.Ccountry,
        Cemail:payload.Cemail,
        town:payload.town,
        postalcode:payload.postalcode,
        address1:payload.address1,
        address2:payload.address2,
        address3:payload.address3,
        CNumber:payload.CNumber,
        county:payload.county,
        logo:s,
        name:payload.name,
        cpEmail:payload.cpEmail,
        cpNumber:payload.cpNumber,
        bankName:payload.bankName,
        accountNumber:payload.accountNumber,
        accountName:payload.accountName,
        bicCode:payload.bicCode,
        swiftCode:payload.swiftCode,
        sortCode:payload.sortCode,
        vat:payload.vat
      }

        //console.log(body)
        await axios
          .post("https://spiretechs.co.uk:3000/company",body)
          .then(res => {setcompnies(res.data);
                        setallCompanies(res.data);})
          .catch(err => console.error(err));
          setloading(false);
        
      }



    return (
        <div>
          
          <Formik 
              enableReinitialize
            validationSchema={valScheema}  
            validateOnChange={false}
            onSubmit={addNewCompany}
            initialValues={{
              Cname:'',
              Ccountry:'',
              Cemail:'',
              county:'',
              postalcode:'',
              town:'',
              address3:'',
              address1:'',
              address2:'',
              name:'',
              cpEmail:'',
              cpNumber:'',
              logo:'',
              sortCode:'',
              accountName:'',
              accountNumber:'',
              bankName:'',
              swiftCode:'',
              bicCode:'',
              vat:0
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


             <Modal isOpen={open} size="lg">
        
        <ModalHeader>ADD COMAPNAY</ModalHeader>
        <ModalBody>
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col md="4">
              <FormLabel>Name</FormLabel>
              <FormControl id="Cname" type="text" onChange={handleChange}></FormControl>
              <Form.Control.Feedback type="invalid">{errors.Cname}</Form.Control.Feedback>
             </Col>
            <Col md="5">
              <FormLabel>Email</FormLabel>
              <FormControl id="Cemail" autoComplete={false} type="text" isInvalid={!!errors.Cemail} isValid={errors.Cemail} value={values.Cemail} onChange={handleChange}></FormControl>
              <Form.Control.Feedback type="invalid">{errors.Cemail}</Form.Control.Feedback>
            </Col>
            <Col md="3">
            <FormLabel>Postal Code</FormLabel>
              <FormControl type="text" id="postalcode" isInvalid={!!errors.postalcode} isValid={errors.postalcode} value={values.postalcode} onChange={handleChange}></FormControl>
              <Form.Control.Feedback type="invalid">{errors.postalcode}</Form.Control.Feedback>
            </Col>
          </Row>
          <Row>
            <Col md="4">
            <FormLabel>CEO Name</FormLabel>
              <FormControl id="name" autoComplete={false} type="text" isInvalid={!!errors.name} isValid={errors.name} value={values.name} onChange={handleChange}></FormControl>
              <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
            </Col>
            <Col md="4">
            <FormLabel>CEO Email</FormLabel>
              <FormControl id="cpEmail" autoComplete={false} type="text" isInvalid={!!errors.cpEmail} isValid={errors.cpEmail} value={values.cpEmail} onChange={handleChange}></FormControl>
              <Form.Control.Feedback type="invalid">{errors.cpEmail}</Form.Control.Feedback>
            </Col>
            <Col md="4">
            <FormLabel>CEO Number</FormLabel>
              <FormControl id="cpNumber" autoComplete={false} type="text" isInvalid={!!errors.cpNumber} isValid={errors.name} value={values.cpNumber} onChange={handleChange}></FormControl>
              <Form.Control.Feedback type="invalid">{errors.cpNumber}</Form.Control.Feedback>
            </Col>
          </Row>
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
            <Col md="5">
            <FormLabel>Address 3</FormLabel>
              <FormControl type="text" id="address3" value={values.address3} isInvalid={!!errors.address3} isValid={errors.address3} onChange={handleChange}></FormControl>
              <Form.Control.Feedback type="invalid">{errors.address3}</Form.Control.Feedback>
            </Col>
            <Col md="5">
            <FormLabel>Company Number</FormLabel>
              <FormControl type="text" id="CNumber" isInvalid={!!errors.CNumber} isValid={errors.CNumber} value={values.CNumber} onChange={handleChange}></FormControl>
              <Form.Control.Feedback type="invalid">{errors.CNumber}</Form.Control.Feedback>
            </Col>
            <Col md="2">
            <FormLabel>Vat</FormLabel>
              <FormControl type="text" id="vat" isInvalid={!!errors.vat} isValid={errors.vat} value={values.vat} onChange={handleChange}></FormControl>
              <Form.Control.Feedback type="invalid">{errors.vat}</Form.Control.Feedback>
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
              <FormControl type="text" id="town" isValid={errors.title} isInvalid={!!errors.town} value={values.town} onChange={handleChange}></FormControl>
              <Form.Control.Feedback type="invalid">{errors.town}</Form.Control.Feedback>
            </Col>
            
            <Col md="4">
              <FormLabel>County</FormLabel>
              <FormControl type="text" isInvalid={!!errors.county} isValid={errors.address3} id="county" value={values.county} onChange={handleChange}></FormControl>
              <Form.Control.Feedback type="invalid">{errors.county}</Form.Control.Feedback>
            </Col>
          </Row>

            <Row>
              <Col md="6">
              <FormLabel>Bank Name</FormLabel>
              <FormControl type="text" isInvalid={!!errors.bankName} isValid={errors.bankName} id="bankName" value={values.bankName} onChange={handleChange}></FormControl>
              <Form.Control.Feedback type="invalid">{errors.bankName}</Form.Control.Feedback>
              </Col>
              <Col md="3">
              <FormLabel>Sort Code</FormLabel>
              <FormControl type="text" isInvalid={!!errors.sortCode} isValid={errors.sortCode} id="sortCode" value={values.sortCode} onChange={handleChange}></FormControl>
              <Form.Control.Feedback type="invalid">{errors.sortCode}</Form.Control.Feedback>
              </Col>
              <Col md="3">
              <FormLabel>Bic Code</FormLabel>
              <FormControl type="text" isInvalid={!!errors.bicCode} isValid={errors.bicCode} id="bicCode" value={values.bicCode} onChange={handleChange}></FormControl>
              <Form.Control.Feedback type="invalid">{errors.bicCode}</Form.Control.Feedback>
              </Col>
            </Row>

            <Row>
              <Col md="4">
              <FormLabel>Account Name</FormLabel>
              <FormControl type="text" isInvalid={!!errors.accountName} isValid={errors.accountName} id="accountName" value={values.accountName} onChange={handleChange}></FormControl>
              <Form.Control.Feedback type="invalid">{errors.accountName}</Form.Control.Feedback>
              </Col>
              
              <Col md="5">
              <FormLabel>Account Number</FormLabel>
              <FormControl type="text" isInvalid={!!errors.accountNumber} isValid={errors.accountNumber} id="accountNumber" alue={values.accountNumber} onChange={handleChange}></FormControl>
              <Form.Control.Feedback type="invalid">{errors.accountNumber}</Form.Control.Feedback>
              </Col>
              <Col md="3">
              <FormLabel>Swift Code</FormLabel>
              <FormControl type="text" isInvalid={!!errors.swiftCode} isValid={errors.bicCode} id="swiftCode" value={values.swiftCode} onChange={handleChange}></FormControl>
              <Form.Control.Feedback type="invalid">{errors.swiftCode}</Form.Control.Feedback>
              </Col>
            </Row>

          <Row>
            <FormLabel>Logo</FormLabel>
              <FormControl type="file" onChange={(e)=>setfile(e.target.files[0])}></FormControl>
            
          </Row>
          <Row style={{marginTop:"30px"}}>
            <Col md="4">
            <Button type="submit" >Save</Button>
            </Col>
            <Col md="4">
            <Button color="secondary" onClick={e=>setopen(false)}>Cancel</Button>
            </Col>
          </Row>
          </Form>
        </ModalBody>
        
      </Modal>
     )}
     </Formik>
        </div>
    )
}
