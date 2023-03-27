import { PRODUCT_LOADED , LIKE_TOGGLE} from "../action-creators/types";

const initialState = {
    products : null,
    loading:true
}


export default function( state = initialState, action) {
    const {type, payload} = action;

    switch(type){
        case LIKE_TOGGLE:
            return{
                ...state,
                loading:false,
                products:state.products.filter(item =>{if(item._id === payload._id){return payload}else{
                    return item
                }}),
                
            }
        case PRODUCT_LOADED:
            return {
                ...state,
                loading:false,
                products: payload
            }
        default: 
             return state
    }
}