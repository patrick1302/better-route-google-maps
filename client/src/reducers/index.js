import { combineReducers } from 'redux';
import saveLocation from './saveLocation'

const reducer = combineReducers({
    saveLocation: saveLocation,
})
export default reducer