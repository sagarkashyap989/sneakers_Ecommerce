import axios from 'axios'


export const toggle_overlay =(state) =>  dispatch =>{
    
    dispatch({
        type: 'TOGGLE_OVERLAY',
        payload:state
    })

}



export const toggle_cart =(state) =>  dispatch =>{
    
        dispatch({
            type: 'TOGGLE_CART',
            payload:state
        })
  
}


