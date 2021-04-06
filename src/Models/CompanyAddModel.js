
//import { Button } from 'bootstrap';
import React,{useState,useEffect} from 'react';
import GetCompnayInfo from './GetCompnayInfo';
import GetBankInfo from './GetBankInfo';

import axios from 'axios';
import S3 from "aws-sdk/clients/s3";
import { Credentials } from "aws-sdk";


export default function CompanyAddModel({open,setopen,setallCompanies,setcompnies,setloading}) {
    
    const [logo,setlogo]=useState(null);
    const [open2,setopen2]=useState(false);
    const[file,setfile]=useState()

    const [companydata,setcompanyData]=useState([])
    const [bankdata1,setbankData]=useState([])


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

    const addNewCompany=async()=>{
        let companyAddress=JSON.parse(localStorage.getItem("companyAddress"))
        setopen(false);
        setloading(true);
       
        var s=await Upload(); 
      const body={
        Cname:companydata.Cname,
        Ccountry:companyAddress.Ccountry,
        Cemail:companydata.Cemail,
        town:companyAddress.town,
        postalcode:companyAddress.postalcode,
        address1:companyAddress.address1,
        address2:companyAddress.address2,
        address3:companyAddress.address3,
        CNumber:companydata.CNumber,
        county:companyAddress.county,
        logo:s,
        name:companydata.name,
        cpEmail:companydata.cpEmail,
        cpNumber:companydata.cpNumber,
         vat:companydata.vat
      }
     
        await axios
          .post("https://spiretechs.co.uk:3000/company",body)
          .then(res => {setcompnies(res.data);
                        setallCompanies(res.data);})
           .catch(err => console.error(err));
            setloading(false);
        setbankData([]);
        setcompanyData([]);
        setfile(''); 
      }


    return (
        <div>
         <GetCompnayInfo setcompanyData={setcompanyData} open={open} setopen2={setopen2} setopen={setopen}/>
          <GetBankInfo setbankData={setbankData} setopen={setopen}  open2={open2} setfile={setfile} setopen2={setopen2} addNewCompany={addNewCompany}/>    
        </div>
    )
}
