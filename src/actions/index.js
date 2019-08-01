import {axiosWithAuth} from '../components/LoginComponents/axiosWithAuth';

export const FETCH_START = 'FETCH_START';
export const FETCH_COMPOUNDED_SUCCESS = 'FETCH_COMPOUNDED_SUCCESS';
export const FETCH_ROLLS_SUCCESS = 'FETCH_ROLLS_SUCCESS'
export const FETCH_DESIRE_SUCCESS = 'FETCH_DESIRE_SUCCESS'
export const FETCH_CHANCE_SUCCESS = 'FETCH_CHANCE_SUCCESS'
export const FETCH_FAILURE = 'FETCH_FAILURE';
export const SAVE_START = 'SAVE_START';
export const SAVE_SUCCESS = 'SAVE_SUCCESS';
export const SAVE_FAILURE = 'SAVE_FAILURE';

export const fetchCompounded = () => dispatch => {
    const id = localStorage.getItem('id')
    dispatch({ type: FETCH_START })
    axiosWithAuth()
        .get(`https://gacha-chance.herokuapp.com/api/saved/${id}`)
        .then(res => dispatch({ type: FETCH_COMPOUNDED_SUCCESS, payload: res.data.compoundedChance }))
        .catch(err => dispatch({ type: FETCH_FAILURE, payload: err }))
}

export const fetchRolls = () => dispatch => {
    const id = localStorage.getItem('id')
    dispatch({ type: FETCH_START })
    axiosWithAuth()
        .get(`https://gacha-chance.herokuapp.com/api/saved/${id}`)
        .then(res => dispatch({ type: FETCH_ROLLS_SUCCESS, payload: res.data.rollNum}))
        .catch(err => dispatch({ type: FETCH_FAILURE, payload: err}))
}

export const fetchDesire = () => dispatch => {
    const id = localStorage.getItem('id')
    dispatch({ type: FETCH_START })
    axiosWithAuth()
        .get(`https://gacha-chance.herokuapp.com/api/saved/${id}`)
        .then(res => dispatch({ type: FETCH_DESIRE_SUCCESS, payload: res.data.desiredOutcome}))
        .catch(err => dispatch({ type: FETCH_FAILURE, payload: err}))
}

export const fetchChance = () => dispatch => {
    const id = localStorage.getItem('id')
    dispatch({ type: FETCH_START })
    axiosWithAuth()
        .get(`https://gacha-chance.herokuapp.com/api/saved/${id}`)
        .then(res => dispatch({ type: FETCH_CHANCE_SUCCESS, payload: res.data.chance}))
        .catch(err => dispatch({ type: FETCH_FAILURE, payload: err}))
}

export const saveData = (newData, dataType) => dispatch => {
    const id = localStorage.getItem('id')    
    dispatch({ type: SAVE_START })
    axiosWithAuth()
        .post(`https://gacha-chance.herokuapp.com/api/registered/${id}/${dataType}`, newData)
        .then(res => dispatch({ type: SAVE_SUCCESS, payload: res.data }))
        .catch(err => dispatch({ type: SAVE_FAILURE, payload: err }))
}
