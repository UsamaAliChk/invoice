import React,{useState,useEffect} from 'react'
import { pdf } from "@react-pdf/renderer";
import {useSelector} from 'react-redux'
import Report from './Report'
import Pdf2 from './Pdf2'
import Pdf from './Pdf'
export default function PDFView() {
    const data=useSelector(state=>state.getData)
    console.log("Usama ALI KHAN BROWN MUNDAY")
    const type=localStorage.getItem('type')
    const [pdfLink,setpdfLink]=useState('')
    const openpdf = async () => {
        if(type==='3'){
            let blob= await pdf(
                <Report Data={data}/>
              ).toBlob()
              setpdfLink(window.URL.createObjectURL(blob));
        }
        else if(type==='1'){
            let blob= await pdf(
                <Pdf2 Data={data}/>
              ).toBlob()
              setpdfLink(window.URL.createObjectURL(blob));
        }
        else if(type==='2'){
            let blob= await pdf(
                <Pdf Data={data}/>
              ).toBlob()
              setpdfLink(window.URL.createObjectURL(blob));
        }
    }
    useEffect(()=>{
        openpdf()
    },[])
    return (

        
        <div>
            <iframe style={{ width: "100%", height: "600px" }} src={pdfLink}></iframe>
        </div>
    )
}
