const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SETUSERS = 'SETUSERS'
const SET_CURRENT_PAGE = 'SETCURRENTPAGE'
const SET_TOTAL_USERS_COUNT = 'SETTOTALUSERSCOUNT'

let initialState = {
    peoples: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,

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
            return { ...state, peoples: [...action.peoples]}
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }
        case SET_TOTAL_USERS_COUNT: {
            return {...state, totalUsersCount: action.totalUsersCount}
        }
        default: {
            return state;
        }
    }
}

//action creators
export const follow = (id) => ({ type: FOLLOW, id })
export const unfollow = (id) => ({type: UNFOLLOW, id })
export const setusers = (peoples) => ({type: SETUSERS, peoples })
export const setcurrentpage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const settotaluserscount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount})
export default peoplesReducer;
