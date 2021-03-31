import React from 'react'
import Item from './SowItem'
export default function ShowList({items,setitems,total,settotalPrice,settax,vat,tax}) {
    const handleDelete=(id,t)=>{
        id=Number(id)
        settotalPrice(total-t);
        let p=(t*vat)/100;
        settax(tax-p);
        setitems(items.filter(e=>{if(e.id!=id) return e}))
    }
    return (
        <div>
            {
                items!==[]?
                items.map(e=>{
                    return (
                        <Item item={e} handleDelete={handleDelete}/>
                    )
                }):null
            }
        </div>
    )
}
