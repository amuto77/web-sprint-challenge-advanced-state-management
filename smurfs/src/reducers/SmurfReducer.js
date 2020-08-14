import { SMURF_LOADING, SMURF_SUCCESS, SMURF_FAIL, ADD_SMURF } from '../actions/SmurfActions'

const initialState = {
    smurfs: [],
    loading: false,
    errors: ''
}

export const smurfReducer = (state = initialState, action) => {
    switch (action.type) {
        case SMURF_LOADING:
        return {
            ...state,
            loading: true
        }
        case SMURF_SUCCESS:
        return {
            ...state,
            smurfs: action.payload,
            loading: false
        }
        case SMURF_FAIL:
        return {
            ...state,
            error: action.payload,
            loading: false
        }
        case ADD_SMURF:
        return {
            ...state,
            loading: false,
            smurfs: [...state.smurfs, action.payload]
        }
        default:
        return state
    } 
}