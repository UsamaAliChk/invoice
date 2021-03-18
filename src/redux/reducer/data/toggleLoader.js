const toggleLoader=(state=true,action)=>{
    switch(action.type){
        case 'showLoader':
            return true
        case 'hideLoader':
            return false
        default:
            return state
    }
}

export default toggleLoader