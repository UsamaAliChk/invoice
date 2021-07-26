import React from 'react'

import {Page,View,Text,StyleSheet,Font,
    Document,Image
} from '@react-pdf/renderer';
import location from '../Logos/location.png';
import www from '../Logos/www.png';
import phone from '../Logos/phone.png';
import email from '../Logos/email.png';
import image from '../Logos/logo1.png';
import image2 from '../Logos/invoice2.jpg';
import background from '../Logos/backGround2.png';
import bottom from '../Logos/bottom.PNG'

import Roboto from '../fonts/Roboto-Bold.ttf'
import Newsreader from '../fonts/Newsreader.ttf'
import Italic from '../fonts/Roboto-Italic.ttf'
import Lato from '../fonts/Lato-Regular.ttf'
import LatoBold from '../fonts/Lato-Bold.ttf'

export default function DataFlat({Data}) {
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
        <Page >
            <Image src={background} style={styles.backgroundImage}/>
            <View style={styles.header}>
                <Image src={image} style={{height:'50px',width:'150px',marginTop:'20px',marginLeft:'30'}}/>
                <Image src={image2} style={{height:'80px',width:'150px', marginTop:'5px',marginRight:'5px'}}/>
            </View>
            <View style={styles.body}>
                <View style={styles.companyInfo_and_dateInfo}>
                    <View style={styles.companyInfo}>
                        <Text>{Data.company.name} </Text>
                        {
                            Data.company.companyAddress.map(e=>{
                                return(
                                    <Text>{e}</Text>
                            )
                            })
                        }
                    </View>
                    <View >
                        <View style= {styles.dateInfo}>
                            <View style={{width:'35%'}}>
                                <Text>Invoice Number</Text>
                                <Text>Customer Number</Text>
                                <Text>PO Number</Text>
                            </View>
                                <View style={{width:'25%',height:'47px'}}>
                                <Text>{invoiceNo}</Text>
                                <Text>{12}</Text>
                                <Text> </Text>
                            </View>
                            
                        </View>
                        
                        <View style={styles.dateInfo}>
                            <View style={{width:'35%'}}>
                                <Text>Date</Text>
                                <Text>Due Date</Text>
                            </View>
                            <View style={{width:'25%',height:'50px'}}>
                                <Text>{date}</Text>
                                <Text>{Data.dueDate}</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{textAlign:'center'}}>

                

                    <View style={styles.main_headings}>
                        <View style={{flex:'1'}}>
                            <Text>Quantity</Text>
                        </View>
                        <View style={{flex:'2'}}>
                            <Text>Description</Text>
                        </View>
                        {/* <View style={{flex:'2'}}>
                            <Text>Period</Text>
                        </View> */}
                        <View style={{flex:'1'}}>
                            <Text>No. Months</Text>
                        </View>
                        <View style={{flex:'1'}}>
                            <Text>Unit Price P/M</Text>
                        </View>
                        <View style={{flex:'1'}}>
                            <Text>Amount</Text>
                        </View>
                    </View>

                {/* Here is all the content */}


                {
                Data.items.map(e=>{
                    return(
                        <View style={styles.main_content}>

                        <View style={{flex:'1'}}>
                            <Text>{e.qty}</Text>
                        </View>
                        <View style={{flex:'2'}}>
                            <Text>{e.description}</Text>
                        </View>
                        {/* <View style={{flex:'2'}}>
                            <Text>15/1/2021 - 31/1/2021</Text>
                        </View> */}
                        <View style={{flex:'1'}}>
                            <Text>{e.month}</Text>
                        </View>
                        <View style={{flex:'1'}}>
                            <Text>{e.price}</Text>
                        </View>
                        <View style={{flex:'1'}}>
                            <Text>{e.total}</Text>
                        </View>

               
                    </View>
                    )
                })
            }
                   

                    {/* Straight line */}

                   

                </View>
                <View style={{marginTop:'30px'}}>
                    <View style={styles.straightLine}></View>
                    <View style={styles.total}>
                        <View>
                            <Text >Sub Total exl.GST</Text>
                            <Text >G.S.T</Text>
                        </View>
                        <View >
                            <Text >{Data.subTotal}</Text>
                            <Text >{Data.tax}</Text>
                        </View>       
                    </View>
                    <View style={styles.straightLine}></View>
                    <View style={styles.total}>
                        <Text>Total (GBP)</Text>
                        <Text>£ {Data.totalPrice}</Text>
                    </View>
                    <View style={styles.smallline}></View>
                </View>

                <Text style={{fontFamily:'Lato-Bold',marginTop:'20px',fontSize:10}}>
                    Please quote Invoice Number and Customer Number with all payments!
                </Text>

                <View style={{marginTop:'20px',lineHeight:1.6,marginBottom:'15px'}}>
                    
                    <Text style={{fontFamily:'Lato-Bold'}}>Please remit funds: Via Bank transfer to</Text>
                    {
                        Data.bankInfo.bankName!=null?
                        <Text style={{fontSize:10}}>{Data.bankInfo.bankName}</Text>:<Text></Text>
                    }
                   
                    <Text style={{fontSize:10}}>Name:{Data.bankInfo.accountName}</Text>
                    <Text style={{fontSize:10}}>Swift Code: {Data.bankInfo.swiftCode}</Text>
                    {
                        Data.bankInfo.accountNumber!=null?
                        <Text style={{fontSize:'10'}}>Account No: {Data.bankInfo.accountNumber}</Text>:<Text></Text>
                    }
                    <Text style={{fontSize:10}}>{Data.bankInfo.Address}</Text>
                </View>
                <View style={styles.straightLine}></View>

                <View style={styles.BankInfo}>
                    <View style={{width:'40%'}}>
                        <Text style={{fontFamily:'Lato-Bold'}}>Bank Details</Text>
                        {
                            Data.bankInfo.bankName!=null?
                            <Text style={{marginTop:'5px'}}>Bank Name: {Data.bankInfo.bankName}</Text>:<Text></Text>
                        }
                        {
                            Data.bankInfo.bankName!=null?
                            <Text style={{marginTop:'5px'}}>Sort Code: {Data.bankInfo.sortCode}</Text>:<Text></Text>
                        }
                        {
                            Data.bankInfo.bankName!=null?
                            <Text style={{marginTop:'5px'}}>swift Code: {Data.bankInfo.swiftCode}</Text>:<Text></Text>
                        }
                    </View>
                    <View style={{width:'30%'}}>
                    <Text style={{marginTop:'15px'}}>{Data.bankInfo.bankName}</Text>
                    <Text>Account Name: {Data.bankInfo.accountName}</Text>
                    </View>
                    
                    <View style={{width:'30%'}} >
                        <Text style={{fontFamily:'Lato-Bold'}}>Registered In {Data.company.Country} :</Text>
                        <Text>Reg #:{Data.company.Number}</Text>
                    </View>
                </View>

                <View style={{position:'absolute',top:'660'}}>
                    <View style={styles.bottom}>
                        <Image src={location} style={{width:'10',height:'13'}}></Image>
                        <Text style={{marginLeft:'5px'}}>{Data.company.companyAddress[0]},{Data.company.companyAddress[1]},{Data.company.companyAddress[2]}</Text>
                    </View>
                    <View style={styles.bottom}>
                        <Image src={phone} style={{width:'10',height:'13'}}></Image>
                        <Text style={{marginLeft:'5px'}}>{Data.company.CPNumber}</Text>
                    </View>
                    <View style={styles.bottom}>
                        <Image src={email} style={{width:'11',height:'11'}}></Image>
                        <Text style={{marginLeft:'5px'}}>{Data.company.CPEmail}</Text>
                    </View>
                    <View style={styles.bottom}>
                        <Image src={www} style={{width:'12',height:'12'}}></Image>
                        <Text style={{marginLeft:'5px'}}>www.spireTech.com</Text>
                    </View>
                </View>

            </View>
            <Image src={bottom} style={{position:'absolute',top:'835px',width:'95%',height:'10',alignSelf:'center'}}></Image>
        </Page>
      </Document>
    )
}

