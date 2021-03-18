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

    console.log("Usama Ali")
    console.log(Data)
    let date=new Date();

    console.log(date.getYear())
    return (
       <Document>
         <Page wrap>
             <View style={{marginLeft:"60px",marginRight:'60px'}}>
            <View style={{display:"flex",flexDirection:"row"}}>
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
                        <Text style={{marginLeft:'20px',marginTop:'-2%'}}>INVOICE #</Text>
                        <Text style={{marginRight:'20px'}}>Date</Text>
                    </View>
                    <View style={{display:'flex',justifyContent:'space-between',marginTop:'5px',flexDirection:'row'}}>
                        <Text style={{marginLeft:'20px'}}>1234</Text>
                        <Text style={{marginRight:'10px'}}>{date.getDate()+'/'+(date.getMonth()+1)+'/'+date.getFullYear()}</Text>
                    </View>
                </View>
            </View>

            <View style={style.billtoSection}>
                <View style={style.billto}>
                    <Text style={{marginLeft:'20px'}}>BILL TO</Text>
                </View>
                <View style={style.customerID}>
                    <Text style={{marginLeft:'20px'}}>CUSTOMER ID</Text>
                    <Text style={{marginRight:'20px'}}>TERMS</Text>
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
                            <Text>Terms and Cond</Text>
                        </View>
                    </View>
            </View>

            <View style={style.priceTitles}>
                <View style={style.description}>
                    <Text>Desription</Text>
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
                </View>
                <View style={style.subTotal}>
                    <Text style={{marginTop:'5px',fontFamily:'Lato',fontSize:'12'}}>SUBTOTAL</Text>
                    <Text style={{marginTop:'5px',fontFamily:'Lato',fontSize:'12'}}>Total</Text>
                </View>
                <View style={style.total}>
                    <Text style={{marginTop:'5px',fontFamily:'Lato',fontSize:'12'}}>{Data.totalPrice}</Text>
                    <Text style={{marginTop:'5px',fontFamily:'Lato',fontSize:'12'}}>{Data.totalPrice} $</Text>
                </View>
            </View>
                <Text style={{position:'absolute',top:770,textAlign:'center',fontSize:11,fontFamily:'Lato'}}>{Data.company.name+'  Company Number '+Data.company.Number} </Text>
                <Text style={{position:'absolute',top:785,textAlign:'center',fontSize:11,fontFamily:'Lato'}}>Usama trade center is good center</Text>
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
        marginLeft:"270px",
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
        fontSize:9,
        fontFamily:'Newsreader'
    },
    phoneAndInviove:{
        
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        fontSize:10,
        fontFamily:'Newsreader'
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
        fontFamily:'Newsreader' 
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
        fontFamily:'Newsreader'
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
        fontFamily:'Newsreader'

    },
    id:{
        marginTop:'10px',
        width:'70px',
        textAlign:'center'
    },
    userterm:{
        marginLeft:'10px',
        marginTop:'10px',
        width:'80px',
        textAlign:"center",
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
        fontFamily:'Newsreader',
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
        fontFamily:"Newsreader"
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
        height:'100px',
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
        textAlign:'center',
        backgroundColor:'#cce6ff',
        justifyContent:'space-between'
    },
    total:{
        display:'flex',
        flexDirection:'column',
        flex:1,
        textAlign:'center',
        backgroundColor:'#e6f7ff',
        justifyContent:'space-between'
    }    
})
