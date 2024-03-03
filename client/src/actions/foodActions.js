import axios from "axios";
export const getAllFoods=()=>async dispatch=>{
    dispatch({type:'GET_MENU_REQUEST'})

    try{
        const response = await axios.get('/api/menu/getallfoods')
        console.log(response);
        dispatch({type:'GET_MENU_SUCCESS' , payload : response.data})
    }catch(error)
    {
        dispatch({type:'GET_MENU_FAILED' , payload : error})
    }

}