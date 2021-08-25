export const SIGN_UP = "SIGN_UP";
export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const LOCATION = "LOCATION"

export const signUp = (payload) => ({
    type: SIGN_UP,
    payload,
})

export const login = (payload) => ({
    type: LOGIN,
    payload,
})

export const logout = (payload) => ({
    type: LOGOUT,
    payload,
})

export const location = (payload) => ({
    type: LOCATION,
    payload,
})


