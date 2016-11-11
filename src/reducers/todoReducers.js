// src/reducers/todoReducers.js
import { ADD_TODO, REMOVE_TODO } from '../actions';
import shortid from 'shortid';


export default function( state = [], action) {
    switch(action.type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    id: shortid.generate(),
                    text: action.payload
                }
             ];
        case REMOVE_TODO:
            const index = state.indexOf(action.payload);
            if(index >= 0) {
                return [
                    ...state.slice(0, index),
                    ...state.slice(index+1)
                ];
            }
        default: return state;
    }
    return state;
}
