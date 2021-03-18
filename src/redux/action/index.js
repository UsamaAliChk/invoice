export const setData=(data)=>{
    return{
        type: "set_Data",
        Data:data
    }
}


export const setCompany=(data)=>{
    return{
        type: "setCompany",
        Data:data
    }
}

export const setCompanies=(companies)=>{
    return {
        type:"setCompanies",
        Data:companies
    }
}

export const showLoader=()=>{
    return{
        type:"showLoader"
    }
}
export const hideLoader=()=>{
    return{
        type:"hideLoader"
    }
}

export const setContacts=(contracts)=>{
    return {
        type:"setContacts",
        Data:contracts
    }
}