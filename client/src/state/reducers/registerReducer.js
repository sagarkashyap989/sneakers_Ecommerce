import { REGISTER_FAIL,LOGIN_SUCCESS, LOGIN_FAILED, REGISTER_SUCCESS, USER_LOADED, AUTH_ERR } from "../action-creators/types"

const initialState = {
    isAuthenticate:null,
    token:localStorage.getItem('token'),
    loading:true,
    user:null,
    cart:null
}


export default function(state= initialState, action){
    const {type, payload}  = action;

    switch(type){


        case 'DELETE_CART':
            console.log(payload, "payload")
            return{
                ...state,
                cart:[...state.cart.filter( item =>{
                    
                    console.log(item.u_id === payload)
                    console.log(item.u_id, " =", payload)
                    if(item.u_id !== payload){
                        return item
                    }
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
            localStorage.removeItem('token')
            return{
                ...state,
                loading:false,
                isAuthenticate:false,
                token:null,
                user:null,
                cart:null
            }  
            
        default:
            return state    
    }
}