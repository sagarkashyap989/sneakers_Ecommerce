const initialState  = {
    toggleCart: false
};

export default function ( state= initialState, action) {
    const {type, payload} = action;
    switch (type) {
        case 'TOGGLE_CART':
            return{...state, toggleCart: !state.toggleCart} 
            break;
    
        default:
          return{...state}  ;
    }
}