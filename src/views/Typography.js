import React,{useState,useEffect} from 'react'
import { pdf } from "@react-pdf/renderer";
import {useSelector} from 'react-redux'
import Report from '../PDFS/Report'
import Pdf2 from '../PDFS/Pdf2'
import Pdf from '../PDFS/Pdf';
import {
    Button,Row,Col
  } from "react-bootstrap";

import S3 from "aws-sdk/clients/s3";
import { Credentials } from "aws-sdk";
import axios from 'axios'
import Loader from '../loader/Loading'

export default function PDFView() {

    const data=useSelector(state=>state.getData)
   const [loading,setloading]=useState(false)
    const type=localStorage.getItem('type')
    const [pdfLink,setpdfLink]=useState('')
    const [pdfBlob,setpdfBlob]=useState('');
    const [link,setlink]=useState('');
    const [enable,setenable]=useState(false)
    const [invoiceNo,setinvoiceNo]=useState('')
    let date=new Date();
    let issuedDate=date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate()
   // const access='';
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
          Key: `abcd${Math.random()}.pdf`,
          Body: pdfBlob,
      
        };
        try{
        var s4=await s3.upload(params)
          .promise()
          return s4.Location
        }
        catch(err){
          console.log(err);
        }
    }

    const sendEmail=()=>{
      axios
        .post("https://jsa878cs45.execute-api.eu-west-2.amazonaws.com/pdf/sendpdf",{name:data.billing.Name,companyName:data.company.name,emailAddress:data.billing.Email,link})
        .then(res => {console.log(res)})
        .catch(err => console.error(err));
    }

    const handelSave=async()=>{
      setloading(true)
        const link=await Upload()
        
        let body={companyName:data.company.name,contactName:data.billing.Name,issuedDate,dueDate:data.dueDate,link}
       
        
        const s=await axios
          .post("https://spiretechs.co.uk:3000/invoice",body)
          .then(res => {return res})
          .catch(err => console.error(err));
          let invoices=await axios.get("https://spiretechs.co.uk:3000/getNoOfInvoices")
          .then(res=>{return res.data})
          .catch(err=>console.log(err))
          localStorage.setItem("invoiceNo",(invoices.no_Of_invoices+1).toString());
        setlink(link);
        setenable(true)
        setloading(false)
    }


    const openpdf = async () => {
        if(type==='3'){
            let blob= await pdf(
                <Report Data={data}/>
              ).toBlob()
              setpdfLink(window.URL.createObjectURL(blob));
              setpdfBlob(blob);
        }
        else if(type==='1'){
            let blob= await pdf(
                <Pdf2 Data={data}/>
              ).toBlob()
              setpdfLink(window.URL.createObjectURL(blob));
              setpdfBlob(blob);
        }
        else if(type==='2'){
            let blob= await pdf(
                <Pdf Data={data}/>
              ).toBlob()
              setpdfLink(window.URL.createObjectURL(blob));
              setpdfBlob(blob);
        }
    }

   

    useEffect(()=>{
     
        openpdf()
        alert("It will not be auto saved")
    },[])
    return (
      loading?<Loader show={true}/>:
        <div>
          <Row>
            <Col md="4">
            <Button disabled={enable} onClick={e=>{handelSave()}} style={{color:'black'}}>SAVE</Button>
            </Col>
            <Col md="4">
            <Button disabled={!enable} onClick={e=>{sendEmail()}} style={{color:'black'}}>Send Email</Button>
            </Col>
          </Row>
            
            <iframe style={{ width: "100%", height: "600px" }} src={pdfLink}></iframe>
        </div>
    )
}
