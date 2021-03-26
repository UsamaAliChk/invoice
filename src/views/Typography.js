import React,{useState,useEffect} from 'react'
import { pdf } from "@react-pdf/renderer";
import {useSelector} from 'react-redux'
import Report from './Report'
import Pdf2 from './Pdf2'
import Pdf from './Pdf';
import {
    Button
  } from "react-bootstrap";

import S3 from "aws-sdk/clients/s3";
import { Credentials } from "aws-sdk";



export default function PDFView() {

    const data=useSelector(state=>state.getData)
   
    const type=localStorage.getItem('type')
    const [pdfLink,setpdfLink]=useState('')
    const [pdfBlob,setpdfBlob]=useState('');

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
          Key: `${data.billing.Name}`,
          Body: pdfBlob
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

    const handelSave=async()=>{
        const link=Upload()
        console.log(link)
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

        
        <div>
            <Button onClick={handelSave}>SAVE</Button>
            <iframe style={{ width: "100%", height: "600px" }} src={pdfLink}></iframe>
        
        </div>
    )
}
