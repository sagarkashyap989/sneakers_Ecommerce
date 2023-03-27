import axios from 'axios'
import {addToCart} from './regester'
import {deleteCart} from './regester'
import {setAlert} from './alert'

export const addCart = ({ name, id, image, currentSize, currentQuantity, price, totalPrice}) => async dispatch=>{
    try {
        const config = {
            header:{
                "Content-type": "application/json"
            }
        }

        const body ={name, image, size:currentSize, quantity:currentQuantity, price, totalPrice}
        // console.log(body)
        const res = await axios.post(`/api/cart/${id}`,body, config )
        // console.log(res.data)
        dispatch(addToCart(res.data))
    
    } catch (err) {

        console.log(err.response.status)
        if(err.response.status === 402){
            
        var errors = err.response.data.errors;
        errors.forEach( error => dispatch(setAlert(error.msg, "danger")));
}
console.log(err)
dispatch({
    type:"REGISTER_FAIL"
})

        
    }

}


export const  cartDelete = (u_id) => async dispatch =>{
    try {
        const res = await axios.delete(`/api/cart/${u_id}`)  

        dispatch(deleteCart(u_id));
        return false;
    } catch (err) {
        console.log(err.response.status)
        if(err.response.status === 402){
            
        var errors = err.response.data.errors;
        errors.forEach( error => dispatch(setAlert(error.msg, "danger")));
        return true;

}
console.log(err)
dispatch({
    type:"REGISTER_FAIL"
})

    }
}