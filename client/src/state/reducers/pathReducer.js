const initialState = {
    path:[{con:'Home', path:'/'}]
}

export default function(state= initialState, action){
    const {type, payload} = action;

    switch (type) {
        
        case 'SET_PATH':
            return {
                ...state,
                path: [{con:'Home', path:'/'}, payload]
            }
            
        case 'SET_PATH_PRODUCT':
            return {
                ...state,
                path: [...state.path, payload]
            }
        default:
            return state;
    }
}