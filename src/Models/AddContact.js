import React,{useState} from 'react'
import axios from 'axios';
import {setContacts} from '../redux/action/index'
import {useDispatch} from 'react-redux';
import AddContactUserInfo from './AddContactUserInfo';
import AddUserAddressInfo from './AddUserAddressInfo'

export default function AddContact({IsOpen,data,setLoading,contacts,setIsOpen}) {

const dispatch=useDispatch()
const [userInfo,setuserInfo]=useState('');
const [open2,setopen2]=useState(false);

const addnewcontact=async()=>{ 
    setIsOpen(false);
    setLoading(true);
    let addressInfo=JSON.parse(localStorage.getItem("userAddressInfo"));
    const body={id:data[0].companyId,
    title:userInfo.title,
    first:userInfo.first,
    last:userInfo.last,
    Ccountry:addressInfo.Ccountry,
    Cemail:userInfo.Cemail,
    companyName:userInfo.companyName
    ,town:addressInfo.town,
    postalcode:addressInfo.postalcode
    ,address1:addressInfo.address1,
    address2:addressInfo.address2,
    address3:addressInfo.address3,
    contactType:userInfo.contactType,
    CNumber:userInfo.CNumber,
    county:addressInfo.county}


   contacts.push({title:userInfo.title,
    firstName:userInfo.first,
    lastName:userInfo.last,
    contactEmail:userInfo.Cemail,
    Country:addressInfo.Ccountry,
    contactPhoneNumber:userInfo.CNumber,
    Address1:addressInfo.address1,
     Address2:addressInfo.address2,
     Address3:addressInfo.address3,
     Town:addressInfo.town,
     County:addressInfo.county,
     contactType:userInfo.contactType,
     postalCode:addressInfo.postalcode});
     
     dispatch(setContacts(contacts))
    let p=await axios
      .post("https://spiretechs.co.uk:3000/contact",body)
      .then(res => {console.log(res.data); return res})
      .catch(err => console.error(err));
    setLoading(false)
    setuserInfo('');
  }

    return (
        <div>          
            <AddContactUserInfo IsOpen={IsOpen} setIsOpen={setIsOpen} setopen2={setopen2} setuserInfo={setuserInfo}/>
            <AddUserAddressInfo open2={open2} setIsOpen={setIsOpen} setopen2={setopen2} addnewcontact={addnewcontact}/>
        </div>
    )
}