Font.register({
    family: "Lato",
    src: Lato,
  });

  Font.register({
    family: "Lato-Bold",
    src: LatoBold,
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

const styles=StyleSheet.create({
    bottom:{
        display:'flex',
        flexDirection:'row',
        marginTop:'2px'
    },
    BankInfo:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:'10px'
    },
    total:{
        marginTop:'3px',
        lineHeight:2,
        width:'20%',
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        marginLeft:'400px'
    },
    smallline:{
        height:"1px",
        width:"40%",
        backgroundColor:'black',
        alignSelf:'flex-end'
    },
    straightLine:{
        height:'1px',
        width:'100%',
        backgroundColor:'black'
    },
    backgroundImage:{
        position:'absolute',
        height:'25%',
        width:'70%',
        top:'20%',
        right:'10px',
        zIndex:'-1'
    },
    companyInfo_and_dateInfo:{
        display:'flex',
        flexDirection:'row',
       fontWeight:400,
       lineHeight:1.5
    },
    companyInfo:{
        width:'60%',
    },
    dateInfo:{
        display:'flex',
        flexDirection:"row",
    },
    body:{
        marginRight:'30px',
        marginLeft:'30px',
        marginTop:'30px',
        fontFamily:'Lato',
        fontSize:9,
        display:'block',
    },
    header:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between'
    },
    main_headings:{
        fontFamily:'Lato-Bold',
        display:'flex',
        flexDirection:'row',
        fontSize:10,
        fontWeight:1000,   
    },
    main_content:{
        marginTop:'5px',
        display:'flex',
        flexDirection:'row'
    }

});