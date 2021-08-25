import { LOGIN, LOGOUT, SIGN_UP } from "../Action/actions";

const initialState = {
    users: {},
    token: localStorage.getItem("token"),

}

export default function Users(state = initialState, action) {

    switch(action.type){
        case SIGN_UP:
            return{
                ...state,
                users: action.payload.users
            }
        case LOGIN:
            return{
                ...state,
                users: action.payload.users
            }
        case LOGOUT:
            return{
                ...state,
                token: null,
            }
        
        default:
            return state
    }
}