import React,{useState} from 'react'

import EditCompanyInfo from './EditCompanyInfo'
import EditCompanyBankInfo from './EditCompanyBankInfo'
import axios from 'axios';

export default function CompanyEditModel({Edit,setEdit,companyData,setloading,setallCompanies,setCompanies}) {


  const [companydata,setcompanyData]=useState();
  const [open2,setopen2]=useState(false)
    


    const editCompany=async()=>{
      setEdit(false)
        setloading(true)
       
        let companyAddress=JSON.parse(localStorage.getItem("companyAddress"))
        const body={
          id:companyData.companyId,
          Cname:companydata.Cname,
        Ccountry:companyAddress.Ccountry,
        Cemail:companydata.Cemail,
        town:companyAddress.town,
        postalcode:companyAddress.postalcode,
        address1:companyAddress.address1,
        address2:companyAddress.address2,
        address3:companyAddress.address3,
        CNumber:companydata.CNumber,
        county:"",
        name:companydata.name,
        cpEmail:companydata.cpEmail,
        cpNumber:companydata.cpNumber,
        vat:companydata.vat
        }
        
        //const body={id:id1,Cname,Ccountry,Cemail,town,postalcode,address1,address2,address3,CNumber,county}
       
         const s5=await axios
          .post("https://spiretechs.co.uk:3000/companyUpdate",body)
          .then(res => {return res})
          .catch(err => console.error(err));
          const data=await axios
            .get("https://spiretechs.co.uk:3000/companies")
            .then(res => {return res.data})
            .catch(err => console.error(err));
            setallCompanies(data);setCompanies(data)
         setloading(false)
      }

    return (
      <div>

        <EditCompanyInfo companyData={companyData} setcompanyData={setcompanyData} open={Edit} setopen={setEdit} setopen2={setopen2}/>
        <EditCompanyBankInfo open2={open2} editCompany={editCompany} setopen2={setopen2} setopen={setEdit} companyData={companyData}/>
    </div>
    )
}
