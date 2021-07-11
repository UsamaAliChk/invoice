import React,{useState,useEffect,useRef} from 'react'
import {Page,View,Text,StyleSheet,Font,
    Document, createInstance,BlobProvider,pdf
} from '@react-pdf/renderer'

import {useSelector} from 'react-redux'

import Roboto from '../fonts/Roboto-Bold.ttf'
import Newsreader from '../fonts/Newsreader.ttf'
import Italic from '../fonts/Roboto-Italic.ttf'
import Lato from '../fonts/Lato-Regular.ttf'
export default function Documnet1({Data}) {

    const formatDate=()=> {
        var d = new Date(),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();
    
        if (month.length < 2) 
            month = '0' + month;
        if (day.length < 2) 
            day = '0' + day;
    
        return [day, month, year].join('-');
    }

    let date=formatDate()
    let invoiceNo=localStorage.getItem("invoiceNo")
    return (
       <Document>
         <Page wrap>
             <View style={{marginLeft:"60px",marginRight:'60px'}}>
            <View style={{display:"flex",flexDirection:"row",justifyContent:'space-between',width:'100%'}}>
               <Text style={style.text}>{Data.company.name}</Text>
               <Text style={style.invoice}>INVIOCE</Text>
            </View>
            <View style={style.address}>
                {
                    Data.company.companyAddress.map(e=>{
                        return(
                            <Text>{e}</Text>
                        )
                    })
                }
            </View>
            <View style={style.phoneAndInviove}>
                <Text style={{marginTop:"10px"}}>Phone: {Data.company.Number}</Text>
                <View style={style.invioceNumberMain}>
                    <View style={style.invoiceNumber}>
                        <Text style={{marginLeft:'20px',marginTop:'-2%'}}>Invoice #</Text>
                        <Text style={{marginRight:'3px'}}>Date</Text>
                    </View>
                    <View style={{display:'flex',justifyContent:'space-between',marginTop:'5px',flexDirection:'row'}}>
                    <View style={{alignItems:'center',width:'75px'}} >
                        <Text >{invoiceNo}</Text>
                        </View>
                        <Text style={{alignItems:'flex-end'}}>{date}</Text>
                    </View>
                </View>
            </View>

            <View style={style.billtoSection}>
                <View style={style.billto}>
                    <Text style={{marginLeft:'20px'}}>Bill To</Text>
                </View>
                <View style={style.customerID}>
                    <Text style={{marginLeft:'20px'}}>Customer Id</Text>
                    <Text style={{marginRight:'3px'}}>Due Date</Text>
                </View>
            </View>

            <View style={style.userInfoBox}>
                    <View style={style.userInfo}>
                        <Text>{Data.billing.Name}</Text>
                        <Text>{Data.billing.contactCompanyName}</Text>
                        {
                            Data.billing.address.map(e=>{
                                return(
                                <Text>{e}</Text>)
                            })
                        }
                        <Text>{Data.billing.phoneNumber}</Text>
                        <Text>{Data.billing.Email}</Text>
                    </View>
                    <View style={style.userid}>
                        <View style={style.id}>
                            <Text>{Data.billing.id}</Text>
                        </View>
                        <View style={style.userterm}>
                            <Text style={{alignItems:'flex-end'}}>{Data.dueDate}</Text>
                        </View>
                    </View>
            </View>

            <View style={style.priceTitles}>
                <View style={style.description}>
                    <Text style={{marginLeft:"20px"}}>Desription</Text>
                </View>
                <View style={style.qty}>
                    <Text>QTY</Text>
                </View>
                <View style={style.unitPrice}>
                    <Text>Unit Price</Text>
                </View>                
                <View style={style.amount}>
                    <Text>Amount</Text>
                </View>
            </View>
            {/* this is for designing and putting data into table */}
            {
                Data.items.map(e=>{
                    return(
                        <View style={style.table}>
                <View style={style.unitDescription}>
                        <Text>{e.description}</Text>
                </View>
                <View style={style.unitsQty}>
                <Text>{e.qty}</Text>
                </View>
                <View style={style.unitpricebox}>
                <Text>{e.price}</Text>
                </View>
                <View style={style.amountbox}>
                <Text>{e.total}</Text>
                </View>
            </View>
                    )
                })
            }
            


            <View style={style.table}>
                <View style={style.unitDescription}>

                </View>
                <View style={style.unitsQty}>

                </View>
                <View style={style.unitpricebox}>

                </View>
                <View style={style.amountbox}>

                </View>
            </View>


            <View style={style.table}>
                <View style={style.unitDescription}>

                </View>
                <View style={style.unitsQty}>

                </View>
                <View style={style.unitpricebox}>

                </View>
                <View style={style.amountbox}>
                    <Text>--</Text>
                </View>
            </View>


            <View style={style.table}>
                <View style={style.unitDescription}>

                </View>
                <View style={style.unitsQty}>

                </View>
                <View style={style.unitpricebox}>

                </View>
                <View style={style.amountbox}>
                    <Text>--</Text>
                </View>
            </View>
            
           
            {/* This is for total and sub Total */}

            <View style={style.totalBox}>
                <View style={style.paymentDetail}>
                    <Text style={{fontFamily:'Italic',textAlign:'center',color:'#3973ac',marginTop:'5px',fontSize:'12'}}>Thank You For Shopping Here</Text>
                    <View style={{marginTop:'10px',marginLeft:'20px'}}>
                    <Text >Payment Details</Text>


                    {
                        Data.bankInfo.bankName!=null?
                        <Text style={{fontFamily:'Lato',fontSize:'10'}}>{Data.bankInfo.bankName}</Text>:<Text></Text>
                    }
                    {
                        Data.bankInfo.accountNumber!=null?
                        <Text style={{fontFamily:'Lato',fontSize:'10'}}>Account No: {Data.bankInfo.accountNumber}</Text>:<Text></Text>
                    }
                    {
                        Data.bankInfo.sortCode!=null?
                        <Text style={{fontFamily:'Lato',fontSize:'10'}}>Sort Code: {Data.bankInfo.sortCode}</Text>:<Text></Text>
                    }
                                

                    </View>
                </View>
                
                <View style={style.subTotal}>
                    <Text style={{marginTop:'5px',fontFamily:'Lato',fontSize:'10'}}>Sub Total</Text>
                    <Text style={{marginTop:'5px',fontFamily:'Lato',fontSize:'10'}}>Vat Rate</Text>
                    <Text style={{marginTop:'5px',fontFamily:'Lato',fontSize:'10'}}>Vat</Text>
                    <Text style={{marginTop:'5px',fontFamily:'Lato',fontSize:'10'}}>Total</Text>
                
                </View>
                <View style={style.total}>

                    
                    <Text style={{marginTop:'5px',fontFamily:'Lato',fontSize:'10'}}>{Data.subTotal}</Text>
                    <Text style={{marginTop:'5px',fontFamily:'Lato',fontSize:'10'}}>{Data.vat+"%"}</Text>
                    <Text style={{marginTop:'5px',fontFamily:'Lato',fontSize:'10'}}>{Data.tax}</Text>
                    <Text style={{marginTop:'5px',fontFamily:'Lato',fontSize:'10'}}>£ {Data.totalPrice}</Text>
                </View>
            </View>
                <Text style={{position:'absolute',top:770,textAlign:'center',fontSize:11,fontFamily:'Lato'}}>{Data.company.name+',  Company Number '+Data.company.Number} </Text>
                <Text style={{position:'absolute',top:785,textAlign:'center',fontSize:11,fontFamily:'Lato'}}>{Data.company.CPName+'  '+Data.company.CPNumber+'  '+Data.company.CPEmail} </Text>
            </View>
            
        </Page>
       </Document>
    )
}
Font.register({
    family: "Lato",
    src: Lato,
  });

