import axios from 'axios'
import { login, signUp } from '../Redux/Action/actions';

const request = axios.create({
    baseURL: 'http://localhost:7000',
});

export const signUpUser = (state) => async (dispatch) => {
    //console.log(state)
    try{
        // console.log(state)
        const response = await request.post('/signup', state);
        dispatch(signUp({users: response.data}))
    }
    catch (err) {
        console.log(err);
    } 
}

export const loginUser = (state) => async (dispatch) => {
    console.log(state)
    try{
        const response = await request.post('/login', state);
        console.log(response.data)
        axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;
        localStorage.setItem("token", response.data.token)
        dispatch(login({users: response.data, token: response.token}))
    }
    catch (err) {
        console.log(err)
    }
 }

 