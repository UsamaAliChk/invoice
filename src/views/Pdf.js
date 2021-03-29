import React from 'react'

import {Page,View,Text,StyleSheet,Font,
    Document
} from '@react-pdf/renderer'
import Data from './Data';


export default function Pdf({Data}) {
    let date=new Date();
    return (
        <Document>
            <Page wrap>
                <View style={style.Top}>
                    <View style={style.Invoice}>
                        <Text>INVOICE</Text>
                    </View>
                    <View style={style.companyContact}>
                        <Text>{Data.company.name}</Text>
                        <Text>{Data.company.Number}</Text>
                        <Text>{Data.company.Email}</Text>
                        <Text>{Data.company.Country+ " "+Data.company.Town +" "+Data.company.PostalCode}</Text>
                    </View>
                    <View style={style.companyAddress}>
                    {
                    Data.company.companyAddress.map(e=>{
                        return(
                            <Text>{e}</Text>
                        )
                    })
                }
                    </View>
                </View>
                <View style={style.billingContact}>
                    <View style={style.contactInfo}>
                        <Text style={{color:"#cccccc"}}>Billed To</Text>
                        <Text style={{marginTop:'5px'}}>{Data.billing.Name}</Text>
                        {
                            Data.billing.address.map(e=>{
                                return(
                                <Text>{e}</Text>)
                            })
                        }
                        <Text>{Data.billing.PostalCode}</Text>
                    </View>
                    <View style={style.InvoiceDetail}>
                        <View>
                        <Text style={{color:"#8c8c8c",fontSize:'8'}}>Invoice Number</Text>
                        <Text style={{marginTop:'5px'}}>12356</Text>
                        </View>
                        <View style={{marginTop:"5px"}}>
                        <Text style={{color:"#8c8c8c",fontSize:'8'}}>Date of Issue</Text>
                        <Text style={{marginTop:'5px'}}>{date.getDate()+'/'+(date.getMonth()+1)+'/'+date.getFullYear()}</Text>
                        </View>
                        <View style={{marginTop:"5px"}}>
                        <Text style={{color:"#8c8c8c",fontSize:'8'}}>Due Date</Text>
                        <Text style={{marginTop:'5px'}}>{Data.dueDate}</Text>
                        </View>
                    </View>
                    <View style={style.PriceDetail}>
                        <Text style={{color:"#8c8c8c",fontSize:'8' }}>Invoice Total</Text>
                        <Text style={{color:'#3385ff',fontSize:"18",marginTop:'5px'}}>£{Data.totalPrice}</Text>
                    </View>
                </View>

                <View style={{marginLeft:'30px'}}>
                <View style={style.horizantolLine}></View>
                </View>

                <View style={style.priceTitles}>
                <View style={style.description}>
                    <Text>Desription</Text>
                </View>
                
                <View style={style.unitPrice}>
                    <Text>Unit Price</Text>
                </View> 
                <View style={style.qty}>
                    <Text>QTY</Text>
                </View>               
                <View style={style.amount}>
                    <Text>Amount</Text>
                </View>
                </View>

                {
                    Data.items.map(e=>{
                        return(
                            <View style={style.table}>
                <View style={style.unitDescription}>
                    <Text>{e.description} </Text>
                </View>
                
                <View style={style.unitpricebox}>
                    <Text>£{e.price}</Text>
                </View>
                <View style={style.unitsQty}>
                    <Text>{e.qty}</Text>
                </View>
                <View style={style.amountbox}>
                    <Text>£{e.total}</Text>
                </View>
                </View>
                        )
                    })
                }
                
                

                

                
                <View style={style.Total}>
                    <View style={{color:'#3385ff',paddingRight:'40px',alignItems:"flex-end"}}>
                        <Text style={{marginBottom:'5px'}}>Sub Total</Text>
                        <Text style={{marginBottom:'5px'}}>Tax</Text>
                        <Text>Total</Text>
                    </View>
                    <View style={{alignItems:"flex-end"}}>
                        <Text style={{marginBottom:'5px'}}>£{Data.subTotal}</Text>
                        <Text style={{marginBottom:'5px'}}>£{Data.tax}</Text>
                        <Text>£{Data.totalPrice}</Text>
                    </View>
                </View>
                {/* <View>
                <Text style={{position:'absolute',top:'70',fontSize:'11'}}>generated from siyahat</Text>
                </View> */}
            </Page>
        </Document>
    )
}

const style=StyleSheet.create({
Top:{
    position:'relative',
    display:'flex',
    flexDirection:'row',
    backgroundColor:'#3385ff',
    height:'100px',
    width:'100%',
    color:'white',
    justifyContent:'space-between'
},
Invoice:{
    justifyContent:'center',
    alignItems:'center',
    paddingLeft:'30px',
    fontSize:'30'
},
companyContact:{
    justifyContent:'center',
    alignItems:'flex-start',
    fontSize:'10'
},
companyAddress:{
    justifyContent:'center',
    alignItems:'right',
    fontSize:'10',
    paddingRight:'30px',
},
billingContact:{
    display:'flex',
    flexDirection:'row',
    paddingRight:'30px',
    paddingLeft:'30px',
    marginTop:'30px',
    justifyContent:'space-between'
},
contactInfo:{
    justifyContent:'center',
    alignItems:'flex-start',
    fontSize:'10' 
},
InvoiceDetail:{
    alignItems:'flex-start',
    fontSize:'10'  
},
PriceDetail:{
    alignItems:'flex-end',
    fontSize:'10' 
},
horizantolLine:{
    height:'2px',
    width:'95%',
    backgroundColor:"#3385ff",
    marginTop:'40px' 
},
priceTitles:{
    
    display:'flex',
    flexDirection:'row',
    marginTop:'10px',
    color:'#3385ff',
    marginRight:'30px',
    marginLeft:'30px',
    fontSize:10,
    marginBottom:'12px'
},
description:{
    width:'270px',
    justifyContent:'center',
},
qty:{
    flex:2,
    justifyContent:'center',
    alignItems:'flex-end'
    
},
amount:{
    flex:2,
    justifyContent:'center',
    alignItems:'flex-end'
    
},
unitPrice:{
    flex:2,
    justifyContent:'center',
    alignItems:'flex-end'
    
},
table:{
    display:'flex',
    flexDirection:'row',
    marginLeft:'30px',
    marginRight:'30px',
    fontSize:10,
    marginBottom:'5px'
},
unitDescription:{
    width:'270px',
    justifyContent:'center',
},
unitsQty:{
    flex:2,
    justifyContent:'center',
    alignItems:'flex-end'
},
unitpricebox:{
    flex:2,
    justifyContent:'center',
    alignItems:'flex-end' 
},
amountbox:{
    flex:2,
    justifyContent:'center',
    alignItems:'flex-end'
},
Total:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'flex-end',
    marginRight:'30px',
    fontSize:'10',
    marginTop:'25px'
}

});