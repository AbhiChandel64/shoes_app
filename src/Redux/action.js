//Create ActionCreator functions here
//Create ActionCreator functions here
import { GET_SHOES_SUCCESS } from "./actionTypes.js"
export const displayShoes = (data) => ({
    type: GET_SHOES_SUCCESS,
    payload: data
})
export const getItem = () => async (dispatch) => {
    await axios.get("http://localhost:8080/shoes").then((res) => {
        dispatch(displayShoes(res.data))
    }).catch((err) => {
        console.log(err.message);
    })
}