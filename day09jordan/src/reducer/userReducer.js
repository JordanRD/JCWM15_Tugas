//% make initial state
const INITIAL_STATE = {
    username: '',
    email: '',
    password: '',
}
//% make reducer
const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'LOG_IN':
            return {
                ...state,
                username: action.payload.username,
                email: action.payload.email,
                password:action.payload.pass
            }
        case 'LOG_OUT':
            return INITIAL_STATE
        default:
            return state
    }
}

export default userReducer