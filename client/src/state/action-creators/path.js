const initialState =['Home'];


export const setPath = ({con, path}) => dispatch =>{
    dispatch({
        type:"SET_PATH",
        payload:{con, path}
    })
}

export const setPathProduct = (path) => dispatch =>{
    dispatch({
        type:"SET_PATH_PRODUCT",
        payload:path
    })
}