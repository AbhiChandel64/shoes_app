import {GET_SHOES_SUCCESS} from "./actionTypes.js"
const initialState = {
  shoes: [],
  isLoading: false,
  isError: false,
};


export const reducer = (state = initialState,{type,payload}) => {
  switch(type){
  case GET_SHOES_SUCCESS: return {...state,["shoes"]:payload};
    default: return state;
  }
}
