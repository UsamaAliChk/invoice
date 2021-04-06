const getBankDetailReducer=(state=[],action)=>{
    switch(action.type){
        case 'setBankDetails':
            state=action.Data
            return state
        default:
            return state
    }

}

export default getBankDetailReducer;