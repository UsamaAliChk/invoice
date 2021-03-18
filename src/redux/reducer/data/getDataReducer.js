const getDateReducer=(state={},action)=>{
    switch(action.type){
        case 'set_Data':
            state=action.Data
            return state
        default:
            return state
    }

}

export default getDateReducer;