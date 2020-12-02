//redux berperan untuk membuat global state
//react redux berperan sbaai perantara antara react n redux
//% import combine reducer
import { combineReducers } from 'redux'
//% import reducer
import userReducer from './userReducer'
import countReducer from './countReducer'

const allReducer = combineReducers({
    user: userReducer,
    count:countReducer
})

export default allReducer