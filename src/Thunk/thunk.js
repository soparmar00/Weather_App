import axios from 'axios'
import { login, signUp, weather } from '../Redux/Action/actions';

const request = axios.create({
    baseURL: 'http://localhost:7000',
});

export const signUpUser = (state) => async (dispatch) => {
    try{
        const response = await request.post('/signup', state);
        dispatch(signUp({users: response.data}))
    }
    catch (err) {
        console.log(err);
    } 
}

export const loginUser = (state) => async (dispatch) => {
   
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

export const location = (state) => async (dispatch) => {
    
    try{
        const response = await request.get('/dashboard/weather', {
            params: {
                lat: state,
                lon: state
            }

        });
        dispatch(weather(response.data))
    }
    catch (err) {
        console.log(err)
    }

}



