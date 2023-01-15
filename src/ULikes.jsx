import axios from "axios";
// import MealItem from "./MealItem";

export const meals = () => async dispatch =>{
    try{
        const res = await axios.get(`https://api-bootcamp.do.dibimbing.id/api/v1/foods`);

        dispatch({
            payload: res.data
        });
    }
    catch (err) {
        dispatch({
            payload:{msg: err.response.statusText, status: err.response.status}
        });
    }
};

//add like
export const addLike = postId => async dispatch =>{
    try{
        const res = await axios.get(`https://api-bootcamp.do.dibimbing.id/api/v1/like-foods/${postId}`);

        dispatch({
            payload: {id, likes: res.data}
        });
    }
    catch (err) {
        dispatch({
            payload:{msg: err.response.statusText, status: err.response.status}
        });
    }
};

//no like
export const removeLike = postId => async dispatch =>{
    try{
        const res = await axios.get(`https://api-bootcamp.do.dibimbing.id/api/v1/unlike/${postId}`);

        dispatch({
            payload: {id, likes: res.data}
        });
    }
    catch (err) {
        dispatch({
            payload:{msg: err.response.statusText, status: err.response.status}
        });
    }
};