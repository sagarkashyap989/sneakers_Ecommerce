import axios from 'axios'
import {PRODUCT_LOADED, LIKE_TOGGLE} from './types'
import {setAlert} from './alert'
export const load_products =() => async dispatch =>{
    try {   
        const res = await axios.get("/api/product");

        dispatch({
            type: PRODUCT_LOADED,
            payload: res.data
        })
        console.log(res.data)
    } catch (error) {
        console.log(error);

    }
}



export const toggle_like = (id) => async dispatch=>{
    try {
        const config  = {
            header :{
                "Content-type": "application/json"
            }
        }
        console.log(`api/product/like/${id}`)
        const res = await axios.put(`/api/product/like/${id}`, config)

        dispatch({
            type:LIKE_TOGGLE,
            payload: res.data
        })
    } catch (error) {
        console.log(error)
    }
}

