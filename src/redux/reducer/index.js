import {combineReducers} from 'redux';
import toggleLoader from './data/toggleLoader'
import getDataReducer from './data/getDataReducer';
import getContacts from './data/getContactsReducers';
import getCompanyReducer from './data/getCompanyReducer';
import getBankDetailReducer from './data/getBankDetail'
const allReducers=combineReducers({
    getData:getDataReducer,
    getContacts,
    bidLoader:toggleLoader,
    getCompany:getCompanyReducer,
    getBankDetail:getBankDetailReducer
})

export default allReducers