Font.register({
    family: "Italic",
    src: Italic,
  });

Font.register({
    family: "Roboto",
    src: Roboto,
  });
Font.register({
    family:"Newsreader",
    src:Newsreader
})
var style=StyleSheet.create({
    text:{
        fontFamily:'Roboto',
        marginTop:"30px",
        color:"#004d99",
        fontSize:20
    },
    
    invoice:{
        
        marginTop:"20px",
        color:"#3973ac",
        fontSize:30,
        fontFamily:"Roboto"
    },
    pageTitle:{
        marginLeft:"100px",
        marginTop:"20px",
        textAlign:"center",
        fontWeight:"1000"
    },
    address:{
        width:"100px",
        marginTop:"20px",
        lineHeight:1.5,
        fontSize:10,
        fontFamily:'Lato'
    },
    phoneAndInviove:{
        
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        fontSize:10,
        fontFamily:'Lato'
    },
    invoiceNumber:{
        display:'flex',
        flexDirection:'row',
        height:'22px',
        width:'180px',
        color:'white',
        alignItems:'center',
        justifyContent:'space-between',
        backgroundColor:'#3973ac',
    },
    invoiceNumberMain:{        
        display:'flex',
        flexDirection:'column',
    },
    billtoSection:{
        marginTop:'20px',
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between'
    },
    billto:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:'#3973ac',
        color:'white',
        fontSize:9,
        height:'22px',
        width:'270px',
        fontFamily:'Lato' 
    },
    customerID:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        backgroundColor:'#3973ac',
        color:'white',
        fontSize:9,
        alignItems:'center',
        width:'180px',
        height:'22px',
        fontFamily:'Lato'
    },
    userInfoBox:{
        display:'flex',
        flexDirection:'row',
        marginBottom:'30px'

    },
    userInfo:{
        lineHeight:'1.5',
        marginTop:'10px',
        fontSize:10,
        width:"270px",
        height:'30px',
        fontFamily:'Lato'
    },
    userid:{
        display:'flex',
        flexDirection:'row',
        marginLeft:'50px',
        fontSize:'10',
        fontFamily:'Lato'

    },
    id:{
        marginTop:'10px',
        width:'30px',
        alignItems:'center'
    },
    userterm:{
        marginTop:'10px',
        width:'125px',
        alignItems:'flex-end',
        fontFamily:'Lato'
    },
    priceTitles:{
        position:'relative',
        display:'flex',
        flexDirection:'row',
        backgroundColor:'#3973ac',
        height:22,
        marginTop:'40px',
        width:'475px',
        color:'white',
        fontFamily:'Lato',
        fontSize:10
    },
    description:{
        width:'270px',
        justifyContent:'center',
        
    },
    qty:{
        flex:1,
        justifyContent:'center',
        textAlign:'center',
        
    },
    amount:{
        flex:2,
        justifyContent:'center',
        textAlign:'center',
        
    },
    unitPrice:{
        flex:2,
        justifyContent:'center',
        textAlign:'center',
        
    },
    table:{
        display:'flex',
        flexDirection:'row',
        width:'475px',
        fontSize:10,
        fontFamily:'Lato'
    },
    unitDescription:{
        width:'270px',
        justifyContent:'center',
        height:'22',
        
        borderRight:'1',
        borderRightColor:'black',
        borderBottom:'1'       
    },
    unitsQty:{
        flex:1,
        justifyContent:'center',
        textAlign:'center',
        height:'22',
      
        borderRight:'1',
        borderRightColor:'black',
        borderBottom:'1'
    },
    unitpricebox:{
        flex:2,
        justifyContent:'center',
        textAlign:'center',
        height:'22',
    
        borderRight:'1',
        borderRightColor:'black',
        borderBottom:'1' 
    },
    amountbox:{
        flex:2,
        justifyContent:'center',
        textAlign:'center',
        height:'22',
        borderBottom:'1' 
    },
    totalBox:{

        display:'flex',
        flexDirection:'row',
        height:'80px',
        fontSize:10,
        fontFamily:'Roboto'

    },
    // totalBox:{
    //     color:'red'
    // },
    paymentDetail:{
        width:'270px',
    },
    subTotal:{
        display:'flex',
        flexDirection:'column',
        width:'125px',
        alignItems:'flex-start',
        
        backgroundColor:'#cce6ff',
        justifyContent:'space-between'
    },
    total:{
        display:'flex',
        flexDirection:'column',
        flex:1,
        textAlign:'left',

        backgroundColor:'#e6f7ff',
        justifyContent:'space-between'
    }    
})
