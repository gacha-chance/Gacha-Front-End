import { 
    FETCH_START,
    FETCH_COMPOUNDED_SUCCESS,  
    FETCH_CHANCE_SUCCESS, 
    FETCH_DESIRE_SUCCESS,
    FETCH_ROLLS_SUCCESS,
    FETCH_FAILURE,
    SAVE_START,
    SAVE_SUCCESS,
    SAVE_FAILURE
} from '../actions'

const initialState = {
    saved: {
        compounded: [],
        desired: [],
        rollNum: [],
        chance: []
    },
    isFetching: false,
    isSaving: false,
    error: '',
    data: {
        chance: 0.00,
        rollNum: 0,
        compounded: 0.00,
        desireNum: 0        
    }
}

export function reducer(state = initialState, action) {
    switch(action.type){
        case FETCH_START:
            return {
                ...state,
                isFetching: true,
                error: ''
            }
        case FETCH_COMPOUNDED_SUCCESS:
            return {
                ...state,
                isFetching: false,
                error: '',
                saved: {
                    ...state.saved,
                    compounded: action.payload
                }
            }
        case FETCH_CHANCE_SUCCESS:
            return {
                ...state,
                isFetching: false,
                error: '',
                saved: {
                    ...state.saved,
                    chance: action.payload
                }
            }
        case FETCH_DESIRE_SUCCESS:
            return {
                ...state,
                isFetching: false,
                error: '',
                saved: {
                    ...state.saved,
                    desired: action.payload
                }
            }
        case FETCH_ROLLS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                error: '',
                saved: {
                    ...state.saved,
                    rollNum: action.payload
                }
            }
        case FETCH_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }
        case SAVE_START:
            return {
                ...state,
                isSaving: true,
                error: ''
            }
        case SAVE_SUCCESS:
            return {
                ...state,
                isSaving: false,
                error: '',
                saved: {
                    ...state.saved,
                    compounded: action.payload.compoundedChance,
                    desired: action.payload.desiredOutcome,
                    rollNum: action.payload.rollNum,
                    chance: action.payload.chance
                }
            }
        case SAVE_FAILURE:
            return {
                ...state,
                isSaving: false,
                error: action.payload
            }
        default:
            return state
    }
}