const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SETUSERS = 'SETUSERS'

let initialState = {
    peoples: []
}

export const peoplesReducer = (state = initialState, action) => {
    let stateCopy;
    switch (action.type) {
        case FOLLOW: {
            stateCopy = {
                ...state,
                peoples: state.peoples.map(
                    (e) => {
                        if (e.id === action.id) {
                            return {...e, followed: true}
                        }
                        return e;
                    }
                )
            }
            return stateCopy
        }
        case UNFOLLOW: {
            stateCopy = {
                ...state,
                peoples: [...state.peoples.map(
                    (e) => {
                        if (e.id === action.id) {
                            return {...e, followed: false}
                        }
                        return e;
                    }
                )]
            }
            return stateCopy;
        }
        case SETUSERS: {
            stateCopy = {
                ...state,
                peoples: [...state.peoples, ...action.peoples]
            }
            return stateCopy;
        }
        default: {
            return state;
        }
    }
}


export const follow = (id) => ({ type: FOLLOW, id })
export const unfollow = (id) => ({type: UNFOLLOW, id })
export const setusers = (peoples) => ({type: SETUSERS, peoples })

export default peoplesReducer;
