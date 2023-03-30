// eslint-disable-next-line 
import { REGISTER_FAIL,LOGIN_SUCCESS, LOGIN_FAILED, REGISTER_SUCCESS, USER_LOADED, AUTH_ERR } from "../action-creators/types"

const initialState = {
    isAuthenticate:null,
    token:localStorage.getItem('token'),
    loading:true,
    user:null,
    cart:null,
    address:null
}

// eslint-disable-next-line 
export default function(state= initialState, action) {
    const {type, payload}  = action;

    switch(type){

        case 'DELETE_ADDRESS':
            return{
                ...state,
                address:[...state.address.filter(item =>{
                    if(item.u_id !== payload){
                        return item
                    }
                })]
            }
        case 'UPDATE_ADDRESS':
            console.log(payload)
            console.log([...state.address.filter( item =>{
                console.log(item.f_name)
                if(item.u_id === payload.u_id){
                    console.log('is matched')
                    Object.assign(item, payload);
                }
                    return item
                
            })])
            return{
                ...state,
                address:[...state.address.filter( item =>{
                    console.log(item.f_name)
                    if(item.u_id === payload.u_id){
                        console.log('is matched')
                        return payload
                    }else{
                        return item
                    }
                })]
            }

        case 'ADD_ADDRESS': 
         return{
            ...state,
            address:[...state.address, payload]
         }



        case 'DELETE_CART':
            console.log(payload, "payload")
            return{
                ...state,
                cart:[...state.cart.filter( item =>{
                    
                    console.log(item.u_id === payload)
                    console.log(item.u_id, " =", payload)
                    // eslint-disable-next-line 
                    if(item.u_id !== payload){
                        return item
                    }

                    return 0
                })]
            }



        case 'UPDATE_CART':
            // console.log("updataCarrt")
            return{
                ...state,
                cart:[...state.cart.filter(item => {
                   if(item.product_id === payload.product_id){
                    console.log(item.quantity + payload.quantity)
                    console.log(payload.quantity)
                  item.quantity= item.quantity+ payload.quantity;
                  return {item}
                   }else{
                    return { item}
                   }
                })]
            }


        case 'ADD_CART':
            // console.log("addCawwwwrt")
            return{
                ...state,
                cart: [...state.cart, payload]
            }
        case USER_LOADED:
            // console.log("userLoaded run")
            
            console.log(payload)    
            return{
                ...state,
                ...payload,
                isAuthenticate:true,
                loading:false
            }
        case LOGIN_SUCCESS:
        case REGISTER_SUCCESS:
            localStorage.setItem('token', payload.token)
            // console.log(payload)    
            return{
                ...state, 
                ...payload,
                isAuthenticate: true,
                loading:false,
            }
        case LOGIN_FAILED:
        case AUTH_ERR:
        case REGISTER_FAIL:
        case 'LOGOUT':    
            localStorage.removeItem('token')
            return{
                ...state,
                loading:false,
                isAuthenticate:false,
                token:null,
                user:null,
                cart:null,
                address: null
            }  
            
        default:
            return state    
    }
}