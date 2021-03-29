import React from 'react'
import {Page,View,Text,StyleSheet,Font,Image,
    Document
} from '@react-pdf/renderer'
import laptop from '../assets/img/laptop.png'
import user from '../assets/img/user1.png'
export default function Pdf2({Data}) {

    let date=new Date();
    return (
        <Document>
            <Page>
                <View style={style.Top}>
                    <View style={style.usericon}>
       
                        <Image src={user} style={{width:'30px',height:'30px',marginBottom:'0px'}}/>
                        <Image src={laptop} style={{width:'30px',height:'30px',position:'relative',top:'-8'}}/>
  
                        <Text >INVOICE</Text>
                    </View>
                    <View style={style.companyAddress}>
                        <Text style={{fontSize:'13'}}>{Data.company.name}</Text>
                        {
                        Data.company.companyAddress.map(e=>{
                        return(
                            <Text>{e}</Text>
                        )
                        })
                        }
                         <Text>{Data.company.Country+ " "+Data.company.Town +" "+Data.company.PostalCode}</Text>
                    </View>
                </View>
                <View style={style.contactAndInvoice}>
                    <View style={{alignItems:'flex-start'}}>
                        <Text>Bill To</Text>
                        <Text style={{marginTop:'5px'}}>{Data.billing.Name}</Text>
                        {
                            Data.billing.address.map(e=>{
                                return(
                                <Text>{e}</Text>)
                            })
                        }
                         <Text>{Data.billing.Country+ " "+Data.billing.Town +" "+Data.billing.PostalCode}</Text>
                    </View>
                    <View>
                        <View style={{alignItems:'flex-end'}}>
                        <Text>Invoice Number</Text>
                        <Text>00001</Text>
                        </View>
                        <View style={{marginTop:'20px',alignItems:'flex-end'}}>
                        <Text>Invoice Date</Text>
                        <Text style={{marginTop:'5px'}}>{date.getDate()+'/'+(date.getMonth()+1)+'/'+date.getFullYear()}</Text>
                        <Text>Due Date</Text>
                        <Text style={{marginTop:'5px'}}>{Data.dueDate}</Text>
                        </View>
                    </View>
                </View>
                <View style={{marginTop:'25px',marginRight:'30px',marginLeft:'30px'}}>
                    <View style={{height:'2px',width:'100%',backgroundColor:'#7D7D7D'}}></View>
                </View>

                <View style={style.priceTitles}>
                    <View style={{justifyContent:'center'}}>
                        <Text>ITEMS</Text>
                    </View>
                    <View style={style.description}>
                        <Text>DESCRIPTION</Text>
                    </View>
                    <View style={style.qty}>
                        <Text>QTY</Text>
                    </View>
                    <View style={style.unitPrice}>
                        <Text>UNIT PRICE</Text>
                    </View>                
                    <View style={style.amount}>
                        <Text>AMOUNT</Text>
                    </View>
                </View>

                {
                    Data.items.map((e,i)=>{
                        return(
                            <View style={style.table}>
                            <View style={{justifyContent:'center'}}>
                                <Text>{i+1}</Text>
                            </View>
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
                


                <View style={{display:'flex',flexDirection:'row',marginRight:'30px',marginLeft:'30px',marginTop:'17px'}}>
                    <View style={{backgroundColor:'#92CFF6',width:'360',height:'70',alignItems:"center",justifyContent:'center',fontSize:'10'}}>
                        <Text>THANK YOU FOR SHOPING HERE</Text>
                    </View>
                    <View style={{backgroundColor:'#3973ac',width:'175',height:'70',justifyContent:'center',color:'white',alignItems:'flex-end'}}>
                        <View style={{marginRight:'20px',alignItems:'flex-end'}}>
                        <Text style={{fontSize:'12'}}>Total</Text>
                        <Text style={{fontSize:'15'}}>£{Data.totalPrice}</Text>
                        </View>
                    </View>
                </View>
            </Page>
        </Document>
    )
}
const style=StyleSheet.create({
    Top:{
        height:'130',
        width:'100%',
        backgroundColor:'#3973ac',
        display:'flex',
        flexDirection:'row',
        color:'white',
        justifyContent:'space-between'

    },
    usericon:{
        justifyContent:'center',
        marginLeft:'30px',
        fontSize:'30'     
    },
    companyAddress:{
        justifyContent:'center',
        alignItems:'flex-end',
        marginRight:'30',
        fontSize:'11'
    },
    contactAndInvoice:{
        display:'flex',
        flexDirection:'row',
        marginTop:'20px',
        fontSize:'10',
        marginLeft:'30px',
        marginRight:'30px',
        justifyContent:'space-between'
    },
    priceTitles:{
        position:'relative',
        display:'flex',
        flexDirection:'row',
        height:22,
        color:'#3973ac',
        marginTop:'15px',
        fontSize:10,
        marginLeft:'30px',
        marginRight:'30px'
    },

    description:{
    
        marginLeft:'15px',
        width:'260px',
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
        marginLeft:'40px',
        width:'260px',
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
});