import {combineReducers} from 'redux';
import toggleLoader from './data/toggleLoader'
import getDataReducer from './data/getDataReducer';
import getContacts from './data/getContactsReducers';
import getCompanyReducer from './data/getCompanyReducer'
const allReducers=combineReducers({
    getData:getDataReducer,
    getContacts,
    bidLoader:toggleLoader,
    getCompany:getCompanyReducer
})

export default allReducers