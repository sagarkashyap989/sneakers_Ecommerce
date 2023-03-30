import { REGISTER_FAIL,LOGIN_FAILED, LOGIN_SUCCESS, REGISTER_SUCCESS,USER_LOADED, AUTH_ERR } from "./types";
import { setAlert } from './alert';
import setAuthToken from '../utils/setAuthToken';
import axios from "axios";



export const logout = () =>  dispatch =>{
   console.log("logout ran")
    dispatch({
        type:'LOGOUT'
    })
}

export const deleteAddress = (u_id) => async dispatch =>{
    try {
        const res = await axios.delete(`/api/user/address/${u_id}`)

    console.log(res)

    dispatch({
        type:'DELETE_ADDRESS',
        payload: u_id
    })

    } catch (error) {
        console.log(error) 
    }
}


export const updateAddress = (data) => async dispatch =>{
    const config  = {
        header :{
            "Content-type": "application/json"
        }
    }

    const body = data;
    const u_id = data.u_id;
    try {
            const res = await axios.put(`/api/user/address/${u_id}`, body, config)

            console.log(res)

            dispatch({
                type:'UPDATE_ADDRESS',
                payload:res.data

            })

    } catch (error) {
        console.log(error)
    }

}


export const addAddress = (data) => async dispatch =>{
    console.log(data)
    const config  = {
        header :{
            "Content-type": "application/json"
        }
    }
    const body = data;
   try {
     
    const res = await axios.put('/api/user/address/', body, config )

    if(res){
        console.log(res.data)
        dispatch({
            type:"ADD_ADDRESS",
            payload:res.data
        })
    }

   } catch (error) {
    console.log(error)
   }

}



export const deleteCart  = (u_id) => dispatch =>{
   
    dispatch({
        type: 'DELETE_CART',
        payload: u_id
    })
}

export const addToCart=(data) => dispatch =>{
    // console.log(data.modified);

    console.log(data)

    if(data.modified){
        console.log('------------------UPDATE_CART')
      dispatch({
        type:'UPDATE_CART',
        payload:data
      })
    }else{
        console.log("+++++++++++++++++++++ADD_CART")
        dispatch({
            type:'ADD_CART',
            payload:data
        })
    } 

}
 
 


export const login =({email, password})=> async dispatch =>{
    console.log("hey tger")
   
    const config  = {
        header :{
            "Content-type": "application/json"
        }
    }
    // console.log(name, email, password);
    const body = {email, password};
    console.log(body);
    try {
        const res = await axios.post('/api/auth', body, config);
       
        dispatch({
            type:"LOGIN_SUCCESS",
            payload:  res.data
        });
        dispatch(load_user_cart());
    } catch (err) {
        console.log(err);
        const errors = err.response.data.errors;
        errors.forEach( error => dispatch(setAlert(error.msg, "danger")));

        dispatch({
            type:"LOGIN_FAILED"
        })

    }
}  











export const load_user_cart = () => async dispatch =>{
    console.log("actually ran")
    if(localStorage.token){
        setAuthToken(localStorage.token)
    }

    try{
        //load user and cart
        const user = await axios.get('/api/auth') ;
        const cart = await axios.get('/api/cart')


        console.log(user.data, "  ", cart)

        dispatch({
            type:USER_LOADED,
            payload: {"user": user.data, "cart": cart.data, 'address':user.data.address}
        })
        
    }catch(error){
        console.log(error)
        dispatch({
            type:AUTH_ERR
        })

    }
}












export const register =({username, email, password})=> async dispatch =>{
    const config  = {
        header :{
            "Content-type": "application/json"
        }
    }
    // console.log(name, email, password);
    const body = {name:username, email, password};
    // console.log(body);
    try {
        const res = await axios.post('/api/user', body, config);
       
        dispatch({
            type:"REGISTER_SUCCESS",
            payload:  res.data
        });
        dispatch(load_user_cart());
    } catch (err) {
        console.log(err);
        const errors = err.response.data.errors;
        errors.forEach( error => dispatch(setAlert(error.msg, "danger")));

        dispatch({
            type:"REGISTER_FAIL"
        })

    }
}  