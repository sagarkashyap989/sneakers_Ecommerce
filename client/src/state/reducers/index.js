import { combineReducers } from "redux";
import alertReducer from "./alertReducer";
import register from './registerReducer';
import product from './productReducer';
import toggle from './toggleReducer'
export default  combineReducers({
    alert: alertReducer,
    register,
    product,
    toggle

});