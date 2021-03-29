import React from 'react'
import Loader  from 'react-loader-spinner'
const styles = {textAlign: 'center', fontSize: '26px', color: '#ff9900', position: 'fixed', verticalAlign: 'middle', left:'0px', top: '0px', width:'100%', height:'100%', backgroundColor: 'rgba(0,0,0,0.2)'}
export default function Loading({show}) {
    return (
        show?
            <div style={styles}>
       <div style={{paddingTop:"300px",paddingLeft:"50px"}}>
     <Loader  type="Circles"
     color="#595959"
     height={100}
     width={100}/>
     </div>
     </div>:null
    )
}
