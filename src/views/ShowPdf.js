import React from 'react'
import {
    Document
} from '@react-pdf/renderer'
export default function ShowPdf() {
    return (
      
            <Document  file={'https://tth-cms1.s3.eu-west-2.amazonaws.com/abcd.pdf'}></Document>    
    
    )
}
