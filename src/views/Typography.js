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
import axios from 'axios'
import Loader from '../loader/Loading'

export default function PDFView() {

    const data=useSelector(state=>state.getData)
   const [loading,setloading]=useState(false)
    const type=localStorage.getItem('type')
    const [pdfLink,setpdfLink]=useState('')
    const [pdfBlob,setpdfBlob]=useState('');
    const [enable,setenable]=useState(false)
    let date=new Date();
    let issuedDate=date.getDate()+'/'+(date.getMonth()+1)+'/'+date.getFullYear()
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

    const handelSave=async()=>{
      setloading(true)
        const link=await Upload()
        console.log(data)
        let body={companyName:data.company.name,contactName:data.billing.Name,issuedDate,dueDate:data.dueDate,link}
        console.log(body)
        
        axios
          .post("https://spiretechs.co.uk:3000/invoice",body)
          .then(res => (console.log(res)))
          .catch(err => console.error(err));
        console.log(link)
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
            <Button disabled={enable} onClick={handelSave}>SAVE</Button>
            <iframe style={{ width: "100%", height: "600px" }} src={pdfLink}></iframe>
        </div>
    )
}
