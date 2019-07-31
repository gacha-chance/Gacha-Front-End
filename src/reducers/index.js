const initialState = {
    user: {
        username: '',
        password: '',
        id: 0,
    },
    token: '',
    saved: [],
    data: {
        chance: 0.00,
        rollNum: 0,
        compounded: 0.00
    }
}

export function reducer(state = initialState, action) {
    switch(action.type){
        default:
            return state
    }
}