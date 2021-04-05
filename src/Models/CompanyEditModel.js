import React,{useState} from 'react'

import EditCompanyInfo from './EditCompanyInfo'
import EditCompanyBankInfo from './EditCompanyBankInfo'
import axios from 'axios';

export default function CompanyEditModel({Edit,setEdit,companyData,setloading,setallCompanies,setCompanies}) {


  const [companydata,setcompanyData]=useState();
  const [open2,setopen2]=useState(false)
    


    const editCompany=async(payload)=>{
      setEdit(false)
        setloading(true)
        console.log(companydata);
        let bankdata=JSON.parse(localStorage.getItem("bankdata"))
        const body={
          id:companyData.companyId,
          Cname:companydata.Cname,
        Ccountry:companydata.Ccountry,
        Cemail:companydata.Cemail,
        town:companydata.town,
        postalcode:"",
        address1:companydata.address1,
        address2:companydata.address2,
        address3:companydata.address3,
        CNumber:companydata.CNumber,
        county:"",
        name:bankdata.name,
        cpEmail:bankdata.cpEmail,
        cpNumber:bankdata.cpNumber,
        bankName:bankdata.bankName,
        accountNumber:bankdata.accountNumber,
        accountName:bankdata.accountName,
        bicCode:bankdata.bicCode,
        swiftCode:bankdata.swiftCode,
        sortCode:bankdata.sortCode,
        vat:bankdata.vat
        }
        //const body={id:id1,Cname,Ccountry,Cemail,town,postalcode,address1,address2,address3,CNumber,county}
        console.log(body)
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
